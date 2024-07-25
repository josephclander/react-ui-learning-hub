// app/sitemap.ts
import { MetadataRoute } from "next";
import { componentsData, ComponentProps } from "./_assets/componentsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const URL =
    process.env.SITE_URL || "https://react-ui-learning-hub.vercel.app/";

  type ChangeFrequency =
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

  const components = Object.values(componentsData).map(
    (page: ComponentProps) => {
      return {
        url: `${URL}/components/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as ChangeFrequency,
        priority: 0.5,
      };
    }
  );

  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 1,
    },
    ...components,
  ];
}
