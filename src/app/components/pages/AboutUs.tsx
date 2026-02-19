import { motion } from "motion/react";
import {
  Eye, Shield, Users, TrendingUp, Scale,
  Globe, MapPin
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const portImage = "https://images.unsplash.com/photo-1761028271811-d618692f9476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB0cmFkZSUyMHNoaXBwaW5nJTIwcG9ydCUyMGRhcmt8ZW58MXx8fHwxNzcxNTI0NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const cargoImage = "https://images.unsplash.com/photo-1759823477231-dc6a390ca69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBsYW5lJTIwYWVyaWFsJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTUyNDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "Full visibility into every shipment, every cost, every milestone. No hidden charges, no surprises."
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Consistent, on-time performance backed by a network of trusted carriers and agents worldwide."
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We don't treat clients as transactions. We build long-term relationships grounded in mutual success."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    desc: "We constantly refine our processes, technology, and service standards to deliver better outcomes."
  },
  {
    icon: Scale,
    title: "Compliance",
    desc: "Strict adherence to international trade regulations, customs laws, and safety standards across all operations."
  },
];

const corridors = [
  { region: "Asia", cities: ["Shanghai", "Singapore", "Mumbai", "Hong Kong", "Tokyo"], x: 620, y: 140 },
  { region: "Middle East", cities: ["Dubai", "Jeddah", "Doha"], x: 470, y: 170 },
  { region: "Europe", cities: ["Hamburg", "Rotterdam", "London", "Antwerp"], x: 350, y: 110 },
  { region: "Americas", cities: ["Los Angeles", "New York", "Sao Paulo", "Miami"], x: 180, y: 160 },
];

