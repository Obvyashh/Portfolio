"use client";

import * as React from "react";
import { AvatarFrame } from "./AvatarFrame";
import { AvatarCaption } from "./AvatarCaption";
import { VoiceDock } from "./VoiceDock";
import { useConversation } from "../../features/conversation/useConversation";
import type { AiState } from "../../features/conversation/useConversation";

type AIController = ReturnType<typeof useConversation>;

const AIContext = React.createContext<AIController | null>(null);

export function useAIController() {
  const ctx = React.useContext(AIContext);
  if (!ctx) throw new Error("useAIController must be used within <AIAvatarProvider />");
  return ctx;
}

export function AIAvatarProvider({ children }: { children: React.ReactNode }) {
  const ai = useConversation();
  return <AIContext.Provider value={ai}>{children}</AIContext.Provider>;
}

export function AIAvatarSystem() {
  const ai = useAIController();

  return (
    <div className="relative flex flex-col items-center justify-start w-full">
      <div className="relative w-full flex flex-col items-center">
        <AvatarFrame aiState={ai.aiState as AiState} />
        <div className="mt-6 w-full max-w-[560px]">
          <AvatarCaption
            aiState={ai.aiState as AiState}
            captionText={ai.captionText}
            captionFull={ai.captionFull}
            author="Yash AI Assistant"
          />
        </div>
      </div>

      <div className="mt-8 w-full flex justify-center">
        <VoiceDock
          aiState={ai.aiState as AiState}
          listening={ai.listening}
          selectedPrompt={ai.selectedPrompt}
          onEngage={(prompt?: string) => ai.startConversation({ prompt })}
        />
      </div>
    </div>
  );
}
