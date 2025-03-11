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
];

document.addEventListener("DOMContentLoaded", function () {
    const reviewContainer = document.getElementById("review-container");

    // Limit to only the first 3 reviews
    reviews.slice(0, 3).forEach((review) => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        // Generate star rating
        let stars = "";
        for (let i = 0; i < review.rating; i++) {
            stars += `<svg xmlns="http://www.w3.org/2000/svg" class="star" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="gold"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"/>
                     </svg>`;
        }

        reviewCard.innerHTML = `'
        <a class="review-container" href="https://www.google.com/maps/place/Blush+%26+Glow+Beauty+Bar/@43.7272373,-79.2556249,17z/data=!3m1!4b1!4m6!3m5!1s0x38d840a6f5aec37:0x1292455a177a54ce!8m2!3d43.7272373!4d-79.25305!16s%2Fg%2F11s1sbcm3v?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
        <p class="review-text">${review.review}</p>
            <div class="stars">${stars}</div>
            <img class="img-review" src="${review.image}" alt="${review.name}">
            <h4>${review.name}</h4>
        </a>
            
        `;

        reviewContainer.appendChild(reviewCard);
    });
});
