// components/dashboard/sections/profiles.tsx
"use client";

import { Edit2, Link as LinkIcon, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function ProfilesSection({ user }: { user: any }) {
  return (
    <>
      <Link href="#" className="text-xs text-muted-foreground mb-4">&lt; Back to Profiles</Link>
      <h1 className="text-2xl font-semibold mb-2">
        Profile {user?.user_metadata?.full_name || user?.email}
      </h1>
      <div className="text-sm text-muted-foreground mb-8">
        Click on an interaction to view what actions were performed on your profile.
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Card */}
        <section className="flex flex-col items-center gap-4 mb-8 md:mb-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg bg-muted flex items-center justify-center overflow-hidden mb-2">
            <img
              src={user?.user_metadata?.avatar_url || "https://randomuser.me/api/portraits/women/44.jpg"}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-64 bg-card rounded-lg shadow p-4 flex flex-col gap-2">
            <div className="font-bold text-lg">
              {user?.user_metadata?.full_name || "No name setup"}
            </div>
            <div className="text-sm text-muted-foreground">
              {user?.user_metadata?.job_title || "No job title"}
              <br />
              {user?.user_metadata?.company || ""}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-muted-foreground">LOGO</span>
            </div>
          </div>
        </section>
        {/* Profile Details */}
        <section className="flex-1 flex flex-col gap-6">
          {/* Basic Info */}
          <div className="flex items-center gap-4">
            <div className="font-semibold text-base">Basic info</div>
            <button className="ml-auto flex items-center gap-1 px-3 py-1 rounded border text-xs hover:bg-accent">
              <Edit2 size={14} /> Edit
            </button>
          </div>
          <div className="flex items-center gap-4">
            {/* ...could show name/job title here... */}
          </div>
          {/* Call To Action */}
          <div className="flex items-center gap-4">
            <div className="font-semibold text-base">Call To Action</div>
            <button className="ml-auto flex items-center gap-1 px-3 py-1 rounded border text-xs hover:bg-accent">
              <Edit2 size={14} /> Edit
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-4 py-2 rounded border bg-background text-foreground font-medium hover:bg-accent w-full sm:w-auto">
              Save Contact
            </button>
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/90 w-full sm:w-auto">
              Exchange
            </button>
          </div>
          {/* About */}
          <div className="flex items-center gap-4">
            <div className="font-semibold text-base">About</div>
            <button className="ml-auto flex items-center gap-1 px-3 py-1 rounded border text-xs hover:bg-accent">
              <Edit2 size={14} /> Edit
            </button>
          </div>
          <div className="text-sm text-foreground">
            My love for real estate began when I bought and sold my first home at 24 years old. After experiencing the excitement and obstacles of my first investment, I wanted to share my experience with others.
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <div className="font-semibold text-base">Social links</div>
            <button className="ml-auto flex items-center gap-1 px-3 py-1 rounded border text-xs hover:bg-accent">
              <Edit2 size={14} /> Edit
            </button>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#E4405F] hover:text-[#C13584] bg-primary/10 rounded-md px-3 py-2 transition-colors"
            >
              <Instagram size={18} /> <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FF0000] hover:text-[#CC0000] bg-primary/10 rounded-md px-3 py-2 transition-colors"
            >
              <Youtube size={18} /> <span className="text-sm">YouTube</span>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#1877F3] hover:text-[#145DB2] bg-primary/10 rounded-md px-3 py-2 transition-colors"
            >
              <Facebook size={18} /> <span className="text-sm">Facebook</span>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-700 bg-primary/10 rounded-md px-3 py-2 transition-colors"
            >
              <Twitter size={18} /> <span className="text-sm">X</span>
            </a>
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#010101] hover:text-[#EE1D52] bg-primary/10 rounded-md px-3 py-2 transition-colors"
            >
              {/* No Tiktok icon available in lucide-react */}
              <span className="text-sm">TikTok</span>
            </a>
          </div>
          {/* Profile Link */}
          <div className="flex items-center gap-4">
            <div className="font-semibold text-base">Profile link</div>
            <button className="ml-auto flex items-center gap-1 px-3 py-1 rounded border text-xs hover:bg-accent">
              <Edit2 size={14} /> Edit
            </button>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground break-all">ovou.me/milia_basova_porsche</span>
          </div>
        </section>
      </div>
    </>
  );
}
