import { Moment } from "moment";

export interface Response<T> {
  version: string;
  host: string;
  status: number;
  message: string;
  timestamp: Moment;
  data: T | null;
  metadata: Metadata | null;
  errors: Error[];
}

export interface Metadata {
  totalElements: number;
  totalPages: number;
  page: number;
  perPage: number;
  query: string | null;
}

export interface Error {
  type: string;
  message: string;
  cause: string | null;
  code: number;
  field: string | null;
}
