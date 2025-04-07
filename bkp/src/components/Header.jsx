import { Bell, Settings, Search } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search for something"
            aria-label="Search"
            className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <Settings className="text-gray-600 cursor-pointer" aria-label="Settings" />
        <Bell className="text-gray-600 cursor-pointer" aria-label="Notifications" />

        <Avatar>
          <AvatarImage src="/profile.jpg" alt="User profile image" />
        </Avatar>
      </div>
    </header>
  );
}
