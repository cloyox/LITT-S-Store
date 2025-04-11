
import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "In-Game Cash ($100,000)",
    price: "$5.00",
    description: "Get $100,000 in-game cash instantly.",
    stripeLink: "https://buy.stripe.com/test_inGameCash"
  },
  {
    id: 2,
    name: "Custom Gang Slot",
    price: "$15.00",
    description: "Start your own gang with a custom name and color.",
    stripeLink: "https://buy.stripe.com/test_gangSlot"
  },
  {
    id: 3,
    name: "Custom Car",
    price: "$10.00",
    description: "One custom vehicle added to your garage.",
    stripeLink: "https://buy.stripe.com/test_customCar"
  },
  {
    id: 4,
    name: "Discord Role (VIP / Admin Cmds)",
    price: "$10.00",
    description: "Get a VIP Discord role and access to admin commands.",
    stripeLink: "https://buy.stripe.com/test_vipRole"
  },
  {
    id: 5,
    name: "Whitelist Access",
    price: "$5.00",
    description: "Unlock server whitelist access.",
    stripeLink: "https://buy.stripe.com/test_whitelist"
  }
];

export default function Storefront() {
  const [buyingCashApp, setBuyingCashApp] = useState(false);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.05 }}
          className="shadow-xl rounded-2xl"
        >
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-semibold">{product.price}</p>
            <div className="flex gap-2">
              <button
                onClick={() => window.open(product.stripeLink, "_blank")}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                Pay with Card
              </button>
              <button
                onClick={() => setBuyingCashApp(true)}
                className="border border-gray-400 px-4 py-2 rounded-xl"
              >
                CashApp
              </button>
            </div>
          </div>
        </motion.div>
      ))}

      {buyingCashApp && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl space-y-4 max-w-md text-center">
            <h3 className="text-xl font-bold">CashApp Payment Info</h3>
            <p>Send the total amount to <strong>$YourCashtag</strong></p>
            <p>Include your Discord @ in the note. DM staff after sending.</p>
            <button
              onClick={() => setBuyingCashApp(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
