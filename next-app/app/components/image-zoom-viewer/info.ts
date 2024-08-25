import { InfoProps } from "@/types";

export const info: InfoProps = {
  title: "Image Zoom Viewer",
  details:
    "Create a component that allows users to hover over an image to view a magnified version of the part their cursor is over.",
  links: [
    {
      name: "Next Image optimization",
      url: "https://nextjs.org/docs/pages/building-your-application/optimizing/images",
    },
    {
      name: "MDN getBoundingClientRect",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",
    },
    {
      name: "MDN event.clientX",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX",
    },
    {
      name: "MDN transform-origin",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",
    },
    {
      name: "MDN object-fit",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
    },
  ],
};
