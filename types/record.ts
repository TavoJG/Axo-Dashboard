export type Record = {
  variable: string;
  value: number;
  units: string;
  createdAt: string;
};

export type FilteredRecords = {
  [key: string]: Record[];
};

export type LastRecords = {
  [key: string]: Record;
};
