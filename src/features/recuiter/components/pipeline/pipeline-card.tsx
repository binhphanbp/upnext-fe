import React from "react";
import { GripVertical } from "lucide-react";

export interface PipelineCardProps {
  title: string;
  subtitle: string;
  metaIcon: React.ElementType;
  metaText: string;
  status: string;
  score: number;
}

export const PipelineCard = ({
  title,
  subtitle,
  metaIcon: MetaIcon,
  metaText,
  status,
  score,
}: PipelineCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm mb-3">
      <div className="flex justify-between items-start mb-1 gap-2">
        <h4 className="font-semibold text-xs text-gray-900 leading-snug">{title}</h4>
        <div className="bg-green-50 text-green-600 text-[10px] font-semibold px-1.5 py-0.5 rounded shrink-0">
          {score}
        </div>
      </div>
      <p className="text-[10px] text-gray-500 mb-3">{subtitle}</p>
      <div className="flex items-center justify-between mt-auto gap-1">
        <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium shrink-0">
          <MetaIcon className="w-3 h-3" />
          <span className="whitespace-nowrap">{metaText}</span>
        </div>
        <div className="flex items-center gap-1 min-w-0">
          <span className="bg-gray-100 text-gray-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-md whitespace-nowrap overflow-hidden text-ellipsis">
            {status}
          </span>
          <button className="text-gray-300 hover:text-gray-500 p-0.5 border border-gray-100 rounded-md transition-colors shrink-0">
            <GripVertical className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
