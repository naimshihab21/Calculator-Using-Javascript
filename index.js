const btn = document.querySelectorAll('.score');
const inp = document.querySelector('.input');
const deleteAll = document.querySelector('.deleteAll');
const backspace = document.querySelector('.backspace');
const calculate = document.querySelector('.calculate');

// button score
for(let i = 0; i <= btn.length; i++) {
  if(btn[i]) {
    btn[i].addEventListener('click', function(){
      inp.innerHTML += btn[i].value;
    });
  }
};

// delete all
deleteAll.addEventListener('click', function() {
  inp.innerText = "";
  inp.classList.remove("bg");
});

// backspace
backspace.addEventListener('click', function() {
  inp.innerText = inp.textContent.slice(0, -1);
});

// calculate
calculate.addEventListener('click', function() {
  try{
    inp.innerText = eval(inp.textContent).toString();
  } catch(error) {
    inp.innerText = "Error!";
    inp.classList.toggle("bg");
  }
});




