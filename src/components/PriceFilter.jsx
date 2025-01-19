import React, { useState } from "react";

const PriceFilter = () => {
  const [price, setPrice] = useState({ min: 10, max: 500 });

  const handleSliderChange = (event) => {
    const { name, value } = event.target;
    setPrice((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleSubmit = () => {
    alert(`Filtering by price: $${price.min} - $${price.max}`);
  };

  return (
    <div className="shop__price-filter">
      {/* Slider */}
      <div className="relative h-2 bg-black rounded">
        {/* Background Range */}
        <div
          className="absolute h-full bg-green rounded-sm"
          style={{
            left: `${((price.min - 10) / 490) * 100}%`,
            width: `${((price.max - price.min) / 490) * 100}%`,
          }}
        ></div>

        {/* Slider for Min */}
        <input
          type="range"
          min="10"
          max="500"
          value={price.min}
          name="min"
          onChange={handleSliderChange}
          className="absolute appearance-none h-2 w-full bg-transparent cursor-pointer z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22%23ffffff%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2l6 6h-4v8h-4v-8h-4z%22/%3E%3C/svg%3E')] [&::-webkit-slider-thumb]:bg-no-repeat [&::-webkit-slider-thumb]:bg-center focus:outline-none"
          style={{
            pointerEvents: price.max > price.min ? "auto" : "none",
          }}
        />

        {/* Slider for Max */}
        <input
          type="range"
          min="10"
          max="500"
          value={price.max}
          name="max"
          onChange={handleSliderChange}
          className="absolute appearance-none h-2 w-full bg-transparent cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22%23ffffff%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2l6 6h-4v8h-4v-8h-4z%22/%3E%3C/svg%3E')] [&::-webkit-slider-thumb]:bg-no-repeat [&::-webkit-slider-thumb]:bg-center focus:outline-none"
          style={{
            pointerEvents: price.max > price.min ? "auto" : "none",
          }}
        />
      </div>

      {/* Filter Button and Price Display */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleSubmit}
          className="uppercase font-bold text-white text-[15px] tracking-[0.5px] focus:outline-none"
        >
          Filter
        </button>
        <div className="text-[#adb0bc] text-[15px] font-medium">
          ${price.min} - ${price.max}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
