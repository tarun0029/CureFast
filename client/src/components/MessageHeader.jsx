import React from "react";

function MessageHeader() {
  return (
    <div>
      <div class="relative flex items-center p-3 border-b border-gray-300">
        <img
          class="object-cover w-10 h-10 rounded-full"
          src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
          alt="username"
        />
        <span class="block ml-2 font-bold text-gray-600">Emma</span>
        <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
      </div>
    </div>
  );
}

export default MessageHeader;
