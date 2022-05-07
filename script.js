let receipts = [ /*création d'un tableau d'objets*/
    {name:'Tiramisu', sugar:35, tomatoe:0, cheese:300, speculos:0, apple:0}, 
    {name:'Cheesecake', sugar:35, tomatoe:0, cheese:200, speculos:10, apple:0},
    {name:'Apple Pie', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test1', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test2', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test3', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test4', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test5', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test6', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test7', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4},
    {name:'test8', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4}
]; 


const searchinput = document.getElementById('searchInput'); /* création d'une constante qui sélectionne searchInput */ 

searchinput.addEventListener('keyup', function(){
    const input = searchinput.value; /* input = constante = valeur entrée par l'utilisateur */

    const result = receipts.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())); /* => désigne une fonction anonyme/ item = objet / toLocaleLowercase = convertit en minuscule */
    
    let suggestion = ''; /* on commence à créer notre liste de suggestion en fonction du filtre appliqué */
    
    result.forEach(resultItem => /* forEach = appliquer la fonction sur chaque élément du tableau */
        suggestion +=`
            <div class="suggestion">${resultItem.name}</div>
        `
    )

    document.getElementById('suggestions').innerHTML = suggestion;

})
