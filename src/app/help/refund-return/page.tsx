import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Refund policy</h1>
          <p className="text-gray-600 leading-relaxed">
            At the heart of our brand is a simple belief: happy customers build lasting success. That&apos;s why we&apos;re dedicated to ensuring every customer is completely satisfied — your happiness is our top priority.
          </p>
        </div>

        {/* Money-Back Guarantee */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Money-Back Guarantee</h2>
          <p className="text-gray-600 mb-4">
            We <span className="font-semibold">offer a 90-day money-back guarantee for first-time, non-subscription purchases of each unique product or bundle</span> — because we stand behind the quality of what we create. Want to learn more about how it works and which purchases are eligible?{' '}
            <Link href="https://wellness-nest.gorgias.help/en-US/wellness-nests-money-back-guarantee-812287?ref=jbjycrqj&sub_id=" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
              Check out this article
            </Link> for full details. If you're not satisfied with the results, simply reach out to our Customer Experience Team to check your eligibility for a refund by{' '}
            <Link href="https://wellnessnest.co/pages/contact-us?_ab=0&key=1719739279494" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
              CLICKING HERE
            </Link>. If refunds are approved, we may ask you to safely destroy the product before issuing a refund — this precaution helps ensure that potentially compromised products are not consumed by people, pets, or wildlife.
          </p>
        </section>

        {/* Claiming Refunds */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Claiming Refunds</h2>
          <p className="text-gray-600 mb-4">
            At Wellness Nest, your satisfaction is our top priority. Here are some things you should note about our policy for claiming refunds. Refunds for subscription orders placed after December 1, 2024, are not eligible under this guarantee.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Eligible for Refund:</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">
                  1. <span className="font-semibold">Money-Back Guarantee:</span> You have <span className="font-semibold">90 days from the delivery date</span> to submit a refund <span className="font-semibold">claim for eligible one-time purchases</span>.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600">
                  2. <span className="font-semibold">Limit on Refund Quantity:</span> Only up to 2 products per customer are eligible for a refund. Requests for a refund on more than 2 products will not be accepted.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600">
                  3. For <span className="font-semibold">order cancellations</span>, refunds are processed immediately. The time it takes to reflect on your transaction depends on your payment method.
                </p>
                
                <ul className="ml-6 mt-2 space-y-2">
                  <li className="text-gray-600">
                    • If the order is <span className="font-semibold">canceled before shipping</span>, you&apos;ll receive a <span className="font-semibold">full refund, including shipping fees</span>.
                  </li>
                  <li className="text-gray-600">
                    • If the order has already <span className="font-semibold">shipped</span>, your refund will <span className="font-semibold">exclude shipping fees & a 20% deduction</span> will be applied for processing and handling costs.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Not Eligible for Refund:</h3>
            
            <p className="text-gray-600 mb-4">
              Our <span className="font-semibold">Money-Back Guarantee does not apply</span> in the following cases:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">1. Misuse or Unauthorized Purchases:</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">
                    • We do not accept returns or issue refunds for products that have been misused, intentionally damaged, expired, discontinued, or purchased from unauthorized resellers.
                  </li>
                  <li className="text-gray-600">
                    • Misuse includes: exceeding the recommended dosage, improper storage (e.g., exposure to heat or moisture), mixing with other substances against guidelines, or using the product in any way not aligned with its intended use.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">2. International Orders:</h4>
                <p className="text-gray-600">
                  No refunds are offered for international orders, except under special circumstances at our discretion. &quot;International&quot; is defined as any and all countries outside of the United States of America.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">3. Subscription Orders:</h4>
                <p className="text-gray-600">
                  All subscription orders are excluded from the guarantee. We recommend trying products via one-time purchase before subscribing.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">4. Delivery Issues:</h4>
                <p className="text-gray-600">
                  Lost-in-transit items, damaged packaging, or orders marked as &quot;delivered&quot; but not found. In such cases, we're happy to offer a <span className="font-semibold">replacement</span>, but <span className="font-semibold">refunds are issued at our discretion</span>.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">5. Incorrect or Incomplete Address / Unclaimed Packages:</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">
                    • Orders with inaccurate or incomplete addresses, unclaimed parcels, or deliveries marked as &quot;delivered&quot; but not received due to customer error are not eligible for a refund.
                  </li>
                  <li className="text-gray-600">
                    • An <span className="font-semibold">incomplete address</span> includes any order missing essential delivery details such as: Street number or name, Apartment, suite, or unit number (if applicable), City, State, Postal/Zip code, City, or country information
                  </li>
                  <li className="text-gray-600">
                    • Please double-check your shipping details before placing your order to make sure everything is accurate. Unfortunately, we are not liable for delivery issues resulting from incorrect or incomplete information.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">6. Refusal of Delivery & Failed to pick up:</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">
                    • Orders returned due to the customer refusing to accept delivery are not eligible for a refund.
                  </li>
                  <li className="text-gray-600">
                    • Orders returned because the customer declined to pay customs or import duties and refused delivery will not be refunded.
                  </li>
                  <li className="text-gray-600">
                    • Orders returned because the customer failed to pick up the package are also not eligible for a refund.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">7. Fraud or Policy Abuse:</h4>
                <p className="text-gray-600">
                  If there&apos;s evidence of fraudulent activity or repeated refund claims, we reserve the right to deny the request.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">8. Loyalty Program, Discounted or Promotional Items:</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">
                    • Products purchased under <span className="font-semibold">promotions or discounts</span> are typically not eligible for refunds.
                  </li>
                  <li className="text-gray-600">
                    • Refunds are not applicable to purchases and partial payments made using Loyalty Program (store credit/reward points).
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">9. Failure to follow Return Process:</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">
                    • If the return process is not followed correctly (e.g., no prior request, missing info, or sending items without approval), <span className="font-semibold">no refund will be issued</span>. You can find more details about our return policy here:{' '}
                    <Link href="https://wellness-nest.gorgias.help/en-US/articles/returns-295366?ref=jbjycrqj&sub_id=" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                      [link]
                    </Link>.
                  </li>
                  <li className="text-gray-600">
                    • We <span className="font-semibold">only accept returns within the U.S.</span>, and <span className="font-semibold">only if approved in advance</span>. Returns are requested on a case-by-case basis to help us improve product quality. <span className="font-semibold">Unauthorized or improperly submitted returns will not be refunded</span>.
                  </li>
                  <li className="text-gray-600">
                    • We <span className="font-semibold">do not accept returns</span> for international orders. Partial refunds up to 50% or reshipments may be considered on a <span className="font-semibold">case-by-case basis</span>, at our discretion.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">10. Used or Opened Products:</h4>
                <p className="text-gray-600">
                  Some products may only be refunded if they are unopened and unused.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">11. Product Experience & Sensory Feedback</h4>
                <p className="text-gray-600">
                  Complaints related to taste, color, or scent are not eligible for a refund, as we do not process returns based on subjective sensory feedback.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">12. Incorrect Purchases</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">• Buyer&apos;s remorse, change of mind, or accidental over-ordering</li>
                  <li className="text-gray-600">• Customers are responsible for ensuring they order the correct products and quantities for their individual needs.</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  If you&apos;re unsure about which product to choose or how much to order, we strongly encourage you to contact our{' '}
                  <Link href="https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                    Customer Experience Team
                  </Link>
                  before placing your order. We&apos;re happy to help you make the best choice!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Turnaround Time */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Turnaround Time</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Important note:</h3>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-600">
                • When processing refunds, there is often some processing time required by banks before a refund is reflected in your bank statement. We ask that you refrain from filing a dispute or chargeback request with your financial institution as it will significantly prolong your refund process, <span className="font-semibold">sometimes taking over 60 days</span>, depending on your bank as they need to investigate thoroughly and review the case.
              </li>
              <li className="text-gray-600">
                • If you experience any issues with your order, product, refund timeline, or anything else impacting your experience with us, we strongly encourage you to contact our{' '}
                <Link href="https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                  Customer Experience Team
                </Link>
                first. We&apos;re here to help resolve your concerns quickly and effectively—often much faster than going through a dispute or chargeback process.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Method Refund Timeframes</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">PayPal:</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">
                    • At Wellness Nest, we typically <span className="font-semibold">process PayPal refunds within 1–2 business days</span> from the time your request is approved – Once processed, PayPal refunds take effect instantly and will reflect in your PayPal balance in real-time.
                  </li>
                  <li className="text-gray-600">
                    • Please note: If you use PayPal echeck, it typically <span className="font-semibold">takes 4–7 business days</span>, and in some cases up to 10 business days, for the payment to clear {' '}
                    <Link href="https://www.paypal.com/sg/cshelp/article/why-hasnt-the-echeque-that-i-received-cleared-yet-help283?ref=jbjycrqj&sub_id=" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
			— as estimated by PayPal. 
		   </Link>

PayPal can only issue the refund after the eCheck has successfully cleared.
                  </li>
                  <li className="text-gray-600">
                    • If your eCheck has not cleared and the refund has not been received <span className="font-semibold">after 10 days</span>, kindly{' '}
                    <Link href="https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                      contact us
                    </Link>
                    for best assistance.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Credit and Debit card:</h4>
                <ul className="ml-6 space-y-2">
                  <li className="text-gray-600">
                    • Processing time varies depending on your card issuing bank&apos;s turnaround time. This can range anywhere <span className="font-semibold">between 5 to 10 banking days</span> before it&apos;s reflected in your bank statement.
                  </li>
                  <li className="text-gray-600">
                    • We recommend contacting your bank first if the refund is not reflected in your bank statement after 10 business days. Once you have received an update or confirmation from your bank, kindly reach out to us with the details so our team can assist you further and provide the best possible support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pausing, Skipping, or Delaying Subscription Orders */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pausing, Skipping, or Delaying Subscription Orders</h2>
          <p className="text-gray-600 mb-4">
            We understand the need for flexibility! If you&apos;d like to take a break, you can pause, skip, or delay your upcoming shipments by simply filling out{' '}
            <Link href="https://wellnessnest.co/pages/manage-my-subscription?_ab=0&key=1721982867650" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
              this form
            </Link>. Our Customer Experience Team will take care of the rest for you.
          </p>
          <p className="text-gray-600">
            For a seamless experience, submit your request before your next subscription order date. If you have any questions, feel free to reach out to us!
          </p>
        </section>

        {/* Changing order details or cancelling your order */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changing order details or cancelling your order</h2>
          <p className="text-gray-600 mb-4">
            Changed your mind? <span className="font-semibold">Get in touch with us</span> as soon as possible with your order number ready.
          </p>
          
          <p className="text-gray-600 mb-4">
            We might be able to help you amend your order details if it has not been fulfilled, but we cannot promise that we are always able to. If we are not able to cancel, we can refund the full amount paid for the order to your original mode of payment. Read our{' '}
            <Link href="https://wellness-nest.gorgias.help/en-US/how-do-i-cancel-an-order-purchased-directly-from-wellness-nest-813061?ref=jbjycrqj&sub_id=" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
              guide to canceling orders
            </Link>
            to learn how.
          </p>
          
          <p className="text-gray-600 mb-4">
            Sometimes, the processing of your shipment is too far away for us to be able to make changes to the order. In these instances, we would not be able to cancel or make changes to your order.
          </p>
          
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-gray-600">
              • Requests to modify or cancel an order must be made within <span className="font-semibold">12 hours</span> of placing it. We will process your request as long as the order has not yet been fulfilled or shipped.
            </li>
            <li className="text-gray-600">
              • If the request is made outside our business hours <span className="font-semibold">8:30 AM – 5:00 PM (PST)</span> or during recognized holidays, processing may be delayed, and changes or cancellations <span className="font-semibold">cannot be guaranteed</span>.
            </li>
          </ul>
          
          <p className="text-gray-600">
            An important point to note is that <span className="font-semibold">cancelling your subscription</span> does not cancel an order that has already been charged and placed through the subscription.
          </p>
        </section>

        {/* Returns */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns</h2>
          <p className="text-gray-600 mb-6">
            We do not accept returns of our supplements unless we explicitly make a request for the return. In the event that we do, it is to assist us in our efforts to continuously improve the quality of our products. Should we request for the product to be returned, we will provide detailed instructions.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">U.S. DOMESTIC RETURN POLICY</h3>
            <p className="text-gray-600 mb-4">
              Wellness Nest accepts returns only within the United States, and all returns must be requested and approved by us. Returns sent without authorization or outside of our return process will be considered invalid, and no refund will be issued.
            </p>
            
            <p className="text-gray-600 mb-4">If you intend to return, please note the following:</p>
            
            <ul className="space-y-2 ml-6 mb-4">
              <li className="text-gray-600">
                • Contact our{' '}
                <Link href="https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                  Customer Experience Team
                </Link>
                first to obtain approval and return instructions. Unapproved returns will not be accepted or refunded.
              </li>
              <li className="text-gray-600">• Include <span className="font-semibold">all items</span> from the eligible order(s).</li>
              <li className="text-gray-600">
                • All products must be unopened, sealed, and in resellable condition. You include all items from the three eligible orders for the return to be approved.
              </li>
              <li className="text-gray-600">• The return shipping cost is the customer&apos;s responsibility.</li>
              <li className="text-gray-600">
                • Once the returned product has been received, inspected, and deemed eligible for a refund, we will issue a full refund of your original order total.
              </li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              We will process the refund immediately upon confirming the returned orders are unopened and sealed after receiving the products. Once your return has been shipped, please provide us with:
            </p>
            
            <ul className="space-y-1 ml-6">
              <li className="text-gray-600">• The tracking number</li>
              <li className="text-gray-600">• A photo or scanned copy of the shipping label information of the return shipment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">INTERNATIONAL RETURN POLICY (OUTSIDE OF THE USA)</h3>
            <ul className="space-y-2 ml-6 mb-4">
              <li className="text-gray-600">
                • We do not request for or accept returns of international orders. &quot;International&quot; is defined as any and all countries outside of the United States of America.
              </li>
              <li className="text-gray-600">
                • Partial refunds up to 50% & reshipments will be determinant on an individual basis. But refunds are at our discretion
              </li>
            </ul>
            
            <p className="text-gray-600">
              If you&apos;re unsure about this process, please contact us via our{' '}
              <Link href="https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                Contact Us
              </Link>
              page.
            </p>
          </div>
        </section>

        {/* Damaged Items or Package */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Damaged Items or Package</h2>
          <p className="text-gray-600 mb-4">
            At Wellness Nest, we take every possible measure to ensure the safe and timely delivery of your order. However, there may be rare circumstances beyond our control. Wellness Nest is not responsible for goods that are lost or damaged by third-party postal carriers.
          </p>
          
          <p className="text-gray-600 mb-4">
            If your product arrives damaged, please contact our Customer Experience Team to check whether your order qualifies for a refund or replacement.
          </p>
          
          <p className="text-gray-600 mb-4">
            If we opt to replace the product, we may request that you safely destroy the contents of the bottle. This precaution is to ensure that compromised products are not accidentally consumed by you or others around you.
          </p>
          
          <p className="text-gray-600 mb-4">For guidance, please refer to this article:</p>
          <p className="text-gray-600 mb-6">
            <Link href="https://wellness-nest.gorgias.help/en-US/how-to-safely-dispose-of-supplement-capsules-or-tablets-1049042?ref=jbjycrqj&sub_id=" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
              [How to safely dispose of supplement capsules or tablets]
            </Link>.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Reshipments for Damaged or Incorrect Items</h3>
            <p className="text-gray-600 mb-4">
              To be eligible for a <span className="font-semibold">reshipment</span>, you must notify us within <span className="font-semibold">7 days of receiving your order</span> by emailing{' '}
              <Link href="mailto:support@wellnessnest.co" className="text-green-600 hover:text-green-700 underline">
                support@wellnessnest.co
              </Link>, along with a <span className="font-semibold">photo showing the issue</span>.
            </p>
            
            <p className="text-gray-600 mb-4">Please prepare the following information when contacting us:</p>
            
            <ul className="space-y-2 ml-6 mb-4">
              <li className="text-gray-600">• A clear explanation of the issue</li>
              <li className="text-gray-600">• Photo evidence of the damage or error</li>
              <li className="text-gray-600">
                • A photo of the <span className="font-semibold">batch number and expiry date</span> (located on the bottom of the bottle)
              </li>
              <li className="text-gray-600">• Your <span className="font-semibold">Order ID (WN######)</span></li>
            </ul>
            
            <p className="text-gray-600">
              If the product is still in stock, a <span className="font-semibold">replacement</span> will be shipped to you promptly upon verification.
            </p>
          </div>
        </section>

        {/* Refusal of Service */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Refusal of Service</h2>
          <p className="text-gray-600">
            In rare circumstances, we may evaluate a customer&apos;s account, purchase, refund, and return history, and retain the right to refuse services and/or prevent a customer from placing orders with us in the future without providing further details regarding our decision.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
          <p className="text-gray-600">
            Being well-informed about health-related products before purchasing them is essential. FDA advises consumers to consult with a health care professional before taking any dietary supplement.
          </p>
        </section>
      </div>
    </div>
  );

}

