import Sidebar from "@/components/sidebar/Sidevar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 p-4 bg-light" style={{ minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
