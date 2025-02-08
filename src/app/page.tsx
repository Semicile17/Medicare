/* eslint-disable @typescript-eslint/no-unused-vars */
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Dashboard from "@/components/dashboard/Dashboard";
import Landing from "@/components/landing/Landing";

export default async function Home() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return <main>{ user ? <Dashboard /> : <Landing/>}</main>;
}
