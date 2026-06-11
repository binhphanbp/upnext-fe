import React from "react";
import { Clock } from "lucide-react";
import { PipelineCard } from "./pipeline-card";

export const PipelineBoard = () => {
  return (
    <div className="flex-1 overflow-x-auto overflow-y-hidden mb-6 min-h-0">
      <div className="flex gap-4 h-full pb-4">
        {/* Column 1: Applied */}
        <div className="flex-1 min-w-[200px] flex flex-col min-h-0 bg-blue-50/50 border border-blue-100 rounded-xl p-2">
          <div className="flex items-center justify-between px-2 py-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <h3 className="font-semibold text-blue-700 text-sm">Ứng tuyển</h3>
            </div>
            <span className="font-semibold text-gray-900 text-sm">6</span>
          </div>
          <div className="flex-1 overflow-y-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <PipelineCard
              title="React Lead - 31 CV"
              subtitle="Nguyen Minh Khoa"
              metaIcon={Clock}
              metaText="SLA 1 ngày"
              status="Cần đánh giá"
              score={96}
            />
            <PipelineCard
              title="DevOps - 22 CV"
              subtitle="Pham Quoc Viet"
              metaIcon={Clock}
              metaText="SLA 2 ngày"
              status="Rất phù hợp"
              score={89}
            />
            <PipelineCard
              title="SDET - 18 CV"
              subtitle="Le Thu Ha"
              metaIcon={Clock}
              metaText="SLA 3 ngày"
              status="Cần đánh giá"
              score={84}
            />
            <PipelineCard
              title="Data Engineer - 14 CV"
              subtitle="Do Minh Quan"
              metaIcon={Clock}
              metaText="SLA 4 ngày"
              status="Đang lọc"
              score={82}
            />
            <PipelineCard
              title="AI Product - 9 CV"
              subtitle="Mai Thanh Truc"
              metaIcon={Clock}
              metaText="SLA hôm nay"
              status="Mới"
              score={91}
            />
            <PipelineCard
              title="Mobile Lead - 11 CV"
              subtitle="Hoang Gia Bao"
              metaIcon={Clock}
              metaText="SLA 5 ngày"
              status="Cần đánh giá"
              score={78}
            />
          </div>
        </div>

        {/* Column 2: Shortlisted */}
        <div className="flex-1 min-w-[200px] flex flex-col min-h-0 bg-purple-50/50 border border-purple-100 rounded-xl p-2">
          <div className="flex items-center justify-between px-2 py-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <h3 className="font-semibold text-purple-700 text-sm">Lọc hồ sơ</h3>
            </div>
            <span className="font-semibold text-gray-900 text-sm">4</span>
          </div>
          <div className="flex-1 overflow-y-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <PipelineCard
              title="Bao Anh - Node.js"
              subtitle="Tran Bao Anh"
              metaIcon={Clock}
              metaText="SLA 1 ngày"
              status="Rất phù hợp"
              score={92}
            />
            <PipelineCard
              title="Khoa - React Lead"
              subtitle="Nguyen Minh Khoa"
              metaIcon={Clock}
              metaText="SLA hôm nay"
              status="Lên lịch"
              score={96}
            />
            <PipelineCard
              title="Viet - DevOps"
              subtitle="Pham Quoc Viet"
              metaIcon={Clock}
              metaText="SLA 3 ngày"
              status="Cần đánh giá"
              score={89}
            />
            <PipelineCard
              title="Truc - AI Product"
              subtitle="Mai Thanh Truc"
              metaIcon={Clock}
              metaText="SLA 2 ngày"
              status="Hồ sơ"
              score={91}
            />
          </div>
        </div>

        {/* Column 3: Interview */}
        <div className="flex-1 min-w-[200px] flex flex-col min-h-0 bg-orange-50/50 border border-orange-100 rounded-xl p-2">
          <div className="flex items-center justify-between px-2 py-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <h3 className="font-semibold text-orange-600 text-sm">Phỏng vấn</h3>
            </div>
            <span className="font-semibold text-gray-900 text-sm">3</span>
          </div>
          <div className="flex-1 overflow-y-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <PipelineCard
              title="Khoa - Fri 09:00"
              subtitle="Nguyen Minh Khoa"
              metaIcon={Clock}
              metaText="Vòng 1/2"
              status="Đã xác nhận"
              score={96}
            />
            <PipelineCard
              title="Bao Anh - Tue 14:00"
              subtitle="Tran Bao Anh"
              metaIcon={Clock}
              metaText="Vòng 1/2"
              status="Đang chờ"
              score={92}
            />
            <PipelineCard
              title="Viet - Thu 10:30"
              subtitle="Pham Quoc Viet"
              metaIcon={Clock}
              metaText="Vòng 2/2"
              status="Vòng cuối"
              score={89}
            />
          </div>
        </div>

        {/* Column 4: Offer */}
        <div className="flex-1 min-w-[200px] flex flex-col min-h-0 bg-green-50/50 border border-green-100 rounded-xl p-2">
          <div className="flex items-center justify-between px-2 py-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <h3 className="font-semibold text-green-700 text-sm">Đề nghị</h3>
            </div>
            <span className="font-semibold text-gray-900 text-sm">3</span>
          </div>
          <div className="flex-1 overflow-y-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <PipelineCard
              title="Frontend Lead"
              subtitle="Nguyen Minh Khoa"
              metaIcon={Clock}
              metaText="Đã gửi Offer"
              status="Đang thương lượng"
              score={96}
            />
            <PipelineCard
              title="Cloud Engineer"
              subtitle="Pham Quoc Viet"
              metaIcon={Clock}
              metaText="Đang xem Offer"
              status="Đã duyệt"
              score={89}
            />
            <PipelineCard
              title="QA Automation"
              subtitle="Le Thu Ha"
              metaIcon={Clock}
              metaText="Đang chờ"
              status="Đang soạn thảo"
              score={84}
            />
          </div>
        </div>

        {/* Column 5: Hired */}
        <div className="flex-1 min-w-[200px] flex flex-col min-h-0 bg-teal-50/50 border border-teal-100 rounded-xl p-2">
          <div className="flex items-center justify-between px-2 py-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <h3 className="font-semibold text-teal-700 text-sm">Đã tuyển</h3>
            </div>
            <span className="font-semibold text-gray-900 text-sm">2</span>
          </div>
          <div className="flex-1 overflow-y-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <PipelineCard
              title="Backend Platform"
              subtitle="Tran Bao Anh"
              metaIcon={Clock}
              metaText="Bắt đầu T2"
              status="Tiếp nhận"
              score={92}
            />
            <PipelineCard
              title="Frontend Architect"
              subtitle="Nguyen Minh Khoa"
              metaIcon={Clock}
              metaText="Đã ký HĐ"
              status="Hoàn tất"
              score={96}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
