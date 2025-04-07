import { Send } from "lucide-react";
import Button from "@/components/ui/Button";

const contacts = [
  { id: 1, name: "Alice", avatar: "🧑‍💼" },
  { id: 2, name: "Bob", avatar: "🧔" },
  { id: 3, name: "Charlie", avatar: "👩‍💻" },
  { id: 4, name: "Daisy", avatar: "👨‍🔧" },
];

export default function QuickTransfer() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Quick Transfer</h2>
        <Button size="sm" variant="ghost" className="text-indigo-600 hover:text-indigo-800">
          <Send className="w-4 h-4 mr-1" />
          Transfer
        </Button>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col items-center justify-center space-y-2 min-w-[60px]"
          >
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full text-xl">
              {contact.avatar}
            </div>
            <span className="text-xs text-slate-600">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
