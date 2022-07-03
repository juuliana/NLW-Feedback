import bugImageUrl from "../assets/bug.png";
import ideaImageUrl from "../assets/idea.png";
import otherImageUrl from "../assets/other.png";

export const feedbackOptions = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto na lupa.",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada.",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "Imagem de uma nuvem de pensamento.",
    },
  },
};

export type FeedbackTypes = keyof typeof feedbackOptions;
