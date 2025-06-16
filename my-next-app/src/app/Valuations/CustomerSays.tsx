// components/CustomerTestimonial.tsx
import React from "react";

const CustomerSays: React.FC = () => {
  return (
    <div
      className="w-full h-[500px] md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/Picture1.png')" }}
    >
      {/* Since content is in the image, no overlay content needed */}
    </div>
  );
};

export default CustomerSays;
