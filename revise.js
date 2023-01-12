const happyFace = document.querySelector('.happy');
const angryFace = document.querySelector('.angry');

angryFace.addEventListener('click',() => {
if(happyFace.classList.contains('happy')){
happyFace.classList.add('active');
angryFace.classList.remove('active');
}
});

happyFace.addEventListener('click',() => {
    if(angryFace.classList.contains('angry')){
    angryFace.classList.add('active');
    happyFace.classList.remove('active');
    }
    });

