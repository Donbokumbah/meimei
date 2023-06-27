import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Join = () => {
    const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: ''
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if localStorage is supported
    if (typeof Storage === 'undefined') {
      console.log('localStorage is not supported');
      return;
    }
    
    // Save form data to local storage
    try {
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Form data saved to local storage');
    } catch (error) {
      console.log('Error saving form data to local storage:', error);
    }
    
    // Route to home page
    router.push('/');
  };
  
  

  return (
    <>
      <Head>
        <title>Join Us - Mei Mei Food</title>
      </Head>

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold text-center mb-8">Join the Mei Mei Food Team</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Upload Resume
                </label>
                <div className="mt-1">
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Why do you want to join the Mei Mei Food team?
          </label>
          <div className="mt-1">
            <textarea
              name="reason"
              rows={4}
              required
              className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.reason}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What are your salary expectations?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="salaryExpectations"
              required
              className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.salaryExpectations}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            When are you available to start?
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="availability"
              required
              className="p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={formData.availability}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="terms" className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link href="/" className="text-blue-600">
                  Terms and Conditions
                </Link>
              </span>
            </label>

            <label htmlFor="newsletter" className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                onChange={handleInputChange}
              />
              <span className="ml-2 block text-sm text-gray-900">
                I would like to receive newsletters and other communications from Mei Mei Food
              </span>
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
    <button className="w-full inline-flex items-center
     justify-center px-6 py-3 border border-transparent 
     rounded-md shadow-sm text-base font-medium
      text-white bg-blue-600 hover:bg-blue-700 
      focus:outline-none focus:ring-2 focus:ring-offset-2
       focus:ring-blue-500"
       >
      Submit
    </button>
  </div>
</form>
            </div>
            </div>
            </div>
            </>

);
};

export default Join;