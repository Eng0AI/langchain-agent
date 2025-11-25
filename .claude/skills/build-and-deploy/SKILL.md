---
name: build-and-deploy
description: Build and deploy this Next.js LangChain agent application. Use when building, deploying, or preparing the project for production. Triggers on requests to build, deploy, or publish.
---

# Build and Deploy LangChain Agent

## Overview

Build and deploy the LangChain.js agent application. This Next.js project provides an AI-powered conversational agent with access to tools like search and calculator, powered by LangGraph.

## Environment Variables

All required environment variables are pre-configured in CCVM and available directly:
- `OPENAI_API_KEY` - OpenAI API key for the LLM
- `SERPAPI_API_KEY` - SerpAPI key for search functionality
- `VERCEL_TOKEN` - For Vercel CLI authentication
- `NETLIFY_AUTH_TOKEN` - For Netlify CLI authentication

## Workflow

### 1. Setup Environment Variables

```bash
cp .env.example .env
```

Then populate `.env` with values from environment:
- `OPENAI_API_KEY` - Available as `$OPENAI_API_KEY` in VM environment
- `SERPAPI_API_KEY` - Available as `$SERPAPI_API_KEY` in VM environment

Example:
```bash
cat > .env << EOF
OPENAI_API_KEY="${OPENAI_API_KEY}"
SERPAPI_API_KEY="${SERPAPI_API_KEY:-}"
EOF
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Build

```bash
yarn build
```

### 4. Deploy

**Vercel:**
```bash
vercel deploy --prod --yes
```

**Netlify:**
```bash
# First deployment
netlify deploy --prod --create-site

# Subsequent deployments
netlify deploy --prod
```

## Critical Notes

- **API Keys Required:** Requires OpenAI API key for LLM functionality
- **Search Tool:** SerpAPI key optional but needed for search functionality
- **No Dev Server:** Never run `yarn dev` in VM environment

## Features

- LangChain.js agent with tool calling
- LangGraph for agent orchestration
- Calculator and search engine tools
- Streaming responses with Vercel AI SDK
- Intermediate steps visualization
