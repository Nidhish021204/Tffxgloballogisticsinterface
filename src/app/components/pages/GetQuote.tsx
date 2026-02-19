import { useState } from "react";
import { motion } from "motion/react";
import {
  Zap, Calendar, ArrowRight, Plane, Ship, Truck, Train, Package,
  MapPin, Building, Weight, Box, AlertTriangle, ChevronLeft
} from "lucide-react";

export function GetQuote() {
  const [quoteType, setQuoteType] = useState<"spot" | "tariff" | null>(null);

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
              The Quote Engine
            </p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1" }}>
              Get A <span className="text-[#FF5F1F]">Quote</span>
            </h1>
            <p className="text-[#8A8A9A] mt-6 max-w-2xl" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Whether it's a one-time urgent shipment or a recurring logistics need, we have a solution tailored for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Selection */}
      <section className="py-24 bg-[#070708]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          {quoteType === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setQuoteType("spot")}
                  className="w-full text-left glass rounded-2xl p-10 group hover:border-[#FF5F1F] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-[rgba(255,95,31,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(255,95,31,0.2)] transition-colors">
                    <Zap size={28} className="text-[#FF5F1F]" />
                  </div>
                  <h3 className="text-[#E2E8F0] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}>
                    Spot Quote
                  </h3>
                  <p className="text-[#FF5F1F] mb-4" style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Immediate
                  </p>
                  <p className="text-[#8A8A9A]" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                    For one-time or urgent shipments. Get a competitive rate tailored to your specific cargo and route requirements.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#FF5F1F]" style={{ fontSize: "0.85rem" }}>
                    Start Quote <ArrowRight size={16} />
                  </div>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setQuoteType("tariff")}
                  className="w-full text-left glass rounded-2xl p-10 group hover:border-[#FF5F1F] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-[rgba(255,95,31,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(255,95,31,0.2)] transition-colors">
                    <Calendar size={28} className="text-[#FF5F1F]" />
                  </div>
                  <h3 className="text-[#E2E8F0] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}>
                    Tariff Quote
                  </h3>
                  <p className="text-[#FF5F1F] mb-4" style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Regular
                  </p>
                  <p className="text-[#8A8A9A]" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                    For recurring shipments. Lock in volume-based rates for consistent, predictable logistics costs across your supply chain.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#FF5F1F]" style={{ fontSize: "0.85rem" }}>
                    Start Quote <ArrowRight size={16} />
                  </div>
                </button>
              </motion.div>
            </div>
          ) : quoteType === "spot" ? (
            <SpotQuoteForm onBack={() => setQuoteType(null)} />
          ) : (
            <TariffQuoteForm onBack={() => setQuoteType(null)} />
          )}
        </div>
      </section>
    </div>
  );
}

