export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
        <p className="text-gray-500">Effective Date: April 1, 2026 &bull; Version 1.0</p>
      </div>

      <section className="space-y-8 text-gray-700 max-w-4xl mx-auto">

        {/* 1. Agreement */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-900">
          BY CREATING AN ACCOUNT, ACCESSING, OR USING THE PLATFORM IN ANY WAY, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. IF YOU DO NOT AGREE, DO NOT USE THE PLATFORM.
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">1. Agreement to Terms</h2>
          <p>
            These Terms of Use ("Terms") constitute a legally binding agreement between you ("User," "Customer," "Rider," or "you")
            and Jimamu Inc. ("Jimamu," "Caro," "we," or "us") governing your access to and use of the Caro peer-to-peer delivery
            platform, including the mobile application, website, and all associated services (collectively, the "Platform").
          </p>
          <p className="mt-2 text-sm text-gray-500">
            These Terms apply to all users globally. Jurisdiction-specific terms may supplement these Terms where applicable.
            In the event of a conflict, jurisdiction-specific terms prevail for users in that jurisdiction.
          </p>
        </div>

        {/* 2. Nature of Service */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">2. The Caro Platform — Nature of Service</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4 text-sm">
            <strong>IMPORTANT:</strong> Jimamu is not a delivery company. Caro does not employ Riders, does not own delivery vehicles,
            and does not take physical possession of packages at any point. The actual delivery service is performed by Riders who
            are independent contractors.
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customers use the Platform to post delivery requests, negotiate compensation with Riders, and track deliveries.</li>
            <li>Riders use the Platform to discover delivery opportunities, accept requests, complete deliveries, and receive compensation.</li>
            <li>All negotiations and agreements for price, timing, and handling are made directly between Customers and Riders through the Platform's offer system.</li>
          </ul>
        </div>

        {/* 3. Eligibility */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">3. Eligibility</h2>
          <p className="mb-3">To use the Caro Platform, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be at least 18 years of age;</li>
            <li>Have the legal capacity to enter into binding contracts in your jurisdiction;</li>
            <li>Not be prohibited from using the Platform under applicable law;</li>
            <li>Provide accurate, complete, and current account information; and</li>
            <li>Agree to these Terms and our Privacy Policy.</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            Riders must additionally satisfy all identity verification and background check requirements as determined by Caro from
            time to time. Caro reserves the right to refuse Platform access to any person at its sole discretion.
          </p>
        </div>

        {/* 4. Account Registration */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">4. Account Registration and Security</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">4.1 Registration</h3>
              <p className="text-sm">You must create an account to use the Platform. You agree to provide accurate, truthful, and complete information during registration and to keep your account information current at all times. You may not impersonate another person or create an account on behalf of someone else without authorization.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">4.2 Rider Verification</h3>
              <p className="text-sm mb-2">Riders must complete Caro's identity verification process before becoming eligible to accept delivery requests. This process includes:</p>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Submission of a valid, unexpired government-issued photo ID (Passport, Driver's License, or equivalent national ID);</li>
                <li>A real-time selfie photograph for identity matching and liveness detection;</li>
                <li>Valid banking information for earnings disbursement (Canadian bank: Transit Number, Institution Number, and Account Number; or approved MFS wallet);</li>
                <li>Social Insurance Number (SIN) for users earning income in Canada, solely for tax reporting purposes;</li>
                <li>Successful completion of any background check or screening process required by Caro; and</li>
                <li>Agreement to all Rider-specific terms set out herein.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">4.3 Account Security</h3>
              <p className="text-sm">You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at <strong>support@caroapp.com</strong> if you suspect unauthorized access.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">4.4 One Account Per Person</h3>
              <p className="text-sm">You may hold only one active account on the Platform. Creating duplicate or fraudulent accounts is a material breach of these Terms and grounds for immediate termination.</p>
            </div>
          </div>
        </div>

        {/* 5. Service Types */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">5. Service Categories</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">5.1 National (Domestic) Deliveries</h3>
              <p className="text-sm">Deliveries between points within the same country. Standard customs and import/export regulations do not apply, though applicable local laws regarding prohibited items remain in force.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">5.2 Global (International) Deliveries</h3>
              <p className="text-sm">Deliveries crossing one or more international borders. Both the Customer and Rider acknowledge that international deliveries are subject to the customs laws, import/export regulations, and prohibited item lists of all relevant countries. It is the Customer's responsibility to ensure package contents are lawful in all relevant jurisdictions.</p>
              <p className="mt-2 text-sm text-gray-500">Caro does not provide customs brokerage services. Caro accepts no liability for seizures, penalties, or delays arising from customs non-compliance.</p>
            </div>
          </div>
        </div>

        {/* 6. Pricing */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">6. The Offer &amp; Negotiation System</h2>
          <p className="mb-3">Caro operates a negotiation-based pricing model. There is no fixed price for any delivery:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>A Customer posts a delivery request with an initial offer amount they are willing to pay.</li>
            <li>Riders can view available requests and negotiate compensation directly with the Customer through the Platform's messaging and counter-offer functionality.</li>
            <li>A binding delivery agreement is formed only when both parties explicitly accept the same agreed price through the Platform.</li>
            <li>Once accepted, neither party may unilaterally alter the agreed price without the other's consent.</li>
          </ul>

          <div className="mt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-semibold mb-2">Minimum Offer Floors</p>
            <ul className="list-none space-y-2 font-medium">
              <li>🇨🇦 <strong>National (Domestic):</strong> Minimum offer starts at <strong>CAD $10.00</strong>.</li>
              <li>🌎 <strong>Global (International):</strong> Minimum offer starts at <strong>CAD $30.00</strong>.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              These minimums represent floors, not suggested rates. Customers are strongly encouraged to offer compensation commensurate
              with the weight, distance, urgency, and fragility of the package. Caro may adjust minimum floors at any time with 14 days' advance notice.
            </p>
          </div>
        </div>

        {/* 7. Prohibited Items */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">7. Prohibited Items</h2>

          <div className="mb-4">
            <h3 className="font-semibold text-red-800 mb-2">Absolutely Prohibited (No Exceptions)</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Illegal drugs, controlled substances, precursors, or paraphernalia;</li>
              <li>Firearms, ammunition, explosives, or weapons of any kind;</li>
              <li>Hazardous materials, including flammable, corrosive, toxic, radioactive, or biological substances;</li>
              <li>Child sexual abuse material or any content that exploits minors;</li>
              <li>Counterfeit goods, pirated intellectual property, or fraudulent documents;</li>
              <li>Human remains, organs, or biological specimens not lawfully authorized for transport;</li>
              <li>Live animals (without prior express written authorization from Caro); and</li>
              <li>Any item whose shipment is prohibited by applicable law.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Items Requiring Prior Disclosure and Approval</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>High-value items (declared value exceeding CAD $1,000);</li>
              <li>Prescription medications or regulated medical devices;</li>
              <li>Alcohol and tobacco products (subject to applicable age verification and licensing laws);</li>
              <li>Currency, negotiable instruments, or bearer bonds;</li>
              <li>Perishable goods requiring temperature control; and</li>
              <li>Fine art, antiques, or irreplaceable items.</li>
            </ul>
          </div>

          <p className="mt-3 text-sm text-gray-600">If you are unsure whether an item is permitted, contact <strong>support@caroapp.com</strong> before posting a delivery request.</p>
        </div>

        {/* 8. Customer Responsibilities */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">8. Customer Responsibilities</h2>
          <p className="mb-3">As a Customer, you are solely responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Ensuring that your package contents comply with all applicable laws and Caro's Prohibited Items policy;</li>
            <li>Providing accurate and complete descriptions of the package contents, dimensions, weight, and declared value;</li>
            <li>Taking and uploading clear photographs of the package at the time of handoff to the Rider;</li>
            <li>Being available or having an authorized representative present at the pickup and delivery locations at the agreed time;</li>
            <li>Providing accurate delivery addresses and contact information for the recipient;</li>
            <li>Obtaining any necessary permits, licenses, or authorizations for transport, particularly for international shipments; and</li>
            <li>Securing adequate insurance for high-value items (Caro's platform-level liability cap applies as described in Section 13).</li>
          </ul>
        </div>

        {/* 9. Rider Responsibilities */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">9. Rider Responsibilities</h2>
          <p className="mb-3">As a Rider, you are solely responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Maintaining a valid government-issued photo ID and, if driving, a valid driver's license and motor vehicle insurance;</li>
            <li>Complying with all applicable traffic laws, transportation regulations, and customs requirements;</li>
            <li>Taking and uploading clear photographs of the package at pickup and at delivery;</li>
            <li>Keeping the package secure, undamaged, and free from tampering throughout the delivery;</li>
            <li>Refusing any package that appears to contain prohibited items, and reporting such suspicion to Caro immediately;</li>
            <li>Completing the delivery within a reasonable timeframe and communicating proactively about any delays;</li>
            <li>Collecting the delivery confirmation (via OTP or digital signature) from the recipient before marking the delivery as complete;</li>
            <li>Complying with applicable customs and border control requirements for international deliveries; and</li>
            <li>Reporting all Caro earnings to the relevant tax authorities and paying all applicable taxes, including income tax and HST/GST in Canada.</li>
          </ul>
        </div>

        {/* 10. Independent Contractor */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">10. Independent Contractor Status</h2>
          <p className="mb-3">
            Riders are independent contractors and not employees, agents, partners, or joint venturers of Jimamu Inc.
            Nothing in these Terms shall be construed to create an employment relationship between Jimamu and any Rider.
          </p>
          <p className="text-sm">As an independent contractor, each Rider retains the right to determine their own working hours and accept or decline any delivery request; is solely responsible for their own equipment, transportation costs, and expenses; is not entitled to employment benefits or unemployment insurance; is responsible for their own tax obligations; and has no authority to bind or represent Jimamu.</p>
        </div>

        {/* 11. Payments */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">11. Payments, Escrow, and Payouts</h2>
          <div className="space-y-3">
            {[
              { title: "11.1 Payment Processing", text: "The agreed delivery price is charged to the Customer's payment method at the time of delivery confirmation. By providing payment information, you authorize Caro to charge the agreed amount plus any applicable taxes or platform fees." },
              { title: "11.2 Escrow", text: "Funds are held in escrow by Caro from the time of Customer payment until delivery is confirmed via OTP verification or recipient digital signature. Caro will not release funds to the Rider until delivery confirmation is received." },
              { title: "11.3 Rider Payouts", text: "Following successful delivery confirmation, Caro will disburse Rider earnings to the verified bank account or MFS wallet on file, less any applicable platform service fee. Standard payout processing time is 1–5 business days." },
              { title: "11.4 Platform Service Fee", text: "Caro charges a platform service fee on each completed transaction. The current fee schedule is disclosed in the app at the time of posting. Caro reserves the right to modify its fee structure with 14 days' notice." },
              { title: "11.5 Refunds", text: "Customers may be entitled to a refund if the Rider fails to complete the delivery, the package is confirmed lost or stolen, or a dispute is resolved in the Customer's favour. Refund requests must be submitted within 72 hours of the scheduled delivery completion time." },
              { title: "11.6 Tax Obligations", text: "Riders are solely responsible for reporting all Platform earnings to applicable tax authorities. Caro will issue a T4A (or equivalent) to Canadian-resident Riders who earn CAD $500 or more in a calendar year." },
            ].map(({ title, text }) => (
              <div key={title} className="pl-4 border-l-2 border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 12. Delivery Confirmation */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">12. Delivery Confirmation</h2>
          <p className="mb-3">A delivery is only considered complete when the Rider has:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Delivered the package to the confirmed recipient at the specified delivery address;</li>
            <li>Obtained the recipient's delivery confirmation via the Platform's OTP verification system or digital signature feature; and</li>
            <li>Uploaded a photograph of the delivered package at the delivery location.</li>
          </ul>
          <p className="mt-3 text-sm text-red-700">Misrepresenting a delivery as complete when it is not is grounds for immediate account termination, withholding of escrow funds, and potential legal action.</p>
        </div>

        {/* 13. Liability */}
        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
          <h2 className="text-xl font-bold mb-3 text-red-900">13. Liability, Limitation of Liability, and Disclaimer</h2>
          <p className="text-red-800 text-sm mb-3">
            CARO IS PROVIDED "AS IS" AND "AS AVAILABLE." JIMAMU EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,
            WHETHER EXPRESS, IMPLIED, OR STATUTORY.
          </p>
          <p className="text-red-800 text-sm mb-3">
            In the event of a lost, damaged, or delayed package, Caro's liability is strictly limited to a refund of the
            platform service fee charged on that transaction, unless the Customer has separately purchased supplemental
            delivery insurance through the Platform.
          </p>
          <p className="text-red-800 text-sm font-semibold">
            THE MAXIMUM AGGREGATE LIABILITY OF JIMAMU TO ANY USER SHALL NOT EXCEED THE GREATER OF: (i) THE TOTAL PLATFORM
            SERVICE FEES PAID BY THAT USER IN THE 12 MONTHS PRECEDING THE CLAIM; OR (ii) CAD $500.
          </p>
          <p className="text-red-700 text-sm mt-3">
            Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud or
            fraudulent misrepresentation, or any liability that cannot be excluded by applicable law.
          </p>
        </div>

        {/* 14. Indemnification */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">14. Indemnification</h2>
          <p className="mb-3">You agree to defend, indemnify, and hold harmless Jimamu Inc. and its officers, directors, employees, and agents from any claims arising out of or in connection with:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Your use or misuse of the Platform;</li>
            <li>Your violation of these Terms or any applicable law or regulation;</li>
            <li>Your shipment of prohibited items;</li>
            <li>Any false or misleading information provided by you on the Platform;</li>
            <li>Your infringement of any third-party rights; or</li>
            <li>Any dispute between you and another user of the Platform.</li>
          </ul>
        </div>

        {/* 15. Dispute Resolution */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">15. Dispute Resolution &amp; Arbitration</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">15.1 Informal Resolution</h3>
              <p className="text-sm">Before initiating any formal dispute process, you agree to contact Caro at <strong>legal@caroapp.com</strong> and attempt to resolve the dispute informally for a period of 30 days.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">15.2 Binding Arbitration</h3>
              <p className="text-sm">If informal resolution is unsuccessful, any dispute shall be finally resolved by binding arbitration. For users in Canada: in accordance with the rules of the ADR Institute of Canada, Inc. (ADRIC), in the province of Caro's registered office. For users outside Canada: in accordance with the UNCITRAL Arbitration Rules, with the seat of arbitration in Toronto, Ontario, Canada.</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-1">15.3 Class Action Waiver</h3>
              <p className="text-sm text-orange-800">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION, COLLECTIVE ACTION, OR REPRESENTATIVE PROCEEDING. ALL DISPUTES MUST BE BROUGHT IN YOUR INDIVIDUAL CAPACITY.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">15.5 Governing Law</h3>
              <p className="text-sm">These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. To the extent courts have jurisdiction, you consent to the exclusive jurisdiction of the courts of Ontario, Canada.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">15.6 Limitation Period</h3>
              <p className="text-sm">Any claim arising out of these Terms must be brought within one (1) year of the date the cause of action arose, or such claim shall be permanently barred.</p>
            </div>
          </div>
        </div>

        {/* 16. Prohibited Conduct */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">16. Prohibited Conduct</h2>
          <p className="mb-3">You agree not to engage in any of the following:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Violating any applicable law, regulation, or third-party right;</li>
            <li>Submitting false or misleading information, including inaccurate package descriptions or declared values;</li>
            <li>Tampering with, opening, or otherwise interfering with any package entrusted to you as a Rider;</li>
            <li>Using the Platform to facilitate any illegal transaction or to launder proceeds of crime;</li>
            <li>Threatening, harassing, or abusing other users;</li>
            <li>Attempting to circumvent the Platform's payment system by conducting transactions off-Platform;</li>
            <li>Reverse-engineering, decompiling, or attempting to extract the source code of the Platform;</li>
            <li>Introducing malware, viruses, or other harmful code into the Platform;</li>
            <li>Creating multiple accounts to circumvent a suspension or ban; or</li>
            <li>Using automated scripts or bots to interact with the Platform.</li>
          </ul>
        </div>

        {/* 17. Ratings */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">17. Ratings, Reviews, and Community Standards</h2>
          <p className="text-sm">
            Following each completed delivery, both Customers and Riders may rate and review the transaction. Ratings and reviews must be truthful, based on genuine experience, and must not contain defamatory, harassing, or discriminatory content.
            Riders whose ratings fall below a platform-determined threshold may have their ability to accept new orders suspended pending review.
          </p>
        </div>

        {/* 18. Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">18. Intellectual Property</h2>
          <p className="text-sm">
            The Caro Platform, including its design, user interface, software, trademarks, logos, and content created by Jimamu, is
            the exclusive property of Jimamu Inc. and is protected by applicable intellectual property laws. By submitting content
            to the Platform (including photos, messages, or reviews), you grant Jimamu a non-exclusive, worldwide, royalty-free,
            sublicensable license to use, reproduce, modify, and display such content for the purposes of operating and improving the Platform.
          </p>
        </div>

        {/* 19. Termination */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">19. Termination and Suspension</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">19.1 By You</h3>
              <p className="text-sm">You may terminate your account at any time by submitting a deletion request through your account settings or by contacting <strong>support@caroapp.com</strong>. Termination does not relieve you of any outstanding payment obligations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">19.2 By Caro</h3>
              <p className="text-sm">Jimamu may suspend or terminate your account at any time, with or without notice, for any reason including breach of these Terms, submission of prohibited items, fraudulent conduct, failure to pass identity verification, low ratings, or suspected money laundering.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">19.3 Effect of Termination</h3>
              <p className="text-sm">Upon termination, your right to access the Platform ceases immediately. Sections 10, 13, 14, 15, and 20 survive termination.</p>
            </div>
          </div>
        </div>

        {/* 20. General */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-b pb-2">20. General Provisions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              { title: "20.1 Entire Agreement", text: "These Terms, together with the Privacy Policy and any supplemental terms, constitute the entire agreement between you and Jimamu with respect to the Platform." },
              { title: "20.2 Severability", text: "If any provision is found invalid or unenforceable, it shall be modified to the minimum extent necessary, and the remaining provisions remain in full force." },
              { title: "20.3 Waiver", text: "No failure or delay by Jimamu in exercising any right under these Terms shall constitute a waiver of that right. Any waiver must be in writing." },
              { title: "20.4 Assignment", text: "You may not assign or transfer any of your rights under these Terms without Jimamu's prior written consent. Jimamu may assign these Terms without restriction." },
              { title: "20.5 Force Majeure", text: "Jimamu is not liable for any failure or delay in performance resulting from circumstances beyond our reasonable control, including acts of God, natural disasters, war, or internet disruptions." },
              { title: "20.8 Amendments", text: "Jimamu reserves the right to modify these Terms at any time. For material changes, we will provide at least 14 days' advance notice. Continued use after the effective date constitutes acceptance." },
            ].map(({ title, text }) => (
              <div key={title} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
          <p className="font-bold text-gray-900">JIMAMU INC.</p>
          <p className="text-gray-600 text-sm">Operators of the Caro Platform</p>
          <p className="text-gray-600 text-sm mt-1">info@thecaro.app</p>
          <p className="text-gray-400 text-xs mt-3">© 2026 Jimamu Inc. All rights reserved.</p>
        </div>

      </section>
    </div>
  );
}