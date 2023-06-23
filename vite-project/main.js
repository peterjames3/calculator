/* import './style.css'; */

const displayEl = document.querySelector("textarea.display-result");
const buttonsContainerEl = document.querySelector(".bottom-buttons");
const toggleEl = document.querySelector(".bauble_label");
const bodyEl = document.querySelector('body');
const targetElements = document.querySelectorAll(".bottom-buttons :nth-child(4), :nth-child(17)");
const prefer_color_scheme = window.getComputedStyle(bodyEl).getPropertyValue("background-color");
const changedColor = " hsl(222, 26%, 31%)"

buttonsContainerEl.addEventListener("click", event => {
  const buttonValue = event.target.textContent;
  const buttonClassName = event.target.className;

  if (buttonClassName === 'container--grid1') {
    if (buttonValue === 'Reset') {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "Del") {
      if (displayEl.value.trim().length > 0) {
        displayEl.value = displayEl.value.slice(0, -1);
      }
    } else {
      appendValue(buttonValue);
    }
  }
});

function clearResult() {
  displayEl.value = '';
}

function calculateResult() {
  if (displayEl.value.trim().length === 0) {
    return null;
  }
  displayEl.value = eval(displayEl.value);
}

function appendValue(buttonValue) {
  displayEl.value += buttonValue;
} 
//The above function takes the "buttonValue" as a parameter and appends it to the "value" property of the "dislayEl" textares element> This implies that the "buttonValue will be added to the existing text inside the textarea" 

let isButtonClicked = false;
toggleEl.addEventListener("click", () => {
  if (isButtonClicked === false) {
    bodyEl.classList.toggle('whitemode'); 
    for (let i = 0; i < buttonsContainerEl.children.length; i++) {
      buttonsContainerEl.children[i].style.backgroundColor = 'hsl(281, 89%, 26%)';
      buttonsContainerEl.children[i].style.color = 'white';
      buttonsContainerEl.children[i].style.borderBottom = "solid hsl(6, 70%, 34%)";
    
      buttonsContainerEl.style.backgroundColor = 'hsl(268,71%, 12%)';
    }
    displayEl.style.backgroundColor = ' hsl(268,71%, 12%)';
    localStorage.setItem('backgroundColor', changedColor)
  const colorStored = localStorage.getItem('backgroundColor')
   
    isButtonClicked = true;
  } else {
    bodyEl.classList.remove('whitemode'); 
    for (let i = 0; i < buttonsContainerEl.children.length; i++) {
      buttonsContainerEl.children[i].style.backgroundColor = '';
      buttonsContainerEl.children[i].style.color = '';
      buttonsContainerEl.children[i].style.borderBottom = "";
    }
    isButtonClicked = false;
    localStorage.setItem('backgroundColor', prefer_color_scheme)
  const colorStored = localStorage.getItem('backgroundColor')
   
  }
});

//working with local storage
//? window.localStorage usually stores data with no expiration date unlike the sessionstorage


/* function storeBackgroundColor(){
  //check whether the browser support localStorage
if(typeof(Storage) !== 'undefined'){
  localStorage.setItem('backgroundColor', prefer_color_scheme)
  const colorStored = localStorage.getItem('backgroundColor', prefer_color_scheme)
   
  if(colorStored){
    bodyEl.style.backgroundColor = colorStored;
   
    
    
  }

}
else{
  console.log('Sorry! no Web Storage support.... ')
}

}

window.addEventListener("load", ()=>{
  setTimeout(()=>{
    storeBackgroundColor();
  }, 5000)
}
)
 */