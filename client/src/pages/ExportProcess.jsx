import React from "react";
import { FaTruck, FaCheckCircle, FaFileInvoice, FaGlobe } from "react-icons/fa";

const steps = [
  {
    title: "1. Inquiry & Quotation",
    description:
      "Clients send an export inquiry, and we provide a detailed quotation including pricing, packaging, and shipping terms.",
    icon: <FaFileInvoice className="text-green-600 text-3xl mb-3" />,
  },
  {
    title: "2. Quality Check & Grading",
    description:
      "We procure the highest quality produce, sort and grade based on size and freshness, ensuring compliance with export standards.",
    icon: <FaCheckCircle className="text-green-600 text-3xl mb-3" />,
  },
  {
    title: "3. Packaging & Documentation",
    description:
      "Products are hygienically packed as per international standards. We handle export documentation including phyto-certificates, invoices, etc.",
    icon: <FaTruck className="text-green-600 text-3xl mb-3" />,
  },
  {
    title: "4. Shipping & Delivery",
    description:
      "We coordinate with trusted logistics partners for on-time delivery via sea or air cargo, ensuring safe handling till the destination.",
    icon: <FaGlobe className="text-green-600 text-3xl mb-3" />,
  },
];

const ExportProcess = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-10">
        Our Export Process
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExportProcess;
