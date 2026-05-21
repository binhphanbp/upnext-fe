export const metadata = {
  title: "Quản lý tin tuyển dụng",
};

export default function DashboardJobsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-foreground">Quản lý tin tuyển dụng</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Khu vực này dành cho CRUD job posting, duyệt tin và đồng bộ trạng thái với API
        backend.
      </p>
    </section>
  );
}
