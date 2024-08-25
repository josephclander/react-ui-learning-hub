import { InfoProps } from "@/types";

export const info: InfoProps = {
  title: "Countdown Timer",
  details:
    "Create a countdown timer where users can set a duration, and it counts down to zero with updates displayed visually.",
  links: [
    {
      name: "MDN setInterval",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/setInterval",
    },
    {
      name: "MDN clearInterval",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/clearInterval",
    },
    {
      name: "MDN optionalChaining",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
    },
    {
      name: "React Functional State Updates",
      url: "https://legacy.reactjs.org/docs/hooks-reference.html#functional-updates",
    },
    {
      name: "React useEffect Dependency Array",
      url: "https://react.dev/reference/react/useEffect#examples-dependencies",
    },
  ],
};
