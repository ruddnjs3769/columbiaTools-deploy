import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import Signin from "@/components/Login/Signin";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RouteComplete from "@/utils/RouteComplete";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SingPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions); // 서버에서 session 정보 호출

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? redirect("/");

  return (
    <RouteComplete>
      <section className="flex justify-center pt-20">
        <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
      </section>
    </RouteComplete>
  );
}
