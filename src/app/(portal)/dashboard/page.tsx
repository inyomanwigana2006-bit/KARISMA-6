import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ParticipantDashboard } from "@/components/portal/participant-dashboard";

export const metadata: Metadata = {
  title: "Dashboard Peserta | KARISMA 6",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <ParticipantDashboard session={session} />;
}
