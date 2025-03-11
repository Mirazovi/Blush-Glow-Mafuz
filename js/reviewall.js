const reviews = [
  {
    name: "Jashua Yosores",
    review: "Highly recommended. Nazma does the best job and takes care of her client. I often come here for waxing and facial. And i am 100% satisfied with my results.",
    rating: 5,
    image: "/images/profileMale.jpeg"
  },
  {
    name: "PALAK SHARMA",
    review: "I had my threading done at this place, and I absolutely loved the outcome! I'm so happy with the result. Nazma who did my brows was very accommodating and really listened to what I wanted. She was open to suggestions and made sure I was comfortable throughout the process. Highly recommend!!",
    rating: 5,
    image: "/images/profileFemal.jpeg"
  },
  {
    name: "Himani Himani",
    review: "I had waxing and my eyebrows done at this salon, and it was a great experience! The place was spotless, and Nazma was so kind and professional. She paid attention to every detail and took her time to ensure everything was perfect. I’m very happy with the results!",
    rating: 5,
    image: "/images/profileFemal.jpeg"
  },
  {
    name: "Sanarya Jalal",
    review: "I had an amazing experience at this place! Nazma is incredibly professional and made me feel completely at ease during my waxing session. The service was thorough, and she used high-quality products that left my skin feeling smooth and refreshed. The atmosphere is welcoming and clean, which made the whole experience even better. I’ll definitely be returning for future treatments! Highly recommend Nazma’s services for anyone looking for top-notch waxing.",
    rating: 5,
    image: "/images/profileFemal.jpeg"
  },
  {
    name: "Anjali Raghubansh",
    review: "I’m so glad I discovered Nazma’s Beauty Salon, which recently opened. The service was exceptional! My mom and I had a wonderful experience getting our eyebrows and upper lips threaded. My mom mentioned it was the most painless threading she’s ever had. Nazma was incredibly welcoming, and the space was impeccably clean. Highly recommend!",
    rating: 5,
    image: "/images/profileFemal.jpeg"
  },
  {
    name: "Naeema Ahmed",
    review: "The owner of this business is literally the sweetest!! Her environment is professional, clean, & super welcoming. She took her time while doing my brows and when she was done with one, she let me see before moving onto the next one to make sure I had no issues - very considerate towards her clients. Definitely go to her!!",
    rating: 5,
    image: "/images/profileMale.jpeg"
  },
  {
    name: "Muna abdallah",
    review: "I recently had a hydrafacial, and I must commend Blush and Glow beauty bar for ther exceptional professionalism and customer service. From the moment I walked in, I was greeted warmly, and every step of the process was clearly explained to me. Nazma is very knowledgeable, attentive, and made me feel completely at ease. The treatment itself was expertly done, and I truly appreciated how thorough and gentle she was. My skin feels refreshed and rejuvenated! I highly recommend this service to anyone seeking both quality care and a great overall experience. Thank you Nazma!",
    rating: 5,
    image: "/images/profileMale.jpeg"
  },
  {
    name: "Methelda D'Rozario",
    review: "Did my arms, legs, underarm and bikini in one go. She was super efficient and talked with me like she knew me for ages! Super sweet and wonderful person whom I met for the first time and completely fell in love with! Will be going to her for other services as well because I also liked the privacy there.",
    rating: 5,
    image: "/images/profileMale.jpeg"
  },
  {
    name: "Audhora Ahamed",
    review: "She did my eyebrow threading and it was absolutely amazing! The service and price is perfect, and I loved how my eyebrows turned out. I will definitely be coming again :)",
    rating: 5,
    image: "/images/profileFemal.jpeg"
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const reviewContainer = document.getElementById("review-container");

  reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    let stars = "";
    for (let i = 0; i < review.rating; i++) {
      stars += `<svg xmlns="http://www.w3.org/2000/svg" class="star" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="gold" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"/>
                     </svg>`;
    }

    reviewCard.innerHTML = `
             <a  href="https://www.google.com/maps/place/Blush+%26+Glow+Beauty+Bar/@43.7272373,-79.2556249,17z/data=!3m1!4b1!4m6!3m5!1s0x38d840a6f5aec37:0x1292455a177a54ce!8m2!3d43.7272373!4d-79.25305!16s%2Fg%2F11s1sbcm3v?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
        <div class="review-container"">
        <p class="review-text">${review.review}</p>
            <div class="stars">${stars}</div>
            <img class="img-review" src="${review.image}" alt="${review.name}">
            <h4>${review.name}</h4>
        </div>
        </a>
        `;

    reviewContainer.appendChild(reviewCard);
  });
});

// done 