import React from "react";

const ContactUs = () => {
  return (
    <div className="ml-20">
      <h1 class="text-5xl text-blue-900 font-extrabold  text-start mb-4  ">
        Contact Us
      </h1>
      <p className="mb-6">
        Have a question? Use this form to contact ITS and someone will answer
        your question within 24 hours.
      </p>
      <div className="">
        <form class=" ">
          <div class="mb-4">
            <label for="name" class="block mb-2"></label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-3 py-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-2"></label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-2 border rounded"
              placeholder=" Email"
            />
          </div>
          <div class="mb-4">
            <label for="address" class="block mb-2"></label>
            <input
              type="text"
              id="address"
              name="address"
              class="w-full px-3 py-2 border rounded"
              placeholder="Street Address"
            />
          </div>
          <div class="mb-4">
            <label for="address2" class="block mb-2"></label>
            <input
              type="text"
              id="address2"
              name="address2"
              class="w-full px-3 py-2 border rounded"
              placeholder="Apartment, suite, etc."
            />
          </div>
          <div class="mb-4">
            <label for="city" class="block mb-2"></label>
            <input
              type="text"
              id="city"
              name="city"
              class="w-full px-3 py-2 border rounded"
              placeholder="City"
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block mb-2"></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="w-full px-3 py-2 border rounded"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block mb-2"></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full px-3 py-2 border rounded"
              placeholder=" Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-3 px-20 border border-yellow-900 mt-6 mb-3 rounded"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
