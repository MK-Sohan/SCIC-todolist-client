import { useQuery } from "react-query";

const useQuearyhook = (url, uniqkey) => {
  const { data, isLoading, refetch } = useQuery(`${uniqkey}`, () =>
    fetch(url).then((res) => res.json())
  );
  return { data, isLoading, refetch };
};

export default useQuearyhook;
