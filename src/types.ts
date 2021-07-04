/* istanbul ignore file */
export type ContextProps = {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
};

export type Post = {
  name: string;
  url: string;
  votes: number;
  timestamp: number;
};

export enum SearchParams {
  asc = "asc",
  desc = "desc",
  orderby = "orderby",
  page = "page",
}
