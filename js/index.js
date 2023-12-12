async function logJSONData() {
    let card, str;
    let loader = document.getElementById("loader");
    loader.style.bottom = "0px";
    let food_input = document.getElementById("food");
    let food_name = food_input.value;
    food_input.value = ''
    let recipes_input = document.getElementById("recipes");
    let recipes = recipes_input.value;
    recipes_input.value = '';
    let show_food = document.getElementById("show_food")
    show_food.innerHTML = '';
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`);
    const jsonData = await response.json();
    console.log(jsonData["meals"]);
    let food_list = '';
    jsonData["meals"].forEach((element, index) => {
        if(index < recipes){
            str = element["strMealThumb"];
            image = str.replace(/\\/g, "");
            card = `
            <div class="card mb-3" style="max-width: 100%;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${element['strMeal']}</h5>
                    <p class="card-text">${element['strInstructions']}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    `;
            // food_list.appendChild(card);
            food_list = food_list + card;
            // console.log(index, element);
        }
        });
    show_food.innerHTML = food_list;
    loader.style.bottom = "1000px";
    }
