import useAnimatedRouter from "@/hooks/useAnimatedRouter";
import Link from "next/link";
import React from "react";

export default function AnimatedLink({ href, children, className }) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
      className={className}
    >
      {children}
    </Link>
  );
}
