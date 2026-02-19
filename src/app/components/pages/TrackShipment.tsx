import { useState } from "react";
import { motion } from "motion/react";
import {
  Search, CheckCircle, Clock, Plane, Ship, Package,
  FileText, Download, MapPin, ArrowRight
} from "lucide-react";

const trackingStages = [
  "Booking Confirmed",
  "Cargo Picked Up",
  "At Origin Warehouse",
  "Customs Clearance (Origin)",
  "Departed Origin",
  "In Transit",
  "Arrived at Destination",
  "Customs Clearance (Dest)",
  "Delivered",
];

const mockShipment = {
  reference: "TFFx-2026-0847",
  mode: "Ocean Freight",
  commodity: "Electronics & Components",
  origin: "Shanghai, China",
  destination: "Hamburg, Germany",
  weight: "12,400 kg",
  containers: "1 x 40ft HC",
  currentStage: 5,
  eta: "March 28, 2026",
  timeline: [
    { date: "March 5, 2026", time: "09:15 AM", event: "Booking confirmed", detail: "Reference TFFx-2026-0847 created" },
    { date: "March 8, 2026", time: "02:30 PM", event: "Cargo picked up", detail: "Collected from supplier warehouse, Shanghai" },
    { date: "March 9, 2026", time: "10:00 AM", event: "Received at origin warehouse", detail: "Shanghai Free Trade Zone" },
    { date: "March 10, 2026", time: "04:45 PM", event: "Customs clearance completed", detail: "Origin customs — all documents approved" },
    { date: "March 12, 2026", time: "06:00 AM", event: "Departed Shanghai Port", detail: "Vessel: MSC ANNA, Voyage: FA621E" },
    { date: "March 19, 2026", time: "—", event: "In Transit — Indian Ocean", detail: "Current position updated via AIS" },
  ],
  documents: [
    { name: "Commercial Invoice", type: "PDF" },
    { name: "Packing List", type: "PDF" },
    { name: "Bill of Lading", type: "PDF" },
  ],
};

