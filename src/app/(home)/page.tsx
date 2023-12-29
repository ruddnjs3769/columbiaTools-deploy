import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SuccessPage from "../SuccssPage";
import Visual from "@/app/(home)/Visual";
import Intro from "@/app/(home)/Intro";
import Recommend from "@/app/(home)/Recommend";
import Story from "@/app/(home)/Story";
import RouteComplete from "@/utils/RouteComplete";

export default async function Home() {
  const session = await getServerSession(authOptions); // 서버에서 session 정보 호출
  const user = session?.user;
  if (!user) {
    redirect("/signin");
  }

  return (
    <RouteComplete>
      <main>
        <SuccessPage />
        <Visual />
        <Intro />
        <Recommend />
        <Story />
      </main>
    </RouteComplete>
  );
}
