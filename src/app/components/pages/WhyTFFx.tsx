import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Route, FileCheck, Warehouse, Package, Shield, Eye,
  ChevronDown, MessageSquare, Headphones, Radio
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const warehouseImage = "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbmR1c3RyaWFsJTIwbG9naXN0aWNzJTIwc2hpcHBpbmd8ZW58MXx8fHwxNzcxNTI0NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const capabilities = [
  {
    icon: Route,
    title: "Transportation Planning",
    summary: "Optimal routes, minimal delays",
    detail: "We design the most efficient shipping routes by analyzing carrier networks, transit times, and cost structures. Our planning ensures your cargo takes the fastest, most cost-effective path to its destination — whether by air, ocean, road, or rail."
  },
  {
    icon: FileCheck,
    title: "Customs Documentation",
    summary: "Full compliance, zero friction",
    detail: "Our team handles all customs paperwork, tariff classifications, and regulatory compliance so you don't have to. We ensure every document — from commercial invoices to certificates of origin — is accurate and submitted on time to prevent delays at borders."
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    summary: "Secure storage, strategic locations",
    detail: "Access our network of bonded and non-bonded warehouses across key trade corridors. We offer short-term and long-term storage, inventory management, and pick-and-pack services to support your supply chain."
  },
  {
    icon: Package,
    title: "Cargo Consolidation",
    summary: "Combine shipments, reduce costs",
    detail: "Our consolidation services combine multiple smaller shipments into a single container, significantly reducing per-unit shipping costs. We manage the logistics so you benefit from bulk shipping rates without the bulk."
  },
  {
    icon: Shield,
    title: "Insurance Support",
    summary: "Comprehensive cargo protection",
    detail: "We help you secure comprehensive cargo insurance that covers loss, damage, and delay. Our partnerships with leading marine and cargo insurers mean competitive premiums and fast claims processing when you need it most."
  },
  {
    icon: Eye,
    title: "End-to-End Visibility",
    summary: "Track everything, anytime",
    detail: "From the moment your cargo is picked up to the instant it's delivered, our platform gives you real-time visibility. Receive proactive updates, milestone notifications, and detailed status reports — all accessible from your dashboard."
  },
];

export function WhyTFFx() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-[#0A0A0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              The Strategic Edge
            </p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1" }}>
              Why <span className="text-[#FF5F1F]">TFFx</span>
            </h1>
            <p className="text-[#8A8A9A] mt-6 max-w-2xl" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              We don't just ship cargo — we architect supply chains. Here's what makes TFFx the premium choice for businesses that demand reliability, speed, and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capability Grid */}
      <section className="py-24 bg-[#070708]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className={`glass rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group ${
                    expandedIndex === i ? "border-[#FF5F1F]" : ""
                  }`}
                  style={{ borderColor: expandedIndex === i ? "#FF5F1F" : undefined }}
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <div className="p-8 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(255,95,31,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(255,95,31,0.2)] transition-colors">
                      <cap.icon size={22} className="text-[#FF5F1F]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>
                          {cap.title}
                        </h3>
                        <motion.div
                          animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={18} className="text-[#8A8A9A]" />
                        </motion.div>
                      </div>
                      <p className="text-[#8A8A9A] mt-1" style={{ fontSize: "0.85rem" }}>
                        {cap.summary}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-0 pl-[5.25rem]">
                          <p className="text-[#8A8A9A]" style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>
                            {cap.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Promise */}
      <section className="py-32 bg-[#0A0A0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image & Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <ImageWithFallback
                  src={warehouseImage}
                  alt="Logistics warehouse operations"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] to-transparent opacity-60" />
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3vw, 2.8rem)", lineHeight: "1.2" }}>
                Proactive<br />
                <span className="text-[#FF5F1F]">Communication</span>
              </h2>
              <p className="text-[#8A8A9A] mt-4 max-w-md" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                We believe in radical transparency. You'll always know where your cargo is and what's happening next.
              </p>
            </motion.div>

            {/* Right - Promise Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  icon: Radio,
                  title: "Real-Time Tracking",
                  desc: "GPS-enabled tracking across all transport modes. Know exactly where your cargo is — port, warehouse, or in transit — at any moment."
                },
                {
                  icon: Headphones,
                  title: "Dedicated Coordinators",
                  desc: "Every client is assigned a personal logistics coordinator who understands your business and handles your shipments end-to-end."
                },
                {
                  icon: MessageSquare,
                  title: "Instant Alerts & Updates",
                  desc: "Receive proactive notifications at every milestone — from pickup to customs clearance to final delivery."
                },
              ].map((item, i) => (
                <div key={item.title} className="glass rounded-xl p-6 flex gap-5 group hover:border-[#FF5F1F] transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(255,95,31,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(255,95,31,0.2)] transition-colors">
                    <item.icon size={22} className="text-[#FF5F1F]" />
                  </div>
                  <div>
                    <h4 className="text-[#E2E8F0] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>
                      {item.title}
                    </h4>
                    <p className="text-[#8A8A9A]" style={{ fontSize: "0.85rem", lineHeight: "1.7" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="glass rounded-xl p-8 mt-8 border-[#FF5F1F]" style={{ borderColor: "#FF5F1F" }}>
                <p
                  className="text-[#E2E8F0] text-center"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", lineHeight: "1.5" }}
                >
                  No <span className="text-[#FF5F1F]">&lsquo;radio silence&rsquo;</span> during urgent situations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
