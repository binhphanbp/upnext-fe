import { Zap, Sparkles, Target } from "lucide-react";

const operations = [
  {
    title: "AI viết tin tuyển dụng",
    description: "Đã cấu hình cho 17 quy trình tuyển dụng",
    icon: Sparkles,
    isActive: true,
  },
  {
    title: "Xếp hạng độ phù hợp",
    description: "Đã cấu hình cho 17 quy trình tuyển dụng",
    icon: Target,
    isActive: false,
  },
  {
    title: "Chatbot hỗ trợ",
    description: "Đã cấu hình cho 17 quy trình tuyển dụng",
    icon: Zap,
    isActive: false,
  },
];

export function AIOperationsCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Zap className="h-4 w-4 text-primary" />
          Vận hành AI
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary/80">
          Cấu hình →
        </button>
      </div>

      <div className="space-y-4">
        {operations.map((operation, index) => {
          const Icon = operation.icon;
          return (
            <div
              key={index}
              className={`rounded-lg border p-4 ${
                operation.isActive
                  ? "border-primary/20 bg-primary/5"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="mb-1 flex items-center gap-2">
                <Icon
                  className={`h-4 w-4 ${
                    operation.isActive ? "text-primary" : "text-gray-600"
                  }`}
                />
                <div className="text-sm font-semibold text-gray-900">
                  {operation.title}
                </div>
              </div>
              <div className="text-xs text-gray-600">{operation.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