export function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-[#0A0A0B] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={cargoImage}
            alt="Cargo logistics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[rgba(10,10,11,0.9)] to-[#0A0A0B]" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              The TFFx Story
            </p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1" }}>
              About <span className="text-[#FF5F1F]">Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 bg-[#070708]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Our Mission
              </p>
              <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: "1.2" }}>
                To make logistics <span className="text-[#FF5F1F]">reliable, transparent,</span> and <span className="text-[#FF5F1F]">stress-free.</span>
              </h2>
              <p className="text-[#8A8A9A] mb-6" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                TFFx was founded with a singular vision: to democratize access to premium freight forwarding services. We believe every business — from emerging startups to global enterprises — deserves a logistics partner that operates with precision, transparency, and unwavering commitment.
              </p>
              <p className="text-[#8A8A9A]" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                Our team combines deep industry expertise with cutting-edge technology to deliver end-to-end supply chain solutions that are efficient, compliant, and always visible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={portImage}
                  alt="Global shipping port"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708] to-transparent opacity-40" />
              </div>

              {/* Stats overlay */}
              <div className="grid grid-cols-3 gap-4 -mt-12 relative z-10 px-4">
                {[
                  { value: "50+", label: "Countries" },
                  { value: "10K+", label: "Shipments" },
                  { value: "99%", label: "On-Time" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-center">
                    <p className="text-[#FF5F1F]" style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}>
                      {stat.value}
                    </p>
                    <p className="text-[#8A8A9A]" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Reach Map */}
      <section className="py-32 bg-[#0A0A0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Global Presence
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3vw, 3rem)" }}>
              Our <span className="text-[#FF5F1F]">Global Reach</span>
            </h2>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <svg viewBox="0 0 800 400" className="w-full h-auto">
              {/* Simplified world map outlines */}
              {/* Americas */}
              <path d="M80 80 L130 70 L160 80 L180 100 L170 140 L160 170 L140 200 L120 240 L130 280 L120 320 L100 300 L90 260 L80 220 L70 180 L75 140 L80 100 Z" 
                fill="rgba(226,232,240,0.04)" stroke="rgba(226,232,240,0.08)" strokeWidth="0.5" />
              <path d="M160 80 L210 60 L250 70 L260 100 L240 120 L220 140 L200 160 L185 140 L175 110 Z" 
                fill="rgba(226,232,240,0.04)" stroke="rgba(226,232,240,0.08)" strokeWidth="0.5" />

              {/* Europe */}
              <path d="M320 60 L380 50 L420 60 L440 80 L430 100 L410 120 L380 130 L350 120 L330 100 L320 80 Z" 
                fill="rgba(226,232,240,0.04)" stroke="rgba(226,232,240,0.08)" strokeWidth="0.5" />

              {/* Africa */}
              <path d="M350 140 L400 130 L430 150 L440 190 L430 240 L410 280 L380 300 L360 280 L350 240 L340 200 L340 160 Z" 
                fill="rgba(226,232,240,0.04)" stroke="rgba(226,232,240,0.08)" strokeWidth="0.5" />

              {/* Asia */}
              <path d="M440 50 L520 40 L600 50 L660 70 L700 100 L710 140 L700 170 L660 180 L620 170 L580 160 L540 130 L500 110 L460 90 L450 70 Z" 
                fill="rgba(226,232,240,0.04)" stroke="rgba(226,232,240,0.08)" strokeWidth="0.5" />

              {/* Southeast Asia / India */}
              <path d="M500 140 L540 130 L560 150 L550 180 L530 200 L510 190 L500 170 Z" 
                fill="rgba(226,232,240,0.04)" stroke="rgba(226,232,240,0.08)" strokeWidth="0.5" />

              {/* Australia */}
              <path d="M620 260 L680 250 L710 270 L700 300 L670 310 L640 300 L620 280 Z" 
                fill="rgba(226,232,240,0.04)" stroke="rgba(226,232,240,0.08)" strokeWidth="0.5" />

              {/* Trade corridors */}
              {/* Asia to Europe */}
              <motion.path
                d="M640 110 C560 80 480 70 380 90"
                fill="none" stroke="#FF5F1F" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2 }}
              />
              {/* Asia to Middle East */}
              <motion.path
                d="M620 130 C560 140 510 150 470 150"
                fill="none" stroke="#FF5F1F" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2, delay: 0.3 }}
              />
              {/* Europe to Americas */}
              <motion.path
                d="M340 90 C280 80 220 80 190 100"
                fill="none" stroke="#FF5F1F" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2, delay: 0.6 }}
              />
              {/* Middle East to Europe */}
              <motion.path
                d="M470 140 C440 120 410 110 380 100"
                fill="none" stroke="#FF5F1F" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2, delay: 0.9 }}
              />

              {/* Corridor nodes */}
              {corridors.map((corridor) => (
                <g key={corridor.region}>
                  <circle cx={corridor.x} cy={corridor.y} r="6" fill="#FF5F1F" opacity="0.8" />
                  <circle cx={corridor.x} cy={corridor.y} r="12" fill="none" stroke="#FF5F1F" strokeWidth="0.5" opacity="0.3">
                    <animate attributeName="r" from="8" to="18" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <text
                    x={corridor.x}
                    y={corridor.y - 15}
                    textAnchor="middle"
                    fill="#E2E8F0"
                    style={{ fontSize: "10px", fontFamily: "var(--font-heading)" }}
                  >
                    {corridor.region}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>

          {/* Corridor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {corridors.map((corridor, i) => (
              <motion.div
                key={corridor.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={18} className="text-[#FF5F1F]" />
                  <h4 className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>
                    {corridor.region}
                  </h4>
                </div>
                <div className="space-y-2">
                  {corridor.cities.map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#555]" />
                      <span className="text-[#8A8A9A]" style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#070708]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              What We Stand For
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3vw, 3rem)" }}>
              Core <span className="text-[#FF5F1F]">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-8 text-center group hover:border-[#FF5F1F] transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[rgba(255,95,31,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,95,31,0.2)] transition-colors">
                  <value.icon size={24} className="text-[#FF5F1F]" />
                </div>
                <h4 className="text-[#E2E8F0] mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>
                  {value.title}
                </h4>
                <p className="text-[#8A8A9A]" style={{ fontSize: "0.8rem", lineHeight: "1.7" }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3vw, 2.8rem)" }}>
              Ready to move your business <span className="text-[#FF5F1F]">forward?</span>
            </h2>
            <p className="text-[#8A8A9A] mb-10" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
              Join businesses across 50+ countries that trust TFFx for their global logistics needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/quote"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#FF5F1F] text-white rounded-lg min-h-[44px] inline-flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
              >
                Get A Quote
              </motion.a>
              <motion.a
                href="/support"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-[rgba(226,232,240,0.2)] text-[#E2E8F0] rounded-lg min-h-[44px] inline-flex items-center gap-2 hover:border-[#FF5F1F] transition-all"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
