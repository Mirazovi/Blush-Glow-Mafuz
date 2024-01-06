const BaseApiUrl = `https://admin.blushglow.ca`;
const BaseCongener = document.querySelector("#service-cont");
const ReviewHome = document.querySelector("#ReviewHome");
const ReviewMain = document.querySelector("#ReviewMain");
function groupByCategory(arr, categoryProperty) {
  return arr.reduce((grouped, obj) => {
    const category = obj[categoryProperty];

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(obj);

    return grouped;
  }, {});
}

const LoadData = async () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const ServerRes = await fetch(
      "https://admin.blushglow.ca/api/services?populate=*",
      requestOptions
    );
    const { data } = await ServerRes.json();

    const dataMod = data.map((data) => {
      return {
        name: data.attributes.name,
        url: data.attributes?.url || "#",
        price: data.attributes.price,
        photo: data.attributes.photo.data.attributes,
        category: data.attributes.category.data.attributes.name,
      };
    });
    const mainData = groupByCategory(dataMod, "category");
    console.log(
      "🚀 ~ file: contentload.js:46 ~ LoadData ~ mainData:",
      mainData
    );

    const domArray = [];
    Object.entries(mainData).forEach(([key, value]) => {
      console.log(value);
      const dom = `
      <div>
      <div class="container">
      <div
      class="d-flex mx-3 mx-lg-5 px-lg-4 flex-wrap justify-content-center justify-content-between align-items-center my-3 my-lg-5"

    >
      <div>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 706.373 39.706"
          style="enable-background: new 0 0 706.373 39.706"
          xml:space="preserve"
        >
          <g style="opacity: 0.5">
            <path
              style="fill: #b87760"
              d="M22.458,2.145c168.915,8.823,339.219,12.563,508.304,14.913
     c56.478,0.688,112.956,1.133,169.435,0.805c0.828-0.005,1.504,0.663,1.509,1.491c0.005,0.835-0.674,1.514-1.509,1.509
     c-112.967-0.53-225.925,1.348-338.87,3.77c-83.216,1.842-170.926,4.456-254.152,7.888c-28.239,1.235-56.478,2.444-84.717,4.06
     c-9.509,0.544-17.659-6.723-18.203-16.232C3.604,10.145,12.264,1.503,22.458,2.145L22.458,2.145z"
            />
          </g>
        </svg>
      </div>
      <h4 style="color: #b87760; letter-spacing: 0.2rem;" class="text-uppercase fs-lg-1 fs-2 mb-0">
        ${key}
      </h4>
      <div>
        <svg
          version="1.1"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 706.373 39.706"
          style="enable-background: new 0 0 706.373 39.706"
          xml:space="preserve"
        >
          <g style="opacity: 0.5">
            <path
              style="fill: #b87760"
              d="M22.458,2.145c168.915,8.823,339.219,12.563,508.304,14.913
  c56.478,0.688,112.956,1.133,169.435,0.805c0.828-0.005,1.504,0.663,1.509,1.491c0.005,0.835-0.674,1.514-1.509,1.509
  c-112.967-0.53-225.925,1.348-338.87,3.77c-83.216,1.842-170.926,4.456-254.152,7.888c-28.239,1.235-56.478,2.444-84.717,4.06
  c-9.509,0.544-17.659-6.723-18.203-16.232C3.604,10.145,12.264,1.503,22.458,2.145L22.458,2.145z"
            />
          </g>
        </svg>
      </div>
    </div>
      </div>
      <div class="row">

      ${value
        .map((value) => {
          return `
            <div class="hoverEffectMafuz position-relative col-md-6 col-sm-12 p-0" >
         


          <img
          class="w-100 h-100 object-fit-cover lazy-load"
  src="image-default.jpg"
  srcset="
    ${BaseApiUrl}${value?.photo?.formats?.small?.url || "/noPhoto"} 480w,
    ${BaseApiUrl}${
            value?.photo?.formats?.medium?.url ||
            value?.photo?.formats?.small?.url ||
            "/noPhoto"
          } 800w,
    ${BaseApiUrl}${
            value?.photo?.formats?.large?.url ||
            value?.photo?.formats?.medium?.url ||
            value?.photo?.formats?.small?.url ||
            "/noPhoto"
          } 1200w
  "
  sizes="
    (max-width: 480px) 400px,
    (max-width: 800px) 720px,
    1200px
  "
  alt="${value?.photo?.alternativeText || "blush and glow"} "
  loading="lazy" <!-- lazy loading for improved performance -->
>

          <div class="position-absolute bottom-0 h-100 w-100">
            <div
              class="w-100 px-3 py-1 px-lg-5 py-lg-4 h-100 d-flex flex-column justify-content-between"
            >
              <h1
                class="fw-bolder py-2 px-3 rounded-3 text-center"
                style="
                  color: #eae8e8;
                  background-color: #312f2f67;
                  width: fit-content;
                "
              >
                ${value?.name || "Loading..."}
              </h1>
              <div
                class="d-flex p-2 rounded-3 justify-content-between align-content-center"
                style="background-color: #312f2f67"
              >
                <a
                  class="buttonHoverEffect px-3 rounded-1 d-flex align-items-center gap-1 justify-content-center text-black"
                  href="${value?.url || "#"}"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#1877F2"
                      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                    />
                    <path
                      fill="#FFF"
                      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
                    />
                  </svg>
                  <span style="margin-bottom: -7px" class="text-white fs-4"
                    >Book Now</span
                  >
                </a>
                <p
                  style="color: #eae8e8; margin-bottom: -10px"
                  class="fw-bold fs-1"
                >
                  $${value.price}
                </p>
              </div>
            </div>
          </div>
        </div>
            `;
        })
        .join("\n")}

      </div>
      </div>

      `;
      domArray.push(dom);
    });

    BaseCongener.innerHTML = domArray.join(" ");
  } catch (error) {
    console.log("🚀 ~ file: contentLoad.js:5 ~ LoadData ~ error:", error);
  }
};

