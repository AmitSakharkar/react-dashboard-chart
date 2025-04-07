import { Outlet } from "react-router-dom";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";

const AppLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F7F8FA] text-gray-900">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;