function SpotQuoteForm({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const [transportMode, setTransportMode] = useState("");
  const [hazardous, setHazardous] = useState(false);

  const transportModes = [
    { value: "air", label: "Air", icon: Plane },
    { value: "ocean", label: "Ocean", icon: Ship },
    { value: "road", label: "Road", icon: Truck },
    { value: "rail", label: "Rail", icon: Train },
    { value: "courier", label: "Courier", icon: Package },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#8A8A9A] hover:text-[#E2E8F0] mb-8 min-h-[44px]"
        style={{ fontSize: "0.85rem" }}
      >
        <ChevronLeft size={16} /> Back to Quote Selection
      </button>

      <div className="glass rounded-2xl p-10">
        <div className="flex items-center gap-4 mb-2">
          <Zap size={20} className="text-[#FF5F1F]" />
          <h3 className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}>
            Spot Quote
          </h3>
        </div>
        <p className="text-[#8A8A9A] mb-8" style={{ fontSize: "0.85rem" }}>
          Step {step} of 3 &mdash; {step === 1 ? "Shipment Info" : step === 2 ? "Cargo Details" : "Logistics"}
        </p>

        {/* Progress */}
        <div className="flex gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <motion.div
              key={s}
              className={`h-1 flex-1 rounded-full ${s <= step ? "bg-[#FF5F1F]" : "bg-[rgba(226,232,240,0.1)]"}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: s <= step ? 1 : 1 }}
              style={{ transformOrigin: "left" }}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <QuoteField label="Origin Country / City" placeholder="Shanghai, China" icon={MapPin} />
              <QuoteField label="Destination Country / City" placeholder="Los Angeles, USA" icon={MapPin} />
            </div>
            <QuoteField label="Business / Company Name" placeholder="Acme International Corp" icon={Building} />
            <QuoteField label="Contact Email" placeholder="logistics@acme.com" icon={Building} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <QuoteField label="Gross Weight (kg)" placeholder="2,500" icon={Weight} />
              <QuoteField label="Dimensions (L x W x H cm)" placeholder="120 x 100 x 100" icon={Box} />
            </div>
            <QuoteField label="Commodity Type" placeholder="Electronics, Textiles, Machinery..." icon={Package} />
            <div>
              <label className="block text-[#8A8A9A] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Hazardous Material
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setHazardous(false)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border min-h-[44px] transition-all ${
                    !hazardous
                      ? "border-[#FF5F1F] text-[#FF5F1F] bg-[rgba(255,95,31,0.1)]"
                      : "border-[rgba(226,232,240,0.08)] text-[#8A8A9A]"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  No
                </button>
                <button
                  onClick={() => setHazardous(true)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border min-h-[44px] transition-all ${
                    hazardous
                      ? "border-[#FF5F1F] text-[#FF5F1F] bg-[rgba(255,95,31,0.1)]"
                      : "border-[rgba(226,232,240,0.08)] text-[#8A8A9A]"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  <AlertTriangle size={16} /> Yes
                </button>
              </div>
            </div>
            <QuoteField label="Number of Packages" placeholder="12" icon={Package} />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <QuoteField label="Pickup Address" placeholder="123 Industrial Zone, Shanghai" icon={MapPin} />
            <QuoteField label="Delivery Address" placeholder="456 Commerce Blvd, Los Angeles" icon={MapPin} />
            <div>
              <label className="block text-[#8A8A9A] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Transport Mode
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {transportModes.map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => setTransportMode(mode.value)}
                    className={`flex flex-col items-center gap-2 py-4 rounded-lg border min-h-[44px] transition-all ${
                      transportMode === mode.value
                        ? "border-[#FF5F1F] text-[#FF5F1F] bg-[rgba(255,95,31,0.1)]"
                        : "border-[rgba(226,232,240,0.08)] text-[#8A8A9A] hover:border-[rgba(226,232,240,0.2)]"
                    }`}
                  >
                    <mode.icon size={20} />
                    <span style={{ fontSize: "0.8rem" }}>{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <QuoteField label="Special Instructions" placeholder="Fragile cargo, temperature-controlled..." icon={Building} />
          </div>
        )}

        <div className="flex gap-4 mt-10">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 py-4 border border-[rgba(226,232,240,0.15)] text-[#E2E8F0] rounded-lg min-h-[44px]"
              style={{ fontSize: "0.9rem", fontFamily: "var(--font-heading)" }}
            >
              Previous
            </button>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => step < 3 ? setStep(step + 1) : null}
            className="flex-1 py-4 bg-[#FF5F1F] text-white rounded-lg min-h-[44px] flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
          >
            {step < 3 ? (
              <>Continue <ArrowRight size={16} /></>
            ) : (
              "Submit Quote Request"
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function TariffQuoteForm({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#8A8A9A] hover:text-[#E2E8F0] mb-8 min-h-[44px]"
        style={{ fontSize: "0.85rem" }}
      >
        <ChevronLeft size={16} /> Back to Quote Selection
      </button>

      <div className="glass rounded-2xl p-10">
        <div className="flex items-center gap-4 mb-2">
          <Calendar size={20} className="text-[#FF5F1F]" />
          <h3 className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}>
            Tariff Quote — Regular Shipping
          </h3>
        </div>
        <p className="text-[#8A8A9A] mb-10" style={{ fontSize: "0.85rem" }}>
          Lock in volume-based rates for consistent logistics costs.
        </p>

        <div className="space-y-5">
          <QuoteField label="Company Name" placeholder="Acme International Corp" icon={Building} />
          <QuoteField label="Contact Email" placeholder="logistics@acme.com" icon={Building} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <QuoteField label="Main Origin" placeholder="Shanghai, China" icon={MapPin} />
            <QuoteField label="Main Destination" placeholder="Hamburg, Germany" icon={MapPin} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Monthly Shipments
              </label>
              <select
                className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none"
                aria-label="Monthly shipments"
              >
                <option value="" className="bg-[#1A1A1D]">Select range</option>
                <option value="1-5" className="bg-[#1A1A1D]">1-5 shipments</option>
                <option value="5-20" className="bg-[#1A1A1D]">5-20 shipments</option>
                <option value="20-50" className="bg-[#1A1A1D]">20-50 shipments</option>
                <option value="50+" className="bg-[#1A1A1D]">50+ shipments</option>
              </select>
            </div>
            <div>
              <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Average Weight Per Shipment
              </label>
              <select
                className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none"
                aria-label="Average weight per shipment"
              >
                <option value="" className="bg-[#1A1A1D]">Select range</option>
                <option value="0-100" className="bg-[#1A1A1D]">0-100 kg</option>
                <option value="100-500" className="bg-[#1A1A1D]">100-500 kg</option>
                <option value="500-2000" className="bg-[#1A1A1D]">500-2,000 kg</option>
                <option value="2000+" className="bg-[#1A1A1D]">2,000+ kg (FCL)</option>
              </select>
            </div>
          </div>
          <QuoteField label="Primary Commodity" placeholder="Electronics, Auto Parts, Textiles..." icon={Package} />
          <QuoteField label="Additional Notes" placeholder="Any special requirements or routes..." icon={Building} />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-[#FF5F1F] text-white rounded-lg mt-10 min-h-[44px] flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
        >
          Submit Tariff Request <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}

function QuoteField({ label, placeholder, icon: Icon }: { label: string; placeholder: string; icon: any }) {
  return (
    <div>
      <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </label>
      <div className="relative">
        <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555]" />
        <input
          type="text"
          className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 pl-11 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none transition-colors"
          placeholder={placeholder}
          aria-label={label}
        />
      </div>
    </div>
  );
}
