// components/dashboard/dashboard-content.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Users, BarChart2, Settings, BookOpen, Layers, CreditCard } from "lucide-react";
import ProfilesSection from "./sections/profiles";
// import ContactsSection from "./sections/contacts";
// import AnalyticsSection from "./sections/analytics";
// import GroupsSection from "./sections/groups";
// import SettingsSection from "./sections/settings";
// import TutorialsSection from "./sections/tutorials";
// import OrderCardsSection from "./sections/order-cards";

const sidebarMenu = [
  { label: "Profiles", icon: User, key: "profiles" },
  { label: "Contacts", icon: Users, key: "contacts" },
  { label: "Analytics", icon: BarChart2, key: "analytics" },
  { label: "Groups", icon: Layers, key: "groups" },
  { label: "Settings", icon: Settings, key: "settings" },
  { label: "Tutorials", icon: BookOpen, key: "tutorials" },
  { label: "Order more cards", icon: CreditCard, key: "order-cards" },
];

export default function DashboardContent({ user }: { user: any }) {
  const [active, setActive] = useState("profiles");

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="flex flex-col py-8 px-2 md:px-6 border-r bg-card w-16 md:w-64 transition-all duration-200">
        <div className="hidden md:block font-semibold text-lg mb-8">Dashboard</div>
        <nav className="flex flex-col gap-2 text-foreground">
          {sidebarMenu.map(({ label, icon: Icon, key }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center w-full justify-center md:justify-start gap-2 px-3 py-2 rounded font-medium transition-colors ${
                active === key ? "bg-accent text-accent-foreground" : "hover:bg-accent"
              }`}
            >
              <Icon size={18} />
              <span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-8 flex flex-col gap-2">
          <Link href="#" className="text-xs text-muted-foreground hidden md:block">My OVOU Profile</Link>
          <Link href="#" className="text-xs text-muted-foreground hidden md:block">Log out</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 md:px-12 py-6 md:py-10">
        {active === "profiles" && <ProfilesSection user={user} />}
        {/* {active === "contacts" && <ContactsSection />}
        {active === "analytics" && <AnalyticsSection />}
        {active === "groups" && <GroupsSection />}
        {active === "settings" && <SettingsSection />}
        {active === "tutorials" && <TutorialsSection />}
        {active === "order-cards" && <OrderCardsSection />} */}
      </main>
    </div>
  );
}
