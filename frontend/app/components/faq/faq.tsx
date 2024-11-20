"use client";
import { useState } from "react";
import  "./faq.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all plans. Simply contact our support team for assistance.",
  },
  {
    question: "Can I change my plan after it's been placed?",
    answer: "You can modify your plan within 24 hours of placing it. Please reach out to support as soon as possible.",
  },
  {
    question: "What AI model do u use?",
    answer: "Roomify uses our own AI generation pipeline which is trained for high photorealism and passing it to a large language model (LLM) for image generation. We keep working on improving it, with better photorealistic data sets, using reinforcement learning from human feedback (RLHF) by users like you which constantly improves our models. All of this to get you better more photorealistic renders.",
  },
  {
    question: "How much does roomify cost?",
    answer: "You can check current pricing by entering your email in the sign up box and following the link to see the pricing table. You can cancel at any time.",
  },
  {
        question: "Do u have a mobile app?",
        answer: "No but very soon.",
    },
    {
        question: "What will u do with my photos and details?",
        answer: "We only use your photos to create AI interior design renders. Your data privacy and security are our top priorities.",
    },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={"faqContainer"}>  
      <div className="faqHaeader">
        <h2 className="py-3 text-center">Frequently Asked Questions</h2>
      </div>
      {faqData.map((item, index) => (
        <div key={index} className={`${"faqItem"} ${activeIndex === index ? "active" : ''}`}>
          <div className={"faqQuestion"} onClick={() => toggleAnswer(index)}>
            <span>{item.question}</span>
            <button className={"toggleButton"}>
              {activeIndex === index ? '-' : '+'}
            </button>
          </div>
          <div
            className={"faqAnswer"}
            style={{
              maxHeight: activeIndex === index ? '500px' : '0',
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}