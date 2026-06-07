"use client";

import "../index.css";
import { useState } from "react";
import { Header, Sidebar } from "layout/ui";
import { usePathname, useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "My App",
//   description: "My App is a...",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (formData: FormData) => {
    router.push(
      `${pathname}/?q=${encodeURIComponent(formData.get("searchTerm") as string)}`,
    );
  };

  return (
    <html lang="pt-BR">
      <body>
        <div className="flex flex-col h-screen">
          <Header onCollapse={handleSidebarOpen} onSearch={handleSearch} />
          <div className="flex flex-1">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="flex flex-1 flex-col lg:px-xl px-md min-w-0">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
