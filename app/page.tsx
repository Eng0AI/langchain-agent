import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function AgentsPage() {
  const InfoCard = (
    <GuideInfoBox>
      <ul className="space-y-2 text-left">
        <li className="flex items-start gap-2">
          <span className="text-lg">🛠️</span>
          <span>
            This agent has access to a <strong>search engine</strong> and{" "}
            <strong>calculator</strong> tools.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-lg">💬</span>
          <span>
            Try asking: <code className="bg-muted px-1 rounded">What is the weather in Tokyo?</code>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-lg">🔍</span>
          <span>
            Enable &quot;Show intermediate steps&quot; to see the agent&apos;s reasoning process.
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );

  return (
    <main className="h-screen">
      <ChatWindow
        endpoint="api/chat"
        emptyStateComponent={InfoCard}
        placeholder="Ask me anything..."
        emoji="🤖"
        showIntermediateStepsToggle={true}
      />
    </main>
  );
}
