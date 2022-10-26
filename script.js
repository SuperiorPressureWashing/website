const contactScript = {
    init: ()=>{
        const contactArrow = document.getElementById("contactArrow");
        const contactBox = document.getElementById("contactBox");
        const contactIcon = contactArrow.querySelector(".icons .contact-ico");
        const contactBack = contactArrow.querySelector(".icons .back");
        let boxOpen = false;
        let contactDown = false;
        contactArrow.addEventListener("click", (evt)=>{
            if(boxOpen){
                closeContactBox();
            }else{
                openContactBox();
            }
        });
        contactBox.addEventListener("mousedown", ()=>{
             contactDown = true;
        });
        window.addEventListener("mouseup", ()=>{
             contactDown = false;
        });
        
        window.addEventListener("mousedown", ()=>{
            if(!contactDown && boxOpen){
                closeContactBox();
            }
        });
        function openContactBox(){
            contactBox.style.transform = "translateX(0)";
            contactIcon.style.transform = "translateX(-100%)";
            contactBack.style.transform = "translateX(0)";
            contactBox.classList.remove("opacity-off");
            contactBox.classList.add("opacity-on");
            contactArrow.classList.add("arrow-on");
            boxOpen = true; 
        }
        function closeContactBox(){
            contactBox.style.transform = "translateX(80%)";
            contactIcon.style.transform = "translateX(0)";
            contactBack.style.transform = "translateX(-100%)";
            contactBox.classList.remove("opacity-on");
            contactBox.classList.add("opacity-off");
            contactArrow.classList.remove("arrow-on");
            boxOpen = false; 
        }
    }
};

contactScript.init();