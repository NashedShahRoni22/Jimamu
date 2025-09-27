export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>Jimamu</strong>, a national and global parcel delivery platform.
            By accessing or using our platform, you agree to comply with and be bound
            by these Terms & Conditions. Please read them carefully before using the service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. User Registration</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>All users must register with a valid email address and verify their account.</li>
            <li>Users must provide accurate details including unique username, phone number, date of birth, and gender.</li>
            <li>
              Riders must provide valid identification documents (Passport, Driving License, or Birth Certificate with scanned image) for verification. Approval is subject to admin review.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Services</h2>
          <p>
            Jimamu connects <strong>Users</strong> (who post delivery requests) with{" "}
            <strong>Riders</strong> (who bid to complete deliveries).
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Global Orders</strong> – Delivery within the country.</li>
            <li><strong>National Orders</strong> – International deliveries.</li>
          </ul>
          <p className="mt-2">
            Users are responsible for providing accurate details about pickup & drop-off
            locations, receiver information, product type, weight, and value.
          </p>
        </div>

        {/* Continue sections 4–10 with same pattern */}
      </section>
    </div>
  )
}
