import React from 'react';
import Image from 'next/image';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$200/month',
    features: ['Core data', '1–2 users'],
    highlighted: true,
    height: 'h-[260px]',
  },
  {
    title: 'Pro',
    price: '$500/month',
    features: ['Consumer insights', '5 users', 'custom reports'],
    highlighted: true,
    height: 'h-[320px]',
  },
  {
    title: 'Enterprise',
    price: '$1,500+/month',
    features: ['API access', 'unlimited users', 'dedicated support'],
    highlighted: true,
    height: 'h-[380px]',
  },
];

const features = [
  {
    icon: '/icon1.png',
    title: 'Valuations',
    desc: 'Real-time data for manufacturers, dealers, and analysts',
  },
  {
    icon: '/icon2.png',
    title: 'Demand trends',
    desc: 'Real-time data for manufacturers, dealers, and analysts',
  },
  {
    icon: '/icon3.png',
    title: 'Predictive analytics',
    desc: 'Real-time data for manufacturers, dealers, and analysts',
  },
  {
    icon: '/icon4.png',
    title: 'Reports',
    desc: 'Real-time data for manufacturers, dealers, and analysts',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="px-4 py-10 md:py-16 bg-white text-center">
      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 shadow-lg flex flex-col justify-between text-black    ${plan.height} ${
              plan.highlighted
                ? 'bg-white'
                : 'bg-white'
            }`}
          >
            <div>
              <h3 className="text-xl font-bold uppercase mb-2 bg-blue-500 border-black rounded-md">
                {plan.title}
              </h3>
              <p className="text-lg font-semibold mb-4">{plan.price}</p>
              <ul className="text-left text-black space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full inline-block" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-4">
            <div className="w-16 h-16 relative mb-2">
              <Image src={item.icon} alt={item.title} layout="fill" objectFit="contain" />
            </div>
            <h4 className="font-semibold mb-1 text-black">{item.title}</h4>
            <p className="text-sm text-gray-600 leading-snug">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
