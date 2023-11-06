import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ToastProvider from "@/services/toastProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastProvider>
        <div className="h-full relative">
          <div className="hidden h-full md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 z-[80] bg-sky-900">
            <Sidebar />
          </div>

          <main className="md:pl-72">
            <Navbar />

            {children}
          </main>
        </div>
      </ToastProvider>
    </>
  );
}
