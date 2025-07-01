'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    question: 'What data is included?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit eget arcu sit dignissim in hendrerit sit morbi turpis commodo tincidunt volutpat sodales mauris mole sagittis blandit at erat et pretium ultricies massa eu in lacus lorem tincidunt ultrices eget sed fermentum diam etiam ac mauris vestibulum augue.',
  },
  { question: 'Is my data secure', answer: '' },
  { question: 'Ut tristique molestie cras semper', answer: '' },
  { question: 'Facilisis ac a lorem integer ac velit', answer: '' },
  { question: 'Enim pulvinar tincidunt at erat', answer: '' },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-wide text-black">
        QUICK QUESTION
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between">
              <h3
                className={`text-base md:text-lg font-semibold text-black`}
              >
                {faq.question}
              </h3>
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                className="h-4 w-4 text-gray-600"
              />
            </div>
            {activeIndex === index && faq.answer && (
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
