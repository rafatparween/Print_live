import React from 'react';

const Psection = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className='text-4xl mb-2 text-blue-800 font-semibold'>Method 1 - Windows Troubleshooting</h2>
      <section className="w-full bg-white overflow-hidden shadow-xl rounded-lg">
        {windowsTroubleshootingSteps.map(
          ({ step, description, imageUrl, adsId }, index) => (
            <div
              key={adsId}
              className={`flex flex-col sm:flex-row p-6 border-b border-gray-200 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className="sm:w-1/2">
                <img
                  src={imageUrl}
                  alt={`Step ${step}`}
                  className="w-full h-64 sm:h-80 rounded-md shadow-md object-cover"
                />
              </div>
              <div className="sm:w-1/2 sm:pl-8 mt-4 sm:mt-0">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step - {step}
                </h2>
                <ul className="list-disc pl-5">
                  {Array.isArray(description) ? (
                    description.map((desc, index) => (
                      <li key={index} className="text-sm text-gray-700 mb-1">
                        {desc}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-700">{description}</li>
                  )}
                </ul>
              </div>
            </div>
          ),
        )}
      </section>

      <h2 className='text-4xl mt-8 mb-2 text-blue-800 font-semibold'>Method 2 - Troubleshooting on macOS</h2>
      <section className="w-full bg-white overflow-hidden shadow-xl rounded-lg">
        {macTroubleshootingSteps.map(
          ({ step, description, imageUrl, adsId }, index) => (
            <div
              key={adsId}
              className={`flex flex-col sm:flex-row p-6 border-b border-gray-200 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className="sm:w-1/2">
                <img
                  src={imageUrl}
                  alt={`Step ${step}`}
                  className="w-full h-64 sm:h-80 rounded-md shadow-md object-cover"
                />
              </div>
              <div className="sm:w-1/2 sm:pl-8 mt-4 sm:mt-0">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step - {step}
                </h2>
                <ul className="list-disc pl-5">
                  {Array.isArray(description) ? (
                    description.map((desc, index) => (
                      <li key={index} className="text-sm text-gray-700 mb-1">
                        {desc}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-700">{description}</li>
                  )}
                </ul>
              </div>
            </div>
          ),
        )}
      </section>
    </main>
  );
};

export default Psection;

const windowsTroubleshootingSteps = [
  {
    step: 1,
    description: [
      'Ensure that your printer is switched on. Make sure that your printer is turned on and linked to a power source before moving on to the next step in the troubleshooting procedure.',
      'You may need to click a button on the printer to wake it up if it is in Sleep mode.',
    ],
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/1.jpg',
    adsId: 'ad001',
  },
  {
    step: 2,
    description: [
      'Restart your printer if it hasn’t done so already. If the printer was already turned on, it may only need to be restarted to stop showing up as unavailable.',
      'For 30 seconds, turn off and unplug your printer. This will allow your printer to restart and reconnect with your computer.',
      'Turn on your printer after plugging it in. Check to see if the printer is still showing as “offline” after a few moments.',
    ],
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/2.jpg',
    adsId: 'ad002',
  },
  {
    step: 3,
    description: [
      'Confirm that your printer is on the same network as your computer. If your printer is linked to your computer through Wi-Fi or ethernet, it may appear to be offline due to a network issue.',
      'The steps for checking your printer’s network settings differ depending on the printer you have. To explore the printer’s internal menus, you’ll normally have to utilise the buttons on the printer itself.',
      'If you’re connecting to the printer through a USB cable, ensure it’s securely plugged in. To rule out a broken cable connection, you could try an alternative USB cable.',
    ],
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/3.jpg',
    adsId: 'ad003',
  },
  {
    step: 4,
    description: 'Check to see if the printer tray is full of paper. If there is no paper available to print on, certain printers will go offline.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/4.jpg',
    adsId: 'ad004',
  },
  {
    step: 5,
    description: 'The print spooler should be restarted. To restart the service that manages your print jobs, follow these steps:\n\nTo open the search bar, press Win+S and type "services".\nIn the search results, select Services.\nScroll down to the Print Spooler service and right-click it.\nPress the Restart button. The printer dialogue will be restarted, giving the computer a chance to rediscover the printer.\nCheck to see whether your printer is showing up online after a few minutes.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/5.jpg',
    adsId: 'ad005',
  },
  {
    step: 6,
    description: 'From the Windows Start menu, choose Settings. There are some further troubleshooting methods you can try if the printer still appears to be down.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/6.jpg',
    adsId: 'ad006',
  },
  {
    step: 7,
    description: 'Choose your devices from the Settings menu.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/7.jpg',
    adsId: 'ad007',
  },
  {
    step: 8,
    description: 'Select Printers & Scanners from the drop-down menu. Your printer, as well as any other devices connected to your computer, should now be listed.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/8.jpg',
    adsId: 'ad008',
  },
  {
    step: 9,
    description: 'Make sure the print queue is empty. To remove all documents from the queue, follow these steps:\n\nSelect your printer and then Open Queue from the drop-down menu.\nChoose a document from the queue.\nUnder “Document,” select Cancel.\nRepeat until the queue is completely empty. Check if your printer starts working again.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/9.jpg',
    adsId: 'ad009',
  },
  {
    step: 10,
    description: 'Select Remove device from the printer’s name. This will remove the printer’s drivers so you can re-add them if clearing the queue didn’t work.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/10.jpg',
    adsId: 'ad010',
  },
  {
    step: 11,
    description: 'Select Add a device or printer from the drop-down menu. This option can be found at the top of the “Printers & Scanners” menu.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/11.jpg',
    adsId: 'ad011',
  },
  {
    step: 12,
    description: 'Follow the on-screen directions to re-add your printer. Check to see if the printer is now online after it has been re-added.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/12.jpg',
    adsId: 'ad012',
  },
  {
    step: 13,
    description: 'Ensure your printer is set as the default. If the printer is still not working, set it as the default printer to ensure Windows recognizes it as the primary one for printing.\n\nTo do this, go to the Printers & Scanners section, select your printer, open the queue, and click "Set As Default Printer" in the menu. If you’re still experiencing issues, it’s best to contact the printer manufacturer for further assistance.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/13.jpg',
    adsId: 'ad013',
  },
];

const macTroubleshootingSteps = [
  {
    step: 1,
    description: [
      'Ensure that your printer is switched on. Make sure that your printer is turned on and linked to a power source before moving on to the next step in the troubleshooting procedure.',
      'You may need to click a button on the printer to wake it up if it is in Sleep mode.',
    ],
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/1.jpg',
    adsId: 'mac_ad001',
  },
  {
    step: 2,
    description: [
      'Restart your printer if necessary. If the printer was already turned on, it may only need to be restarted to stop showing up as unavailable.',
      'For 30 seconds, turn off and unplug your printer. This will allow your printer to restart and reconnect with your computer.',
      'Turn on your printer after plugging it in. Check to see if the printer is still showing as “offline” after a few moments.',
    ],
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/2.jpg',
    adsId: 'mac_ad002',
  },
  {
    step: 3,
    description: [
      'Confirm that your printer is on the same network as your computer. If your printer is connected to your computer via Wi-Fi or ethernet, it may appear to be offline due to a network issue.',
      'The steps for checking your printer’s network settings differ depending on the printer you have. To navigate the printer’s internal menus, you’ll usually have to use the buttons on the printer itself.',
      'If you’re connecting to the printer through a USB cable, ensure it’s securely plugged in. To rule out a broken cable connection, you could try an alternative USB cable.',
    ],
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/3.jpg',
    adsId: 'mac_ad003',
  },
  {
    step: 4,
    description: 'Check to see if the printer tray is full of paper. If there is no paper available to print on, certain printers will go offline.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/4.jpg',
    adsId: 'mac_ad004',
  },
  {
    step: 5,
    description: 'Select the Apple menu from the drop-down menu. It’s located in the upper-left corner of the screen.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/5.jpg',
    adsId: 'mac_ad005',
  },
  {
    step: 6,
    description: 'On the menu, select System Preferences.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/6.jpg',
    adsId: 'mac_ad006',
  },
  {
    step: 7,
    description: 'Select Printers & Scanners or Print & Scan from the drop-down menu. This opens a new window with a menu listing all printers connected to your Mac. In this option, choose the printer you want to connect.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/7.jpg',
    adsId: 'mac_ad007',
  },
  {
    step: 8,
    description: 'In the Printers pane, right-click anywhere. This brings up a little pop-up menu with more settings for the printer in the window.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/8.jpg',
    adsId: 'mac_ad008',
  },
  {
    step: 9,
    description: 'In the menu, choose Reset printing system. This opens a new window asking you to confirm that you want to reset the printing system.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/9.jpg',
    adsId: 'mac_ad009',
  },
  {
    step: 10,
    description: 'In the confirmation window, click Reset. This will prompt you for the Administrator’s username and password. This will remove all connected printers and scanners, so make sure to re-add any devices you still want to use after restarting your Mac.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/10.jpg',
    adsId: 'mac_ad010',
  },
  {
    step: 11,
    description: 'Click OK after entering the Administrator’s name and password. Once you’ve done that, the system will finish resetting your Mac’s printing system.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/11.jpg',
    adsId: 'mac_ad011',
  },
  {
    step: 12,
    description: 'Return to the Printers & Scanners section. You’ll need to re-add the printer to your Mac after you’ve reset your printing system.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/12.jpg',
    adsId: 'mac_ad012',
  },
  {
    step: 13,
    description: 'Select Add a Device from the drop-down menu. This brings up a window that searches for your printer and automatically detects it.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/13.jpg',
    adsId: 'mac_ad013',
  },
  {
    step: 14,
    description: 'Click Add after selecting your printer. This will re-establish a connection between your printer and your Mac’s wireless network.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/14.jpg',
    adsId: 'mac_ad014',
  },
  {
    step: 15,
    description: 'Seek help from your printer’s manufacturer. If you’re still having problems with your printer, it’s most likely a hardware problem. For more information, contact the printer’s manufacturer.',
    imageUrl: 'https://smartdeviceassistant.com/wp-content/uploads/2022/03/15.jpg',
    adsId: 'mac_ad015',
  },
];
