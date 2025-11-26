# AI Agent

AI agent with tools (search and calculator) powered by LangGraph and Vercel AI SDK.

## Tech Stack

- Next.js 15
- LangChain.js + LangGraph
- Vercel AI SDK
- Multi-provider LLM support (OpenAI, Anthropic, Google)

## Getting Started

1. Copy `.env.example` to `.env.local`
2. Set your LLM provider and API key
3. Run `yarn install && yarn dev`

## Environment Variables

```bash
LLM_PROVIDER=openai          # openai | anthropic | google
LLM_MODEL=gpt-4.1            # Model ID for your provider
OPENAI_API_KEY=sk-...        # If using OpenAI
ANTHROPIC_API_KEY=sk-ant-... # If using Anthropic
GOOGLE_API_KEY=...           # If using Google
```

## License

MIT
