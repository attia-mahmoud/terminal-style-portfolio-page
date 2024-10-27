
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Initializing system...");
  await delay(1000);
  createText("Loading user profile...");
  await delay(800);
  createText("Welcome!");
  await delay(500);
  createText("Type 'help' to see available commands.");
  await delay(300);
  new_line();
}

function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/mahmoud-attia";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  const value = document.querySelector("input").value;
  
  if(value === "help"){
    trueValue(value);
    
    createCode("projects", "my github page with my projects.");
    createCode("about me", "who am i?");
    createCode("social -a", "all my socials.");
    createCode("clear", "clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/attia-mahmoud' target='_blank'><i class='fab fa-github white'></i> github.com/attia-mahmoud</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, my name is Mahmoud Attia.")
    createText("I'm a software developer with interests in machine learning and cybersecurity.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/attia-mahmoud' target='_blank'><i class='fab fa-github white'></i> github.com/attia-mahmoud</a>")
    createText("<a href='https://www.linkedin.com/in/attiamahmoud/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/attiamahmoud</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Did you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();