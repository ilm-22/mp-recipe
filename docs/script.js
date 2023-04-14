function renderData(){

    let apiURL= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let userInput= document.getElementById('userOption').value; 
   

      fetch(apiURL + userInput)
    .then(response => response.json())
    .then(data => {

        let userMeal= data.meals[0];
       
       
      
      console.log(userMeal);

        console.log(userMeal.strMeal);  //Name of Meal
 
        console.log(userMeal.strArea); //Location of Meal
  
        console.log(userMeal.strCategory); //Type of Meal
  
        console.log(userMeal.strMealThumb); //Pic of Meal
  
        console.log(userMeal.strInstructions);//Meal Ingredients
        let count=1;
        let ingredientArray= [];
        for (let x in userMeal){
          let ingredients="";
          let measurements="";
          if(x.startsWith("strIngredient") && userMeal[x]){
            ingredients= userMeal[x];
            measurements= userMeal[`strMeasure` + count];
            count += 1;
            //console.log(ingredients, measurements);
            ingredientArray.push(`${measurements} ${ingredients}`)
          
          }
        }
        console.log(ingredientArray);

        //console.log(userMeal.strYoutube); //Meal video
       let videoLink = document.createElement('a');
      videoLink.href = userMeal.strYoutube;
      videoLink.textContent = 'Watch Meal Video';
      document.body.appendChild(videoLink);
        
      
  
        
      
      console.log(userMeal.strSource); //This is a link to the website which provides, a video, ingredients and method for the recipe

  

    
      result.innerHTML= 
        `<div id="pageBackground"> 
        <div id="nav">
         <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/kitchen tips.html">Kitchen     Tips</a></li>
        
  </div>
        <div id="mealInfo">
        <img src= ${userMeal.strMealThumb}>
        <div id="mealText">
        <h1>  ${userMeal.strMeal} </h1> <br>
       <p>Culture: ${userMeal.strArea} | Category: ${userMeal.strCategory} </p>
        <br> <b> More Information:</b><a href="${userMeal.strSource}">${userMeal.strSource}</a></br>
     
     <br><b>Tutorial Video:</b> <a href="${userMeal.strYoutube}">${userMeal.strYoutube}</a></br>
       </div>
      </div>
      <div id="instructions">
         <div id="ingredientList"> <p> Ingredients </p> </div>  
        <div id="method"><p> Method </p>         <pre>${userMeal.strInstructions}</pre></div>
        </div>

        
     `;
        
        let ingredientlist= document.getElementById("ingredientList");
        let parent= document.createElement("ul");
        
        ingredientArray.forEach((x) => {
          let child= document.createElement("li");
          child.innerText= x;
          parent.appendChild(child);
          ingredientlist.appendChild(parent);
        });

      
    }).catch(() => {
        result.innerHTML= `<h3>Invalid Input! Refresh Page and Try Again</h3>`;
    })
}


searchBTN.addEventListener('click', renderData); 




      



//6 RANDOM RECIPE FUNCTIONS


function getArrabiata(){

let apiURL= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

   fetch(apiURL + "Arrabiata")

  .then ((response) => response.json())
      .then ((data) => {

        let userMeal= data.meals[0];
        console.log(userMeal);

        console.log(userMeal.strMeal);  //Name of Meal
 
        console.log(userMeal.strArea); //Location of Meal
  
        console.log(userMeal.strCategory); //Type of Meal
  
        console.log(userMeal.strMealThumb); //Pic of Meal
  
        console.log(userMeal.strInstructions);//Meal Ingredients
        let count=1;
        let ingredientArray= [];
        for (let x in userMeal){
          let ingredients="";
          let measurements="";
          if(x.startsWith("strIngredient") && userMeal[x]){
            ingredients= userMeal[x];
            measurements= userMeal[`strMeasure` + count];
            count += 1;
            //console.log(ingredients, measurements);
            ingredientArray.push(`${measurements} ${ingredients}`)
          
          }
        }
        console.log(ingredientArray);
  
        console.log(userMeal.strYoutube); //Meal video
  
        console.log(userMeal.strSource); //This is a link to the website which provides, a video, ingredients and method for the recipe


   
    
        result.innerHTML= 
         `<div id="pageBackground"> 
        <div id="nav">
         <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/kitchen tips.html">Kitchen     Tips</a></li>
        
  </div>
        <div id="mealInfo">
        <img src= ${userMeal.strMealThumb}>
        <div id="mealText">
        <h1>  ${userMeal.strMeal} </h1> <br>
       <p>Culture: ${userMeal.strArea} | Category: ${userMeal.strCategory} </p>
        <br> <b> More Information:</b><a href="${userMeal.strSource}">${userMeal.strSource}</a></br>
     
     <br><b>Tutorial Video:</b> <a href="${userMeal.strYoutube}">${userMeal.strYoutube}</a></br>
       </div>
      </div>
      <div id="instructions">
         <div id="ingredientList"> <p> Ingredients </p> </div>  
        <div id="method"><p> Method </p>         <pre>${userMeal.strInstructions}</pre></div>
        </div>

        
     `;
        
        let ingredientlist= document.getElementById("ingredientList");
        let parent= document.createElement("ul");
        
        ingredientArray.forEach((x) => {
          let child= document.createElement("li");
          child.innerText= x;
          parent.appendChild(child);
          ingredientlist.appendChild(parent);
        });

   });
}

