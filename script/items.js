var veggies_counter = 0;
var fruits_counter = 0;
var exotics_counter = 0;
var staple_counter = 0;


// $("#count_this").click(function() {
//     counter++;
//     alert(counter);
// });



$(function() {
    $('#Veggies').click(function() {
        veggies_counter++
        alert(`Cart items:\n
        Veggies: ${veggies_counter}\n
        Fruits: ${fruits_counter}\n
        Fruits: ${exotics_counter}\n
        Fruits: ${staple_counter}\n
        Cart Value: ${veggies_counter+fruits_counter+exotics_counter+staple_counter}
        `)
    });
    $('#Fruits').click(function() {
        fruits_counter++
        alert(`Cart items:\n
        Veggies: ${veggies_counter}\n
        Fruits: ${fruits_counter}\n
        Fruits: ${exotics_counter}\n
        Fruits: ${staple_counter}\n
        Cart Value: ${veggies_counter+fruits_counter+exotics_counter+staple_counter}
        `)
    });
    $('#Exotics').click(function() {
        exotics_counter++
        alert(`Cart items:\n
        Veggies: ${veggies_counter}\n
        Fruits: ${fruits_counter}\n
        Fruits: ${exotics_counter}\n
        Fruits: ${staple_counter}\n
        Cart Value: ${veggies_counter+fruits_counter+exotics_counter+staple_counter}
        `)
    });
    $('#Staple').click(function() {
        staple_counter++
        alert(`Cart items:\n
        Veggies: ${veggies_counter}\n
        Fruits: ${fruits_counter}\n
        Fruits: ${exotics_counter}\n
        Fruits: ${staple_counter}\n
        Cart Value: ${veggies_counter+fruits_counter+exotics_counter+staple_counter}
        `)
    });

});
