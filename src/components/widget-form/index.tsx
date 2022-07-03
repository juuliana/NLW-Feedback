import { useState } from "react";

import { FeedbackTypes } from "../../utils/feedback-types";

import { FeedbackContentStep } from "./steps/feedback-content-step";
import { FeedbackSuccessStep } from "./steps/feedback-success-step";
import { FeedbackTypeStep } from "./steps/feedback-type-step";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep handleFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep handleType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              handleFeedbackRestart={handleRestartFeedback}
              handleFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com s2 por{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/juliana-dos-santos-ribeiro-b721b6197/"
        >
          Juliana Ribeiro
        </a>
      </footer>
    </div>
  );
}
