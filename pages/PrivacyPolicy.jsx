import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className='flex justify-center items-center mb-4'>
      <Link href='/'>
        <span className='w-[40px] md:w-[60px] font-Tangerine text-2xl md:text-3xl'>Mei Mei</span>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy for Mei Mei</h1>
      <p className="mb-8">
        At Mei Mei, we take your privacy very seriously. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we protect your information. By using our website and services, you agree to the terms of this Privacy Policy.
      </p>
      <h2 className="text-lg font-bold mb-2">Information We Collect</h2>
      <p className="mb-8">
        We collect personal information such as your name, email address, phone number, and address when you register for an account, place an order, or sign up for our newsletter. We also collect information about your device and browser, including your IP address, cookies, and other unique identifiers.
      </p>
      <h2 className="text-lg font-bold mb-2">How We Use Your Information</h2>
      <p className="mb-8">
        We use your personal information to process your orders, provide customer support, and send you promotional emails. We may also use your information for research and analysis purposes to improve our website and services.
      </p>
      <h2 className="text-lg font-bold mb-2">How We Protect Your Information</h2>
      <p className="mb-8">
        We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, and alteration. We also limit access to your personal information to authorized personnel only.
      </p>
      <h2 className="text-lg font-bold mb-2">Third-Party Services</h2>
      <p className="mb-8">
        We may use third-party services, such as payment processors and shipping providers, to process your orders. These third-party services have their own privacy policies and terms of service, and we encourage you to review them.
      </p>
      <h2 className="text-lg font-bold mb-2">Cookies</h2>
      <p className="mb-8">
        We use cookies and other similar technologies to personalize your experience and improve our website's functionality. You can control the use of cookies in your browser settings.
      </p>
      <h2 className="text-lg font-bold mb-2">Children's Privacy</h2>
      <p className="mb-8">
        Our website and services are not directed at children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
      </p>
      <h2 className="text-lg font-bold mb-2">Changes to this Privacy Policy</h2>
      <p className="mb-8">
        We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on our website.
      </p>
      <h2 className="text-lg font-bold mb-2">Contact Us</h2>
      <p className="mb-8">
        If you have any questions or concerns about this Privacy Policy, please contact us at <Link href="mailto:privacy@meimei.com" className="text-blue-500">privacy@me
        imei.com</Link>.
</p>
</div>
);
};

export default PrivacyPolicy;