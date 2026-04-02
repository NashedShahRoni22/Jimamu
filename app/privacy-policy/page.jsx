export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500">Last Updated: February 2026</p>
      </div>

      <section className="space-y-8 text-gray-700 max-w-4xl mx-auto">
        {/* 1. Data Collection */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">1. Data Collection</h2>
          <p className="mb-4">We collect information to provide a secure and efficient delivery experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>User Profiles:</strong> Name, phone number, email, date of birth, and profile photo.</li>
            <li><strong>Identity Verification (Riders Only):</strong> Photos of Government IDs (Passport, Driver’s License), "Selfie" for liveness checks, and **Social Insurance Number (SIN)** for tax compliance in Canada.</li>
            <li><strong>Financial Information:</strong> Bank details (Transit, Institution, and Account numbers), MFS wallet numbers, and transaction history.</li>
            <li><strong>Package Details:</strong> Item descriptions, photos, dimensions, and value.</li>
            <li><strong>Location Data:</strong> Real-time GPS coordinates to facilitate delivery tracking (see Section 4).</li>
          </ul>
        </div>

        {/* 2. Use of Data */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">2. Use of Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Delivery:</strong> To match Customers with Riders and facilitate pickups/drop-offs.</li>
            <li><strong>Financial Processing:</strong> To process payments and ensure Riders receive earnings to their verified bank accounts.</li>
            <li><strong>Legal Compliance:</strong> To issue tax forms (e.g., T4A in Canada) using your SIN and reported earnings.</li>
            <li><strong>Safety & Security:</strong> To verify IDs, prevent fraud, and provide 24/7 support during active deliveries.</li>
          </ul>
        </div>

        {/* 3. Data Sharing */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">3. Data Sharing</h2>
          <p>Caro does not sell your personal data. We share limited information with:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Delivery Participants:</strong> Riders see pickup/drop-off details; Customers see Rider name and location.</li>
            <li><strong>Payment Partners:</strong> Bank and MFS providers to facilitate fund transfers.</li>
            <li><strong>Regulatory Bodies:</strong> The Canada Revenue Agency (CRA) or other authorities if required by law.</li>
            <li><strong>Verification Services:</strong> Third-party partners who help us verify the validity of identity documents.</li>
          </ul>
        </div>

        {/* 4. Location Tracking */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">4. Location Tracking</h2>
          <p>
            To enable delivery tracking, we collect precise location data. For **Riders**, this tracking may occur in the background when the app is "Online" to ensure orders can be assigned efficiently. You may opt-out through your device settings, but this will limit your ability to use the delivery features.
          </p>
        </div>

        {/* 5. Data Security & Storage */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">5. Data Security</h2>
          <p>
            We use industry-standard encryption (SSL/TLS) to protect your bank details and identity documents. Sensitive data like **SIN** and **Account Numbers** are stored in encrypted databases with restricted internal access.
          </p>
        </div>

        {/* 6. User Rights (PIPEDA/GDPR) */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">6. Your Rights</h2>
          <p>Depending on your location, you have the right to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request the correction of inaccurate data (e.g., updating bank info).</li>
            <li>Request the deletion of your account and associated data (subject to legal retention requirements).</li>
            <li>Withdraw consent for location tracking or marketing at any time.</li>
          </ul>
        </div>

        {/* 7. Data Retention */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">7. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary. Financial and tax-related records (including SIN and transaction history) are kept for at least **7 years** to comply with Canadian tax laws.
          </p>
        </div>

        {/* 8. Contact & Privacy Officer */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold mb-2">8. Contact Us</h2>
          <p>If you have questions about this policy or wish to exercise your rights, contact our Privacy Officer:</p>
          <div className="mt-4 text-sm">
            <p><strong>Email:</strong> privacy@caro.com</p>
            <p><strong>Address:</strong> [Your Canadian Business Address]</p>
          </div>
        </div>
      </section>
    </div>
  );
}