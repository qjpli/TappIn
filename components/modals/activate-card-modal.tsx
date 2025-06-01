"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";
import { createClient } from "@/utils/supabase/client";

interface ActivateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ActivateCardModal({ isOpen, onClose }: ActivateCardModalProps) {
  const supabase = createClient();
  if (!isOpen) return null;

  const [cardUuid, setCardUuid] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      // Call the stored procedure via RPC
      const { data, error } = await supabase
        .rpc('activate_service_card', {
          p_user_id: ((await supabase.auth.getUser()).data.user ?? {}).id ?? '', // current user id from supabase auth
          p_card_uuid: cardUuid,
          p_activation_code: activationCode,
        });

      if (error) {
        setErrorMsg(`Activation failed: ${error.message}`);
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        setErrorMsg("No response from server.");
        setLoading(false);
        return;
      }

      // data is an array of rows, pick first row's success and message
      const { success, message } = data[0];
      if (!success) {
        setErrorMsg(message);
        setLoading(false);
        return;
      }

      setSuccessMsg(message);
      setLoading(false);
      setCardUuid("");
      setActivationCode("");

      setTimeout(() => {
        onClose();
        setSuccessMsg(null);
      }, 2000);
    } catch (err: any) {
      setErrorMsg(`Unexpected error: ${err.message || err.toString()}`);
      setLoading(false);
    }
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

          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          {successMsg && <p className="text-green-500">{successMsg}</p>}

          <SubmitButton disabled={loading} pendingText="Activating...">
            Activate Card
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
