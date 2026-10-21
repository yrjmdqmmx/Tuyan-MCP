# Tuyan anonymous MCP

Knowledge **1.2.1**. Public read-only figure taxonomy, workflows, schemas, versioned journal rules and provenance metadata. The single tool tuyan.get_workflow_bundle keeps its five enum fields. No research inputs, credentials, accounts or generation jobs are accepted.

Hosted endpoint: https://api.paperbanana.asia/mcp . [Skill source](https://github.com/yrjmdqmmx/Tuyan-Skill).

For local hosting use Node.js 24+, npm ci, npm test, then npm start. HOST defaults to 127.0.0.1 and PORT to 3000; MCP_HOST controls the permitted host. The listener is /mcp. Local tests use fake dependencies and public knowledge only.

Resources include tuyan://manifest, tuyan://figures/taxonomy/v1, tuyan://journals/index/v1 and every listed immutable journal version. Both v1 historical artifact schemas and v2 evidence-bound schemas remain available. Journal filtering occurs in the client, never by sending study contents to MCP.

This repository is exported from the production Tuyan monorepo with scripts/sync-agent-distributions.mjs, including all figure-taxonomy and journal source dependencies. distribution.json records version and source file hashes. Run the exporter and tests for updates rather than editing an independent catalog.
