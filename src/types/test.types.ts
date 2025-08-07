import { IAttachment } from ".";
import { IProduct } from "./product.type";

export interface IProductDetail extends IProduct {
  attachmentMore?: IAttachment[];
  category?: ICategory;
}
export interface IUseProducts {
  loading: boolean;
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
