import type { QueryOptions } from "@apollo/client";

export interface IPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface CommonParams {
  variables?: QueryOptions["variables"];
}

export type IAttachment = { url?: string; name: string } | null;
export type ICreatedUser = {
  _id: string;
  username: string;
  details: { avatar: string; fullName: string };
};

export interface IPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
