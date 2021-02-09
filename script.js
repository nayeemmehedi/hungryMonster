const total_meal = document.getElementById('total-meal');
const single_meal = document.getElementById('single-meal');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', getPopularMeal);


function getPopularMeal() {
    let searchInputTxt = document.getElementById('search-input').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {

            let previousHTML = total_meal.innerHTML;

                data.meals.map(meal => {
                    const htmlTemplate = `

           <div class="col">
                   <div class="card">
                   
                   
                <img style="height:420px" src="${meal.strMealThumb}" alt = "food">


                   <div class="card-body">
                       <h5 class="card-title">${meal.strMeal}</h5>

                       <button  class="btn btn-outline-success">View Details</button>
                    </div>

                       
                   </div>
                   </div>
           </div>
           `;
                    previousHTML += htmlTemplate
                })
                
           

            total_meal.innerHTML = previousHTML;   
        })

}














