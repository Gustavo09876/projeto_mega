import "./globals.css";
import { GroupsProvider } from "./GroupsContext";
import { TasksProvider } from "./TasksContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <GroupsProvider>
          <TasksProvider> 
            {children}
          </TasksProvider>
        </GroupsProvider>
      </body>
    </html>
  );
}
