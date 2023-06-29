// ----------------------------nav toggle code---------------------------------
let sections=document.querySelectorAll("section")
let navlinks=document.querySelectorAll(".navlinks")
let nav=document.querySelector(".navbar")
let togglebutton=document.querySelector(".nav-toggle")
let navactive=document.getElementsByClassName('active')
let navmneu=document.querySelector('.navmenu')
console.log(navactive)
let refresh=980+"px;"
console.log(refresh)


window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offest=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
           
         if(top>=offest && top<offest+height){
             navlinks.forEach(link=>{
               link.classList.remove("active");
            document.querySelector(".navlinks[href*="   + id +  "]").classList.add("active")
             })
            
        
        }

    })
    let header=document.querySelector("header")
 header.classList.toggle('sticky',window.scrollY>100)

 nav.classList.remove("show-nav")
    togglebutton.classList.remove("show-icon")
}


   togglebutton.addEventListener("click",()=>{
    nav.classList.toggle("show-nav")
    togglebutton.classList.toggle("show-icon")
   })

 
   


