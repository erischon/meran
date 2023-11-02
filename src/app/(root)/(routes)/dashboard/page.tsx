import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard (protected)</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
