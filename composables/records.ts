import type { Record, RecordsResponse } from "~/types";

type RecordListParams = {
  limit: number;
  offset: number;
  variable__name: string;
  start_date__gte?: string | null;
  end_date__lte?: string | null;
};

export const useRecords = () => {
  const axios = useAxios();

  //State
  const records: Ref<Record[]> = ref([]);
  const lastRecords: Ref<Record[] | null> = ref(null);
  const isLoading = ref(false);

  //Getters

  //Actions
  const getRecordList = async (
    variable: string,
    limit = 0,
    offset = 0,
    start_date: Date | null = null,
    end_date: Date | null = null
  ) => {
    isLoading.value = true;
    const params: RecordListParams = {
      limit,
      offset,
      variable__name: variable,
    };
    if (start_date) {
      params.start_date__gte = start_date.toISOString();
    }
    if (end_date) {
      params.end_date__lte = end_date.toISOString();
    }
    const response = await axios.get<RecordsResponse>("/records", {
      params,
    });

    records.value = response.data.results;
    isLoading.value = false;
  };

  const getLastRecords = async () => {
    isLoading.value = true;
    const response = await axios.get<Record[]>("/records/last");
    lastRecords.value = response.data;
    isLoading.value = false;
  };

  return {
    records,
    isLoading,
    lastRecords,
    getRecordList,
    getLastRecords,
  };
};
