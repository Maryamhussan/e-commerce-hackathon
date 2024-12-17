import React from "react";

export default function FooterAbove() {
  return (
    <div className="w-full bg-[#FAFAFA] py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
          <img
            src="hooli.png"
            alt="Hooli Logo"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <img
            src="lyft.png"
            alt="Lyft Logo"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <img
            src="leaf.png"
            alt="Leaf Logo"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <img
            src="stripe.png"
            alt="Stripe Logo"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <img
            src="aws.png"
            alt="AWS Logo"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <img
            src="discord.png"
            alt="Discord Logo"
            className="max-w-[120px] w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
