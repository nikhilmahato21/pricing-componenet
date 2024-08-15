import React from 'react';

const pricingData = [
  { api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
  { api: "OpenAI", model: "GPT-4", price: "$0.03" },
  { api: "Together AI", model: "Llama-2-70b", price: "$0.0008" },
  { api: "Together AI", model: "Llama-2-13b", price: "$0.0006" },
];

const Pricing = ({theme}) => {
  return (
    <div className={` text-white p-8 mt-12 rounded-lg max-w-5xl mx-auto ${theme==="dark"?"bg-gray-900 border border-white":"bg-white border border-gray-700"}`}>
      <h2 className="text-2xl font-bold mb-4 text-indigo-400">API Pricing</h2>
      <p className={`mb-6 ${theme==="dark"?"text-white":"text-slate-900"}`}>
        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </p>
      <table className="w-full mb-6 rounded-md overflow-hidden ">
        <thead>
          <tr className="bg-indigo-500 text-left border border-gray-400">
            <th className="p-3 primary-content">API</th>
            <th className="p-3 primary-content">MODEL</th>
            <th className="p-3 primary-content">PRICE PER 1K TOKENS</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((item, index) => (
            <tr key={index} className="border border-gray-400">
              <td className={`p-3 ${theme==="dark"?"text-white":"text-slate-900"}`}>{item.api}</td>
              <td className={`p-3 ${theme==="dark"?"text-white":"text-slate-900"}`}>{item.model}</td>
              <td className={`p-3 tracking-wide ${theme==="dark"?"text-white":"text-slate-900"}`}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-indigo-400">Token Estimation</h3>
        <p className={`p-3 ${theme==="dark"?"text-white":"text-slate-900"}`}>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-400">Billing</h3>
        <p className={` ${theme==="dark"?"text-white":"text-slate-900"}`}>
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
