const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('remove',()=>{
    wrapper.preventDefault();
});




// const form = document.getElementById('registration-form');
// // const loginLink = document.getElementById('login-link');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   // Do something with the form data, such as sending it to a server
//   alert(`Registration successful! Name: ${name}, Email: ${email}, Password: ${password}`);
//   form.reset();
// });

// loginLink.addEventListener('click', (event) => {
//   event.preventDefault();
//   // Do something else, such as show a login form
//   alert('Please log in to continue.');
// })
