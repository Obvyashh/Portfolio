"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

import { ambientPulse, interactiveCard, sectionReveal, sectionStagger } from "../lib/motion";

type FormDataState = {
  name: string;
  email: string;
  message: string;
};

type InputFieldProps = {
  label: string;
  name: keyof Pick<FormDataState, "name" | "email">;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/55">{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-black/20
          px-4
          py-4
          text-sm
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-white/25
          focus:border-cyan-400/40
          focus:bg-black/30
        "
      />
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = React.useState<FormDataState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    window.location.href = "mailto:yadh6699@gmail.com?subject=Portfolio Contact&body=Hello Yash,";
  };

  return (
    <motion.section
      id="contact"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden py-28 sm:py-32"
    >
      {/* Ambient Background */}
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <motion.div
            variants={sectionReveal}
            className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/70"
          >
            Contact
          </motion.div>

          <motion.h2
            variants={sectionReveal}
            className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Let’s build something intelligent.
          </motion.h2>

          <motion.p
            variants={sectionReveal}
            className="mx-auto mt-5 max-w-xl text-sm leading-[1.9] text-white/55 sm:text-base"
          >
            Whether it’s backend systems, cinematic interfaces, or AI-native experiences — I’m always
            interested in ambitious ideas and meaningful collaboration.
          </motion.p>
        </motion.div>

        <motion.div
          variants={interactiveCard}
          initial="rest"
          whileHover="hover"
        >
          <form
            onSubmit={handleSubmit}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-2xl
              sm:p-8
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-transparent" />

            <div className="relative z-10 space-y-5">
              <InputField
                label="Name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />

              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />

              <div>
                <label className="mb-2 block text-sm text-white/55">Message</label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-4
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-cyan-400/40
                    focus:bg-black/30
                  "
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.985 }}
                disabled={loading}
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/15
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending transmission...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-sm text-emerald-400"
                  >
                    {success}
                  </motion.p>
                ) : null}

                {error ? (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-sm text-red-400"
                  >
                    {error}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

