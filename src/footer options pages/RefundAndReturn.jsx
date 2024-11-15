export default function RefundAndReturn() {
  return (
    <div className="bg-[#38bdf8] pt-5 ">
      <div className="flex justify-center">
        <h1 className="text-6xl text-white border-b-4 border-black">
          Refund and Returns Policy
        </h1>
      </div>
      <div className="py-10 px-2">
        <div className="flex justify-center flex-col p-5 shadow-2xl border border-gray-200 rounded-sm bg-white">
          {refundPolicyArray.map(({ id, section, content }) => {
            return (
              <div key={id} className="mt-4">
                <h2 className="font-semibold text-xl mb-2">{section}</h2>
                <ul className="my-3">
                  {content.map((value, index) => {
                    return (
                      <li key={`${id}-${index}`} className="list-disc my-2">
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const refundPolicyArray = [
  {
    id: 1,
    section: 'Thank you for shopping at Printer Mart Solution.',
    content: [
      'If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.',
      'The following terms are applicable for any products that You purchased with Us.',
    ],
  },
  {
    id: 2,
    section: 'Interpretation and Definitions',
    content: [
      'Interpretation',
      'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
    ],
  },
  {
    id: 3,
    section: 'Definitions',
    content: [
      'For the purposes of this Return and Refund Policy:',
      'Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Printer Mart Solution.',
      'Goods refer to the items offered for sale on the Service.',
      'Orders mean a request by You to purchase Goods from Us.',
      'Service refers to the Website.',
      'Website refers to Printer Mart Solution, accessible from https://printermartsolution.com/',
      'You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
    ],
  },
  {
    id: 4,
    section: 'Your Order Cancellation Rights',
    content: [
      'You are entitled to cancel Your Order within 7 days without giving any reason for doing so.',
      'The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.',
      'In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:',
      'By email: support@printermartsolution.com',
      'We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.',
    ],
  },
  {
    id: 5,
    section: 'Conditions for Returns',
    content: [
      'In order for the Goods to be eligible for a return, please make sure that:',
      'The Goods were purchased in the last 7 days',
      'The Goods are in the original packaging',
      'The following Goods cannot be returned:',
      'The supply of Goods made to Your specifications or clearly personalized.',
      'The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.',
      'The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.',
      'The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.',
      'We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.',
      'Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.',
    ],
  },
  {
    id: 6,
    section: 'Returning Goods',
    content: [
      'You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:',
      '89 Woodland Center, USA',
      'We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.',
    ],
  },
  {
    id: 7,
    section: 'Gifts',
    content: [
      'If the Goods were marked as a gift when purchased and then shipped directly to you, You’ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.',
      'If the Goods weren’t marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.',
    ],
  },
  {
    id: 8,
    section: 'Contact Us',
    content: [
      'If you have any questions about our Returns and Refunds Policy, please contact us:',
      'By email: support@printermartsolution.com',
    ],
  },
];
