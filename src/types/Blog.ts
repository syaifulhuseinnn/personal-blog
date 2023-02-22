export type Blogs = {
  data: Datum[];
  meta: Meta;
};

export type Datum = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  title: string;
  body: string;
  postDate: Date;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  bannerUrl: string;
};

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
