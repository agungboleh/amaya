"use client";

import { useState } from "react";
import {
  Ri24HoursLine,
  RiMailLine,
  RiMailSendLine,
  RiMapPinLine,
} from "react-icons/ri";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ContactAnimation from "../scroll-animation/ContactAnimation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactSection() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const toCapitalizedCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "fullName" || name === "company") {
      setFormData({ ...formData, [name]: toCapitalizedCase(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      if (!executeRecaptcha) {
        setStatus({
          type: "error",
          message: "reCAPTCHA belum siap. Coba muat ulang halaman.",
        });
        setLoading(false);
        return;
      }
      const recaptchaToken = await executeRecaptcha("contact_form");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Gagal mengirim pesan.");
      }
      setStatus({
        type: "success",
        message: "Pesan berhasil terkirim! Tim kami akan segera merespons.",
      });
      setFormData({ fullName: "", email: "", company: "", message: "" });
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Terjadi kesalahan pada server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-white scroll-mt-20 py-14 md:py-20 overflow-hidden"
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <SectionHeading
                label="Get In Touch"
                title={
                  <>
                    Contact <span className="text-brand-red">Us</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-4">
            <div>
              <p className="font-bold text-xl sm:text-2xl mb-4 text-brand-base">
                Ready to Scale Your Business?
              </p>
              <p className="text-brand-base/70 text-base md:text-lg leading-relaxed mb-6 md:mb-4">
                Whether you need a robust enterprise architecture, an
                intelligent AI integration, or a dedicated engineering team, we
                are ready to help. Drop us a message detailing your technical
                challenges, and our lead engineers will get back to you with a
                strategic consultation.
              </p>
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 bg-brand-base/10 rounded-full flex items-center justify-center">
                    <RiMailLine className="text-brand-base/70 text-sm" />
                  </div>
                  <span className="text-brand-base/70 break-all sm:break-normal">
                    hello@amayaperdana.id
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 bg-brand-base/10 rounded-full flex items-center justify-center">
                    <RiMapPinLine className="text-brand-base/70 text-sm" />
                  </div>
                  <span className="text-brand-base/70 break-all sm:break-normal">
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-caption text-brand-base/70">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                Our engineers respond within
                <Ri24HoursLine className="text-brand-red text-2xl" />
                <span className="font-bold text-brand-base/70">
                  24 business hours
                </span>
              </div>
              <div className="hidden lg:block absolute top-12 left-44 w-120 h-157.5 pointer-events-none z-1">
                <ContactAnimation />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-base/10 rounded-2xl -rotate-2 scale-102 z-0 opacity-30" />
              <div className="relative z-10 p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#f7f6f3] shadow-lg border-2 border-brand-base/10">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 md:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                        Full Name *
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-3 sm:p-4 outline-none mt-2 focus:placeholder-transparent"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                        Work Email *
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-3 sm:p-4 outline-none mt-2 focus:placeholder-transparent"
                        placeholder="john@company.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                      Company Name *
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-3 sm:p-4 outline-none mt-2 focus:placeholder-transparent"
                      placeholder="Your Company"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-3 sm:p-4 outline-none resize-none mt-2 focus:placeholder-transparent"
                      placeholder="Tell us about your project, technical challenges, and what you'd like to build..."
                      rows={5}
                    />
                  </div>
                  {status && (
                    <div
                      className={`p-4 rounded-lg text-sm font-medium ${
                        status.type === "success"
                          ? "bg-green-100 text-green-800"
                          : "bg-brand-red/10 text-brand-red"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full mt-4"
                    size="lg"
                    icon={RiMailSendLine}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Request a Consultation"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
