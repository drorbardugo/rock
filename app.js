const pcEl = document.getElementById("pc")
const userEl = document.getElementById("user")
const winerEl = document.getElementById("winer");


//תפוס את כל הכפתורים ושים אותם בתוך משתנה בזיכרון
const buttons =document.querySelectorAll("button")
// רוץ על כל הכפתורים אחד אחרי השני
// ושים על כל אחד מהם את המאזין לאירוע 
// כלומר - שכל פעם שילחצו על הכפתור
// אז יקרה איזה פקודות מסויימות
buttons.forEach(b=>{
    //console.log(b.id)
    b.addEventListener("click",(e)=>{
        const userChoise = e.target.id;
        userEl.innerHTML= userChoise;
        makeComputerChoice();
        getResult();
    });
});
//console.log("hello")
function makeComputerChoice(){
    const random=Math.floor(Math.random() * 3) +1
    if(random===1){
        pcEl.innerHTML='scissors'
    }

    if(random===2){
        pcEl.innerHTML='stone'
    }


    if(random===3){
        pcEl.innerHTML='paper'
    }
}
function getResult(){
if (pcEl.innerHTML===userEl.innerHTML){
    winerEl.innerHTML="תיקו"
} else if (pcEl.innerHTML==="stone"&&userEl.innerHTML==="paper"){
winerEl.innerHTML="ניצחת"
} else if (pcEl.innerHTML==="stone"&&userEl.innerHTML==="scissors"){
    winerEl.innerHTML="הפסדת"
   } else if (pcEl.innerHTML==="paper"&&userEl.innerHTML==="scissors"){
    winerEl.innerHTML="ניצחת"
    } else if (pcEl.innerHTML==="paper"&&userEl.innerHTML==="stone"){
        winerEl.innerHTML="הפסדת"
        } else if (pcEl.innerHTML==="scissors"&&userEl.innerHTML==="paper"){
            winerEl.innerHTML="הפסדת"
            } else if (pcEl.innerHTML==="scissors"&&userEl.innerHTML==="stone"){
                winerEl.innerHTML="ניצחת"
                }


















}