export function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;
    setLoading(true);
    setShowResults(false);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div>
      {/* Hero / Search */}
      <section className="py-32 bg-[#0A0A0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              The Command Center
            </p>
            <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1" }}>
              Track My <span className="text-[#FF5F1F]">Shipment</span>
            </h1>
            <p className="text-[#8A8A9A] max-w-xl mx-auto mb-12" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Enter your tracking reference number to get real-time status updates.
            </p>

            {/* Search Input */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#555]" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.1)] rounded-xl px-6 py-5 pl-14 pr-36 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none transition-colors"
                  placeholder="Enter Tracking Reference Number"
                  aria-label="Tracking reference number"
                  style={{ fontSize: "1rem", fontFamily: "var(--font-mono)" }}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleTrack}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 bg-[#FF5F1F] text-white rounded-lg min-h-[44px] flex items-center gap-2"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem" }}
                >
                  Track <ArrowRight size={14} />
                </motion.button>
              </div>
              <p className="text-[#555] mt-3" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                Try: TFFx-2026-0847
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-32 bg-[#0A0A0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {loading && (
            <div className="space-y-6">
              {/* Skeleton Loaders */}
              <div className="glass rounded-xl p-8">
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-[rgba(226,232,240,0.08)] rounded w-1/3" />
                  <div className="h-8 bg-[rgba(226,232,240,0.08)] rounded w-full" />
                  <div className="h-4 bg-[rgba(226,232,240,0.08)] rounded w-2/3" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass rounded-xl p-6">
                    <div className="animate-pulse space-y-3">
                      <div className="h-3 bg-[rgba(226,232,240,0.08)] rounded w-1/2" />
                      <div className="h-6 bg-[rgba(226,232,240,0.08)] rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Progress Bar */}
              <div className="glass rounded-2xl p-10 mb-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-[#8A8A9A] mb-1" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Shipment Status
                    </p>
                    <h3 className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem" }}>
                      {trackingStages[mockShipment.currentStage]}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[#8A8A9A]" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      ETA
                    </p>
                    <p className="text-[#FF5F1F]" style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem" }}>
                      {mockShipment.eta}
                    </p>
                  </div>
                </div>

                {/* 9-stage progress */}
                <div className="relative">
                  <div className="flex items-center justify-between relative z-10">
                    {trackingStages.map((stage, i) => (
                      <div key={stage} className="flex flex-col items-center" style={{ width: `${100 / trackingStages.length}%` }}>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                            i < mockShipment.currentStage
                              ? "bg-[#FF5F1F] border-[#FF5F1F]"
                              : i === mockShipment.currentStage
                              ? "bg-[#FF5F1F] border-[#FF5F1F] pulse-glow"
                              : "bg-[#1A1A1D] border-[rgba(226,232,240,0.15)]"
                          }`}
                        >
                          {i < mockShipment.currentStage && <CheckCircle size={10} className="text-white" />}
                          {i === mockShipment.currentStage && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <p
                          className={`mt-3 text-center hidden lg:block ${
                            i <= mockShipment.currentStage ? "text-[#E2E8F0]" : "text-[#555]"
                          }`}
                          style={{ fontSize: "0.6rem", fontFamily: "var(--font-mono)", lineHeight: "1.3" }}
                        >
                          {stage}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Progress line */}
                  <div className="absolute top-2 left-0 right-0 h-[2px] bg-[rgba(226,232,240,0.08)]">
                    <motion.div
                      className="h-full bg-[#FF5F1F]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${(mockShipment.currentStage / (trackingStages.length - 1)) * 100}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Reference", value: mockShipment.reference, icon: FileText },
                  { label: "Transport Mode", value: mockShipment.mode, icon: Ship },
                  { label: "Commodity", value: mockShipment.commodity, icon: Package },
                  { label: "Origin", value: mockShipment.origin, icon: MapPin },
                  { label: "Destination", value: mockShipment.destination, icon: MapPin },
                  { label: "Containers", value: mockShipment.containers, icon: Package },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={14} className="text-[#FF5F1F]" />
                      <p className="text-[#8A8A9A]" style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {item.label}
                      </p>
                    </div>
                    <p className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Map View */}
                <div className="glass rounded-2xl p-8">
                  <h4 className="text-[#E2E8F0] mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>
                    Route Map
                  </h4>
                  <div className="relative bg-[#0f0f12] rounded-xl overflow-hidden h-72">
                    {/* Dark vector map SVG */}
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      {/* World outline simplified */}
                      <defs>
                        <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF5F1F" />
                          <stop offset="100%" stopColor="#FF5F1F" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>

                      {/* Simplified continents */}
                      <path d="M150 120 L200 100 L260 110 L280 140 L250 180 L200 200 L160 170 Z" fill="rgba(226,232,240,0.06)" stroke="rgba(226,232,240,0.1)" strokeWidth="0.5" />
                      <path d="M280 90 L380 70 L420 80 L450 120 L460 170 L430 200 L380 210 L320 190 L290 150 Z" fill="rgba(226,232,240,0.06)" stroke="rgba(226,232,240,0.1)" strokeWidth="0.5" />
                      <path d="M340 200 L400 220 L380 290 L340 300 L320 260 Z" fill="rgba(226,232,240,0.06)" stroke="rgba(226,232,240,0.1)" strokeWidth="0.5" />
                      <path d="M500 80 L600 70 L680 100 L700 150 L680 200 L620 180 L560 130 L520 100 Z" fill="rgba(226,232,240,0.06)" stroke="rgba(226,232,240,0.1)" strokeWidth="0.5" />
                      <path d="M580 200 L640 220 L620 300 L560 280 Z" fill="rgba(226,232,240,0.06)" stroke="rgba(226,232,240,0.1)" strokeWidth="0.5" />

                      {/* Route polyline */}
                      <motion.path
                        d="M640 130 C580 100 500 80 400 100 C350 110 320 120 300 130"
                        fill="none"
                        stroke="url(#routeGrad)"
                        strokeWidth="2.5"
                        strokeDasharray="8 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />

                      {/* Origin dot - Shanghai */}
                      <circle cx="640" cy="130" r="6" fill="#FF5F1F" className="pulse-glow" />
                      <circle cx="640" cy="130" r="12" fill="none" stroke="#FF5F1F" strokeWidth="1" opacity="0.3">
                        <animate attributeName="r" from="8" to="20" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="640" y="155" textAnchor="middle" fill="#FF5F1F" style={{ fontSize: "10px", fontFamily: "var(--font-mono)" }}>Shanghai</text>

                      {/* Current position */}
                      <motion.circle
                        cx="500"
                        cy="95"
                        r="5"
                        fill="#ffffff"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />

                      {/* Destination dot - Hamburg */}
                      <circle cx="300" cy="130" r="6" fill="rgba(226,232,240,0.3)" stroke="#E2E8F0" strokeWidth="1" />
                      <text x="300" y="155" textAnchor="middle" fill="#8A8A9A" style={{ fontSize: "10px", fontFamily: "var(--font-mono)" }}>Hamburg</text>
                    </svg>
                  </div>
                </div>

                {/* Timeline Log */}
                <div className="glass rounded-2xl p-8">
                  <h4 className="text-[#E2E8F0] mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>
                    Shipment Timeline
                  </h4>
                  <div className="space-y-0">
                    {mockShipment.timeline.map((entry, i) => (
                      <div key={i} className="flex gap-4 relative">
                        {/* Vertical line */}
                        {i < mockShipment.timeline.length - 1 && (
                          <div className="absolute left-[7px] top-4 bottom-0 w-[1px] bg-[rgba(226,232,240,0.08)]" />
                        )}
                        <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 ${
                          i === mockShipment.timeline.length - 1 ? "bg-[#FF5F1F] pulse-glow" : "bg-[rgba(226,232,240,0.15)]"
                        }`} />
                        <div className="pb-6">
                          <p className="text-[#555] mb-1" style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>
                            {entry.date} &bull; {entry.time}
                          </p>
                          <p className="text-[#E2E8F0] mb-1" style={{ fontSize: "0.9rem" }}>
                            {entry.event}
                          </p>
                          <p className="text-[#8A8A9A]" style={{ fontSize: "0.8rem" }}>
                            {entry.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Document Center */}
              <div className="glass rounded-2xl p-8 mt-8">
                <h4 className="text-[#E2E8F0] mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>
                  Document Center
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockShipment.documents.map((doc) => (
                    <motion.button
                      key={doc.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-5 rounded-xl border border-[rgba(226,232,240,0.08)] hover:border-[#FF5F1F] transition-all min-h-[44px] text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[rgba(255,95,31,0.1)] flex items-center justify-center flex-shrink-0">
                        <FileText size={18} className="text-[#FF5F1F]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#E2E8F0]" style={{ fontSize: "0.85rem" }}>{doc.name}</p>
                        <p className="text-[#555]" style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>{doc.type}</p>
                      </div>
                      <Download size={16} className="text-[#8A8A9A]" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
