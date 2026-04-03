"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { fadeInUp } from "@/lib/animations";

const serviceOptions = [
  "Immigration Services",
  "Business Services",
  "Fingerprinting Services",
  "Insurance & Taxes",
  "Notary Services",
  "Apostille Certification",
  "Tax Preparation",
];

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#B8960C" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" stroke="#B8960C" strokeWidth="1.5" />
      </svg>
    ),
    label: "Visit Us",
    value: "123 Main Street, Suite 200, Anytown, ST 12345",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="#B8960C" strokeWidth="1.5" />
      </svg>
    ),
    label: "Call Us",
    value: "(555) 123-4567",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M22 6l-10 7L2 6" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email Us",
    value: "info@trustpointconsulting.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Hours",
    value: "Mon – Fri 9AM – 6PM · Sat 10AM – 4PM",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact info stagger
      gsap.from(".contact-item", {
        x: -40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Map fade in
      gsap.from(".contact-map", {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-map",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-y section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column — Contact Info */}
          <div>
            <motion.span
              className="inline-block font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.span>

            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-brand-black leading-tight mb-3"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>

            <motion.p
              className="font-body text-base text-brand-black/60 mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Visit us, call us, or fill out the form and we&apos;ll reach out
              within 24 hours.
            </motion.p>

            {/* Contact items */}
            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="contact-item flex items-start gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-brand-gold font-semibold mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-brand-black/70">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <motion.a
              href="#"
              className="contact-item inline-flex items-center gap-3 bg-brand-gold/10 px-5 py-3 rounded-full mb-8"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(184, 150, 12, 0.15)" }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" fill="#B8960C" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-body text-sm font-semibold text-brand-gold">
                Chat on WhatsApp
              </span>
            </motion.a>

          </div>

          {/* Right Column — Form */}
          <div className="bg-white border border-brand-divider rounded-2xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-2xl font-bold text-brand-black mb-6">
                    Book Your Consultation
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div className="relative">
                      <motion.input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full font-body text-sm border border-brand-divider rounded-lg px-4 py-3 text-brand-black placeholder:text-brand-black/30 transition-all"
                        whileFocus={{ borderColor: "#B8960C", boxShadow: "0 0 0 3px rgba(184, 150, 12, 0.1)" }}
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <motion.input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full font-body text-sm border border-brand-divider rounded-lg px-4 py-3 text-brand-black placeholder:text-brand-black/30 transition-all"
                        whileFocus={{ borderColor: "#B8960C", boxShadow: "0 0 0 3px rgba(184, 150, 12, 0.1)" }}
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <motion.input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full font-body text-sm border border-brand-divider rounded-lg px-4 py-3 text-brand-black placeholder:text-brand-black/30 transition-all"
                        whileFocus={{ borderColor: "#B8960C", boxShadow: "0 0 0 3px rgba(184, 150, 12, 0.1)" }}
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full font-body text-sm border border-brand-divider rounded-lg px-4 py-3 text-brand-black appearance-none bg-white cursor-pointer focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10 transition-all"
                      >
                        <option value="" disabled>
                          Service Needed
                        </option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-brand-black/40"
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Preferred Date */}
                    <div className="relative">
                      <motion.input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full font-body text-sm border border-brand-divider rounded-lg px-4 py-3 text-brand-black transition-all"
                        whileFocus={{ borderColor: "#B8960C", boxShadow: "0 0 0 3px rgba(184, 150, 12, 0.1)" }}
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <motion.textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full font-body text-sm border border-brand-divider rounded-lg px-4 py-3 text-brand-black placeholder:text-brand-black/30 resize-none transition-all"
                        whileFocus={{ borderColor: "#B8960C", boxShadow: "0 0 0 3px rgba(184, 150, 12, 0.1)" }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      className="relative overflow-hidden w-full bg-brand-gold text-white font-body font-semibold py-3.5 rounded-lg text-base"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 24px rgba(184, 150, 12, 0.35)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Send Message</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>

                    <p className="font-body text-xs text-center text-brand-black/40">
                      We respond within 24 hours · Your information is 100% confidential
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  {/* Gold checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
                    className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mb-6"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>

                  <h3 className="font-display text-2xl font-bold text-brand-black mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-body text-base text-brand-black/60 mb-6 max-w-sm">
                    Thank you for reaching out. A TrustPoint specialist will
                    contact you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", service: "", date: "", message: "" });
                    }}
                    className="font-body text-sm text-brand-gold font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
