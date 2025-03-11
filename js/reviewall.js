const reviews = [
    {
      name: "Subbir Rahaman",
      review: "Absolutely loved this product! The quality is top-notch and the service was excellent. Highly recommend!",
      rating: 5,
      image: "/images/single-image1.jpg"
    },
    {
      name: "Miraz Hossain Ovi",
      review: "Great experience overall, but shipping took longer than expected.",
      rating: 4,
      image: "/images/single-image2.jpg"
    },
    {
      name: "Md Jewel Hossain Khan",
      review: "The product quality is good, but customer support could be better.",
      rating: 3,
      image: "/images/insta-item6.jpg"
    },
    {
      name: "Md Jewel Hossain Khan",
      review: "The product quality is good, but customer support could be better.",
      rating: 3,
      image: "/images/insta-item6.jpg"
    },
    {
      name: "Md Jewel Hossain Khan",
      review: "The product quality is good, but customer support could be better.",
      rating: 3,
      image: "/images/insta-item6.jpg"
    },
    {
        name: "Miraz Hossain Ovi",
        review: "Great experience overall, but shipping took longer than expected.",
        rating: 4,
        image: "/images/single-image2.jpg"
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
            <p>${review.review}</p>
            <div class="stars">${stars}</div>
            <img class="img-review" src="${review.image}" alt="${review.name}">
            <h4>${review.name}</h4>
        `;

        reviewContainer.appendChild(reviewCard);
    });
});

// done 