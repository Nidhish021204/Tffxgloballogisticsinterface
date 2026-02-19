import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  FileText, BookOpen, Warehouse, Shield, Truck, Package,
  Star, Eye, EyeOff, User, Building, Lock, ChevronRight,
  ArrowRight
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const heroImage = "https://images.unsplash.com/photo-1696965663045-857145758dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBmcmVpZ2h0JTIwY2luZW1hdGljfGVufDF8fHx8MTc3MTUyNDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const founderImage = "https://images.unsplash.com/photo-1615724320397-9d4db10ec2a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYW4lMjBwb3J0cmFpdCUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzcxNTI0NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const timelineSteps = [
  { icon: FileText, label: "Quote", desc: "Request a competitive freight quote" },
  { icon: BookOpen, label: "Booking", desc: "Confirm and lock your shipment" },
  { icon: Warehouse, label: "Warehouse", desc: "Cargo received at facility" },
  { icon: Shield, label: "Customs", desc: "Documentation & clearance" },
  { icon: Truck, label: "In Transit", desc: "Real-time tracking en route" },
  { icon: Package, label: "Delivery", desc: "Final mile to destination" },
];

const testimonials = [
  { name: "James Rodriguez", location: "Spain", text: "TFFx transformed our supply chain. Shipments arrive 40% faster with complete transparency.", rating: 5 },
  { name: "Ananya Mehta", location: "India", text: "The customs clearance support alone saved us weeks of delays. Exceptional service.", rating: 5 },
  { name: "Marcus Chen", location: "Singapore", text: "Real-time tracking and proactive communication make TFFx indispensable for our operations.", rating: 5 },
  { name: "Elena Volkov", location: "Germany", text: "Professional, reliable, and always ahead of schedule. The best freight partner we've worked with.", rating: 5 },
  { name: "Ahmed Al-Rashid", location: "UAE", text: "From booking to delivery, every step is handled with precision. Outstanding logistics partner.", rating: 5 },
];

export function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Container ship on ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[rgba(10,10,11,0.85)] to-[rgba(10,10,11,0.4)]" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-24">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p
                className="text-[#FF5F1F] mb-6 tracking-widest"
                style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                Global Freight Forwarding
              </p>
              <h1
                className="text-[#E2E8F0] mb-6"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
              >
                TFFx &mdash; Smart Freight<br />
                Forwarding for a<br />
                <span className="text-[#FF5F1F]">Connected World.</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-xl mb-10" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                Moving Your Business Across Borders &mdash; Faster, Safer, Smarter.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/quote">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-[#FF5F1F] text-white rounded-lg min-h-[44px] flex items-center gap-2 hover:glow-orange transition-all duration-300"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", letterSpacing: "0.05em" }}
                  >
                    Get A Quote <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/track">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-[rgba(226,232,240,0.2)] text-[#E2E8F0] rounded-lg min-h-[44px] flex items-center gap-2 hover:border-[#FF5F1F] hover:text-[#FF5F1F] transition-all duration-300"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", letterSpacing: "0.05em" }}
                  >
                    Track Shipment
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right - Login Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {!showRegister ? (
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-[#E2E8F0] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem" }}>
                    Client Portal
                  </h3>
                  <p className="text-[#8A8A9A] mb-6" style={{ fontSize: "0.85rem" }}>Access your shipments and documents</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Username / Email
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555]" />
                        <input
                          type="text"
                          className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 pl-11 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none transition-colors"
                          placeholder="Enter your email"
                          aria-label="Username or email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Password
                      </label>
                      <div className="relative">
                        <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555]" />
                        <input
                          type={showPassword ? "text" : "password"}
                          className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 pl-11 pr-11 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none transition-colors"
                          placeholder="Enter password"
                          aria-label="Password"
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#E2E8F0] min-w-[44px] min-h-[44px] flex items-center justify-center -mr-3"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-[#FF5F1F] text-white rounded-lg mt-2 min-h-[44px]"
                      style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
                    >
                      Sign In
                    </motion.button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[rgba(226,232,240,0.08)] text-center">
                    <button
                      onClick={() => setShowRegister(true)}
                      className="text-[#FF5F1F] hover:text-[#ff7a47] transition-colors min-h-[44px]"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Create an Account <ChevronRight size={14} className="inline" />
                    </button>
                  </div>
                </div>
              ) : (
                <RegisterForm onBack={() => setShowRegister(false)} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TFFx Lifecycle Timeline */}
      <section className="py-32 bg-[#0A0A0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              How It Works
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3vw, 3rem)" }}>
              The TFFx <span className="text-[#FF5F1F]">Lifecycle</span>
            </h2>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-4 min-w-[900px] px-4">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1 relative"
                >
                  <div className="glass rounded-xl p-6 text-center relative group hover:border-[#FF5F1F] transition-all duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[rgba(255,95,31,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,95,31,0.2)] transition-colors">
                      <step.icon size={24} className="text-[#FF5F1F]" />
                    </div>
                    <span
                      className="text-[#555] absolute top-4 right-4"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
                    >
                      0{i + 1}
                    </span>
                    <h4 className="text-[#E2E8F0] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>
                      {step.label}
                    </h4>
                    <p className="text-[#8A8A9A]" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-[#333]">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Desk */}
      <section className="py-32 bg-[#070708] grain">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="relative">
                <ImageWithFallback
                  src={founderImage}
                  alt="Tanishk Chettri, Founder"
                  className="w-full max-w-sm rounded-xl grayscale object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0A0A0B] to-transparent opacity-50" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <p className="text-[#FF5F1F] mb-6 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Founder's Desk
              </p>

              <div className="relative">
                <span className="text-[#FF5F1F] opacity-20" style={{ fontSize: "8rem", fontFamily: "Georgia, serif", lineHeight: "1", position: "absolute", top: "-2rem", left: "-1rem" }}>
                  &ldquo;
                </span>
                <blockquote className="relative z-10 pl-8">
                  <p
                    className="text-[#E2E8F0] mb-8"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 2.5vw, 2rem)", lineHeight: "1.5" }}
                  >
                    TFFx was built to remove the stress and uncertainty from international logistics. We believe every business, regardless of size, deserves a freight partner that treats their cargo with the urgency and care it demands.
                  </p>
                  <footer>
                    <p className="text-[#FF5F1F]" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>
                      Tanishk Chettri
                    </p>
                    <p className="text-[#8A8A9A]" style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
                      Founder, TFFx
                    </p>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-24 bg-[#0A0A0B] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#FF5F1F] mb-4 tracking-widest" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Trusted Worldwide
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3vw, 3rem)" }}>
              What Our Clients <span className="text-[#FF5F1F]">Say</span>
            </h2>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="glass rounded-xl p-8 min-w-[380px] max-w-[380px] flex-shrink-0"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={16} className="fill-[#FF5F1F] text-[#FF5F1F]" />
                  ))}
                </div>
                <p className="text-[#E2E8F0] mb-6" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}>
                    {t.name}
                  </p>
                  <p className="text-[#8A8A9A]" style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </div>
  );
}

