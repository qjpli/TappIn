// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import DashboardContent from "@/components/dashboard/dashboard-content";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return <DashboardContent user={user} />;
}
