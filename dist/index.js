//variables
const input = document.querySelector('.input');
console.log(input);
const searchBtn = document.querySelector('.search');
console.log(searchBtn); 




//event listeners 
searchBtn.addEventListener('click',loadData);





//function

function loadData(){
    let value = input.value
    if (value){
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${value}
        `)
        .then((Response)=>Response.json())
        .then((data)=>console.log(data)) 
    }
}