import React, { useState, useMemo } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

// Helpers
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, message }) => {
  const e = {};
  if (!name.trim()) e.name = "Please enter a name.";
  if (!email.trim()) e.email = "Please enter an email.";
  else if (!emailRe.test(email.trim())) e.email = "Please enter a valid email.";
  if (!message.trim()) e.message = "Please enter a message.";
  return e;
};

const fieldBase =
  "w-full rounded-md bg-[#0b0f14] text-white placeholder-white/40 " +
  "focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40 " +
  "px-3 py-2.5 text-sm outline-none transition";

const errorBorder = "border border-red-500";

export const Message = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (submitted) setErrors(validate({ ...form, [name]: value }));
  };

  const nameInvalid = submitted && !!errors.name;
  const emailInvalid = submitted && !!errors.email;
  const messageInvalid = submitted && !!errors.message;

  const contactButtons = useMemo(
    () => [
      {
        icon: (
          <FaMapMarkerAlt
            className="text-black text-xl sm:text-2xl"
            draggable={false}
          />
        ),
        text: "166 Sevenoaks, BT47 6BF",
        onClick: () => {
          window.open(
            "https://www.google.com/maps/search/?api=1&query=166+Sevenoaks,+Derry~Londonderry,+Northern+Ireland,+BT47+6BF",
            "_blank"
          );
        },
      },
      {
        icon: (
          <FaEnvelope
            className="text-black text-xl sm:text-2xl"
            draggable={false}
          />
        ),
        text: "info@jj2consultancy.co.uk",
        onClick: () => {
          window.open("mailto:info@jj2consultancy.co.uk", "_blank");
        },
      },
      {
        icon: (
          <FaPhone
            className="text-black text-xl sm:text-2xl"
            draggable={false}
          />
        ),
        text: "+44 (0) 73 6745 7334",
        onClick: () => {
          window.open("tel:+447367457334", "_self");
        },
      },
    ],
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setStatus(null);

    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setStatus({ type: "error", message: "Please fix the errors below." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://jj2-alpha.vercel.app/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: "", // honeypot
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Send failed");

      setStatus({
        type: "success",
        message: "Message sent! We’ll get back to you shortly.",
      });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setSubmitted(false);
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="
        w-full min-h-screen bg-[#040608]
        px-4 sm:px-6 md:px-8 lg:px-10
        flex items-start justify-center
        pt-16 sm:pt-8 md:pt-10
        select-none
      "
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="w-full max-w-5xl py-8 sm:py-12" draggable={false}>
        <div
          className="grid grid-cols-1 gap-8 sm:gap-10 place-items-center md:place-items-center"
          draggable={false}
        >
          {/* Left column */}
          <div
            className="relative z-10 pointer-events-auto w-full max-w-xl text-center md:text-center lg:text-left"
            draggable={false}
          >
            <h2 className="text-white text-xl sm:text-xl md:text-[80px] font-normal font-teko slide-in-left slide-delay-1 mt-1 sm:mt-2 leading-snug md:leading-[1.05]">
              WRITE US ANY MESSAGE
            </h2>
            <p className="mt-3 text-white/80 text-sm sm:text-sm md:text-sm font-light font-teko leading-6 slide-in-left slide-delay-2">
              If there are any queries, kindly take a moment to fill up this
              form. Our representatives will contact you shortly.
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 slide-in-left slide-delay-3">
              <a
                href="#"
                aria-label="Instagram"
                className="p-1 -m-1"
                draggable={false}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white/80 hover:text-[#D4AF37] transition-colors duration-200 text-2xl sm:text-2xl"
                  draggable={false}
                />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-1 -m-1"
                draggable={false}
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white/80 hover:text-[#D4AF37] transition-colors duration-200 text-2xl sm:text-2xl"
                  draggable={false}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jessy-mathew-55318b99"
                aria-label="LinkedIn"
                className="p-1 -m-1"
                draggable={false}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white/80 hover:text-[#D4AF37] transition-colors duration-200 text-2xl sm:text-2xl"
                  draggable={false}
                />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-1 -m-1"
                draggable={false}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white/80 hover:text-[#D4AF37] transition-colors duration-200 text-2xl sm:text-2xl"
                  draggable={false}
                />
              </a>
            </div>

            {/* Compact inline status under icons */}
            {status && (
              <div
                className={`mt-2 text-xs ${
                  status.type === "success" ? "text-green-400" : "text-red-500"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}
          </div>

          {/* Right column - form */}
          <div
            className="relative z-10 pointer-events-auto w-full max-w-xl"
            draggable={false}
          >
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="slide-in-right slide-delay-0">
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    placeholder="Your name"
                    className={`${fieldBase} ${nameInvalid ? errorBorder : ""}`}
                    aria-invalid={nameInvalid}
                    aria-errormessage={nameInvalid ? "name-error" : undefined}
                    draggable={false}
                  />
                  {nameInvalid && (
                    <p id="name-error" className="mt-1 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="slide-in-right slide-delay-1">
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    placeholder="you@example.com"
                    className={`${fieldBase} ${
                      emailInvalid ? errorBorder : ""
                    }`}
                    aria-invalid={emailInvalid}
                    aria-errormessage={emailInvalid ? "email-error" : undefined}
                    draggable={false}
                  />
                  {emailInvalid && (
                    <p id="email-error" className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="slide-in-right slide-delay-2">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  placeholder="Type your message here..."
                  className={`${fieldBase} resize-y ${
                    messageInvalid ? errorBorder : ""
                  }`}
                  aria-invalid={messageInvalid}
                  aria-errormessage={messageInvalid ? "message-error" : undefined}
                  draggable={false}
                />
                {messageInvalid && (
                  <p id="message-error" className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value=""
                readOnly
                tabIndex={-1}
                style={{ position: "absolute", left: "-9999px" }}
                draggable={false}
                aria-hidden="true"
              />

              <div className="slide-in-right slide-delay-3">
                <div
                  className="group relative rounded-xl overflow-hidden w-full sm:w-56 mx-auto shadow-md transition hover:shadow-lg"
                  draggable={false}
                >
                  <span
                    className="pointer-events-none absolute inset-0
                               [clip-path:polygon(60%_100%,100%_30%,100%_100%)]
                               bg-black/15 translate-x-full translate-y-full
                               group-hover:translate-x-0 group-hover:translate-y-0
                               transition-transform duration-600 ease-out"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center rounded-md bg-[#D4AF37] text-black px-3 py-3 text-sm sm:text-sm font-normal font-teko transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:opacity-60 disabled:cursor-not-allowed"
                    draggable={false}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Contact buttons */}
        <div
          className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 px-1 sm:px-4 mt-8 sm:mt-10"
          draggable={false}
        >
          {contactButtons.map((btn, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden w-full sm:w-auto sm:min-w-[220px] max-w-[320px] shadow-md transition hover:shadow-lg"
              draggable={false}
            >
              <span
                className="pointer-events-none absolute inset-0
                           [clip-path:polygon(60%_100%,100%_30%,100%_100%)]
                           bg-black/15 translate-x-full translate-y-full
                           group-hover:translate-x-0 group-hover:translate-y-0
                           transition-transform duration-600 ease-out"
              />
              <button
                type="button"
                onClick={btn.onClick}
                className="bg-[#D4AF37] rounded-xl flex flex-col items-center gap-2 sm:gap-3 px-4 py-4 sm:py-6 w-full text-black text-sm sm:text-sm font-normal font-teko text-center hover:bg-[#b8962c]"
                draggable={false}
              >
                {btn.icon}
                <span className="px-1" draggable={false}>
                  {btn.text}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
