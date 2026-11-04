import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const nextCli = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);
const host = "127.0.0.1";

const portProbe = createServer();
await new Promise((resolve, reject) => {
  portProbe.once("error", reject);
  portProbe.listen(0, host, resolve);
});
const address = portProbe.address();
assert.ok(address && typeof address !== "string");
const { port } = address;
await new Promise((resolve, reject) => {
  portProbe.close((error) => (error ? reject(error) : resolve()));
});

const server = spawn(
  process.execPath,
  [nextCli, "start", "--hostname", host, "--port", String(port)],
  { cwd: projectRoot, stdio: ["ignore", "pipe", "pipe"] },
);
let serverOutput = "";
server.stdout.setEncoding("utf8").on("data", (chunk) => {
  serverOutput += chunk;
});
server.stderr.setEncoding("utf8").on("data", (chunk) => {
  serverOutput += chunk;
});

const baseUrl = `http://${host}:${port}`;
const stopServer = () => {
  if (server.exitCode === null && server.signalCode === null) {
    server.kill();
  }
};

try {
  let ready = false;
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Production server exited early.\n${serverOutput}`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {
      await delay(250);
    }

    if (!ready) {
      await delay(250);
    }
  }

  assert.ok(ready, `Production server did not start.\n${serverOutput}`);

  for (const route of ["/", "/projects", "/speaking", "/blog"]) {
    const response = await fetch(new URL(route, baseUrl));
    assert.equal(response.status, 200, `${route} should return HTTP 200`);

    const html = await response.text();
    assert.match(html, /Pratyush Verma/, `${route} should render the portfolio`);
    assert.match(html, /Portfolio pages/, `${route} should render navigation`);
    console.log(`PASS ${route} (${response.status})`);
  }

  const missingRoute = await fetch(new URL("/missing-deployment-smoke-route", baseUrl));
  assert.equal(missingRoute.status, 404, "Unknown routes should return HTTP 404");
  console.log("PASS unknown route (404)");
} finally {
  stopServer();
}
