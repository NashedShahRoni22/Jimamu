export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Data Collection</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>User profile details (username, phone number, date of birth, gender)</li>
            <li>Identity documents (for Riders only)</li>
            <li>Order information (pickup/drop-off, product details, price, receiver info)</li>
            <li>Transaction and wallet activity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Use of Data</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To verify users and Riders</li>
            <li>To process orders, payments, and deliveries</li>
            <li>To improve services and user experience</li>
            <li>To prevent fraud, disputes, or misuse</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
          <p>
            Jimamu does not sell personal data. Limited data may be shared with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Riders</strong> (delivery-related info)</li>
            <li><strong>Regulatory authorities</strong> (if legally required)</li>
            <li><strong>Payment processors</strong> (for transactions)</li>
          </ul>
        </div>

        {/* Continue sections 4–8 with same pattern */}
      </section>
    </div>
  )
}
