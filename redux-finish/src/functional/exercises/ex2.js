


const recipe = {

    name: "Supergattie Bolongnese",
    ingredients: ["egg", "salt"]
};

//Add
const add = {
    ...recipe,
    ingredients: [...recipe.ingredients, "cream"]
};

//update
const update = {
    ...recipe,
    ingredients: recipe.ingredients.map(
        ingredient => ingredient === "egg" ? "egg white" : ingredient
    )
};
//Remove
const remove = {
    ...recipe,
    ingredients: recipe.ingredients.filter(
        ingredient => ingredient !== "egg"
    )
};




