import { FunctionComponent } from "react";
import { IconType } from "react-icons";

export type BlogPost = {
    id: string,
    title: string,
    date: string,
    summery: string,
    slug: string,
    image_url: string,
    link: string,
    isFeatured: boolean,
}

export type FeaturedArticle = {
  image_url: string,
  title: string,
  date: string,
  summery: string,
  link: string,
  id?: string | undefined,
  slug?: string,
}

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" | "django" | "mongo";