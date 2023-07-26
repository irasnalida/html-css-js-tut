// const observer = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     });
// });


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
},
{
    threshold : 0.5,
    // rootMargin : "-100px",
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach(el => observer.observe(el));
