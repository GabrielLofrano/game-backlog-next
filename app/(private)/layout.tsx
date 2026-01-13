import { Sidebar } from "@/components/layout/Sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
