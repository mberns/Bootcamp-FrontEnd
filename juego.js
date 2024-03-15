const playGround = () => {

  function getRandomNumber (maxNum) {
    return (Math.ceil(Math.random()*maxNum));
  }

  function isEven (number) {
    if (number % 2 === 0) {
      console.log("Es par");
      return "si";
    } else {
      console.log("Es impar");
      return "no"
    }
  }
  
  const randomNumber = getRandomNumber (100);
  //console.log(randomNumber);
  isEven (randomNumber);
  const correctAnswer = isEven (randomNumber);
  //console.log(correctAnswer);
  
  const userAnswer = prompt(`El numero ${randomNumber} es par? Escribe si o no`)
  //console.log(correctAnswer,randomNumber,"Respuesta del usuario",userAnswer);
  
  if (userAnswer === correctAnswer) {
    alert("Respuesta correcta");
    return true;
  } else {
    alert("Respuesta incorrecta");
    return false;
  }
  }
  
  
  function startGame() {
    for(let i=0;i<3;i++) {
    const isCorrectAnswer = playGround();
    console.log(isCorrectAnswer);
    if (isCorrectAnswer === false){
      alert("Game over!");
      break;
    }
    if (isCorrectAnswer === true && i === 2){
      alert("Felicitaciones ganaste!");
    }
  }
  }
  
  
  const myButton = document.querySelector("button")
  myButton.addEventListener("click",function(){
    startGame()
  })
  //para editar codigo online
  //https://codepen.io/pen/?editors=1111