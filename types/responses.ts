import type { Record } from "./record";
import type { Variable } from "./variable";

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface RecordsResponse extends PaginatedResponse<Record> {}

export interface VariableListResponse extends PaginatedResponse<Variable> {}
