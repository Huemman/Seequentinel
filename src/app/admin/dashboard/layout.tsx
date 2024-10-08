import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "./sidebar";
import Header from "./header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session?.user && session.user.type !== "admin")) {
    redirect("/");
  }
  return (
    <>
      <Header />
      <Sidebar>{children}</Sidebar>
    </>
  );
}
