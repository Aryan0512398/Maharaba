"use client";

import { useState } from "react";
import { Plus, Minus, Cross, ClosedCaptionIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    question:
      "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat.",
  },
  {
    question:
      "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat.",
  },
  {
    question:
      "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden max-w-[99vw] bg-white px-14 py-24">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[100px] w-[600px] -translate-x-1/3 rounded-full blur-[102.5px] opacity-70"
        style={{
          background:
            "linear-gradient(90deg, #FFD700 0%, #FF6439 50%, #FFFFFF 73.08%, #00D4FE 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative  ">
        <h2 className="font-jejumyeongjo text-4xl md:text-5xl text-[#061C3D]">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 max-w-2xl text-sm text-[#717782]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis
          pretium risus euismod dictum egestas orci netus feugiat ut egestas ut
          sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.
        </p>

        {/* FAQ LIST */}
        <div className="mt-14 border-t">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b py-8">
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <span className="max-w-[900px] text-lg md:text-xl font-medium text-[#000F24]">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <X size={20} className="mt-1 shrink-0 text-gray-400" />
                  ) : (
                    <Minus size={20} className="mt-1 shrink-0 text-gray-400" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-[900px] text-base leading-relaxed text-[#42526B]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
