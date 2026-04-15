import Navbar from "@/modules/home/components/navbar";
import { currentUserRole } from "@/modules/auth/actions/index.js";
import React from "react";

const RootLayout = async ({ children }) => {
  const userRole = await currentUserRole();
  return (
    <main className="relative flex flex-col min-h-screen bg-transparent">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10
        dark:bg-[radial-gradient(#393e4a_1px,oklch(0.129_0.042_264.695)_1px)]
        dark:bg-[size:16px_16px]
        bg-[radial-gradient(#dadde2_1px,oklch(1_0_0)_1px)]
        bg-[size:16px_16px]"
      />

      <Navbar userRole={userRole} />

      <div className="flex-1 flex flex-col px-4 pb-4">{children}</div>
    </main>
  );
};

export default RootLayout;
