
const submitBtn = document.querySelector('button');
const scores = document.querySelectorAll('.score');
const submitScrn = document.querySelector('#submit_screen');
const result = document.querySelector('#score-result');
const ratingCntr = document.querySelector('.container');
let scoreSelected = 0;

scores.forEach(score =>{
    score.addEventListener('click', selectScore);
});

function selectScore(event){
   const clickTarget = event.currentTarget;
   scoreSelected = clickTarget.textContent;
   
   scores.forEach(score =>{
        score.classList.remove("selected");
        score.classList.add("score");
   });

   clickTarget.classList.replace("score","selected");
   
}

submitBtn.addEventListener('click', ()=>{
    if( scoreSelected === 0){
        alert('Please select a rating from 1 to 5.');
    }else{
        submitScrn.style.display = "flex";
        result.textContent = `You selected ${scoreSelected} out of 5`;
        ratingCntr.style.display="none";
    }
})
