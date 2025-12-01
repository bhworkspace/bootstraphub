//src/app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import { Construction, ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { WaitlistForm } from "@/components/home/waitlist-form";


export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 via-orange-500 to-red-500 shadow-lg"
        >
          <Construction className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-5xl font-bold">🚧 Page Under Construction</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We’re still working on this part of the site.  
          New features are launching soon — and they’ll be worth the wait! 🚀
        </p>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Meanwhile, explore our live features or return home.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/">
              <Button variant="default" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Go Home
              </Button>
            </Link>
            {/* <WaitlistForm/> */}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-16 text-xs text-muted-foreground"
      >
        Building the future of high-converting copy ✨
      </motion.div>
    </section>
  );
}
