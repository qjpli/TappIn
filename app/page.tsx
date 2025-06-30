import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { User, QrCode, Link2, Smartphone } from "lucide-react";

export const metadata = {
  title: "tappIn - Home",
};

export default async function Home() {
  return (
    <>
      <Hero />
      {/* Community Stats Section */}
      <main className="flex flex-col items-center justify-center py-0 my-0 px-4">
        {/* Advantages Section */}
        <section className="w-full max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 relative">
            See Our{" "}
            <span className="relative z-10">Advantagesd</span>
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-2 z-0 w-48 h-3 bg-[#2416ba] rounded-full opacity-50"
              style={{ marginBottom: "-0.5rem", marginLeft: "5rem", transform: "translateX(-50%) rotate(-2deg)" }}
            ></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-background rounded-2xl shadow p-8 flex flex-col justify-between relative overflow-hidden py-16">
              <h3 className="text-xl font-bold mb-2">No More Paper Cards</h3>
              <p className="text-gray-700 mb-4">
                Share your contact details, social links, and more with just a tap
                or scan—no printing, no waste.
              </p>
              <a
                href="#"
                className="text-[#2416ba] font-medium flex items-center gap-1 hover:underline"
              >
                Read More <span aria-hidden>→</span>
              </a>
              <span className="absolute bottom-4 right-4 text-5xl text-[#E9F94A] pointer-events-none select-none">
                ★
              </span>
            </div>
            {/* Card 2 */}
            <div className="bg-background rounded-2xl shadow p-8 flex flex-col justify-between relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">
                Instant, Customizable Profiles
              </h3>
              <p className="text-gray-700 mb-4">
                Update your info anytime. Your TappIn card always links to your
                latest profile—no app required for others.
              </p>
              <a
                href="#"
                className="text-[#2416ba] font-medium flex items-center gap-1 hover:underline"
              >
                Read More <span aria-hidden>→</span>
              </a>
              <img
                src="/images/phone-mockup.png"
                alt=""
                className="absolute bottom-0 right-0 w-24 md:w-32 opacity-80 pointer-events-none select-none"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto my-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 relative">
            Get Your <span className="relative z-10">TappIn Card</span> Today!
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-2 z-0 w-48 h-3 bg-[#2416ba] rounded-full opacity-50"
              style={{ marginBottom: "-0.5rem", marginLeft: "5rem", transform: "translateX(-50%) rotate(-2deg)" }}
            ></span>
          </h2>
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Highlight Box */}
            <div className="bg-[#2416BA] rounded-2xl p-8 md:p-12 flex flex-col justify-center min-h-[320px] relative overflow-hidden">
              {/* Doodle Lucide Icons */}
              <User className="absolute text-[#E9F94A] opacity-30 w-16 h-16 top-6 left-6 rotate-12" />
              <QrCode className="absolute text-white opacity-20 w-20 h-20 -top-4 right-8 -rotate-12" />
              <Link2 className="absolute text-[#E9F94A] opacity-20 w-14 h-14 bottom-8 left-8 rotate-[-8deg]" />
              <Smartphone className="absolute text-white opacity-10 w-28 h-28 -bottom-8 -right-6 rotate-6" />
              {/* Content */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
                Seamless, Contactless Networking
              </h2>
              <p className="text-lg text-white/80 relative z-10">
                Order your NFC-enabled TappIn card online and start sharing your
                digital profile instantly. Delivered fast and ready to
                activate—no app required for your contacts!
              </p>
            </div>
            {/* Right Feature Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Lazada */}
              <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1e_.JhHY1gK0jSZTEXXXDQVXa-64-64.png"
                    alt="Lazada"
                    className="w-10 h-10"
                  />
                  <span className="font-semibold text-lg text-[#2416ba]">
                    Lazada
                  </span>
                </div>
                <p className="text-sm text-black/70 mb-4 flex-1">
                  Order TappIn via Lazada and enjoy fast, secure delivery.
                </p>
                <Button
                  asChild
                  className="mt-auto w-full"
                  style={{ backgroundColor: "#2416ba", color: "#fff" }}
                >
                  <a
                    href="https://www.lazada.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Lazada &rarr;
                  </a>
                </Button>
              </div>
              {/* Shopee */}
              <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/icon_favicon_1_32.9cd61b2e90c0f104.png"
                    alt="Shopee"
                    className="w-10 h-10"
                  />
                  <span className="font-semibold text-lg text-[#FD5D32]">
                    Shopee
                  </span>
                </div>
                <p className="text-sm text-black/70 mb-4 flex-1">
                  Prefer Shopee? Get your TappIn card from our official Shopee
                  store.
                </p>
                <Button
                  asChild
                  className="mt-auto w-full"
                  style={{ backgroundColor: "#FD5D32", color: "#fff" }}
                >
                  <a
                    href="https://shopee.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Shopee &rarr;
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
