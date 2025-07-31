//toggle-menu=>
    let toggle_button=document.getElementById("toggle-button");
let toggle_menu=document.getElementById("toggle-menu");
toggle_button.addEventListener("click",()=>{
    if(toggle_menu.style.display==="block"){
        toggle_menu.style.display="none"
        toggle_button.classList.remove("active")
    }
    else{
        toggle_menu.style.display="block";
        toggle_button.classList.add("active")
    }

})
//bullets=>
    let bullets=document.querySelectorAll(".bullet");
bullets.forEach((bullet)=>{
    bullet.addEventListener("click",(e)=>{
       window.location.href=e.target.dataset.section
    })
})
//skills=>
    let skills_section=document.querySelector(".skills");
    let skills=document.querySelectorAll(".skill span");
      window.addEventListener("scroll", () => {
  let skillsOffsetTop = skills_section.offsetTop;
  let scrollY = window.scrollY;                
  let innerHeight = window.innerHeight;          

  if (scrollY + innerHeight >= skillsOffsetTop) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
});
//imgs-box=>
    let imgs=document.querySelectorAll("img");
let popBox=document.querySelectorAll(".pop-box")
imgs.forEach((img)=>{
    img.addEventListener("click",(e)=>{
        popBox.forEach((box)=>{
            if(box.classList.contains(e.target.alt)){
                box.style.display="block"
             document.body.classList.add("popup-open");

            }
        })

    })
    document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
     document.body.style.backgroundColor = "white";
     document.body.classList.remove("popup-open");
  });
});
})
let colors_list=document.querySelectorAll(".colors-list li");
let random_backgrounds=document.querySelectorAll(".random-backgrounds span");
let show_bullets=document.querySelectorAll(".bullets-option span");
let bullets_container=document.querySelector(".bullets");
let reset=document.querySelector(".reset-options");
let headings=document.querySelectorAll("h1");
let toggle_setting=document.querySelector(".toggle-settings")
let setting_box=document.querySelector(".settings-box");
let i=document.querySelector("i");
//show colors-list=>
colors_list.forEach((e)=>{
    e.style.backgroundColor=e.dataset.color
    e.style.height="20px"
    e.addEventListener("click",(e)=>{
         document.documentElement.style.setProperty('--maincolor', e.target.dataset.color);
    localStorage.setItem("color_option", e.target.dataset.color);

    })
})
document.documentElement.style.setProperty("--maincolor",localStorage.getItem("color_option"));
// enable to show and display bullets=>
   // localStorage.setItem("show", "yes");
if(localStorage.getItem("show")=="no"){
     bullets_container.style.display="none"
     show_bullets[0].classList.remove("active")
     show_bullets[1].classList.add("active")
}
else{
    bullets_container.style.display="block" 
     show_bullets[0].classList.add("active")
     show_bullets[1].classList.remove("active")
}
show_bullets.forEach((e)=>{
    e.addEventListener("click",(i)=>{
        show_bullets.forEach((t)=>{
            t.classList.remove("active");
        })
        i.target.classList.add("active")
        if(i.target.dataset.display==="show"){
            bullets_container.style.display="block"
            localStorage["show"]="yes";

        }
        else{
            bullets_container.style.display="none"
            localStorage["show"]="no";
        }
    })
})
reset.addEventListener("click",(e)=>{
    show_bullets.forEach((y)=>{
         if(y.dataset.display==="show"){
            y.classList.add("active");
             bullets_container.style.display="block"
        }
        else{
            y.classList.remove("active")
        }

    })
    localStorage["color_option"]="orange";
    localStorage.getItem("color_option")
    document.documentElement.style.setProperty("--maincolor",localStorage.getItem("color_option"));
})
toggle_setting.addEventListener("click",(e)=>{
    setting_box.classList.toggle("active")
    i.classList.toggle("fa-spin")

})

