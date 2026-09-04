# Tuyan MCP

图研 Tuyan 的匿名、只读、无状态 Model Context Protocol 服务，为科研图示 Agent 提供版本化公共模板、规则、JSON Schema、数据集 manifest 和工作流知识。

生产端点：`https://api.paperbanana.asia/mcp`

## 它提供什么

唯一工具：

- `tuyan.get_workflow_bundle`

输入仅允许 5 个枚举字段：`operation`、`visualCategory`、`outputFormat`、`locale`、`knowledgeMajor`。服务还公开 `tuyan://manifest`、3 个版本化 Schema、PaperBananaBench manifest，以及动态工作流 Resource。

## 隐私边界

MCP 不接收论文、图片、提示词、API Key、FigureSpec、草图或生成结果，不登录、不创建会话、不设置 Cookie、不写数据库，也不在图研服务端生成图片。所有研究内容与产物由用户 Agent 保存在本机。

## Codex 接入

使用托管端点不需要克隆本仓库：

```bash
codex mcp add tuyan --url https://api.paperbanana.asia/mcp
codex mcp list
```

配套本地工作流请安装独立的 [Tuyan Scientific Figure Skill](https://github.com/yrjmdqmmx/Tuyan-Skill)。

## 本地运行

需要 Node.js 24 或更高版本：

```bash
git clone --depth 1 https://github.com/yrjmdqmmx/Tuyan-MCP.git
cd Tuyan-MCP
npm install
npm test
npm start
```

本地端点默认为 `http://127.0.0.1:3000/mcp`。可用 `HOST`、`PORT` 和 `MCP_HOST` 调整监听地址、端口和 MCP 公告主机名。

## 协议约束

- Streamable HTTP，协议版本 `2025-06-18`
- 匿名、无状态；只声明 Tools 和 Resources
- 单请求上限 64 KiB；每个客户端 IP 每分钟 60 次
- 日志只记录方法白名单、知识版本、耗时和状态，不记录调用参数
- 固定使用 `@modelcontextprotocol/server`、`@modelcontextprotocol/express`、`@modelcontextprotocol/node` 2.0.0

## 源码关系

此仓库是可独立运行的 MCP 源码仓库。`https://api.paperbanana.asia/mcp` 的生产部署仍由 [图研 Tuyan 主仓库](https://github.com/yrjmdqmmx/Tuyan) 中的 Gateway 流程负责，以避免改变现有发布链路。

## 开源声明

本项目采用 [Apache License 2.0](LICENSE) 发布，由图研社区独立维护，不是 PaperBanana 上游官方发行版。详见 [NOTICE](NOTICE)。
