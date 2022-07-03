import { feedbackOptions, FeedbackTypes } from "../../../utils/feedback-types";
import { CloseButton } from "../../close-button";

interface FeedbackTypeStepProps {
  handleType: (type: FeedbackTypes) => void;
}

export function FeedbackTypeStep({ handleType }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackOptions).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => handleType(key as FeedbackTypes)}
            >
              <img
                src={value.image.source}
                alt={value.image.alt}
                width={40}
                height={40}
              />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
