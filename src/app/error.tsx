"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-danger">
        Đã xảy ra lỗi
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-foreground">
        Không thể tải nội dung
      </h1>
      <p className="mt-4 text-muted">{error.message}</p>
      <Button className="mt-8" onClick={reset}>
        Thử lại
      </Button>
    </main>
  );
}
