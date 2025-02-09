import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Plus } from "lucide-react";

const ChatBar = () => {
  // Example data for previous chat sessions
  const previousChats = [
    { id: 1, title: "Chat about React" },
    { id: 2, title: "Discussion on Tailwind CSS" },
    { id: 3, title: "Project Planning" },
  ];

  return (
    <div className="h-full w-1/5 hidden md:block shadow-md bg-green-100 m-2 p-3 rounded-lg">
      <p className="text-gray-800 text-xs mb-4">Select a report or upload one</p>

      {/* New Chat Button */}
      <Button className="w-full mb-4 bg-green-500 hover:bg-green-600 text-white">
        <Plus className="mr-2 h-4 w-4" />
        New Chat
      </Button>

      {/* Previous Chat Sessions */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-gray-700">
            Previous Chats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {previousChats.map((chat) => (
              <Button
                key={chat.id}
                variant="ghost"
                className="w-full flex justify-start items-center text-gray-700 hover:bg-green-50"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                <span className="truncate">{chat.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatBar;