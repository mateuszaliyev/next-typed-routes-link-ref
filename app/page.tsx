"use client";

import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link href="/" ref={ref}>
      test
    </Link>
  );
}
