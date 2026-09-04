import express from 'express';

import { createTuyanMcpRouter } from './mcp.js';

const port = Number.parseInt(process.env.PORT || '3000', 10);
const listenHost = process.env.HOST || '127.0.0.1';
const mcpHost = process.env.MCP_HOST || (listenHost === '0.0.0.0' ? 'localhost' : listenHost);

if (!Number.isInteger(port) || port < 1 || port > 65_535) {
  throw new Error('PORT must be an integer between 1 and 65535');
}

const app = express();
app.disable('x-powered-by');
app.use('/mcp', createTuyanMcpRouter({ host: mcpHost }));

const server = app.listen(port, listenHost, () => {
  console.log(`Tuyan MCP listening on http://${listenHost}:${port}/mcp`);
});

function shutdown() {
  server.close((error) => {
    if (error) {
      console.error(error);
      process.exitCode = 1;
    }
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
