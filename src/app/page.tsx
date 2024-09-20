'use client';

import {
  Droplet,
  Palette,
  History,
  Keyboard,
  Monitor,
  Clipboard,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-end justify-center" href="#">
          <Image src="/logo.png" alt="PixlPal Logo" width={32} height={32} />
          <span className="ml-2 text-lg font-bold">PixlPal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#whats-new"
          >
            What's New
          </Link>
        </nav>
      </header>
      <div className="w-full flex justify-end pr-4">
        <a
          href="https://www.producthunt.com/posts/pixlpal?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pixlpal"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=490603&theme=light"
            alt="PixlPal - Capture&#0032;and&#0032;save&#0032;screen&#0032;colors | Product Hunt"
            style={{ width: '250px', height: '54px' }}
            width={250}
            height={54}
          />
        </a>
      </div>
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    PixlPal
                    <span className="font-normal">
                      : Your Ultimate Color Picker for macOS
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Capture any color from your screen instantly. Perfect for
                    designers, developers, and artists.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://apps.apple.com/ca/app/pixlpal/id6447212748?mt=12">
                    <Image
                      src="/apple.png"
                      alt="App Store Link"
                      width={200}
                      height={59.11}
                    />
                  </Link>
                </div>
              </div>
              <Image
                alt="PixlPal Screenshot"
                className="mx-auto rounded-xl object-center sm:w-full lg:order-last"
                height="550"
                src="/logo.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tighter sm:text-5xl mb-12 text-center">
              Core Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Monitor,
                  title: 'Screen Color Selection',
                  description:
                    'Easily pick any color from your screen with a simple click.',
                },
                {
                  icon: Clipboard,
                  title: 'Clipboard Integration',
                  description:
                    'Automatically save the selected color to your clipboard for immediate use.',
                },
                {
                  icon: Palette,
                  title: 'Multiple Color Formats',
                  description:
                    'Choose from HSL, RGB, HEX, or CMYK formats to suit your workflow needs.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 rounded-full bg-pink-500 p-2 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="whats-new"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tighter sm:text-5xl mb-12 text-center">
              What's New in v2.0
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  icon: History,
                  title: 'Color History',
                  description:
                    'Access and view your color history directly from the menubar. Copy any previously selected color with a single click.',
                },
                {
                  icon: Droplet,
                  title: 'Seamless Mode Switching',
                  description:
                    'Effortlessly switch between HSL, RGB, HEX, and CMYK modes from the menubar for tailored color representation.',
                },
                {
                  icon: Palette,
                  title: 'Full CMYK Support',
                  description:
                    'Perfect for designers working in print environments with full CMYK color model support.',
                },
                {
                  icon: Keyboard,
                  title: 'Quick Color Picker Access',
                  description:
                    'Activate the color picker with a global hotkey (⇧⌃⌥P) and capture colors from anywhere on your screen.',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="rounded-full bg-pink-500  p-2 text-white">
                    <feature.icon className="h-6 w-6   " />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 bg-gray-100 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tighter sm:text-5xl">
                  Ready to Enhance Your Workflow?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Get PixlPal now for just $1.99 and revolutionize your color
                  picking experience.
                </p>
              </div>
              <Link href="https://apps.apple.com/ca/app/pixlpal/id6447212748?mt=12">
                <Image
                  src="/apple.png"
                  alt="App Store Link"
                  width={200}
                  height={59.11}
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 <a href="https://jjcx.dev">jjcx</a> All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/jjcxdev/pixlpal_free"
          >
            GitHub
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default Index;
