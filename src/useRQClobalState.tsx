// import { QueryClient, useQuery } from "@tanstack/react-query";
// const queryClient = new QueryClient();

// type Props = {
//   key: number;
//   initialData: (bool: string) => void;
// }

// const useRQGlobalState = ({key, initialData}: Props) => [
//   useQuery([key], () => initialData,

//     {enabled: false, initialData}

//   ).data,
//   (value) => queryClient.setQueriesData([key], value),
// ]


// export default useRQGlobalState