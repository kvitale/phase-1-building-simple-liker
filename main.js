// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeHearts = document.querySelectorAll('.like-glyph')
console.log(likeHearts)

likeHearts.forEach((heart) => {
  heart.addEventListener('click', e => {
    mimicServerCall()
      .then(data => {

        if(heart.textContent === FULL_HEART){
          heart.textContent = EMPTY_HEART
          
        }
        else{heart.textContent = FULL_HEART
          heart.className = "activated-heart"}
      })
      .catch(resp => {
        document.querySelector('div').className = ''
        setTimeout(() => document.querySelector('div').className = 'hidden',(3000))
          
        })

        
        
      })
      
    })
    


// Your JavaScript code goes here!
// Add hidden class error to modal 
// const hiddenClass = document.querySelector('div')
// hiddenClass.className = 'hidden'
// click on empty heart Invoke/mimicSeverCall 
// function likeCallBack(e){
//   const heart = e.target
//   console.log(heart)
// }




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
