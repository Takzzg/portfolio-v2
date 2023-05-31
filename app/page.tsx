import { redirect } from "next/navigation";

type Props = {};

const Page = async (props: Props) => {
	redirect("/home");
};

export default Page;
