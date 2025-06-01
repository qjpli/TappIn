"use client";
import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HeaderAuth({ user } : { user: any }) {
  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"ghost"}>
        <Link href="/dashboard" className="font-semibold">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/activate-card" className="font-semibold">Activate Card</Link>
      </Button>
    </div>
  );
}
