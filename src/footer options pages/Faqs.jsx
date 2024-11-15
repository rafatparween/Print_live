export default function Faqs() {
  return (
    <div className="bg-[#38bdf8] pt-5">
      <div className="flex justify-center">
        <h1 className="text-6xl text-white border-b-4 border-black">FAQ'S</h1>
      </div>
      <div className="py-10 px-2">
        <div className="flex justify-center flex-col p-5 shadow-2xl border border-gray-200 rounded-sm bg-white">
          {faqsArray.map(({ id, question, answer }) => {
            return (
              <div key={id}>
                <h2 className="font-semibold text-xl mb-2">{question}</h2>
                {Array.isArray(answer) ? (
                  <ul className="my-3">
                    {answer.map((value, index) => (
                      <li key={index} className="list-disc my-2">
                        {value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const faqsArray = [
  {
    id: 1,
    question: 'What are refurbished printers?',
    answer: [
      'Refurbished printers are pre-owned devices that have been professionally inspected, repaired, and restored to optimal working condition.',
      'They undergo rigorous testing to meet high-quality standards before being resold.',
    ],
  },
  {
    id: 2,
    question: 'Are refurbished printers reliable?',
    answer: [
      'Absolutely, refurbished printers are reliable.',
      'They are thoroughly tested and repaired to ensure they operate correctly.',
      'Additionally, many refurbished printers come with warranties, offering buyers added peace of mind.',
    ],
  },
  {
    id: 3,
    question: 'What is the difference between refurbished and used printers?',
    answer: [
      'Refurbished printers have been carefully inspected, repaired, and restored, whereas used printers are sold as-is without any repairs or quality checks.',
      'Refurbished printers often include warranties, while used printers typically do not.',
    ],
  },
  {
    id: 4,
    question: 'Do refurbished printers come with warranties?',
    answer: [
      'Yes, many refurbished printers come with warranties.',
      'The warranty terms can vary depending on the seller and the printer model, so it’s important to check the specific warranty details before purchasing.',
    ],
  },
  {
    id: 5,
    question: 'Can I return a refurbished printer if I’m not satisfied?',
    answer: [
      'Most sellers offer a return policy for refurbished printers, but the terms and conditions can vary.',
      'It’s crucial to review the return policy before making a purchase.',
      'Some sellers may apply a restocking fee for returns.',
    ],
  },
  {
    id: 6,
    question: 'Are refurbished printers environmentally friendly?',
    answer: [
      'Yes, buying a refurbished printer is an environmentally friendly choice.',
      'It reduces electronic waste by extending the life of pre-owned printers and requires fewer resources compared to manufacturing new ones.',
    ],
  },
];
