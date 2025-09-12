import { IAttachment } from ".";

export interface ICmsCategory {
  _id: string;
  name: string;
  slug: string;
  parent?: ICmsCategory;
  parentId?: string;
}

export interface ICmsTag {
  slug: any;
  _id: string;
  name: string;
}

export interface ICmsPost {
  customFieldsData: any;
  pdfAttachment: any;
  _id: string;
  slug: string;
  categoryIds: string[];
  categories: ICmsCategory[];
  tagIds: string[];
  tags: ICmsTag[];
  thumbnail: IAttachment;
  post: string;
  images: IAttachment[];
  title: string;
  excerpt: string;
  content: string;
  customFieldsMap: { benefitPost: IBenefitCustomField };
}

export interface IBenefitCustomField {
  locations?: string;
  website_link?: string;
  facebook_link?: string;
  instagram_link?: string;
  phone?: string;
  app_store_link?: string;
  play_store_link?: string;
  time_table?: string;
  winter_time_table?: string;
  discount_value?: string;
  location_text?: string;
}
