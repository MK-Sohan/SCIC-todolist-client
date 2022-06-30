import React from "react";

const SimpleCard = ({ value }) => {
  return (
    <div class="w-72 max-w-full border border-gray-300 rounded-sm bg-white lg:mr-4 lg:mt-10">
      <div class="p-6">
        <h5 class="text-lg font-medium">
          <span className="text-green-400">To-Do Name:</span> {value.name}
        </h5>
        <p class="mt-2">{value.description}</p>
      </div>
    </div>
  );
};

export default SimpleCard;
