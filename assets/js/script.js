var scoreLeft = 0
var scoreRight = 0
let possiblePositions = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10, 11, 12, 13, 14, 15, 16]
let cardSelector = ['.c1', '.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15', '.c16']


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



var positionC16 = document.querySelector('.c16').dataset.position






// cards randomly assigned position
    // order set to random number, that number removed from set

function randomizePosition(){
    shuffleArray(possiblePositions);
    for (let i = 0; i < possiblePositions.length; i++) {
        document.querySelector(cardSelector[i]).setAttribute('style', 'order:'+possiblePositions[i])   
    }
}
randomizePosition()
// user clicks on two cards
// cards flip
document.querySelector('.container').addEventListener('click', function(event){
    var element = event.target;
if (element.matches('.card')){
  if (element.getAttribute('data-flipped')==='hidden'){
    var number = element.getAttribute('data-pair')
    element.textContent = number
    element.setAttribute('data-flipped', 'visible')
  } else {
    element.innerHTML = "🤪"
    element.setAttribute('data-flipped', 'hidden')
  }
}})

// if cards = score and cards move to side
// same players turn
// if cards != cards flip back over
// next players turn




document.querySelector('.c1').setAttribute('style', "order:10")
document.querySelector('.c2').setAttribute('style', "order:9")

// document.querySelector('.c1').addEventListener('click', function(){randomizePosition(possiblePositions)})