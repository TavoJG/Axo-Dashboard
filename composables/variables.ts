import type { Variable, VariableListResponse } from "@/types";

export const useVariables = () => {
  const axios = useAxios();

  //State
  const variables: Ref<Variable[]> = ref([]);

  //Getters
  const variableNames = computed(() =>
    variables.value.map((variable) => variable.name)
  );

  //Actions
  const getVariables = async () => {
    const response = await axios.get<VariableListResponse>("/variables");
    variables.value = response.data.results;
  };

  return {
    variables,
    variableNames,
    getVariables,
  };
};
