import { auth0 } from "@/app/lib/auth0";
import ClientComponent from "./ClientComponent/page"; // あとで作る

export default async function Page() {
  const session = await auth0.getSession();
  const token = session?.tokenSet.accessToken;

  return <ClientComponent token={token} />;
}
