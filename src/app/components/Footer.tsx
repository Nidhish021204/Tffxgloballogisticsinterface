import { Link } from "react-router";
import { Linkedin, Phone, Mail } from "lucide-react";
import logo from "../../assests/ChatGPT Image Jan 31, 2026, 01_57_52 AM.png";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(226,232,240,0.06)] bg-[#070708]" style={{ fontFamily: "var(--font-body)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="TFFx" className="h-10 w-auto bg-white rounded-sm px-2 py-1 mb-4" />
            <p className="text-[#8A8A9A] mt-4" style={{ fontSize: "0.85rem", lineHeight: "1.7" }}>
              Smart Freight Forwarding for a Connected World. Moving your business across borders — faster, safer, smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E2E8F0] mb-6 tracking-wider" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Why TFFx", to: "/why-tffx" },
                { label: "Get A Quote", to: "/quote" },
                { label: "Track Shipment", to: "/track" },
                { label: "Support", to: "/support" },
                { label: "About Us", to: "/about" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#8A8A9A] hover:text-[#FF5F1F] transition-colors"
                  style={{ fontSize: "0.85rem" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#E2E8F0] mb-6 tracking-wider" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-[#8A8A9A] hover:text-[#FF5F1F] transition-colors" style={{ fontSize: "0.85rem" }}>
                <Phone size={16} /> +91 98765 43210
              </a>
              <a href="mailto:support@tffx.in" className="flex items-center gap-3 text-[#8A8A9A] hover:text-[#FF5F1F] transition-colors" style={{ fontSize: "0.85rem" }}>
                <Mail size={16} /> support@tffx.in
              </a>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-[#E2E8F0] mb-6 tracking-wider" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Business Hours
            </h4>
            <p className="text-[#8A8A9A] mb-1" style={{ fontSize: "0.85rem" }}>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
            <p className="text-[#8A8A9A] mb-6" style={{ fontSize: "0.85rem" }}>Sat: 10:00 AM - 2:00 PM IST</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[rgba(226,232,240,0.1)] flex items-center justify-center text-[#8A8A9A] hover:text-[#FF5F1F] hover:border-[#FF5F1F] transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[rgba(226,232,240,0.1)] flex items-center justify-center text-[#8A8A9A] hover:text-[#FF5F1F] hover:border-[#FF5F1F] transition-all" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(226,232,240,0.06)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8A8A9A]" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
            &copy; 2026 TFFx - The Freight Forwarder. All rights reserved.
          </p>
          <p className="text-[#555]" style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>
            Built with precision. Delivered with authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
