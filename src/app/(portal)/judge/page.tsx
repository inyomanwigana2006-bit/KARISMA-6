import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { JudgeDashboard } from "@/components/portal/judge-dashboard";

export const metadata: Metadata = {
  title: "Penilaian Juri | KARISMA 6",
};

export default async function JudgePage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "JUDGE") redirect("/login");

  return <JudgeDashboard session={session} />;
}