arrabiataBTN.addEventListener('click', getArrabiata);


function getThai(){

let apiURL= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

   fetch(apiURL + "Thai Green Curry")

  .then ((response) => response.json())
      .then ((data) => {

        let userMeal= data.meals[0];
        console.log(userMeal);

        console.log(userMeal.strMeal);  //Name of Meal
 
        console.log(userMeal.strArea); //Location of Meal
  
        console.log(userMeal.strCategory); //Type of Meal
  
        console.log(userMeal.strMealThumb); //Pic of Meal
  
        console.log(userMeal.strInstructions);//Meal Ingredients
        let count=1;
        let ingredientArray= [];
        for (let x in userMeal){
          let ingredients="";
          let measurements="";
          if(x.startsWith("strIngredient") && userMeal[x]){
            ingredients= userMeal[x];
            measurements= userMeal[`strMeasure` + count];
            count += 1;
            //console.log(ingredients, measurements);
            ingredientArray.push(`${measurements} ${ingredients}`)
          
          }
        }
        console.log(ingredientArray);
  
        console.log(userMeal.strYoutube); //Meal video
  
        console.log(userMeal.strSource); //This is a link to the website which provides, a video, ingredients and method for the recipe

    
        result.innerHTML= 
          
        `<div id="pageBackground"> 
        <div id="nav">
         <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/kitchen tips.html">Kitchen     Tips</a></li>
        
  </div>
        <div id="mealInfo">
        <img src= ${userMeal.strMealThumb}>
        <div id="mealText">
        <h1>  ${userMeal.strMeal} </h1> <br>
       <p>Culture: ${userMeal.strArea} | Category: ${userMeal.strCategory} </p>
        <br> <b> More Information:</b><a href="${userMeal.strSource}">${userMeal.strSource}</a></br>
     
     <br><b>Tutorial Video:</b> <a href="${userMeal.strYoutube}">${userMeal.strYoutube}</a></br>
       </div>
      </div>
      <div id="instructions">
         <div id="ingredientList"> <p> Ingredients </p> </div>  
        <div id="method"><p> Method </p>         <pre>${userMeal.strInstructions}</pre></div>
        </div>

        
     `;
        
        let ingredientlist= document.getElementById("ingredientList");
        let parent= document.createElement("ul");
        
        ingredientArray.forEach((x) => {
          let child= document.createElement("li");
          child.innerText= x;
          parent.appendChild(child);
          ingredientlist.appendChild(parent);
        });

   });
}

thaiBTN.addEventListener('click', getThai);


