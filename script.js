const recipes = [
  {
    name: "Masala Dosa",
    category: "South Indian",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Benne_Masala_Dosa.jpg",
    ingredients: [
      "Dosa batter",
      "Potatoes",
      "Mustard seeds",
      "Curry leaves",
      "Turmeric",
      "Onion"
    ],
    instructions: "Prepare dosa batter and ferment overnight. Cook mashed potatoes with spices for filling. Make dosa on a hot tawa, fill with potato masala and fold."
  },
  {
    name: "Chole Bhature",
    category: "North Indian",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Bikaner_chole_bhature.jpg",
    ingredients: [
      "Chickpeas",
      "Onion",
      "Tomato",
      "Garam masala",
      "Flour",
      "Curd"
    ],
    instructions: "Soak chickpeas overnight. Cook with spices. Prepare dough using flour and curd. Roll and deep fry to make bhature."
  },
  {
    name: "Hyderabadi Biryani",
    category: "Hyderabadi",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Chicken_Hyderabadi_Biryani.JPG",
    ingredients: [
      "Basmati rice",
      "Chicken",
      "Yogurt",
      "Fried onions",
      "Spices"
    ],
    instructions: "Marinate chicken with spices. Layer partially cooked rice and marinated chicken. Cook on dum for 30-40 mins."
  },
  {
    name: "Rajma Chawal",
    category: "Punjabi",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Rajmamasala.jpg",
    ingredients: [
      "Kidney beans",
      "Onion",
      "Tomato",
      "Ginger garlic paste",
      "Spices",
      "Rice"
    ],
    instructions: "Boil soaked rajma. Prepare gravy with onion-tomato-spice base. Simmer rajma in gravy and serve with rice."
  },
  {
    name: "Pav Bhaji",
    category: "Maharashtrian",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Pav_Bhaji.jpg",
    ingredients: [
      "Potatoes",
      "Tomatoes",
      "Peas",
      "Onion",
      "Capsicum",
      "Pav bhaji masala",
      "Butter"
    ],
    instructions: "Boil and mash vegetables. Sauté with spices and butter. Toast pav buns and serve with bhaji."
  }
];

function displayRecipes(recipesToShow) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  recipesToShow.forEach(recipe => {
    const div = document.createElement("div");
    div.classList.add("recipe");

    div.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>
      <p><strong>Category:</strong> ${recipe.category}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;

    container.appendChild(div);
  });
}

// Initial display
displayRecipes(recipes);

// Search function
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.category.toLowerCase().includes(query)
  );
  displayRecipes(filtered);
});
