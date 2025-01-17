"use strict"


function renderCoffee(coffee) {
    var html = '<div class="d-flex">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p class="roastName text-secondary">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function sortCoffee(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = input.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            if (coffee.name.toLowerCase().includes(selectedName)) {
                filteredCoffees.push(coffee);
            }
        }
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedName)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = sortCoffee(filteredCoffees);
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var input = document.querySelector("#input");

tbody.innerHTML = sortCoffee(coffees);

submitButton.addEventListener('click', updateCoffees);

input.addEventListener('input', function () {
    var list = '';
    coffees.forEach(function(coffee) {
        if(coffee.name.toLowerCase().includes(input.value.toLowerCase())) {
            // tbody.innerHTML = coffee.name;
            list += renderCoffee(coffee)
        } tbody.innerHTML = list;
    })
})


var addCoffee = document.querySelector('#addCoffee');
var addRoast = document.querySelector('#addRoast')
var submitNew = document.querySelector('#submitNew');
submitNew.addEventListener('click', function () {
    coffees.push({
        id: 15,
        name: addCoffee.value,
        roast: addRoast.value
    });

    console.log(coffees)
    tbody.innerHTML = sortCoffee(coffees);
});







