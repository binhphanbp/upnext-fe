"use client";

import React, { useState } from "react";
import { AreaChart, ChevronRight } from "lucide-react";

const chartData = [
  { day: "Thứ 3", app: 42, shortlist: 18 },
  { day: "Thứ 4", app: 48, shortlist: 24 },
  { day: "Thứ 5", app: 75, shortlist: 39 },
  { day: "Thứ 6", app: 92, shortlist: 47 },
  { day: "Thứ 7", app: 84, shortlist: 42 },
  { day: "Chủ nhật", app: 105, shortlist: 58 },
];

export const ApplicationsChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // SVG layout dimensions
  const width = 500;
  const height = 160;
  const paddingX = 15;
  const paddingY = 20;
  const maxY = 120; // slightly above max data point (105) for headroom

  const getX = (index: number) =>
    paddingX + (index / (chartData.length - 1)) * (width - paddingX * 2);
  const getY = (value: number) =>
    height - paddingY - (value / maxY) * (height - paddingY * 2);

  const yZero = getY(0);

  // Helper to generate smooth cubic bezier curve
  const generateLinePath = (dataKey: "app" | "shortlist") => {
    if (chartData.length === 0) return "";
    let d = `M ${getX(0)} ${getY(chartData[0]![dataKey])}`;
    for (let i = 0; i < chartData.length - 1; i++) {
      const currX = getX(i);
      const currY = getY(chartData[i]![dataKey]);
      const nextX = getX(i + 1);
      const nextY = getY(chartData[i + 1]![dataKey]);
      const cpX = (currX + nextX) / 2;
      d += ` C ${cpX} ${currY}, ${cpX} ${nextY}, ${nextX} ${nextY}`;
    }
    return d;
  };

  const generateAreaPath = (dataKey: "app" | "shortlist") => {
    const linePath = generateLinePath(dataKey);
    if (!linePath) return "";
    return `${linePath} L ${getX(chartData.length - 1)} ${yZero} L ${getX(0)} ${yZero} Z`;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between h-full relative group">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <AreaChart className="h-4 w-4 text-blue-500" />
            </div>
            <h2 className="text-base font-bold text-gray-900">
              Đơn ứng tuyển & Lọc hồ sơ
            </h2>
          </div>
          <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:text-emerald-700 transition-colors cursor-pointer group/btn">
            Chi tiết
            <ChevronRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Legend */}
        <div className="flex gap-5 mb-1 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-[3px] shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
            <span className="text-gray-500">Ứng tuyển</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-[3px] shadow-[0_0_8px_rgba(16,167,120,0.4)]"></div>
            <span className="text-gray-500">Lọc hồ sơ</span>
          </div>
        </div>

        {/* SVG Chart Area */}
        <div className="flex flex-col justify-between h-[190px] mt-2 relative">
          <svg
            className="w-full h-full overflow-visible"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
          >
            <defs>
              {/* Blue Gradient for Applications */}
              <linearGradient id="colorApp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>

              {/* Green Gradient for Shortlist */}
              <linearGradient id="colorShortlist" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10a778" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#10a778" stopOpacity={0} />
              </linearGradient>

              {/* Hover Line Gradient */}
              <linearGradient id="hoverLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity={0} />
                <stop offset="50%" stopColor="#94a3b8" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity={0} />
              </linearGradient>

              {/* Drop Shadows for lines */}
              <filter id="shadowApp" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="4"
                  floodColor="#3b82f6"
                  floodOpacity="0.25"
                />
              </filter>
              <filter id="shadowShortlist" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="4"
                  floodColor="#10a778"
                  floodOpacity="0.25"
                />
              </filter>
            </defs>

            {/* Helper grid lines */}
            <line
              x1="0"
              y1={getY(25)}
              x2={width}
              y2={getY(25)}
              stroke="#f1f5f9"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            <line
              x1="0"
              y1={getY(75)}
              x2={width}
              y2={getY(75)}
              stroke="#f1f5f9"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            <line
              x1="0"
              y1={yZero}
              x2={width}
              y2={yZero}
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />

            {/* Application Area & Line (Blue) */}
            <path
              d={generateAreaPath("app")}
              fill="url(#colorApp)"
              className="transition-all duration-300"
            />
            <path
              d={generateLinePath("app")}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#shadowApp)"
              className="transition-all duration-300"
            />

            {/* Shortlist Area & Line (Green) */}
            <path
              d={generateAreaPath("shortlist")}
              fill="url(#colorShortlist)"
              className="transition-all duration-300"
            />
            <path
              d={generateLinePath("shortlist")}
              fill="none"
              stroke="#10a778"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#shadowShortlist)"
              className="transition-all duration-300"
            />

            {/* Interactive Data Points & Hover Lines */}
            {chartData.map((d, i) => (
              <g key={`points-${i}`}>
                {/* Vertical hover guide line */}
                {hoveredIndex === i && (
                  <line
                    x1={getX(i)}
                    y1={getY(maxY)}
                    x2={getX(i)}
                    y2={yZero}
                    stroke="url(#hoverLine)"
                    strokeWidth="2"
                    className="pointer-events-none"
                  />
                )}

                {/* Application Dot */}
                <circle
                  cx={getX(i)}
                  cy={getY(d.app)}
                  r={hoveredIndex === i ? "6" : "0"}
                  fill="#ffffff"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  className="transition-all duration-200 shadow-sm"
                  style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                />
                {/* Shortlist Dot */}
                <circle
                  cx={getX(i)}
                  cy={getY(d.shortlist)}
                  r={hoveredIndex === i ? "6" : "0"}
                  fill="#ffffff"
                  stroke="#10a778"
                  strokeWidth="3"
                  className="transition-all duration-200 shadow-sm"
                  style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                />
              </g>
            ))}

            {/* Invisible Hover Hit Areas */}
            {chartData.map((_, i) => {
              const xPos = getX(i);
              const segmentWidth = width / chartData.length;
              return (
                <rect
                  key={`hover-${i}`}
                  x={xPos - segmentWidth / 2}
                  y="0"
                  width={segmentWidth}
                  height={height}
                  fill="transparent"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-crosshair"
                />
              );
            })}
          </svg>

          {/* Interactive Tooltip */}
          {hoveredIndex !== null && chartData[hoveredIndex] && (
            <div
              className="absolute z-10 backdrop-blur-md bg-gray-900/95 border border-gray-700 text-white p-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] text-xs flex flex-col gap-1.5 pointer-events-none transition-all duration-150 ease-out"
              style={{
                left: `${(getX(hoveredIndex) / width) * 100}%`,
                top: `${(getY(chartData[hoveredIndex]!.app) / height) * 100}%`,
                transform: "translate(-50%, -120%)",
                minWidth: "140px",
              }}
            >
              <div className="font-semibold text-[13px] mb-1 text-gray-100 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                {chartData[hoveredIndex]!.day}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Ứng tuyển</span>
                <span className="font-bold text-blue-400 text-sm">
                  {chartData[hoveredIndex]!.app}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Lọc hồ sơ</span>
                <span className="font-bold text-emerald-400 text-sm">
                  {chartData[hoveredIndex]!.shortlist}
                </span>
              </div>
              <div className="h-px bg-gray-700/60 my-1"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Tỷ lệ lọc</span>
                <span className="font-bold text-white text-[13px] bg-white/10 px-1.5 py-0.5 rounded">
                  {Math.round(
                    (chartData[hoveredIndex]!.shortlist / chartData[hoveredIndex]!.app) *
                      100,
                  )}
                  %
                </span>
              </div>
              {/* Tooltip caret */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-gray-900/95 border-b border-r border-gray-700 rotate-45 rounded-sm"></div>
            </div>
          )}
        </div>
      </div>

      {/* X Axis Labels */}
      <div className="flex justify-between text-[11px] font-bold text-gray-400 mt-2 px-1 uppercase tracking-wider">
        {chartData.map((d, i) => (
          <span
            key={`label-${i}`}
            className={`transition-all duration-200 cursor-default ${
              hoveredIndex === i ? "text-gray-800 scale-110" : ""
            }`}
            style={{ transformOrigin: "center" }}
          >
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
};
