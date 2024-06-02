export const SellerNotify = [
    {
      type: "subscribe",
      user: "Kn Ganesh",
      book: "Life Of Pie",
      date: "Jul 12, 2024 11:20 PM",
      amount: "",
    },
    {
      type: "credit",
      user: "Harish Rao",
      book: "The Minute of Silence",
      date: "May 28, 2024 09:30 AM",
      amount: "20000",
    },
    {
      type: "subscribe",
      user: "Jagadeesh Rao",
      book: "Life Lesson",
      date: "Jul 13, 2024 11:20 PM",
      amount: "",
    },
    {
      type: "credit",
      user: "Anand Kumar",
      book: "Beyond the Horizon",
      date: getRandomDate(),
      amount: "15000",
    },
    {
      type: "subscribe",
      user: "Priya Singh",
      book: "Echoes of Eternity",
      date: getRandomDate(),
      amount: "",
    },
    {
      type: "credit",
      user: "Rahul Sharma",
      book: "Whispers in the Wind",
      date: getRandomDate(),
      amount: "18000",
    },
    {
      type: "subscribe",
      user: "Sneha Patel",
      book: "The Art of Persistence",
      date: getRandomDate(),
      amount: "",
    },
    {
      type: "credit",
      user: "Neha Gupta",
      book: "The Journey Within",
      date: getRandomDate(),
      amount: "22000",
    },
    {
      type: "subscribe",
      user: "Amit Singh",
      book: "The Power of Now",
      date: getRandomDate(),
      amount: "",
    },
    {
      type: "credit",
      user: "Vikram Kumar",
      book: "Embracing Change",
      date: getRandomDate(),
      amount: "19000",
    },
  ];
  
  // Function to generate random date within next 12 months
  function getRandomDate() {
    const today = new Date();
    const randomMonth = Math.floor(Math.random() * 12) + 1; // Random month from 1 to 12
    const randomDay = Math.floor(Math.random() * 28) + 1; // Random day from 1 to 28
    const randomHour = Math.floor(Math.random() * 12) + 1; // Random hour from 1 to 12
    const randomMinute = Math.floor(Math.random() * 60); // Random minute from 0 to 59
    const period = Math.random() < 0.5 ? "AM" : "PM"; // Random period (AM or PM)
  
    const futureDate = new Date(today.getFullYear(), today.getMonth() + randomMonth, randomDay, randomHour, randomMinute);
    const formattedDate = futureDate.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
  
    return formattedDate;
  }
  
  
  