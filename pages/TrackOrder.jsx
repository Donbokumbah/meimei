import Link from 'next/link';
import { useRouter } from 'next/router';
import {  useState } from 'react';

const OrderStatus = () => {
  const router = useRouter();
  const [status, setStatus] = useState('');

  // useEffect(() => {
  //   // Simulating API call to get order status
  //   const fetchOrderStatus = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/orders/123/status');
  //       const data = await response.json();
  //       setStatus(data.status);
  //     } catch (error) {
  //       console.error(error);
  //       setStatus('error');
  //     }
  //   };

  //   fetchOrderStatus();
  // }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="/logo.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Order Status
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {status === 'error'
                ? 'There was an error fetching your order status.'
                : `Your order status is: ${status}`}
            </p>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-900">
                  Order Details
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">
                  Order Number
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="orderNumber"
                    id="orderNumber"
                    className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    defaultValue="123456"
                    readOnly
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    defaultValue="jane@example.com"
                    readOnly
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
  <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700">
    Order Date
  </label>
  <div className="mt-1 flex rounded-md shadow-sm">
    <input
      type="text"
      name="orderDate"
      id="orderDate"
      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
      defaultValue="May 15, 2023"
      readOnly
    />
  </div>
</div>

<div className="sm:col-span-2">
  <label htmlFor="orderTotal" className="block text-sm font-medium text-gray-700">
    Order Total
  </label>
  <div className="mt-1 flex rounded-md shadow-sm">
    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
      Rs
    </span>
    <input
      type="text"
      name="orderTotal"
      id="orderTotal"
      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
      defaultValue="100.00"
      readOnly
    />
  </div>
</div>
</div>
</div>
<div className="mt-6">
<Link href="/">
<div className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  Back to home
</div>
</Link>
</div>
</div>
</div>
</div>
);
};

export default OrderStatus;
