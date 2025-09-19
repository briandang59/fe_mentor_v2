"use client";

import { images } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      <div
        className="rounded-lg shadow-xl p-8 max-w-xl w-full"
        style={{
          backgroundColor: "var(--color-content-bg)",
        }}
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          Oops! Something went wrong.
        </h1>

        <div className="mb-6">
          <Image
            src={images.error}
            alt="Error Illustration"
            className="mx-auto w-64 md:w-80 dark:invert"
            width={1000}
            height={1000}
          />
        </div>

        <p className="text-lg mb-6">
          It looks like we&apos;ve hit a snag. Don&apos;t worry, our team is already on it!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={reset}
            className="w-full md:w-auto px-6 py-3 rounded-md font-semibold text-white transition-colors"
            style={{
              backgroundColor: "var(--color-primary)",
            }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full md:w-auto inline-block px-6 py-3 rounded-md font-semibold transition-colors"
            style={{
              color: "var(--color-primary)",
              borderColor: "var(--color-primary)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
