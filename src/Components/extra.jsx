import React, { memo } from "react";
import { FaUtensils, FaHome, FaMoneyBillWave, FaPizzaSlice } from "react-icons/fa";

// Move steps outside component to prevent recreation on each render
const STEPS = [
  { id: 1, icon: <FaHome size={40} />, title: "Select your Restaurant" },
  { id: 2, icon: <FaUtensils size={40} />, title: "Select your Dish" },
  { id: 3, icon: <FaMoneyBillWave size={40} />, title: "Pay Cash/Online" },
  { id: 4, icon: <FaPizzaSlice size={40} />, title: "Enjoy Your Meal" },
];

const OrderProcessFlow = memo(() => {
  if (!STEPS || STEPS.length === 0) {
    return null; // Return null if steps are missing or empty
  }

  return (
    <div 
      className="flex justify-center items-center gap-8 p-8 flex-wrap"
      role="list"
      aria-label="Order Process Steps"
    >
      {STEPS.map((step, index) => (
        <div 
          key={step.id} // Simplified key to just use id
          className="flex flex-col items-center text-center"
          role="listitem"
          aria-label={`Step ${step.id}: ${step.title}`}
        >
          <div 
            className="relative w-24 h-24 flex justify-center items-center border-4 border-orange-500 rounded-full hover:border-orange-600 transition-colors"
            aria-hidden="true"
          >
            {step.icon}
            {index !== STEPS.length - 1 && (
              <div 
                className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-10 h-2 bg-orange-500"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="mt-4 font-semibold text-lg">
            <span>{step.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
});

// Add display name for debugging
OrderProcessFlow.displayName = 'OrderProcessFlow';

export default OrderProcessFlow;
