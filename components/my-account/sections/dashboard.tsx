"use client";

import { useState } from "react";
import { CreditCard, Edit2, Eye, PlusCircle, PlayCircle } from "lucide-react";
import ActivateCardModal from "@/components/modals/activate-card-modal";

export default function DashboardSection({ user, cards = [] }: { user: any, cards?: any[] }) {
  const [isActivateModalOpen, setIsActivateModalOpen] = useState(false);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 tracking-tight">Dashboard</h1>
      <div className="flex flex-col gap-10">
        {/* Cards Summary */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" /> Your Cards
          </h2>
          <div className="flex flex-col gap-6">
            {cards.length === 0 ? (
              <div className="text-muted-foreground bg-muted/50 rounded-lg p-6 text-center">
                You have no cards yet.
              </div>
            ) : (
              cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-card rounded-xl p-6 shadow-lg flex flex-col md:flex-row md:items-center gap-4 border border-muted/40 hover:shadow-xl transition-shadow w-full"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <CreditCard className="w-8 h-8 text-primary" />
                    <span className="font-semibold text-lg truncate">{card.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm flex-shrink-0">
                    <span
                      className={
                        card.status === "active"
                          ? "text-green-600 font-medium"
                          : "text-yellow-600 font-medium"
                      }
                    >
                      {card.status.charAt(0).toUpperCase() + card.status.slice(1)}
                    </span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      Last used: {card.lastUsed || "Never"}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2 md:mt-0 flex-shrink-0">
                    <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium shadow hover:bg-primary/90 transition">
                      <Eye size={14} /> View
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 rounded-md border text-xs font-medium hover:bg-accent transition">
                      <Edit2 size={14} /> Edit
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition">
              <PlusCircle size={18} /> Order New Card
            </button>
            <button
              onClick={() => setIsActivateModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-md border font-medium hover:bg-accent transition"
            >
              <PlayCircle size={18} /> Activate Card
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md border font-medium hover:bg-accent transition">
              <Eye size={18} /> View Tutorials
            </button>
          </div>
        </section>
        {/* Recent Activity */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-muted/50 rounded-lg p-6 text-muted-foreground text-center">
            No recent activity.
          </div>
        </section>
      </div>
      <ActivateCardModal isOpen={isActivateModalOpen} onClose={() => setIsActivateModalOpen(false)} />
    </>
  );
}