function getSpanishTortilla(){

let apiURL= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

   fetch(apiURL + "Spanish Tortilla")

  .then ((response) => response.json())
      .then ((data) => {

        let userMeal= data.meals[0];
        console.log(userMeal);

        console.log(userMeal.strMeal);  //Name of Meal
 
        console.log(userMeal.strArea); //Location of Meal
  
        console.log(userMeal.strCategory); //Type of Meal
  
        console.log(userMeal.strMealThumb); //Pic of Meal
  
        console.log(userMeal.strInstructions);//Meal Ingredients
        let count=1;
        let ingredientArray= [];
        for (let x in userMeal){
          let ingredients="";
          let measurements="";
          if(x.startsWith("strIngredient") && userMeal[x]){
            ingredients= userMeal[x];
            measurements= userMeal[`strMeasure` + count];
            count += 1;
            //console.log(ingredients, measurements);
            ingredientArray.push(`${measurements} ${ingredients}`)
          
          }
        }
        console.log(ingredientArray);
  
        console.log(userMeal.strYoutube); //Meal video
  
        console.log(userMeal.strSource); //This is a link to the website which provides, a video, ingredients and method for the recipe

    
        result.innerHTML= 
          
        `<div id="pageBackground"> 
        <div id="nav">
         <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/kitchen tips.html">Kitchen     Tips</a></li>
        
  </div>
        <div id="mealInfo">
        <img src= ${userMeal.strMealThumb}>
        <div id="mealText">
        <h1>  ${userMeal.strMeal} </h1> <br>
       <p>Culture: ${userMeal.strArea} | Category: ${userMeal.strCategory} </p>
        <br> <b> More Information:</b><a href="${userMeal.strSource}">${userMeal.strSource}</a></br>
     
     <br><b>Tutorial Video:</b> <a href="${userMeal.strYoutube}">${userMeal.strYoutube}</a></br>
       </div>
      </div>
      <div id="instructions">
         <div id="ingredientList"> <p> Ingredients </p> </div>  
        <div id="method"><p> Method </p>         <pre>${userMeal.strInstructions}</pre></div>
        </div>

        
     `;
        
        let ingredientlist= document.getElementById("ingredientList");
        let parent= document.createElement("ul");
        
        ingredientArray.forEach((x) => {
          let child= document.createElement("li");
          child.innerText= x;
          parent.appendChild(child);
          ingredientlist.appendChild(parent);
        });

   });
}

tortillaBTN.addEventListener('click', getSpanishTortilla);



function getRogaliki(){

let apiURL= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

   fetch(apiURL + "Rogaliki")

  .then ((response) => response.json())
      .then ((data) => {

        let userMeal= data.meals[0];
        console.log(userMeal);

        console.log(userMeal.strMeal);  //Name of Meal
 
        console.log(userMeal.strArea); //Location of Meal
  
        console.log(userMeal.strCategory); //Type of Meal
  
        console.log(userMeal.strMealThumb); //Pic of Meal
  
        console.log(userMeal.strInstructions);//Meal Ingredients
        let count=1;
        let ingredientArray= [];
        for (let x in userMeal){
          let ingredients="";
          let measurements="";
          if(x.startsWith("strIngredient") && userMeal[x]){
            ingredients= userMeal[x];
            measurements= userMeal[`strMeasure` + count];
            count += 1;
            //console.log(ingredients, measurements);
            ingredientArray.push(`${measurements} ${ingredients}`)
          
          }
        }
        console.log(ingredientArray);
  
        console.log(userMeal.strYoutube); //Meal video
  
        console.log(userMeal.strSource); //This is a link to the website which provides, a video, ingredients and method for the recipe

    
        result.innerHTML= 
          
        `<div id="pageBackground"> 
        <div id="nav">
         <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/kitchen tips.html">Kitchen     Tips</a></li>
        
  </div>
        <div id="mealInfo">
        <img src= ${userMeal.strMealThumb}>
        <div id="mealText">
        <h1>  ${userMeal.strMeal} </h1> <br>
       <p>Culture: ${userMeal.strArea} | Category: ${userMeal.strCategory} </p>
        <br> <b> More Information:</b><a href="${userMeal.strSource}">${userMeal.strSource}</a></br>
     
     <br><b>Tutorial Video:</b> <a href="${userMeal.strYoutube}">${userMeal.strYoutube}</a></br>
       </div>
      </div>
      <div id="instructions">
         <div id="ingredientList"> <p> Ingredients </p> </div>  
        <div id="method"><p> Method </p>         <pre>${userMeal.strInstructions}</pre></div>
        </div>

        
     `;
        
        let ingredientlist= document.getElementById("ingredientList");
        let parent= document.createElement("ul");
        
        ingredientArray.forEach((x) => {
          let child= document.createElement("li");
          child.innerText= x;
          parent.appendChild(child);
          ingredientlist.appendChild(parent);
        });

   });
}

rogalikiBTN.addEventListener('click', getRogaliki);



