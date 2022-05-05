let receipts = {
    applePie: 'Apple pie',
    tiramisu: 'Tiramisu',
    cheesecake: 'Cheesecake'
};

const searchinput = document.getElementById('searchInput');

searchinput.addEventListener("keyup", function(){
    const input = searchinput.value;

    const result = receipts.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    
    let suggestion = '';

    result.forEach(resultItem => 
        suggestion +=`
            <div class="suggestion">$(resultItem.name)</div>`
    )

    document.getElementById('suggestions').innerHTML = suggestion;
    })