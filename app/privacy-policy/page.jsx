export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500">Effective Date: April 1, 2026 &bull; Version 1.0</p>
      </div>

      <section className="space-y-8 text-gray-700 max-w-4xl mx-auto">

        {/* 1. Who We Are */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">1. Who We Are and How to Reach Us</h2>
          <p className="mb-4">
            Jimamu Inc. ("Jimamu," "we," "our," or "us") is a federally incorporated Canadian company that operates
            the Caro peer-to-peer delivery platform (the "Platform" or "Caro"). We are the data controller responsible
            for the personal information collected through the Caro mobile application, website, and related services.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm">
            <p><strong>Privacy Officer:</strong> Jimamu Inc.</p>
            <p><strong>Mailing Address:</strong> 2505 116 St NW, Canada</p>
            <p><strong>Email:</strong> info@thecaro.app</p>
            <p><strong>General Legal:</strong> info@thecaro.app</p>
            <p className="mt-2 text-gray-500">We will respond to all privacy inquiries within 30 calendar days.</p>
          </div>
        </div>

        {/* 2. Scope */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">2. Scope of This Policy</h2>
          <p className="mb-3">This Privacy Policy applies to all individuals who interact with the Caro Platform, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customers (users who request delivery services);</li>
            <li>Riders (independent contractors who fulfill delivery requests);</li>
            <li>Visitors to our website or promotional pages; and</li>
            <li>Any other person whose personal information we process in connection with the Platform.</li>
          </ul>
          <p className="mt-3">
            This Policy covers data collected through the Caro mobile application (iOS and Android), the Caro web
            interface, communications with our support team, and any integrations with third-party services enabled
            by us. It does not govern the privacy practices of third parties whose links may appear on the Platform.
          </p>
        </div>

        {/* 3. Legal Framework */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">3. Legal Framework</h2>
          <p className="mb-3">We are committed to compliance with all applicable privacy and data protection laws, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation in Canada;</li>
            <li>The General Data Protection Regulation (GDPR) for users located in the European Economic Area;</li>
            <li>The California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA) for California residents;</li>
            <li>The Lei Geral de Proteção de Dados (LGPD) for users in Brazil;</li>
            <li>Any other applicable national, provincial, or territorial data protection laws in jurisdictions where the Platform operates.</li>
          </ul>
          <p className="mt-3">We apply the highest applicable standard from the above frameworks to all users, regardless of location, as a matter of policy.</p>
        </div>

        {/* 4. Data Collection */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">4. Personal Information We Collect</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4.1 Account &amp; Profile Information (All Users)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full legal name</li>
                <li>Username (chosen by user)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth (to verify users are of legal age)</li>
                <li>Profile photograph</li>
                <li>Password (stored in hashed, salted form — never in plain text)</li>
                <li>User-selected preferences and notification settings</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4.2 Identity Verification Information (Riders Only)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Photograph of government-issued identification (Passport, Driver's License, or equivalent)</li>
                <li>Selfie photograph for liveness detection and identity matching</li>
                <li><strong>Social Insurance Number (SIN)</strong> — collected solely for Canadian tax reporting obligations (T4A issuance) and stored using field-level encryption</li>
                <li>Results of third-party identity verification checks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4.3 Financial Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Bank account details (Transit Number, Institution Number, Account Number) for Rider earnings disbursement</li>
                <li>Mobile financial service (MFS) wallet identifiers</li>
                <li>Payment method details for Customers (processed and tokenized by our payment processor; we do not store raw card numbers)</li>
                <li>Transaction history, earnings records, and payout logs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4.4 Package &amp; Delivery Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Item description and declared value</li>
                <li>Photographs of packages (taken at pickup and delivery)</li>
                <li>Package dimensions and weight</li>
                <li>Pickup and drop-off addresses</li>
                <li>Special handling instructions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4.5 Location Data</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Precise GPS coordinates — collected from Riders during active delivery sessions when the app is set to "Online" status</li>
                <li>Approximate location — collected from Customers to display nearby available Riders and estimate delivery timeframes</li>
                <li>Route and movement data during an active delivery</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                Background location is collected from Riders only while their status is set to "Online." We do not collect Rider location data when the app is closed or when the Rider is set to "Offline."
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4.6 Device &amp; Technical Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Device type, operating system version, and unique device identifiers</li>
                <li>IP address and approximate network location</li>
                <li>App version and crash/diagnostic logs</li>
                <li>Browser type (for web users)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4.7 Communications Data</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>In-app messages between Customers and Riders (routed through our anonymized messaging system)</li>
                <li>Support tickets and chat transcripts</li>
                <li>Ratings and reviews submitted following a delivery</li>
                <li>Feedback, survey responses, and reports submitted to us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Use of Data */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">5. How and Why We Use Your Information</h2>
          <p className="mb-4">We process personal information only for specific, legitimate purposes. For each purpose, we identify the applicable legal basis:</p>

          <div className="space-y-4">
            {[
              {
                title: "5.1 Providing the Platform",
                desc: "We use your information to create and maintain your account, match Customers with available Riders, facilitate package pickup and delivery, process payments and disburse Rider earnings, and provide in-app navigation and real-time delivery tracking.",
                basis: "Performance of a contract with you."
              },
              {
                title: "5.2 Safety, Security & Fraud Prevention",
                desc: "We use information to verify the identity of Riders, detect and prevent fraudulent activity and abuse, monitor for prohibited items or suspicious delivery requests, and ensure the safety of both parties during a transaction.",
                basis: "Legitimate interests; compliance with legal obligations."
              },
              {
                title: "5.3 Legal & Regulatory Compliance",
                desc: "We process financial and identity data to issue Canadian tax documents (T4A and other applicable forms), comply with anti-money-laundering (AML) and know-your-customer (KYC) obligations, respond to lawful requests from government authorities or courts, and satisfy customs and import/export reporting requirements for international deliveries.",
                basis: "Legal obligation."
              },
              {
                title: "5.4 Customer Support & Dispute Resolution",
                desc: "We use your account data, transaction history, and package photographs to investigate and resolve disputes relating to lost, damaged, or undelivered packages, respond to support inquiries, and enforce our policies.",
                basis: "Legitimate interests; performance of a contract."
              },
              {
                title: "5.5 Platform Improvement & Analytics",
                desc: "We use aggregated, de-identified data to understand how the Platform is used, identify technical issues, improve matching algorithms, and develop new features.",
                basis: "Legitimate interests; consent (where required)."
              },
              {
                title: "5.6 Marketing & Communications",
                desc: "With your consent, we may send promotional emails, push notifications, or in-app messages about new features, promotions, or service updates. You may opt out at any time through your account settings.",
                basis: "Consent."
              },
            ].map(({ title, desc, basis }) => (
              <div key={title} className="pl-4 border-l-2 border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                <p className="text-sm mb-1">{desc}</p>
                <p className="text-sm text-gray-500"><em>Legal Basis: {basis}</em></p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Data Sharing */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">6. Information Sharing and Disclosure</h2>
          <p className="mb-4">Jimamu does not sell, rent, or trade your personal information to third parties for their marketing purposes. We share your information only in the following circumstances:</p>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">6.1 Between Platform Users</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>When a Rider accepts a delivery, the Customer will see the Rider's first name, profile photo, real-time location (during the delivery), and in-app rating.</li>
                <li>The Rider will see the Customer's first name, pickup address, delivery address, and package description. Full contact details are shared only through our anonymized relay system.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">6.2 Service Providers and Processors</h3>
              <p className="text-sm">We engage trusted third-party vendors under strict data processing agreements (DPAs), including payment processors, identity verification providers, cloud infrastructure providers, customer support software providers, analytics platforms (using de-identified data only), and SMS/push notification services.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">6.3 Legal and Regulatory Authorities</h3>
              <p className="text-sm">We may disclose your information to government agencies, law enforcement, tax authorities (including the CRA), or courts when required by applicable law, to enforce our Terms, prevent imminent harm, or for customs clearance in international deliveries.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">6.4 Business Transfers</h3>
              <p className="text-sm">In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the successor entity. We will provide notice before your information becomes subject to a materially different privacy policy.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">6.5 With Your Consent</h3>
              <p className="text-sm">We may share your information for any other purpose with your explicit, prior consent.</p>
            </div>
          </div>
        </div>

        {/* 7. International Transfers */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">7. International Data Transfers</h2>
          <p>
            Caro operates internationally. Your personal information may be transferred to, stored in, and processed in countries
            other than the country in which you reside, including Canada, the United States, and other jurisdictions where our
            service providers operate. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs),
            adequacy decisions, binding corporate rules, or your explicit consent where no other mechanism applies.
          </p>
        </div>

        {/* 8. Location Tracking */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">8. Location Data in Detail</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Rider Location</h3>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Collected only when the Rider's app status is set to "Online."</li>
                <li>Shared with the matched Customer in real-time during an active delivery.</li>
                <li>Retained in delivery records for dispute resolution and safety purposes.</li>
                <li>Not used for advertising or sold to data brokers.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Customer Location</h3>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Approximate location is used to surface available Riders and estimate delivery costs.</li>
                <li>Precise address is collected only when you create a delivery order.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Opting Out</h3>
              <p className="text-sm">You may disable location permissions through your device's operating system settings at any time. Disabling location access will prevent core delivery functionality from operating correctly.</p>
            </div>
          </div>
        </div>

        {/* 9. Data Security */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">9. Data Security</h2>
          <p className="mb-3">We implement administrative, technical, and physical safeguards including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transport Layer Security (TLS 1.2 or higher) for all data in transit</li>
            <li>AES-256 encryption for data at rest, including databases storing financial and identity information</li>
            <li>Field-level encryption for particularly sensitive data, including Social Insurance Numbers and bank account details</li>
            <li>Role-based access controls limiting internal access on a strict need-to-know basis</li>
            <li>Multi-factor authentication (MFA) for all internal systems and administrator accounts</li>
            <li>Regular third-party penetration testing and security audits</li>
            <li>Incident response procedures meeting applicable legal notification timelines (72 hours under GDPR; as soon as feasible under PIPEDA)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">No method of electronic transmission or storage is 100% secure. In the event of a breach affecting your rights and freedoms, we will notify you and applicable authorities as required by law.</p>
        </div>

        {/* 10. Data Retention */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">10. Data Retention</h2>
          <p className="mb-3">We retain personal information only for as long as necessary. Our retention schedule:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Data Type</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Account data (active accounts)", "Duration of account relationship + 2 years"],
                  ["Financial records and transaction history", "Minimum 7 years (Canadian tax law)"],
                  ["Identity verification documents (Rider IDs, SIN)", "Duration of Rider relationship + 7 years"],
                  ["Delivery records (package photos, logs)", "3 years for dispute resolution"],
                  ["Support communications", "2 years from date of resolution"],
                  ["Device logs and analytics data", "13 months (then aggregated/de-identified)"],
                ].map(([type, period]) => (
                  <tr key={type} className="even:bg-gray-50">
                    <td className="p-3 border border-gray-200">{type}</td>
                    <td className="p-3 border border-gray-200">{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">Upon account deletion, we will delete or anonymize your personal information within 90 days, except where retention is required by law or for outstanding disputes or legal proceedings.</p>
        </div>

        {/* 11. User Rights */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">11. Your Rights</h2>
          <p className="mb-4">Depending on your location and applicable law, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right of Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data. You can update most account details directly in-app.</li>
            <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal information, subject to our legal obligations.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for any processing based on consent at any time.</li>
            <li><strong>Right to Data Portability:</strong> Receive your personal information in a structured, machine-readable format.</li>
            <li><strong>Right to Object:</strong> Object to processing where we rely on legitimate interests as the legal basis.</li>
            <li><strong>Right to Restrict Processing:</strong> Request restriction of processing in certain circumstances.</li>
            <li><strong>Right Not to Be Subject to Automated Decisions:</strong> Request human review of decisions made solely through automated processing.</li>
          </ul>
          <p className="mt-4 text-sm">
            To exercise any of these rights, contact us at <strong>privacy@caroapp.com</strong>. We will respond within 30 days.
            If you are dissatisfied with our response, you have the right to lodge a complaint with the Office of the Privacy Commissioner of Canada (<a href="https://www.priv.gc.ca" className="text-blue-600 underline" target="_blank" rel="noreferrer">www.priv.gc.ca</a>).
          </p>
        </div>

        {/* 12. Children's Privacy */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">12. Children's Privacy</h2>
          <p>
            The Caro Platform is not directed to children under the age of 18. We do not knowingly collect personal information
            from individuals under 18 years of age. If you believe a minor has provided us with personal information, please
            contact us at <strong>privacy@caroapp.com</strong>.
          </p>
        </div>

        {/* 13. Cookies */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">13. Cookies and Tracking Technologies</h2>
          <p className="mb-3">Our website and app may use cookies, pixel tags, SDKs, and similar tracking technologies to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Maintain your session and authentication state;</li>
            <li>Remember your preferences;</li>
            <li>Analyze usage patterns and improve the Platform; and</li>
            <li>Deliver relevant communications (with your consent).</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">You can manage cookie preferences through your browser settings. Our mobile application relies on SDK-level tracking, which can be managed through your device's privacy settings.</p>
        </div>

        {/* 14. Changes */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make material changes, we will notify you via
            in-app notification, email, or prominent notice on our website at least <strong>14 days</strong> before the
            change takes effect. Your continued use of the Platform after the effective date constitutes acceptance of the revised Policy.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>If you have questions about this policy or wish to exercise your rights, contact our Privacy Officer:</p>
          <div className="mt-4 text-sm space-y-1">
            <p><strong>Email:</strong> info@thecaro.app</p>
            <p><strong>Privacy Requests:</strong> privacy@caroapp.com</p>
            <p><strong>Address:</strong> 2505 116 St NW, Canada</p>
            <p><strong>Response Time:</strong> Within 30 calendar days</p>
          </div>
        </div>

      </section>
    </div>
  );
}