function getChickenHandi(){

let apiURL= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

   fetch(apiURL + "Chicken Handi")

  .then ((response) => response.json())
      .then ((data) => {

        let userMeal= data.meals[0];
        console.log(userMeal);

        console.log(userMeal.strMeal);  //Name of Meal
 
        console.log(userMeal.strArea); //Location of Meal
  
        console.log(userMeal.strCategory); //Type of Meal
  
        console.log(userMeal.strMealThumb); //Pic of Meal
  
        console.log(userMeal.strInstructions);//Meal Ingredients
        let count=1;
        let ingredientArray= [];
        for (let x in userMeal){
          let ingredients="";
          let measurements="";
          if(x.startsWith("strIngredient") && userMeal[x]){
            ingredients= userMeal[x];
            measurements= userMeal[`strMeasure` + count];
            count += 1;
            //console.log(ingredients, measurements);
            ingredientArray.push(`${measurements} ${ingredients}`)
          
          }
        }
        console.log(ingredientArray);
  
        console.log(userMeal.strYoutube); //Meal video
  
        console.log(userMeal.strSource); //This is a link to the website which provides, a video, ingredients and method for the recipe

    
        result.innerHTML= 
          
        `<div id="pageBackground"> 
        <div id="nav">
         <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/kitchen tips.html">Kitchen     Tips</a></li>
        
  </div>
        <div id="mealInfo">
        <img src= ${userMeal.strMealThumb}>
        <div id="mealText">
        <h1>  ${userMeal.strMeal} </h1> <br>
       <p>Culture: ${userMeal.strArea} | Category: ${userMeal.strCategory} </p>
        <br> <b> More Information:</b><a href="${userMeal.strSource}">${userMeal.strSource}</a></br>
     
     <br><b>Tutorial Video:</b> <a href="${userMeal.strYoutube}">${userMeal.strYoutube}</a></br>
       </div>
      </div>
      <div id="instructions">
         <div id="ingredientList"> <p> Ingredients </p> </div>  
        <div id="method"><p> Method </p>         <pre>${userMeal.strInstructions}</pre></div>
        </div>

        
     `;
        
        let ingredientlist= document.getElementById("ingredientList");
        let parent= document.createElement("ul");
        
        ingredientArray.forEach((x) => {
          let child= document.createElement("li");
          child.innerText= x;
          parent.appendChild(child);
          ingredientlist.appendChild(parent);
        });

   });
}

handiBTN.addEventListener('click', getChickenHandi);


function getVeganLasagna(){

let apiURL= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

   fetch(apiURL + "Vegan Lasagna")

  .then ((response) => response.json())
      .then ((data) => {

        let userMeal= data.meals[0];
        console.log(userMeal);

        console.log(userMeal.strMeal);  //Name of Meal
 
        console.log(userMeal.strArea); //Location of Meal
  
        console.log(userMeal.strCategory); //Type of Meal
  
        console.log(userMeal.strMealThumb); //Pic of Meal
  
        console.log(userMeal.strInstructions);//Meal Ingredients
        let count=1;
        let ingredientArray= [];
        for (let x in userMeal){
          let ingredients="";
          let measurements="";
          if(x.startsWith("strIngredient") && userMeal[x]){
            ingredients= userMeal[x];
            measurements= userMeal[`strMeasure` + count];
            count += 1;
            //console.log(ingredients, measurements);
            ingredientArray.push(`${measurements} ${ingredients}`)
          
          }
        }
        console.log(ingredientArray);
  
        console.log(userMeal.strYoutube); //Meal video
  
        console.log(userMeal.strSource); //This is a link to the website which provides, a video, ingredients and method for the recipe

    
        result.innerHTML= 
          
        `<div id="pageBackground"> 
        <div id="nav">
         <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/kitchen tips.html">Kitchen     Tips</a></li>
        
  </div>
        <div id="mealInfo">
        <img src= ${userMeal.strMealThumb}>
        <div id="mealText">
        <h1>  ${userMeal.strMeal} </h1> <br>
       <p>Culture: ${userMeal.strArea} | Category: ${userMeal.strCategory} </p>
        <br> <b> More Information:</b><a href="${userMeal.strSource}">${userMeal.strSource}</a></br>
     
     <br><b>Tutorial Video:</b> <a href="${userMeal.strYoutube}">${userMeal.strYoutube}</a></br>
       </div>
      </div>
      <div id="instructions">
         <div id="ingredientList"> <p> Ingredients </p> </div>  
        <div id="method"><p> Method </p>         <pre>${userMeal.strInstructions}</pre></div>
        </div>

        
     `;
        
        let ingredientlist= document.getElementById("ingredientList");
        let parent= document.createElement("ul");
        
        ingredientArray.forEach((x) => {
          let child= document.createElement("li");
          child.innerText= x;
          parent.appendChild(child);
          ingredientlist.appendChild(parent);
        });

   });
}


lasgnaBTN.addEventListener('click', getVeganLasagna);