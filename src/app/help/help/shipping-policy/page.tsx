import Link from &apos;next/link&apos;;

export default function ShippingPolicyPage() {
  return (
    <div className=&quot;min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-8&quot;>
          <h1 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>Shipping policy</h1>
          <h2 className=&quot;text-xl font-semibold text-gray-800 mb-6&quot;>Welcome to Wellness Nest Shipping Policy</h2>
          <p className=&quot;text-gray-600 leading-relaxed&quot;>
            At Wellness Nest, we are committed to delivering your orders efficiently and reliably. Our team ensures each order is processed swiftly and dispatched through trusted carriers. Below, you&apos;ll find all the details about our shipping options, timelines, and guidelines to ensure a seamless experience.
          </p>
        </div>

        {/* How Do I Track My Order */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>How Do I Track My Order?</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>Every order comes with a unique tracking number.</p>
          <p className=&quot;text-gray-600 mb-4&quot;>
            Once your order has been shipped, you&apos;ll receive an email with your tracking information, allowing you to monitor its progress at any time.
          </p>
          <p className=&quot;text-gray-600 mb-4&quot;>
            To ensure you receive these updates, please check your spam folder and add{&apos; '}
            <Link href=&quot;mailto:support@wellnessnest.co&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot;>
              support@wellnessnest.co
            </Link>{&apos; '}
            to your email contacts. You can{&apos; '}
            <Link href=&quot;https://wellnessnest.co/apps/trackingmore&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              look up your tracking number on our website.
            </Link>
          </p>
        </section>

        {/* How Long Does It Take to Process My Order */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>How Long Does It Take to Process My Order?</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            Our order processing time is within <span className=&quot;font-semibold&quot;>2 business days</span>. The exact timing depends on when the order is placed, but orders typically leave our warehouse within{&apos; '}
            <span className=&quot;font-semibold&quot;>2 business days</span> after processing is completed. If you need to make any updates to your order details, please{&apos; '}
            <Link href=&quot;https://wellnessnest.co/pages/contact-us-2612?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              contact us immediately.
            </Link>
          </p>
          <p className=&quot;text-gray-600&quot;>
            Orders placed over the weekend or on holidays will be processed on the following business day. While we aim to stick to this timeline, unforeseen circumstances may occasionally cause slight delays.
          </p>
        </section>

        {/* What Happens When Your Order is Processed */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>What Happens When Your Order is Processed?</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            Curious about what happens behind the scenes? Here&apos;s a quick breakdown of the steps:
          </p>
          
          <div className=&quot;space-y-4&quot;>
            <div>
              <h3 className=&quot;font-semibold text-gray-800 mb-2&quot;>Order Verification:</h3>
              <p className=&quot;text-gray-600&quot;>
                We review your order details, including the selected items and shipping address, to ensure everything is accurate.
              </p>
            </div>
            
            <div>
              <h3 className=&quot;font-semibold text-gray-800 mb-2&quot;>Inventory Check:</h3>
              <p className=&quot;text-gray-600&quot;>
                We confirm that the items you&apos;ve ordered are in stock.
              </p>
            </div>
            
            <div>
              <h3 className=&quot;font-semibold text-gray-800 mb-2&quot;>Payment Processing:</h3>
              <p className=&quot;text-gray-600&quot;>
                Your payment method (credit card, PayPal, etc.) is verified for security.{&apos; '}
                <span className=&quot;font-semibold&quot;>Occasionally, orders may be flagged by fraud prevention systems or your bank for additional checks.</span>{&apos; '}
                Look out for notification emails during this step.
              </p>
            </div>
            
            <div>
              <h3 className=&quot;font-semibold text-gray-800 mb-2&quot;>Picking and Packing:</h3>
              <p className=&quot;text-gray-600&quot;>
                Our team selects your items from our inventory and packs them securely.
              </p>
            </div>
            
            <div>
              <h3 className=&quot;font-semibold text-gray-800 mb-2&quot;>Shipping Label Creation:</h3>
              <p className=&quot;text-gray-600&quot;>
                We generate a shipping label and prepare your package for shipment.
              </p>
            </div>
            
            <div>
              <h3 className=&quot;font-semibold text-gray-800 mb-2&quot;>Shipping:</h3>
              <p className=&quot;text-gray-600&quot;>
                Your order is handed over to the shipping carrier for delivery to your doorstep.
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Times for the United States */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Delivery Times for the United States</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            For domestic US orders, we provide flexible shipping options:
          </p>
          
          <ul className=&quot;space-y-2 mb-4&quot;>
            <li className=&quot;text-gray-600&quot;>• US Domestic Economy Shipping (3-7 business days)</li>
            <li className=&quot;text-gray-600&quot;>• US Domestic Standard Delivery (2-5 business days)</li>
            <li className=&quot;text-gray-600&quot;>• US Domestic Priority Delivery (2 business days)</li>
          </ul>
          
          <div className=&quot;bg-yellow-50 border-l-4 border-yellow-400 p-4&quot;>
            <p className=&quot;text-gray-700&quot;>
              <span className=&quot;font-semibold&quot;>Important Note:</span> Once a parcel leaves our warehouse, delivery times may vary due to factors like the shipping carrier, local weather conditions, or unforeseen delays. While most shipments are timely, occasional delays may occur.
            </p>
          </div>
        </section>

        {/* International Delivery Times */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>International Delivery Times</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            For orders shipped outside the Contiguous United States, delivery times typically range from{&apos; '}
            <span className=&quot;font-semibold&quot;>14 to 30 business days</span>, although some orders may arrive sooner.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            Please note that delivery timelines can vary due to factors such as customs clearance, local postal services, traffic congestion, adverse weather conditions, and incorrect addresses.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            Our products are shipped from a centralized global warehouse, and delivery times depend largely on the efficiency of local postal services once the package reaches the destination country. While we strive to deliver promptly, certain regulatory requirements or logistical challenges may cause delays. Please check our{&apos; '}
            <Link href=&quot;https://wellness-nest.gorgias.help/en-US/shipping-prohibitions-and-restricted-destinations-1049048?ref=jbjycrqj&sub_id=&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              list of restricted destinations
            </Link>{&apos; '}
            to find out if we are able to deliver our products to you.
          </p>
          
          <p className=&quot;text-gray-600&quot;>
            We are actively working with our logistics partners to streamline international shipping and improve delivery speeds. Thank you for your patience and understanding as we ensure your order arrives safely and efficiently.
          </p>
        </section>

        {/* What Happens If My Parcel Is Delayed */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>What Happens If My Parcel Is Delayed?</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            We strive to deliver your parcel as quickly as possible, but since we rely on third-party carriers, delays can occasionally occur due to factors beyond our control. While significant delays are rare, they can happen.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            If you believe your parcel is delayed, returned to sender, or missing,{&apos; '}
            <Link href=&quot;https://wellnessnest.co/pages/contact-us-2612?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              please contact our customer service team through our website.
            </Link>{&apos; '}
            To help us assist you as quickly as possible, kindly provide the following details:
          </p>
          
          <ul className=&quot;space-y-2 mb-4 ml-6&quot;>
            <li className=&quot;text-gray-600&quot;>• Your order number</li>
            <li className=&quot;text-gray-600&quot;>• The email address used to place the order</li>
            <li className=&quot;text-gray-600&quot;>• The exact name associated with your order</li>
          </ul>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            We aim to respond to all email inquiries within <span className=&quot;font-semibold&quot;>12 hours</span>, and often much sooner on weekdays.
          </p>
          
          <div className=&quot;bg-blue-50 border-l-4 border-blue-400 p-4&quot;>
            <p className=&quot;text-gray-700&quot;>
              <span className=&quot;font-semibold&quot;>Important Note:</span> While we&apos;re committed to providing fast and effective assistance, we ask for your patience. Sending multiple messages about the same issue (e.g., three or more messages in a day) may trigger spam protection, causing delays in response. To ensure prompt resolution, please wait for a reply before following up.
            </p>
          </div>
          
          <p className=&quot;text-gray-600 mt-4&quot;>
            Thank you for your understanding as we work to resolve your issue swiftly and efficiently!
          </p>
        </section>

        {/* Incorrect Address */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Incorrect Address: What You Need to Know</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            To ensure a smooth delivery, it&apos;s essential to provide the correct shipping information at checkout. Mistakes can lead to delays, missed deliveries, or additional complications. Here&apos;s how we handle address issues:
          </p>
          
          <div className=&quot;space-y-6&quot;>
            <div>
              <h3 className=&quot;text-xl font-semibold text-gray-800 mb-3&quot;>Before Your Order Ships</h3>
              <div className=&quot;space-y-4&quot;>
                <div>
                  <h4 className=&quot;font-semibold text-gray-700 mb-2&quot;>12-Hour Correction Window:</h4>
                  <p className=&quot;text-gray-600&quot;>
                    You have a 12-hour window after placing your order to request changes to your shipping address. Please{&apos; '}
                    <Link href=&quot;https://wellnessnest.co/pages/contact-us-2612?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                      contact us
                    </Link>{&apos; '}
                    immediately via email or chat with your updated details.
                  </p>
                </div>
                
                <div>
                  <h4 className=&quot;font-semibold text-gray-700 mb-2&quot;>Address Errors We Detect:</h4>
                  <p className=&quot;text-gray-600&quot;>
                    If we notice incorrect or missing information on our end, we&apos;ll reach out to you for clarification. Please note that this may delay the processing and shipment of your order.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className=&quot;text-xl font-semibold text-gray-800 mb-3&quot;>After Your Order Ships</h3>
              <p className=&quot;text-gray-600&quot;>
                Once an order has been shipped or fulfilled, we are unable to make address changes. Any product returned to us due to an incorrect address will not be eligible for reshipment or refund, as returned items are donated upon arrival at our warehouse.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Fees */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Shipping Fees</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            You can find comprehensive details about our shipping fees{&apos; '}
            <Link href=&quot;https://demo-shipping-fees.com&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              in this article
            </Link>.
          </p>
          
          <p className=&quot;text-gray-600&quot;>
            Please be aware that <span className=&quot;font-semibold&quot;>shipping fees are non-refundable</span> as part of our Money-Back Guarantee. Refunds will only apply to the cost of the purchased product and will not include shipping charges.
          </p>
        </section>

        {/* Customs and Import Charges */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Customs and Import Charges</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            For orders shipped outside of the United States, your local customs office may impose handling fees and taxes upon your order&apos;s arrival. In some cases, these fees may already be included in your checkout price. Any customs-related charges must be paid by the recipient.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            <span className=&quot;font-semibold&quot;>Please be aware that customs clearance may be delayed if these duties have not been paid.</span> To avoid unexpected costs and delays, we recommend checking with your local customs office for the most up-to-date information on tax and import charges before placing your order.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            Wellness Nest has no control over these charges, and we are unable to provide estimates, as taxes, customs policies, and import duties vary by country.
          </p>
          
          <p className=&quot;text-gray-600&quot;>
            Please note that <span className=&quot;font-semibold&quot;>taxes, customs fees, and import charges are non-refundable</span>, as they are paid directly to your local government authority.
          </p>
        </section>

        {/* Issues with Tracking Updates */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Issues with Tracking Updates</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            While we strive to provide accurate tracking updates for every order, please note that all tracking information is provided by our courier partners. As a result, we only have access to the same information you see. This makes it difficult for us to give a precise estimated delivery time.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            If your order is taking longer than expected, please{&apos; '}
            <Link href=&quot;https://wellnessnest.co/pages/contact-us-2612?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              contact us here
            </Link>{&apos; '}
            with your order details, and we will work with the carrier to find the most optimal solution based on your latest tracking data.
          </p>
          
          <p className=&quot;text-gray-600&quot;>
            We appreciate your patience and understanding as we work to resolve any issues together.
          </p>
        </section>

        {/* What If I Suspect My Package Is Lost or Stolen */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>What If I Suspect My Package Is Lost or Stolen?</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>
            If your tracking number indicates that your package has been delivered to the correct address, but you have not received it, please check with your neighbors and contact your local post office for assistance.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            If the shipping label confirms the package was delivered to the correct address, we are unable to take responsibility for loss, but we will assist you in working with the shipping company to locate your package.
          </p>
          
          <p className=&quot;text-gray-600 mb-4&quot;>
            If the delivery status indicates &quot;delivered&quot; but the address was incorrect and you did not notify us for a change within{&apos; '}
            <span className=&quot;font-semibold&quot;>12 hours</span> of placing your order, we are unable to offer a replacement, refund, or reshipment.
          </p>
          
          <div className=&quot;space-y-4&quot;>
            <div>
              <h3 className=&quot;text-xl font-semibold text-gray-800 mb-3&quot;>Stolen Items</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We are not responsible for stolen items. To reduce the risk of theft, we highly recommend shipping your order to a secure location, such as a PO Box or Amazon Locker.
              </p>
              
              <p className=&quot;text-gray-600&quot;>
                If you believe your order has been stolen, you can file a claim directly with the carrier for further assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Need Help */}
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Need Help?</h2>
          <p className=&quot;text-gray-600&quot;>
            If you have any further questions regarding our shipping policies, please feel free to{&apos; '}
            <Link href=&quot;https://wellnessnest.co/pages/contact-us-2612?_ab=0&key=1735185517645&quot; className=&quot;text-green-600 hover:text-green-700 underline&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              contact us here
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}