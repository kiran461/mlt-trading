import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToTopButton from "./ScrollToTopButton";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
};

export default FloatingActions;