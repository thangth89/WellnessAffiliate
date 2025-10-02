import Link from &apos;next/link&apos;;

export default function RefundPolicyPage() {
  return (
    <div className=&quot;min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-8&quot;>
          <h1 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>Refund policy</h1>
          <p className=&quot;text-gray-600 leading-relaxed&quot;>
            At the heart of our brand is a simple belief: happy customers build lasting success. That&apos;s why we&apos;re dedicated to ensuring every customer is completely satisfied — your happiness is our top priority.
          </p>
        </div>

        {/* Money-Back Guarantee */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Money-Back Guarantee</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            We <span className=&quot;font-semibold&quot;>offer a 90-day money-back guarantee for first-time, non-subscription purchases of each unique product or bundle</span> — because we stand behind the quality of what we create. Want to learn more about how it works and which purchases are eligible?{&apos; &apos;}
            <Link href=&quot;https://wellness-nest.gorgias.help/en-US/wellness-nests-money-back-guarantee-812287?ref=jbjycrqj&sub_id=&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              Check out this article
            </Link>{&apos; &apos;}
            for full details. If you&apos;re not satisfied with the results, simply reach out to our Customer Experience Team to check your eligibility for a refund by{&apos; '}
            <Link href=&quot;https://wellnessnest.co/pages/contact-us?_ab=0&key=1719739279494&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              CLICKING HERE
            </Link>. If refunds are approved, we may ask you to safely destroy the product before issuing a refund — this precaution helps ensure that potentially compromised products are not consumed by people, pets, or wildlife.
          </p>
        </section>

        {/* Claiming Refunds */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Claiming Refunds</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            At Wellness Nest, your satisfaction is our top priority. Here are some things you should note about our policy for claiming refunds. Refunds for subscription orders placed after December 1, 2024, are not eligible under this guarantee.
          </p>

          <div className=&quot;mb-6&quot;>
            <h3 className=&quot;text-xl font-semibold text-gray-800 mb-3&quot;>Eligible for Refund:</h3>
            
            <div className=&quot;space-y-4&quot;>
              <div>
                <p className=&quot;text-gray-600&quot;>
                  1. <span className=&quot;font-semibold&quot;>Money-Back Guarantee:</span> You have <span className=&quot;font-semibold&quot;>90 days from the delivery date</span> to submit a refund <span className=&quot;font-semibold&quot;>claim for eligible one-time purchases</span>.
                </p>
              </div>
              
              <div>
                <p className=&quot;text-gray-600&quot;>
                  2. <span className=&quot;font-semibold&quot;>Limit on Refund Quantity:</span> Only up to 2 products per customer are eligible for a refund. Requests for a refund on more than 2 products will not be accepted.
                </p>
              </div>
              
              <div>
                <p className=&quot;text-gray-600&quot;>
                  3. For <span className=&quot;font-semibold&quot;>order cancellations</span>, refunds are processed immediately. The time it takes to reflect on your transaction depends on your payment method.
                </p>
                
                <ul className=&quot;ml-6 mt-2 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • If the order is <span className=&quot;font-semibold&quot;>canceled before shipping</span>, you&apos;ll receive a <span className=&quot;font-semibold&quot;>full refund, including shipping fees</span>.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • If the order has already <span className=&quot;font-semibold&quot;>shipped</span>, your refund will <span className=&quot;font-semibold&quot;>exclude shipping fees & a 20% deduction</span> will be applied for processing and handling costs.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=&quot;mb-6&quot;>
            <h3 className=&quot;text-xl font-semibold text-gray-800 mb-3&quot;>Not Eligible for Refund:</h3>
            
            <p className=&quot;text-gray-600 mb-4&quot;>
              Our <span className=&quot;font-semibold&quot;>Money-Back Guarantee does not apply</span> in the following cases:
            </p>

            <div className=&quot;space-y-6&quot;>
              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>1. Misuse or Unauthorized Purchases:</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • We do not accept returns or issue refunds for products that have been misused, intentionally damaged, expired, discontinued, or purchased from unauthorized resellers.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • Misuse includes: exceeding the recommended dosage, improper storage (e.g., exposure to heat or moisture), mixing with other substances against guidelines, or using the product in any way not aligned with its intended use.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>2. International Orders:</h4>
                <p className=&quot;text-gray-600&quot;>
                  No refunds are offered for international orders, except under special circumstances at our discretion. {&apos;&quot;&apos;}International{&apos;&quot;'} is defined as any and all countries outside of the United States of America.
                </p>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>3. Subscription Orders:</h4>
                <p className=&quot;text-gray-600&quot;>
                  All subscription orders are excluded from the guarantee. We recommend trying products via one-time purchase before subscribing.
                </p>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>4. Delivery Issues:</h4>
                <p className=&quot;text-gray-600&quot;>
                  Lost-in-transit items, damaged packaging, or orders marked as {&apos;&quot;&apos;}delivered{&apos;&quot;'} but not found. In such cases, we&apos;re happy to offer a <span className=&quot;font-semibold&quot;>replacement</span>, but <span className=&quot;font-semibold&quot;>refunds are issued at our discretion</span>.
                </p>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>5. Incorrect or Incomplete Address / Unclaimed Packages:</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • Orders with inaccurate or incomplete addresses, unclaimed parcels, or deliveries marked as {&apos;&quot;&apos;}delivered{&apos;&quot;'} but not received due to customer error are not eligible for a refund.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • An <span className=&quot;font-semibold&quot;>incomplete address</span> includes any order missing essential delivery details such as: Street number or name, Apartment, suite, or unit number (if applicable), City, State, Postal/Zip code, City, or country information
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • Please double-check your shipping details before placing your order to make sure everything is accurate. Unfortunately, we are not liable for delivery issues resulting from incorrect or incomplete information.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>6. Refusal of Delivery & Failed to pick up:</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • Orders returned due to the customer refusing to accept delivery are not eligible for a refund.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • Orders returned because the customer declined to pay customs or import duties and refused delivery will not be refunded.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • Orders returned because the customer failed to pick up the package are also not eligible for a refund.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>7. Fraud or Policy Abuse:</h4>
                <p className=&quot;text-gray-600&quot;>
                  If there&apos;s evidence of fraudulent activity or repeated refund claims, we reserve the right to deny the request.
                </p>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>8. Loyalty Program, Discounted or Promotional Items:</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • Products purchased under <span className=&quot;font-semibold&quot;>promotions or discounts</span> are typically not eligible for refunds.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • Refunds are not applicable to purchases and partial payments made using Loyalty Program (store credit/reward points).
                  </li>
                </ul>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>9. Failure to follow Return Process:</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • If the return process is not followed correctly (e.g., no prior request, missing info, or sending items without approval), <span className=&quot;font-semibold&quot;>no refund will be issued</span>. You can find more details about our return policy here:{&apos; &apos;}
                    <Link href=&quot;https://wellness-nest.gorgias.help/en-US/articles/returns-295366?ref=jbjycrqj&sub_id=&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                      [link]
                    </Link>.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • We <span className=&quot;font-semibold&quot;>only accept returns within the U.S.</span>, and <span className=&quot;font-semibold&quot;>only if approved in advance</span>. Returns are requested on a case-by-case basis to help us improve product quality. <span className=&quot;font-semibold&quot;>Unauthorized or improperly submitted returns will not be refunded</span>.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • We <span className=&quot;font-semibold&quot;>do not accept returns</span> for international orders. Partial refunds up to 50% or reshipments may be considered on a <span className=&quot;font-semibold&quot;>case-by-case basis</span>, at our discretion.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>10. Used or Opened Products:</h4>
                <p className=&quot;text-gray-600&quot;>
                  Some products may only be refunded if they are unopened and unused.
                </p>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>11. Product Experience & Sensory Feedback</h4>
                <p className=&quot;text-gray-600&quot;>
                  Complaints related to taste, color, or scent are not eligible for a refund, as we do not process returns based on subjective sensory feedback.
                </p>
              </div>

              <div>
                <h4 className=&quot;text-lg font-semibold text-gray-700 mb-2&quot;>12. Incorrect Purchases</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>• Buyer&apos;s remorse, change of mind, or accidental over-ordering</li>
                  <li className=&quot;text-gray-600&quot;>• Customers are responsible for ensuring they order the correct products and quantities for their individual needs.</li>
                </ul>
                <p className=&quot;text-gray-600 mt-2&quot;>
                  If you&apos;re unsure about which product to choose or how much to order, we strongly encourage you to contact our{&apos; &apos;}
                  <Link href=&quot;https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                    Customer Experience Team
                  </Link>{&apos; &apos;}
                  before placing your order. We&apos;re happy to help you make the best choice!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Turnaround Time */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Refund Turnaround Time</h2>
          
          <div className=&quot;mb-4&quot;>
            <h3 className=&quot;text-lg font-semibold text-gray-800 mb-2&quot;>Important note:</h3>
            <ul className=&quot;space-y-2 ml-6&quot;>
              <li className=&quot;text-gray-600&quot;>
                • When processing refunds, there is often some processing time required by banks before a refund is reflected in your bank statement. We ask that you refrain from filing a dispute or chargeback request with your financial institution as it will significantly prolong your refund process, <span className=&quot;font-semibold&quot;>sometimes taking over 60 days</span>, depending on your bank as they need to investigate thoroughly and review the case.
              </li>
              <li className=&quot;text-gray-600&quot;>
                • If you experience any issues with your order, product, refund timeline, or anything else impacting your experience with us, we strongly encourage you to contact our{&apos; &apos;}
                <Link href=&quot;https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                  Customer Experience Team
                </Link>{&apos; &apos;}
                first. We&apos;re here to help resolve your concerns quickly and effectively—often much faster than going through a dispute or chargeback process.
              </li>
            </ul>
          </div>

          <div className=&quot;mb-6&quot;>
            <h3 className=&quot;text-lg font-semibold text-gray-800 mb-3&quot;>Payment Method Refund Timeframes</h3>
            
            <div className=&quot;space-y-6&quot;>
              <div>
                <h4 className=&quot;font-semibold text-gray-700 mb-2&quot;>PayPal:</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • At Wellness Nest, we typically <span className=&quot;font-semibold&quot;>process PayPal refunds within 1–2 business days</span> from the time your request is approved – Once processed, PayPal refunds take effect instantly and will reflect in your PayPal balance in real-time.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • Please note: If you use PayPal echeck, it typically <span className=&quot;font-semibold&quot;>takes 4–7 business days</span>, and in some cases up to 10 business days, for the payment to clear {&apos; &apos;}
                    <Link href=&quot;https://www.paypal.com/sg/cshelp/article/why-hasnt-the-echeque-that-i-received-cleared-yet-help283?ref=jbjycrqj&sub_id=&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
			— as estimated by PayPal. 
		   </Link>{&apos; &apos;}

PayPal can only issue the refund after the eCheck has successfully cleared.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • If your eCheck has not cleared and the refund has not been received <span className=&quot;font-semibold&quot;>after 10 days</span>, kindly{&apos; &apos;}
                    <Link href=&quot;https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                      contact us
                    </Link>{&apos; &apos;}
                    for best assistance.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className=&quot;font-semibold text-gray-700 mb-2&quot;>Credit and Debit card:</h4>
                <ul className=&quot;ml-6 space-y-2&quot;>
                  <li className=&quot;text-gray-600&quot;>
                    • Processing time varies depending on your card issuing bank&apos;s turnaround time. This can range anywhere <span className=&quot;font-semibold&quot;>between 5 to 10 banking days</span> before it&apos;s reflected in your bank statement.
                  </li>
                  <li className=&quot;text-gray-600&quot;>
                    • We recommend contacting your bank first if the refund is not reflected in your bank statement after 10 business days. Once you have received an update or confirmation from your bank, kindly reach out to us with the details so our team can assist you further and provide the best possible support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pausing, Skipping, or Delaying Subscription Orders */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Pausing, Skipping, or Delaying Subscription Orders</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            We understand the need for flexibility! If you&apos;d like to take a break, you can pause, skip, or delay your upcoming shipments by simply filling out{&apos; &apos;}
            <Link href=&quot;https://wellnessnest.co/pages/manage-my-subscription?_ab=0&key=1721982867650&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              this form
            </Link>. Our Customer Experience Team will take care of the rest for you.
          </p>
          <p className=&quot;text-gray-600&quot;>
            For a seamless experience, submit your request before your next subscription order date. If you have any questions, feel free to reach out to us!
          </p>
        </section>

        {/* Changing order details or cancelling your order */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Changing order details or cancelling your order</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            Changed your mind? <span className=&quot;font-semibold&quot;>Get in touch with us</span> as soon as possible with your order number ready.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            We might be able to help you amend your order details if it has not been fulfilled, but we cannot promise that we are always able to. If we are not able to cancel, we can refund the full amount paid for the order to your original mode of payment. Read our{&apos; &apos;}
            <Link href=&quot;https://wellness-nest.gorgias.help/en-US/how-do-i-cancel-an-order-purchased-directly-from-wellness-nest-813061?ref=jbjycrqj&sub_id=&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              guide to canceling orders
            </Link>{&apos; &apos;}
            to learn how.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            Sometimes, the processing of your shipment is too far away for us to be able to make changes to the order. In these instances, we would not be able to cancel or make changes to your order.
          </p>
          
          <ul className=&quot;space-y-2 ml-6 mb-4&quot;>
            <li className=&quot;text-gray-600&quot;>
              • Requests to modify or cancel an order must be made within <span className=&quot;font-semibold&quot;>12 hours</span> of placing it. We will process your request as long as the order has not yet been fulfilled or shipped.
            </li>
            <li className=&quot;text-gray-600&quot;>
              • If the request is made outside our business hours <span className=&quot;font-semibold&quot;>8:30 AM – 5:00 PM (PST)</span> or during recognized holidays, processing may be delayed, and changes or cancellations <span className=&quot;font-semibold&quot;>cannot be guaranteed</span>.
            </li>
          </ul>
          
          <p className=&quot;text-gray-600&quot;>
            An important point to note is that <span className=&quot;font-semibold&quot;>cancelling your subscription</span> does not cancel an order that has already been charged and placed through the subscription.
          </p>
        </section>

        {/* Returns */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Returns</h2>
          <p className=&quot;text-gray-600 mb-6&quot;>
            We do not accept returns of our supplements unless we explicitly make a request for the return. In the event that we do, it is to assist us in our efforts to continuously improve the quality of our products. Should we request for the product to be returned, we will provide detailed instructions.
          </p>

          <div className=&quot;mb-6&quot;>
            <h3 className=&quot;text-xl font-semibold text-gray-800 mb-3&quot;>U.S. DOMESTIC RETURN POLICY</h3>
            <p className=&quot;text-gray-600 mb-4&quot;>
              Wellness Nest accepts returns only within the United States, and all returns must be requested and approved by us. Returns sent without authorization or outside of our return process will be considered invalid, and no refund will be issued.
            </p>
            
            <p className=&quot;text-gray-600 mb-4&quot;>If you intend to return, please note the following:</p>
            
            <ul className=&quot;space-y-2 ml-6 mb-4&quot;>
              <li className=&quot;text-gray-600&quot;>
                • Contact our{&apos; &apos;}
                <Link href=&quot;https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                  Customer Experience Team
                </Link>{&apos; &apos;}
                first to obtain approval and return instructions. Unapproved returns will not be accepted or refunded.
              </li>
              <li className=&quot;text-gray-600&quot;>• Include <span className=&quot;font-semibold&quot;>all items</span> from the eligible order(s).</li>
              <li className=&quot;text-gray-600&quot;>
                • All products must be unopened, sealed, and in resellable condition. You include all items from the three eligible orders for the return to be approved.
              </li>
              <li className=&quot;text-gray-600&quot;>• The return shipping cost is the customer&apos;s responsibility.</li>
              <li className=&quot;text-gray-600&quot;>
                • Once the returned product has been received, inspected, and deemed eligible for a refund, we will issue a full refund of your original order total.
              </li>
            </ul>
            
            <p className=&quot;text-gray-600 mb-4&quot;>
              We will process the refund immediately upon confirming the returned orders are unopened and sealed after receiving the products. Once your return has been shipped, please provide us with:
            </p>
            
            <ul className=&quot;space-y-1 ml-6&quot;>
              <li className=&quot;text-gray-600&quot;>• The tracking number</li>
              <li className=&quot;text-gray-600&quot;>• A photo or scanned copy of the shipping label information of the return shipment</li>
            </ul>
          </div>

          <div>
            <h3 className=&quot;text-xl font-semibold text-gray-800 mb-3&quot;>INTERNATIONAL RETURN POLICY (OUTSIDE OF THE USA)</h3>
            <ul className=&quot;space-y-2 ml-6 mb-4&quot;>
              <li className=&quot;text-gray-600&quot;>
                • We do not request for or accept returns of international orders. {&apos;&quot;&apos;}International{&apos;&quot;'} is defined as any and all countries outside of the United States of America.
              </li>
              <li className=&quot;text-gray-600&quot;>
                • Partial refunds up to 50% & reshipments will be determinant on an individual basis. But refunds are at our discretion
              </li>
            </ul>
            
            <p className=&quot;text-gray-600&quot;>
              If you&apos;re unsure about this process, please contact us via our{&apos; &apos;}
              <Link href=&quot;https://wellnessnest.co/pages/contact-us?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                Contact Us
              </Link>{&apos; &apos;}
              page.
            </p>
          </div>
        </section>

        {/* Damaged Items or Package */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Damaged Items or Package</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            At Wellness Nest, we take every possible measure to ensure the safe and timely delivery of your order. However, there may be rare circumstances beyond our control. Wellness Nest is not responsible for goods that are lost or damaged by third-party postal carriers.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            If your product arrives damaged, please contact our Customer Experience Team to check whether your order qualifies for a refund or replacement.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            If we opt to replace the product, we may request that you safely destroy the contents of the bottle. This precaution is to ensure that compromised products are not accidentally consumed by you or others around you.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>For guidance, please refer to this article:</p>
          <p className=&quot;text-gray-600 mb-6&quot;>
            <Link href=&quot;https://wellness-nest.gorgias.help/en-US/how-to-safely-dispose-of-supplement-capsules-or-tablets-1049042?ref=jbjycrqj&sub_id=&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              [How to safely dispose of supplement capsules or tablets]
            </Link>.
          </p>

          <div>
            <h3 className=&quot;text-lg font-semibold text-gray-800 mb-3&quot;>Reshipments for Damaged or Incorrect Items</h3>
            <p className=&quot;text-gray-600 mb-4&quot;>
              To be eligible for a <span className=&quot;font-semibold&quot;>reshipment</span>, you must notify us within <span className=&quot;font-semibold&quot;>7 days of receiving your order</span> by emailing{&apos; &apos;}
              <Link href=&quot;mailto:support@wellnessnest.co&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot;>
                support@wellnessnest.co
              </Link>, along with a <span className=&quot;font-semibold&quot;>photo showing the issue</span>.
            </p>
            
            <p className=&quot;text-gray-600 mb-4&quot;>Please prepare the following information when contacting us:</p>
            
            <ul className=&quot;space-y-2 ml-6 mb-4&quot;>
              <li className=&quot;text-gray-600&quot;>• A clear explanation of the issue</li>
              <li className=&quot;text-gray-600&quot;>• Photo evidence of the damage or error</li>
              <li className=&quot;text-gray-600&quot;>
                • A photo of the <span className=&quot;font-semibold&quot;>batch number and expiry date</span> (located on the bottom of the bottle)
              </li>
              <li className=&quot;text-gray-600&quot;>• Your <span className=&quot;font-semibold&quot;>Order ID (WN######)</span></li>
            </ul>
            
            <p className=&quot;text-gray-600&quot;>
              If the product is still in stock, a <span className=&quot;font-semibold&quot;>replacement</span> will be shipped to you promptly upon verification.
            </p>
          </div>
        </section>

        {/* Refusal of Service */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Refusal of Service</h2>
          <p className=&quot;text-gray-600&quot;>
            In rare circumstances, we may evaluate a customer&apos;s account, purchase, refund, and return history, and retain the right to refuse services and/or prevent a customer from placing orders with us in the future without providing further details regarding our decision.
          </p>
        </section>

        {/* Disclaimer */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Disclaimer</h2>
          <p className=&quot;text-gray-600&quot;>
            Being well-informed about health-related products before purchasing them is essential. FDA advises consumers to consult with a health care professional before taking any dietary supplement.
          </p>
        </section>
      </div>
    </div>
  );
}