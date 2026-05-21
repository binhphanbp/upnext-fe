import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Đăng ký",
};

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
      <Link className="mb-8 text-2xl font-semibold text-primary" href="/">
        UpNext
      </Link>
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-foreground">Tạo tài khoản</h1>
        <p className="mt-2 text-sm text-muted">
          Chọn vai trò sau khi backend phân quyền được kết nối.
        </p>
        <form className="mt-6 space-y-4">
          <Input label="Họ tên" name="name" placeholder="Nguyễn Văn A" />
          <Input label="Email" name="email" placeholder="you@company.com" type="email" />
          <Input
            label="Mật khẩu"
            name="password"
            placeholder="••••••••"
            type="password"
          />
          <Button className="w-full" type="submit">
            Đăng ký
          </Button>
        </form>
        <p className="mt-5 text-sm text-muted">
          Đã có tài khoản?{" "}
          <Link className="font-medium text-primary hover:underline" href="/login">
            Đăng nhập
          </Link>
        </p>
      </div>
    </main>
  );
}
