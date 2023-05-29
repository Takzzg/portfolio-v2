import axios from "axios";
import useSWR from "swr";

const SWR_post = (url: string, data: any) => axios.post(url, data).then((res) => res.data);

export const useUser = (id: string) => {
	console.log("id", id);
	const { data, error, isLoading } = useSWR(`/api/user/${id}`, SWR_post);

	return {
		user: data,
		isLoading,
		error,
	};
};
