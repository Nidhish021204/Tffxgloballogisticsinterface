import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown, Phone, Mail, Clock, Linkedin,
  Upload, Send, MessageSquare, HelpCircle
} from "lucide-react";

const faqCategories = [
  {
    category: "Booking",
    questions: [
      { q: "How do I book a shipment with TFFx?", a: "You can request a quote through our Get A Quote page, and once confirmed, our team will handle the entire booking process including carrier selection and documentation." },
      { q: "Can I modify a booking after confirmation?", a: "Yes, modifications can be made up to 48 hours before the scheduled pickup. Contact your dedicated coordinator for changes." },
      { q: "What information do I need to make a booking?", a: "You'll need origin/destination details, cargo weight and dimensions, commodity type, and your preferred transport mode." },
      { q: "How far in advance should I book?", a: "We recommend booking at least 5-7 business days in advance for ocean freight and 2-3 days for air freight to secure the best rates." },
      { q: "Can TFFx handle last-minute urgent shipments?", a: "Absolutely. Our Spot Quote service is designed for urgent and one-time shipments. We have express options across all transport modes." },
    ]
  },
  {
    category: "Tracking",
    questions: [
      { q: "How do I track my shipment?", a: "Use our Track My Shipment page and enter your unique tracking reference number (e.g., TFFx-2026-XXXX) to get real-time status updates." },
      { q: "How often are tracking updates provided?", a: "Tracking updates are provided at every milestone — pickup, warehouse receipt, customs clearance, departure, in transit, and delivery." },
      { q: "Can I receive tracking alerts via email?", a: "Yes, you can opt-in for email and SMS notifications for key milestones through your Client Portal dashboard." },
      { q: "What if my tracking shows no updates?", a: "Contact your dedicated coordinator immediately. Some transit legs (deep-sea routes) may have delayed satellite updates, but we'll confirm status directly with the carrier." },
      { q: "Can I track multiple shipments at once?", a: "Yes, the Client Portal dashboard provides a consolidated view of all your active shipments with real-time status for each." },
    ]
  },
  {
    category: "Pricing",
    questions: [
      { q: "How is freight pricing calculated?", a: "Pricing depends on cargo weight, dimensions, origin/destination, transport mode, commodity type, and current market rates. We ensure competitive, transparent pricing." },
      { q: "What's the difference between a Spot Quote and Tariff Quote?", a: "A Spot Quote is for one-time/urgent shipments at current market rates. A Tariff Quote provides locked-in rates for recurring, volume-based shipping." },
      { q: "Are there any hidden fees?", a: "No. TFFx operates on full transparency. All charges — including customs fees, handling, and surcharges — are itemized in your quote before confirmation." },
      { q: "Do you offer volume discounts?", a: "Yes, our Tariff Quote program offers volume-based discounts for businesses with regular shipping needs." },
      { q: "Can I get a quote without creating an account?", a: "Yes, you can request a Spot Quote without logging in. However, a Client Portal account gives you access to tracking, documents, and quote history." },
    ]
  },
  {
    category: "Customs",
    questions: [
      { q: "Does TFFx handle customs clearance?", a: "Yes, our team manages all customs documentation, tariff classification, and regulatory compliance to ensure smooth clearance at both origin and destination." },
      { q: "What documents are needed for customs?", a: "Typically: Commercial Invoice, Packing List, Bill of Lading/Air Waybill, Certificate of Origin, and any commodity-specific permits or licenses." },
      { q: "What happens if my cargo is held at customs?", a: "Our customs team immediately investigates and liaises with authorities to resolve holds. We keep you updated throughout the process." },
      { q: "Can you help with HS code classification?", a: "Absolutely. Our customs experts will classify your products with the correct HS codes to ensure accurate duty assessment and avoid delays." },
      { q: "Do you handle import/export licenses?", a: "We guide you through the licensing requirements and assist with applications, but the final license issuance is the responsibility of the relevant government authority." },
    ]
  },
  {
    category: "Cargo Safety",
    questions: [
      { q: "Is my cargo insured during transit?", a: "We strongly recommend cargo insurance for all shipments. Our Insurance Support team can arrange comprehensive coverage at competitive premiums." },
      { q: "How do you handle hazardous materials?", a: "We're certified to handle IMDG and IATA classified dangerous goods. Proper packaging, labeling, and documentation are managed by our specialist team." },
      { q: "What happens if cargo is damaged during transit?", a: "Report damage immediately upon delivery. Our claims team will initiate the insurance process and work with carriers to resolve the claim swiftly." },
      { q: "How is temperature-sensitive cargo managed?", a: "We use reefer containers and temperature-controlled vehicles with real-time monitoring to maintain the required temperature throughout transit." },
      { q: "Can TFFx handle oversized or heavy-lift cargo?", a: "Yes, we have experience with project cargo, break-bulk, and out-of-gauge shipments. Our team designs custom solutions for oversized loads." },
    ]
  },
];

