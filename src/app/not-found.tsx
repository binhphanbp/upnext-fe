import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-foreground">
        Không tìm thấy trang
      </h1>
      <p className="mt-4 text-muted">
        Đường dẫn này không tồn tại hoặc đã được di chuyển.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Quay về trang chủ</Link>
      </Button>
    </main>
  );
}
