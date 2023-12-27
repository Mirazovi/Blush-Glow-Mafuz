const BaseApiUrl = `http://localhost:1337/api`;
const categoryL = [Facial, Threading, Waxing, Makeup];

const LoadData = async () => {
  try {
    const ServerRes = await fetch(`${BaseApiUrl}/services?populate=*`);
    const { data } = await ServerRes.json();
    const dataMod =data.map((data) => {
      return {
        name: data.attributes.name,
        price: data.attributes.price,
        photo: data.attributes.photo.data.attributes,
        category: data.attributes.category.data.attributes.Name,
      };
    });
    const


  } catch (error) {
    console.log("🚀 ~ file: contentLoad.js:5 ~ LoadData ~ error:", error);
  }
};

(function () {
  window.addEventListener("load", () => {
    LoadData();
  });
})();
