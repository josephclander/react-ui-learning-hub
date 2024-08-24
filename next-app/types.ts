export type LinkProps = {
  name: string;
  url: string;
};

export type InfoProps = {
  title: string;
  details: string;
  videoUrl?: string;
  links?: LinkProps[];
};
