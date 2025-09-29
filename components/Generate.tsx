// app/generate/page.tsx
"use client";

import { GENERATE_ITEMS } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Variants
import { motion, Variants } from "framer-motion";

// Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 12 },
  },
};

export default function GeneratePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="container-center w-full px-6 py-8">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6">Generate</h1>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
      >
        {GENERATE_ITEMS.map((generateItem) => (
          <motion.div key={generateItem.id} variants={item}>
            <Card className="flex flex-col justify-between hover:shadow-lg transition">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="flex items-center">
                  <generateItem.icon className="w-10 h-15 text-primary" />
                  <div className="flex flex-col">
                    <div className="flex pb-2">
                      <h2 className="px-6 text-lg font-medium">
                        {generateItem.title}
                      </h2>
                      {generateItem.isNew && (
                        <Badge className="ml-1 bg-blue-500">New</Badge>
                      )}
                    </div>
                    <CardContent className="flex justify-between flex-1">
                      <p className="text-sm text-muted-foreground">
                        {generateItem.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-fit"
                        disabled={generateItem.status !== "Open"}
                      >
                        {generateItem.status}
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
