import Link from "next/link";
import React from "react";
import { Button } from "../../ui/Button/Button";

export default async function MainBanner() {
  return (
    <div>
      <Link href="/about">
        <Button asChild variant="default" className="bg-red-800">
          <a>Go to About Page</a>
        </Button>
      </Link>
    </div>
  );
}
