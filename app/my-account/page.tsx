// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import MyAccountContent from "@/components/my-account/my-account-content";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return <MyAccountContent user={user} />;
}
