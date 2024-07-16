import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const refetch = () => {
    mutate();
  }

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    refetch,
  };
}

export default useGithubUser;
