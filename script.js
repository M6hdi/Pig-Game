let RolePlay = document.querySelector("#role");
let ModalBox = document.querySelector("#role-modal");
let CloseModal = document.querySelector("#close-modal");
let DefaultDice= document.querySelector("#default-dice");
let Dice = document.querySelector("#dice");
let RollDice = document.querySelector("#roll");
let CurrentScoreP0 = document.querySelector("#current-score-p0");
let CurrentScoreP1 = document.querySelector("#current-score-p1");
let ActivePlayer = 0;
let ScoreP0 = document.querySelector("#score-p0");
let ScoreP1 = document.querySelector("#score-p1");
let Hold = document.querySelector("#hold");
let Restart = document.querySelector("#restart");
let Winner0 = document.querySelector("#winner0");
let Winner1 = document.querySelector("#winner1");
RolePlay.addEventListener("click", ()=>{
    ModalBox.style.display="block";
})
CloseModal.addEventListener("click", ()=>{
    ModalBox.style.display="none";
})
let CurrentScore = 0;
RollDice.addEventListener("click", ()=>{
    let RandomNum = Math.floor(Math.random()*6 +1);
    DefaultDice.style.display="none";
    Dice.src=`images/dice ${RandomNum}.png`;
    Dice.style.display="inline-block";
    if(RandomNum !== 1){
    CurrentScore += RandomNum;
    document.querySelector(`#current-score-p${ActivePlayer}`).innerHTML = CurrentScore;
    }
    else{
        SwitchPlayer();
    }
})
function SwitchPlayer(){
    CurrentScore = 0;
    document.querySelector(`#current-score-p${ActivePlayer}`).innerHTML = CurrentScore;
    if(ActivePlayer == 0){
        ActivePlayer = 1;
        document.querySelector("#pointer1").style.display="none";
        document.querySelector("#pointer2").style.display="inline-block";
    }
    else{
        ActivePlayer = 0;
        document.querySelector("#pointer2").style.display="none";
        document.querySelector("#pointer1").style.display="inline-block";
        }
}
let Scores = [0,0];
Hold.addEventListener("click",()=>{
    Scores[ActivePlayer] += CurrentScore;
    document.getElementById(`score-p${ActivePlayer}`).innerHTML = Scores[ActivePlayer];
    if(Scores[ActivePlayer]>49){
        document.querySelector(`#winner${ActivePlayer}`).style.display="block";
        Restart.style.display="inline-block";
        DefaultDice.style.display="inline-block";
        Dice.style.display="none";
        RollDice.style.display="none";
        Hold.style.display="none";
    }
    SwitchPlayer();
})
Restart.addEventListener("click", ()=>{
    window.location.reload();
})