let receipts = ["Apple pie", "Tiramisu","Cheesecake"];

const searchinput = document.getElementById('searchInput');

searchinput.addEventListener('keyup', function(){
    const input = searchinput.value;

    const result = receipts.filter(item => item.name.includes(input));
})