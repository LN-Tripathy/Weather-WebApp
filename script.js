const input = document.getElementById("myIpt");
const btn = document.getElementById("myBtn");
const container = document.querySelector(".container");

btn.onclick=()=>{
    container.style.display = "none";
    let p = fetch(`https://wttr.in/${input.value}`); 
    p.then((response)=>{
        return response.text() 
    }).then((response)=>{
        let div = document.createElement("div")
        div.setAttribute('class', 'weather');
        div.innerHTML = response;
        document.body.prepend(div)
    })
}