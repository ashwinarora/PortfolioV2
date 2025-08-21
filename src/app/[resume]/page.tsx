"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page with query parameter to open resume dialog
    router.replace("/?openResume=true");
  }, [router]);

  return null;
}
