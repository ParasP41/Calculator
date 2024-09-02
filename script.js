let inp=  document.querySelector('input')

let p=document.getElementById("pi");
p.addEventListener("click", function()
{
    let v=3.14;
    p.textContent=v;
      
});


 let btn=  document.querySelectorAll('button')
   for(let i of btn){
    i.addEventListener('click',(e)=>{
      let text=e.target.innerText

        if(text==='C'){
            inp.value=''
        }
        else if(text==='='){
            inp.value=eval(inp.value)
        }
        else{
            inp.value=inp.value+text
        }
        
    })

   }
