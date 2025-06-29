import logo from "@/public/images/tappIn-logo-no-bg.png";
import Image from "next/image";
import Link from "next/link";

export default function RateLimitPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark:bg-black text-center px-4">
      <div className="mb-0">
        <Link href="/" className="relative w-20">
          <Image src={logo} alt="Logo" width={100} priority className="dark:filter dark:invert" />
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">HTTP 429 - Too Many Requests</h1>
      <p className="max-w-xl text-base mb-2">
        You’ve exceeded the number of allowed requests for now. Please wait a moment and try again.
      </p>
      <p className="text-base mb-12">
        If the issue continues, feel free to{" "}
        <a href="/support" className="underline hover:text-gray-200">
          contact our support team
        </a>
        .
      </p>
    </div>
  );
}