export function Support() {
  const [activeCategory, setActiveCategory] = useState("Booking");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const activeFAQ = faqCategories.find(c => c.category === activeCategory);

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
              Intelligence & Support
            </p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1" }}>
              Support <span className="text-[#FF5F1F]">Center</span>
            </h1>
            <p className="text-[#8A8A9A] mt-6 max-w-2xl" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Find answers to common questions or reach out to our team directly. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Hub */}
      <section className="py-24 bg-[#070708]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Category Tabs */}
            <div className="lg:col-span-3">
              <div className="sticky top-28">
                <p className="text-[#8A8A9A] mb-4" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Categories
                </p>
                <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                  {faqCategories.map((cat) => (
                    <button
                      key={cat.category}
                      onClick={() => { setActiveCategory(cat.category); setOpenQuestion(null); }}
                      className={`px-4 py-3 rounded-lg text-left whitespace-nowrap min-h-[44px] transition-all ${
                        activeCategory === cat.category
                          ? "bg-[rgba(255,95,31,0.1)] text-[#FF5F1F] border border-[rgba(255,95,31,0.2)]"
                          : "text-[#8A8A9A] hover:text-[#E2E8F0] border border-transparent"
                      }`}
                      style={{ fontSize: "0.85rem", fontFamily: "var(--font-heading)" }}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-9">
              <div className="space-y-3">
                {activeFAQ?.questions.map((faq, i) => (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div
                      className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
                        openQuestion === faq.q ? "border-[rgba(255,95,31,0.3)]" : ""
                      }`}
                      style={{ borderColor: openQuestion === faq.q ? "rgba(255,95,31,0.3)" : undefined }}
                    >
                      <button
                        onClick={() => setOpenQuestion(openQuestion === faq.q ? null : faq.q)}
                        className="w-full flex items-center justify-between p-6 text-left min-h-[44px]"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <HelpCircle size={18} className="text-[#FF5F1F] flex-shrink-0 mt-0.5" />
                          <span className="text-[#E2E8F0]" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                            {faq.q}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: openQuestion === faq.q ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <ChevronDown size={18} className="text-[#8A8A9A]" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openQuestion === faq.q && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pl-[3.5rem]">
                              <p className="text-[#8A8A9A]" style={{ fontSize: "0.85rem", lineHeight: "1.8" }}>
                                {faq.a}
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
          </div>
        </div>
      </section>

      {/* Help Request Form */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <MessageSquare size={32} className="text-[#FF5F1F] mx-auto mb-4" />
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                Submit a <span className="text-[#FF5F1F]">Help Request</span>
              </h2>
            </div>

            <div className="glass rounded-2xl p-10">
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none"
                      placeholder="John Doe"
                      aria-label="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none"
                      placeholder="john@company.com"
                      aria-label="Email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Tracking Reference (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none"
                    placeholder="TFFx-2026-XXXX"
                    aria-label="Tracking reference"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>

                <div>
                  <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Describe Your Issue
                  </label>
                  <textarea
                    className="w-full bg-[rgba(226,232,240,0.05)] border border-[rgba(226,232,240,0.08)] rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-[#FF5F1F] focus:outline-none min-h-[120px] resize-y"
                    placeholder="Please describe your issue or question in detail..."
                    aria-label="Issue description"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Upload Shipment Papers
                  </label>
                  <div className="border-2 border-dashed border-[rgba(226,232,240,0.1)] rounded-xl p-8 text-center hover:border-[#FF5F1F] transition-colors cursor-pointer">
                    <Upload size={28} className="text-[#555] mx-auto mb-3" />
                    <p className="text-[#8A8A9A] mb-1" style={{ fontSize: "0.85rem" }}>
                      Drag & drop files here or click to browse
                    </p>
                    <p className="text-[#555]" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                      PDF, JPG, PNG up to 10MB
                    </p>
                    <input type="file" className="hidden" aria-label="Upload file" />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#FF5F1F] text-white rounded-lg min-h-[44px] flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
                >
                  Submit Request <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-24 bg-[#070708]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-10 text-center"
            >
              <Phone size={28} className="text-[#FF5F1F] mx-auto mb-4" />
              <p className="text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Phone
              </p>
              <a
                href="tel:+919876543210"
                className="text-[#E2E8F0] hover:text-[#FF5F1F] transition-colors"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}
              >
                +91 98765 43210
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-10 text-center"
            >
              <Mail size={28} className="text-[#FF5F1F] mx-auto mb-4" />
              <p className="text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Email
              </p>
              <a
                href="mailto:support@tffx.in"
                className="text-[#E2E8F0] hover:text-[#FF5F1F] transition-colors"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}
              >
                support@tffx.in
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-10 text-center"
            >
              <Clock size={28} className="text-[#FF5F1F] mx-auto mb-4" />
              <p className="text-[#8A8A9A] mb-2" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Business Hours
              </p>
              <p className="text-[#E2E8F0]" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>
                Mon-Fri: 9AM - 6PM IST
              </p>
              <p className="text-[#8A8A9A] mt-1" style={{ fontSize: "0.85rem" }}>
                Sat: 10AM - 2PM IST
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 glass rounded-lg hover:border-[#FF5F1F] transition-all min-h-[44px]"
              style={{ fontSize: "0.85rem" }}
            >
              <Linkedin size={18} className="text-[#FF5F1F]" /> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 glass rounded-lg hover:border-[#FF5F1F] transition-all min-h-[44px]"
              style={{ fontSize: "0.85rem" }}
            >
              <Phone size={18} className="text-[#FF5F1F]" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
