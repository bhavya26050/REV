// "use client";
// import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";

// const Payment = () => {
//   const searchParams = useSearchParams();
//   const plan = searchParams.get("plan");
//   const price = searchParams.get("price");

//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [cardDetails, setCardDetails] = useState({
//     name: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCardDetails({ ...cardDetails, [name]: value });
//   };

//   const validateForm = () => {
//     if (!paymentMethod) {
//       setError("Please select a payment method.");
//       return false;
//     }

//     if (paymentMethod === "card") {
//       const { name, cardNumber, expiry, cvv } = cardDetails;
//       if (!name) {
//         setError("Name on card is required.");
//         return false;
//       }
//       if (!/^\d{16}$/.test(cardNumber)) {
//         setError("Card number must be 16 digits.");
//         return false;
//       }
//       if (!/^\d{2}\/\d{2}$/.test(expiry)) {
//         setError("Expiry must be in MM/YY format.");
//         return false;
//       }
//       if (!/^\d{3}$/.test(cvv)) {
//         setError("CVV must be 3 digits.");
//         return false;
//       }
//     }

//     setError("");
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Handle successful submission (e.g., send data to the server)
//       alert(`Payment successful for the ${plan} plan ($${price}/Monthly) using ${paymentMethod}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>
//         <p className="text-lg mb-2">
//           <strong>Plan:</strong> {plan}
//         </p>
//         <p className="text-lg mb-6">
//           <strong>Price:</strong> ${price}/Monthly
//         </p>

//         {/* Payment Method Selection */}
//         <h3 className="text-lg font-bold mb-3">Choose Payment Method:</h3>
//         <div className="space-y-4">
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="card"
//               name="payment"
//               value="card"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="mr-2"
//             />
//             <label htmlFor="card" className="text-sm">Credit/Debit Card</label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="upi"
//               name="payment"
//               value="upi"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="mr-2"
//             />
//             <label htmlFor="upi" className="text-sm">UPI</label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="netbanking"
//               name="payment"
//               value="netbanking"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="mr-2"
//             />
//             <label htmlFor="netbanking" className="text-sm">Net Banking</label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="wallets"
//               name="payment"
//               value="wallets"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="mr-2"
//             />
//             <label htmlFor="wallets" className="text-sm">Wallets</label>
//           </div>
//         </div>

//         {/* Card Payment Form */}
//         {paymentMethod === "card" && (
//           <div className="mt-6">
//             <h3 className="text-lg font-bold mb-3">Enter Payment Details:</h3>
//             <input
//               type="text"
//               placeholder="Name on Card"
//               name="name"
//               value={cardDetails.name}
//               onChange={handleInputChange}
//               className="w-full p-2 mb-4 border rounded-lg focus:outline-indigo-500"
//             />
//             <input
//               type="text"
//               placeholder="Card Number"
//               name="cardNumber"
//               value={cardDetails.cardNumber}
//               onChange={handleInputChange}
//               className="w-full p-2 mb-4 border rounded-lg focus:outline-indigo-500"
//             />
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 name="expiry"
//                 value={cardDetails.expiry}
//                 onChange={handleInputChange}
//                 className="w-1/2 p-2 border rounded-lg focus:outline-indigo-500"
//               />
//               <input
//                 type="text"
//                 placeholder="CVV"
//                 name="cvv"
//                 value={cardDetails.cvv}
//                 onChange={handleInputChange}
//                 className="w-1/2 p-2 border rounded-lg focus:outline-indigo-500"
//               />
//             </div>
//           </div>
//         )}

//         {/* Error Message */}
//         {error && <p className="text-red-500 mt-4">{error}</p>}

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           className="w-full py-2 mt-6 bg-indigo-600 text-white rounded hover:bg-indigo-500"
//         >
//           Proceed to Pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;


"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const Payment = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const price = searchParams.get("price");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [error, setError] = useState("");

  const banks = [
    "SBI",
    "HDFC",
    "ICICI",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Canara Bank",
    "Union Bank of India",
    "Yes Bank",
    "IndusInd Bank",
    "IDBI Bank",
    "IDFC First Bank",
    "Federal Bank",
    "Bandhan Bank",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const validateForm = () => {
    if (!paymentMethod) {
      setError("Please select a payment method.");
      return false;
    }

    if (paymentMethod === "card") {
      const { name, cardNumber, expiry, cvv } = cardDetails;
      if (!name.trim()) {
        setError("Name on card is required.");
        return false;
      }
      if (!/^\d{16}$/.test(cardNumber)) {
        setError("Card number must be 16 digits.");
        return false;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        setError("Expiry must be in MM/YY format.");
        return false;
      }
      if (!/^\d{3}$/.test(cvv)) {
        setError("CVV must be 3 digits.");
        return false;
      }
    }

    if (paymentMethod === "upi" && !upiId.trim()) {
      setError("UPI ID is required.");
      return false;
    }

    if (paymentMethod === "netbanking" && !selectedBank) {
      setError("Please select a bank.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(
        `Payment successful for the ${plan} plan ($${price}/Monthly) using ${paymentMethod}`
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Payment
        </h2>
        <p className="text-lg mb-2 text-gray-600 dark:text-gray-300">
          <strong>Plan:</strong> {plan}
        </p>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          <strong>Price:</strong> ${price}/Monthly
        </p>

        <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
          Choose Payment Method:
        </h3>
        <div className="space-y-4">
          <div>
            <input
              type="radio"
              id="card"
              name="payment"
              value="card"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="card" className="text-sm text-gray-700 dark:text-gray-300">
              Credit/Debit Card
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="upi"
              name="payment"
              value="upi"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="upi" className="text-sm text-gray-700 dark:text-gray-300">
              UPI
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="netbanking"
              name="payment"
              value="netbanking"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label
              htmlFor="netbanking"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Net Banking
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="payment"
              value="paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="paypal" className="text-sm text-gray-700 dark:text-gray-300">
              PayPal
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="googlepay"
              name="payment"
              value="googlepay"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label
              htmlFor="googlepay"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Google Pay
            </label>
          </div>
        </div>

        {paymentMethod === "card" && (
          <div className="mt-6">
            <input
              type="text"
              name="name"
              placeholder="Name on Card"
              onChange={handleInputChange}
              value={cardDetails.name}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              onChange={handleInputChange}
              value={cardDetails.cardNumber}
              className="w-full p-2 border rounded mb-4"
              pattern="\d{16}"
              maxLength="16"
              title="Card number must be 16 digits"
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              onChange={handleInputChange}
              value={cardDetails.expiry}
              className="w-full p-2 border rounded mb-4"
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              title="Expiry must be in MM/YY format"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={handleInputChange}
              value={cardDetails.cvv}
              className="w-full p-2 border rounded"
              pattern="\d{3}"
              maxLength="3"
              title="CVV must be 3 digits"
              required
            />
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="mt-6">
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        {paymentMethod === "netbanking" && (
          <div className="mt-6">
            <select
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a Bank</option>
              {banks.map((bank, index) => (
                <option key={index} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        )}

        {error && (
          <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-2 rounded mt-6 hover:bg-indigo-700"
        >
          Submit Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
