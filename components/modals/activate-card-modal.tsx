"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";

interface ActivateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ActivateCardModal({ isOpen, onClose }: ActivateCardModalProps) {
  if (!isOpen) return null;

  const [cardUuid, setCardUuid] = useState("");
  const [activationCode, setActivationCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-card rounded-xl p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-primary">
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Activate Card</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Enter your card's UUID and activation code to add a new card.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cardUuid">Card UUID</Label>
            <Input
              id="cardUuid"
              name="cardUuid"
              placeholder="Enter your card's UUID"
              value={cardUuid}
              onChange={(e) => setCardUuid(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <Label htmlFor="activationCode">Activation Code</Label>
            <Input
              id="activationCode"
              name="activationCode"
              placeholder="Enter your activation code"
              value={activationCode}
              onChange={(e) => setActivationCode(e.target.value)}
              required
            />
          </div>
          <SubmitButton pendingText="Activating...">
            Activate Card
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}