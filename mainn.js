const drumlength=document.querySelectorAll(".drum").length;

for(let i=0;i<drumlength;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(e){
        makenoise(this.innerHTML);
        animationbutton(this.innerHTML);
    });
}

function makenoise(key){
    switch(key){
        case "w":
            const tom1=new Audio("sounds/w.mp3.unknown")
            tom1.play();
            break;

            case "a":
            const tom2=new Audio("sounds/a.mp3.unknown")
            tom2.play();
            break;

            case "s":
            const tom3=new Audio("sounds/s.mp3.unknown")
            tom3.play();
            break;

            case "j":
            const tom4=new Audio("sounds/j.mp3.unknown")
            tom4.play();
            break;

            case "k":
            const tom5=new Audio("sounds/k.mp3.unknown")
            tom5.play();
            break;

            case "l":
            const tom6=new Audio("sounds/d.mp3.unknown")
            tom6.play();
            break;
        }

        
        
}

function animationbutton(key){
    const a=document.querySelector(`.${key}`)
    
    a.classList.add("pressed");

    setTimeout(()=>{
        a.classList.remove("pressed");

    },2000);
}