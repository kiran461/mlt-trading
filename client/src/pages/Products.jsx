import React from "react";

const products = [
  {
    name: "Fresh Red Onions",
    description:
      "Premium-grade Indian red onions known for their sharp flavor, long shelf life, and freshness — directly sourced from Maharashtra farms.",
    image: "/images/red-onion.jpg", // Add image in public/images/
  },
  {
    name: "White Onions",
    description:
      "White onions with a mild flavor, great for salads and international cuisines. Cleaned, sorted, and packed for export.",
    image: "/images/white-onions.jpg",
  },
  {
    name: "Shallots",
    description:
      "Aromatic shallots perfect for gourmet cooking and exports to European and Gulf countries.",
    image: "/images/shallots.jpg",
  },
];

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-green-700 mb-8 text-center">
        Our Export Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
