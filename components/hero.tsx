"use client";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import HomeImgLight from '@/public/images/home/tappIn-home-img-light.png';
import HomeImgDark from '@/public/images/home/tappIn-home-img-dark.png';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Header() {
  const { resolvedTheme } = useTheme();
  const homeImg = resolvedTheme === 'dark' ? HomeImgDark : HomeImgLight;

  return (
    <div className="flex flex-col items-center my-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto px-4 text-center ">
        <div className='flex items-center md:items-start flex-col justify-center py-16 md:py-0'>
          <p className="text-3xl lg:text-4xl !leading-tight md:text-left mb-6">
            Share your digital profile in seconds with just{' '}
            <span className="font-bold">
              one tap
            </span>
          </p>
          <Button backgroundColor="#2416ba" asChild size="sm" variant={"default"}>
            <Link href="/sign-in" className="font-semibold px-10 py-7 text-white">Start Your Own</Link>
          </Button>
        </div>

        <div className=''>
          <Image
            src={homeImg}
            alt="Home Image"
            className="mx-auto max-w-full"
            priority
          />
        </div>
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="grid grid-cols-1 lg:[grid-template-columns:1fr_3fr] gap-8 px-10 lg:px-20 text-center py-4 max-w-12xl mx-auto w-5/5">
        <div className="flex items-center lg:items-start flex-col justify-center py-5 px-5">
          <p className="text-3xl font-semibold text-left">
            What You Need to Know
          </p>
        </div>
        <div className="flex flex-row items-center gap-20 grid grid-cols-1 md:grid-cols-3 justify-center py-5 bg-background">
          <div className="flex flex-row items-center justify-center gap-1">
            <div className="p-4">
              <p className="text-4xl font-bold text-[#2416ba] mt-2">120+</p>
            </div>

            <div className="p-4 border-l-2 border-[#2416ba] pl-4">
              <p className="text-sm text-left font-medium">
                Profiles<br />
                created
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <div className="p-4">
              <p className="text-4xl font-bold text-[#2416ba] mt-2">200+</p>
            </div>

            <div className="p-4 border-l-2 border-[#2416ba] pl-4">
              <p className="text-sm text-left font-medium">
                Connections<br />
                created
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <div className="p-4">
              <p className="text-4xl font-bold text-[#2416ba] mt-2">200K+</p>
            </div>

            <div className="p-4 border-l-2 border-[#2416ba] pl-4">
              <p className="text-sm text-left font-medium">
                Profile<br />
                Views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
