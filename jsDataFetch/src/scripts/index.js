// import $ from 'jquery';
//     let user = {
//         name: 'Abbie',
//         age: '24'
//     };

//     let promise = $.post(
//         "http://5c7ef40408d03100141af4c3.mockapi.io/users", user
//     );

//     promise.then(
//         data => console.log('data: ', data),
//         error => console.log('error: ', error)
//     );
//posting using jquey 

import $ from 'jquery';

let form = document.getElementById('form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    let age = form.elements['age'];    
    
    // console.log(user.value, age.value);

    let userError = document.getElementById('user-error');

    if(user.value.length < 5) {
        userError.textContent = 'Invalid Entry';
        user.style.color = 'red';
        user.focus();
    }

    let posting = {
        user: user.value,
        age: age.value
    };

    let promise = $.post (
        "http://5c7ef40408d03100141af4c3.mockapi.io/users", posting
    );
    promise.then(
        data => console.log('success: ', data),
        error => console.log('error: ', error)
    );

    event.preventDefault();
});