function RegisterForm({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");

  return (
    <div className="glass rounded-2xl p-8 max-h-[80vh] overflow-y-auto">
      <button
        onClick={onBack}
        className="text-[#8A8A9A] hover:text-[#E2E8F0] mb-4 min-h-[44px]"
        style={{ fontSize: "0.85rem" }}
      >
        &larr; Back to Login
      </button>
      <h3 className="text-[#E2E8F0] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem" }}>
        Create Account
      </h3>
      <p className="text-[#8A8A9A] mb-6" style={{ fontSize: "0.85rem" }}>
        Step {step} of 3 &mdash; {step === 1 ? "Personal Details" : step === 2 ? "Business Info" : "Account Security"}
      </p>

      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              s <= step ? "bg-[#FF5F1F]" : "bg-[rgba(226,232,240,0.1)]"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <FormField label="Full Name" placeholder="John Doe" type="text" />
          <FormField label="Email Address" placeholder="john@company.com" type="email" />
          <FormField label="Phone Number" placeholder="+1 234 567 8900" type="tel" />
          <FormField label="Country" placeholder="United States" type="text" />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <FormField label="Company Name" placeholder="Acme Corp" type="text" />
          <div>
            <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Business Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["Importer", "Exporter", "Manufacturer", "Trader"].map((type) => (
                <button
                  key={type}
                  onClick={() => setBusinessType(type)}
                  className={`py-3 rounded-lg border text-center min-h-[44px] transition-all ${
                    businessType === type
                      ? "border-[#FF5F1F] text-[#FF5F1F] bg-[rgba(255,95,31,0.1)]"
                      : "border-[rgba(226,232,240,0.08)] text-[#8A8A9A] hover:border-[rgba(226,232,240,0.2)]"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <FormField label="Annual Shipment Volume" placeholder="100-500 shipments" type="text" />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <FormField label="Create Password" placeholder="Min 8 characters" type="password" />
          <FormField label="Confirm Password" placeholder="Re-enter password" type="password" />
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 accent-[#FF5F1F]" />
            <span className="text-[#8A8A9A]" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
              I agree to the Terms of Service and Privacy Policy
            </span>
          </label>
        </div>
      )}

      <div className="flex gap-3 mt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="flex-1 py-3 border border-[rgba(226,232,240,0.15)] text-[#E2E8F0] rounded-lg min-h-[44px]"
            style={{ fontSize: "0.9rem" }}
          >
            Back
          </button>
        )}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => step < 3 ? setStep(step + 1) : null}
          className="flex-1 py-3 bg-[#FF5F1F] text-white rounded-lg min-h-[44px]"
          style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
        >
          {step < 3 ? "Continue" : "Create Account"}
        </motion.button>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <div>
      <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none transition-colors"
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}
