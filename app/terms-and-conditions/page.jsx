export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-500">Effective Date: February 2026</p>
      </div>

      <section className="space-y-8 text-gray-700 max-w-4xl mx-auto">
        {/* 1. Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>Caro</strong>. By accessing our platform, you agree to be bound by these Terms & Conditions. Caro acts as a marketplace connecting independent Riders with Users for parcel delivery services.
          </p>
        </div>

        {/* 2. User & Rider Registration */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">2. User Registration</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Users must provide accurate profile details including a unique username and valid contact information.</li>
            <li><strong>Rider Verification:</strong> Riders must submit valid government-issued ID (Passport or Driver’s License) and professional banking information (including Transit and Institution numbers for Canada).</li>
            <li>Riders are independent contractors and are not employees of Caro.</li>
          </ul>
        </div>

        {/* 3. Delivery Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">3. Service Types</h2>
          <p>Caro facilitates two primary types of delivery requests:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>National (Domestic):</strong> Deliveries within the same country (e.g., within Canada).</li>
            <li><strong>Global (International):</strong> Cross-border deliveries between different countries.</li>
          </ul>
        </div>

        {/* 4. Pricing & Minimum Offers */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">4. Pricing & The Offer System</h2>
          <p>Caro allows Users to suggest an estimated offer for their delivery. However, to ensure fair compensation and service sustainability, the following <strong>Minimum Floors</strong> apply:</p>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <ul className="list-none space-y-2 font-medium">
              <li>🇨🇦 <strong>National (Canada):</strong> Minimum offer starts at <strong>$10.00 CAD</strong>.</li>
              <li>🌎 <strong>Global (International):</strong> Minimum offer starts at <strong>$30.00 CAD</strong>.</li>
            </ul>
          </div>
          <p className="mt-3 text-sm">
            Offers below these thresholds will not be accepted by the platform. Higher offers are recommended for heavy items, long distances, or urgent deliveries to attract Riders more quickly.
          </p>
        </div>

        {/* 5. Prohibited Items */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">5. Prohibited Items</h2>
          <p>Users must not request the delivery of:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Illegal drugs or controlled substances.</li>
            <li>Hazardous materials, explosives, or firearms.</li>
            <li>Currency, high-value jewelry, or unprotected fragile items.</li>
            <li>Any item prohibited by local or international customs laws.</li>
          </ul>
        </div>

        {/* 6. Payments & Payouts */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">6. Payments & Payouts</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payments are held in escrow by Caro and released to the Rider only upon successful delivery verification (via OTP or digital signature).</li>
            <li>Riders are responsible for all taxes (including income tax and HST/GST in Canada) arising from their earnings.</li>
          </ul>
        </div>

        {/* 7. Dispute Resolution */}
        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
          <h2 className="text-xl font-bold mb-2 text-red-900">7. Dispute Resolution</h2>
          <p className="text-red-800">
            In the event of a lost, damaged, or delayed parcel, Caro will investigate based on the "Order Photos" provided at pickup and drop-off. Our liability is limited to the platform service fee unless additional insurance was purchased.
          </p>
        </div>

        {/* 8. Governing Law */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of the province and country in which the service is registered (Canada). International disputes will be handled through arbitration as defined by Caro's legal headquarters.
          </p>
        </div>
      </section>
    </div>
  );
}