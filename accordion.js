const accordion = document.getElementsByClassName('question');

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('accordion')
        this.nextElementSibling.classList.toggle('accordion');
    })
}