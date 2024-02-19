'use client'
import React, { useState } from 'react';

const index = () => {
  const faqData = [
    { question: 'What are the most important links for Limocoin swap?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building modern web designs.' },
    { question: 'What is the contract address of Limocoin swap?', answer: 'You can install Tailwind CSS using npm or yarn. Refer to the official documentation for installation instructions.' },
    { question: 'What is the current price of Limocoin swap?', answer: 'Yes, Tailwind CSS is highly customizable. You can configure the default styles in the tailwind.config.js file.' },
    { question: 'How and where do I buy Limocoin swap?', answer: 'Yes, Tailwind CSS is highly customizable. You can configure the default styles in the tailwind.config.js file.' },
    { question: 'Does Limocoin swap has an audit?', answer: 'Yes, Tailwind CSS is highly customizable. You can configure the default styles in the tailwind.config.js file.' },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary p-4 grid-cols-12 border-2 border-gray-700 rounded-md p-4">
        <h3 className='text-base font-bold px-8 pt-4 '>FAQ about LMCSWAP</h3>
      <div className='p-6'>
      {faqData.map((faq, index) => (
        <div key={index} className="  border-b-[1px] border-gray-700">
          <div
            className="flex justify-between items-center p-2  cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h3 className="text-base font-normal font-semibold ">{faq.question}</h3>
            <svg
              className={`w-6 h-6 ${openIndex === index ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-secondary ">
              <p className="">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default index;
