import React from "react";
import { Calendar } from "lucide-react";

export const PipelineLogic = () => {
  return (
    <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-5 mt-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <h3 className="font-bold text-gray-900 text-sm">Logic xếp lịch phỏng vấn</h3>
        </div>
        <a href="#" className="text-primary text-sm font-semibold hover:underline">
          Xem lịch &gt;
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-1">Giới hạn vòng lặp</h4>
          <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
          <p className="text-xs text-gray-500">
            NTD gửi -&gt; Ứng viên đổi lịch -&gt; NTD gửi lại
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-1">Chờ phản hồi</h4>
          <div className="text-2xl font-bold text-gray-900 mb-1">6</div>
          <p className="text-xs text-gray-500">Tự động nhắc qua email sau 24h</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-1">
            Bị từ chối do quá hạn
          </h4>
          <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
          <p className="text-xs text-gray-500">Không có thay đổi sau 7 ngày</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-1">Đồng bộ lịch</h4>
          <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
          <p className="text-xs text-gray-500">Sẵn sàng cho Google/Outlook</p>
        </div>
      </div>
    </div>
  );
};
