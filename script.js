 let addbtn = document.querySelector(".add-btn")
 let modalCont = document.querySelector(".modal-cont")
 let maincont = document.querySelector(".main-cont")
 let textareaCont = document.querySelector("textarea")
 let addflag = false;
 addbtn.addEventListener("click", (e)=>{
//    display modal
// generate ticket
 addflag = !addflag;
 if(addflag){
    modalCont.style.display="flex";
 }else{
    modalCont.style.display="none";
 }

 })

 modalCont.addEventListener("keydown", (e)=>{
    let key = e.key;
    if(key === "Shift"){
        createTicket();
    modalCont.style.display="none";
    addflag=false;
    textareaCont.value="";
}
    
 })

 function createTicket(){
    console.log("cratf")
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute("class" , "ticket-cont");
    ticketcont.innerHTML=`
    <div class="ticket-color"></div>
    <div class="ticket-id">sample id</div>
 <div class="task-area">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque aut veritatis quia ducimus corporis ipsam facere eveniet nisi hic quisquam recusandae eius, dolores odit distinctio natus delectus culpa obcaecati nesciunt.
 </div>
`
    maincont.appendChild(ticketcont);
    
 }