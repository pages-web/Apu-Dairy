import { IAttachment, CommonParams } from ".";

export interface IProductBase {
  _id: string;
  name: string;
  unitPrice: number;
  isPackage?: boolean;
}

export interface Group {
  fieldId: string;
  title: string;
}

export interface IProduct extends IProductBase {
  categoryId?: string | null;
  type?: string | null;
  description?: string | null;
  attachment?: { url?: string } | null;
  remainder?: number;
  code?: string;
  manufacturedDate?: string;
  hasSimilarity?: boolean;
}

export interface CustomField {
  field: string;
  value: string;
  stringValue: string;
}

export interface Group {
  fieldId: string;
  title: string;
}

export interface ProductField extends Group {
  variants: string[];
}

export type ProductFields = { [key: string]: ProductField };

export interface IProductDetail extends IProduct {
  attachmentMore?: IAttachment[];
  category?: ICategory;
  barcodeDescription?: string;
  tagIds: string[];
}
export interface ITag {
  _id: string;
  name: string;
}

export interface IUseProducts {
  loading: boolean;
  products: IProduct[];
  productsCount: number;
  handleLoadMore: () => void;
}

export interface ICategory {
  _id: string;
  name: string;
  isRoot: boolean;
  order: string;
  parentId: string;
  code: string;
  attachment: IAttachment;
}

export type IGetParent = (parentId: string) => ICategory | undefined;

export type GetCategories = (params?: CommonParams) => Promise<{
  categories: ICategory[];
  error_msg: string | undefined;
  primaryCategories: ICategory[];
  getParent: IGetParent;
}>;
