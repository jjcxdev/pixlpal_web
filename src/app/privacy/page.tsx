"use client";

import { Button } from "@/app/components/ui/button";
import { ChevronLeft, Shield, FileText } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy & Terms of Service | PixlPal</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
          <Link href="/">
            <Button variant="ghost" className="mr-2">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-lg font-bold">
            Privacy Policy & Terms of Service
          </h1>
        </header>
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6">
            <section className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 flex items-center">
                <Shield className="h-8 w-8 mr-2 text-primary" />
                Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                At this time, PixlPal does not collect any personal information
                from its users. We do not use cookies or similar technologies,
                and we do not share any information with third parties. PixlPal
                is committed to protecting the privacy of its users, and we do
                not retain any information that could be considered personal
                under applicable privacy laws in Ontario, Canada.
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 flex items-center">
                <FileText className="h-8 w-8 mr-2 text-primary" />
                Terms of Service
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  PixlPal is provided "as is", and we are not responsible for
                  any damage or harm caused by the use of our app.
                </li>
                <li>
                  The scope of PixlPal is limited to sampling screen colors and
                  copying that information to the clipboard.
                </li>
                <li>
                  There are no restrictions on who can use PixlPal, but users
                  must comply with all applicable laws and regulations in their
                  jurisdiction, including in Ontario, Canada.
                </li>
                <li>
                  PixlPal can be accessed and used by downloading it from the
                  Github repository (https://github.com/jjcxdev/PixlPal_free),
                  or once approved, from the Apple App Store.
                </li>
                <li>
                  PixlPal is free to use and does not require any payment.
                </li>
                <li>
                  Users are responsible for ensuring that PixlPal does not cause
                  any issues on their system.
                </li>
                <li>Users are not allowed to alter the code of PixlPal.</li>
                <li>There are no prohibited uses of PixlPal at this time.</li>
                <li>We do not hold any trademarks for PixlPal.</li>
                <li>
                  Any disputes with users or between users will be handled via
                  email at j@jjcx.dev.
                </li>
                <li>
                  These terms and conditions shall be governed by and construed
                  in accordance with the laws of the province of Ontario,
                  Canada, and any disputes arising out of or in connection with
                  these terms and conditions shall be resolved exclusively by
                  the courts of Ontario, Canada.
                </li>
                <li>
                  We reserve the right to terminate a user's access to PixlPal
                  if they violate any of these terms and conditions.
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            © 2024 Justin Chambers. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default PrivacyPolicy;
