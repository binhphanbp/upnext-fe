import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Đăng nhập",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
      <Link className="mb-8 text-2xl font-semibold text-primary" href="/">
        UpNext
      </Link>
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-foreground">Đăng nhập</h1>
        <p className="mt-2 text-sm text-muted">
          Kết nối backend auth sau khi API NestJS hoàn thiện.
        </p>
        <form className="mt-6 space-y-4">
          <Input label="Email" name="email" placeholder="you@company.com" type="email" />
          <Input
            label="Mật khẩu"
            name="password"
            placeholder="••••••••"
            type="password"
          />
          <Button className="w-full" type="submit">
            Đăng nhập
          </Button>
        </form>
        <p className="mt-5 text-sm text-muted">
          Chưa có tài khoản?{" "}
          <Link className="font-medium text-primary hover:underline" href="/register">
            Đăng ký
          </Link>
        </p>
      </div>
    </main>
  );
}
