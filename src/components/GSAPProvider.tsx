"use client";

import { useEffect } from "react";
import { registerGSAPPlugins } from "@/lib/gsap-config";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGSAPPlugins();
  }, []);

  return <>{children}</>;
}
