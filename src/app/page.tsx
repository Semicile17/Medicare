import Dashboard from "@/components/dashboard/Dashboard";
import HomeScreen from "@/components/home-screen/HomeScreen";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return(
    <main>
    {user ? <Dashboard /> : <HomeScreen />}
    </main>
  )

};

export default page;
