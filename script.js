//your JS code here. If required.
let prev=document.getElementById("prev");
        let next=document.getElementById("next");
        let line=document.getElementById("line");
        let circles=document.getElementsByClassName("circle");
    
        var count=0;

        if(count==0){
            prev.disabled=true;
        }

        prev.addEventListener("click",()=>{
            count-=1;
            if(count==0){
                prev.disabled=true;
            }
            if(count<4){
                next.disabled=false;
            }

            for(let i=count+1;i>count;i--){
                circles[i].classList.remove("active");
            }
            line.style.width=`${count*100}px`;
        });

        next.addEventListener("click",()=>{
            count+=1;
            if(count==4){
                next.disabled=true;
            }
            if(count<4){
                next.disabled=false;
            }
            if(count>0){
                prev.disabled=false;
            }

            for(let i=0;i<count+1;i++){
                circles[i].classList.add("active");
            }
            line.style.width=`${count*100}px`;
        })