const LoadReviewData = async () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const reviewData = await fetch(
      "https://admin.blushglow.ca/api/reviews?populate=*",
      requestOptions
    );

    const { data } = await reviewData.json();

    const modifiedData = data.map((data) => {
      console.log("single", data);
      return {
        username: data?.attributes?.username,
        photourl: data?.attributes?.photourl,
        rating: data?.attributes?.rating,
        review: data?.attributes?.review,
        url: data?.attributes?.url,
      };
    });

    const HomeReview = modifiedData
      .slice(0, 6)
      .map((value) => {
        // Determine color based on rating value

        let rating = [1, 2, 3, 4, 5];

        return `<div  class="col-md-6 col-sm-12 col-lg-4">
        <div style="min-height: 300px;"  class="border position-relative p-4 rounded-3 shadow-sm">
          <div class="d-flex gap-2 align-items-center">
            <img
              style="width: 70px; height: 70px; border-radius: 100%"
              src=${value.photourl}
              alt="img"
            />
            <div>
              <h1 class="mb-1 fw-bold fs-4">${value.username}</h1>
              <div class="d-flex gap-1" style="width: 100px">

              ${rating
                .map((rating) => {
                  return `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  class="w- h-"
                  5
                  w-100
                  100
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>`;
                })
                .join(" ")}
              </div>
            </div>
          </div>
          <p class="mt-4" style="text-align: justify;">
            ${value.review.slice(0, 200)}....
          </p>
          <div
              class="position-absolute"
              style="
                width: 100%;
                height: 100px;
                background-image: linear-gradient(
                  0deg,
                  #fff4f4 60%,
                  transparent
                );
                left: 0;
                bottom: 0.1px;
              "
            >
              <div
                class="d-flex w-100 h-100 justify-content-center align-items-center"
              >
                <button
                  style="
                    font-size: 18px;
                    color: rgb(87, 87, 87);
                    margin-bottom: -20px;
                  "
                  class="px-3 border-1 bg-transparent rounded-2 py-1"
                >
                  <a target="_blank" href=${value.url}> See more </a>
                </button>
              </div>
            </div>
        </div>
      </div>`;
      })
      .join(" ");

    ReviewHome.innerHTML = HomeReview;
  } catch (err) {
    console.log(err);
  }
};

const LoadMainReviewData = async () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const reviewData = await fetch(
      "https://admin.blushglow.ca/api/reviews?populate=*",
      requestOptions
    );

    const { data } = await reviewData.json();

    const modifiedData = data.map((data) => {
      console.log("single", data);
      return {
        username: data?.attributes?.username,
        photourl: data?.attributes?.photourl,
        rating: data?.attributes?.rating,
        review: data?.attributes?.review,
        url: data?.attributes?.url,
      };
    });

    const HomeReview = modifiedData
      .map((value) => {
        // Determine color based on rating value

        let rating = [1, 2, 3, 4, 5];

        return `<div  class="col-md-6 col-sm-12 col-lg-4">
        <div style="min-height: 300px;"  class="border position-relative p-4 rounded-3 shadow-sm">
          <div class="d-flex gap-2 align-items-center">
            <img
              style="width: 70px; height: 70px; border-radius: 100%"
              src=${value.photourl}
              alt="img"
            />
            <div>
              <h1 class="mb-1 fw-bold fs-4">${value.username}</h1>
              <div class="d-flex gap-1" style="width: 100px">

              ${rating
                .map((rating, i) => {
                  return `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="${i + 1 <= value.rating ? "#FFD700" : "black"}"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  class="w- h-"
                  5
                  w-100
                  100
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>`;
                })
                .join(" ")}
              </div>
            </div>
          </div>
          <p class="mt-4" style="text-align: justify;">
            ${value.review.slice(0, 200)}....
          </p>
          <div
              class="position-absolute"
              style="
                width: 100%;
                height: 100px;
                background-image: linear-gradient(
                  0deg,
                  #fff4f4 60%,
                  transparent
                );
                left: 0;
                bottom: 0.1px;
              "
            >
              <div
                class="d-flex w-100 h-100 justify-content-center align-items-center"
              >
                <button
                  style="
                    font-size: 18px;
                    color: rgb(87, 87, 87);
                    margin-bottom: -20px;
                  "
                  class="px-3 border-1 bg-transparent rounded-2 py-1"
                >
                  <a target="_blank" href=${value.url}> See more </a>
                </button>
              </div>
            </div>
        </div>
      </div>`;
      })
      .join(" ");

    ReviewMain.innerHTML = HomeReview;
  } catch (err) {
    console.log(err);
  }
};

(function () {
  window.addEventListener("load", () => {
    LoadMainReviewData();
    LoadReviewData();
    LoadData();
  });
})();
