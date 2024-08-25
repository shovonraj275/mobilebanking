// <!-- ========== Start Section ========== -->
let NEWShop = "";
const Shop = [
  "Select One",
  "Bkash",
  "Nogad",  
  "Rocket",
  "Upay"
  
];
Shop.forEach(myfncrtion_shop);
document.getElementById("Shop001").innerHTML = NEWShop;
function myfncrtion_shop(items1) {
  NEWShop += "<option value=" + items1 +">" + items1 + "</option>";
}
function hem(){
  let NEWBkah = "";
  let NEWNogad = "";
  const Bkash = [
    "favourite Bkash Agent",
    "Normal Bkash Agent",
  ];
  const Nogada = [
    "With Nogad Apps",
    "Without Nogad apps",
  ];
  let ro = `<option  value="Rocket" >Rocket</option>` ;
  let upay = `<option  value="Upay" >Upay</option>` ;
Bkash.forEach(myfncrtion_Bkash);
Nogada.forEach(myfncrtion_Nogada);
function myfncrtion_Bkash(items7,index){
  NEWBkah += "<option value=" +"Bkash"+index +items7 + ">" + items7 + "</option>";
}
function myfncrtion_Nogada(items8,index){
  NEWNogad += "<option value="+"Nogad"+index +items8+ ">" + items8 + "</option>";
}
  var sop_1= document.getElementById("Shop001").value
  console.log(sop_1);
  if (sop_1 == "Bkash"){
    opt =NEWBkah;
  }
  else if(sop_1 == "Nogad"){
    opt= NEWNogad;
  }
  else if(sop_1 == "Rocket"){
    opt= ro;
  }
  else if(sop_1 == "Upay"){
    opt= upay;
  }
  document.getElementById("Shop003").innerHTML= opt;
}
function bkasss(){
  let amounts = document.getElementById("amount");
  let amount =parseFloat(amounts.value)
  let methood = document.getElementById("Shop003").value
  let bkfa = 1.49;
  let bkno = 1.85;
  let ngaps = 1.199;
  let ng = 1.5;
  let rc =1.67;
  let up = 1.4;
  console.log(amount);
  console.log(methood);
  if(methood=="Bkash0favourite"){
    sch = "<h3>Your account balance is : "+ amount+" Taka</h3><h3>Cash Out Charge Rate is : "+ bkfa+"%</h3>"+"<h3> Cash Out Charge is :"+ amount*(bkfa/100)+" Taka</h3><h3> Your totel amount need : "+(amount+amount*(bkfa/100))+" Taka</h3> <h3>If You have not Cash Out Charge,You enter the amount is :"+(amount-amount*(bkfa/100))+" Taka</h3>";
  }
  else if(methood=="Bkash1Normal" ){
    sch = "<h3>Your account balance is : "+ amount+" Taka</h3><h3>Cash Out Charge Rate is : "+ bkno+"%</h3>"+"<h3> Cash Out Charge is :"+ amount*(bkno/100)+"</h3><h3> Your totel amount need : "+(amount+amount*(bkno/100))+"</h3> <h3>If You have not Cash Out Charge,You enter the amount is :"+(amount-amount*(bkno/100))+"</h3>";
  }
  else if(methood=="Nogad1Without"){
    sch = "<h3>Your account balance is : "+ amount+" Taka</h3><h3>Cash Out Charge Rate is : "+ ng+"%</h3>"+"<h3> Cash Out Charge is :"+ amount*(ng/100)+"</h3><h3> Your totel amount need : "+(amount+amount*(ng/100))+"</h3> <h3>If You have not Cash Out Charge,You enter the amount is :"+(amount-amount*(ng/100))+"</h3>";
  }
  else if(methood=="Nogad0With" ){
     sch = "<h3>Your account balance is : "+ amount+" Taka</h3><h3>Cash Out Charge Rate is : "+ ngaps+"%</h3>"+"<h3> Cash Out Charge is :"+ amount*(ngaps/100)+"</h3><h3> Your totel amount need : "+(amount+amount*(ngaps/100))+"</h3> <h3>If You have not Cash Out Charge,You enter the amount is :"+(amount-amount*(ngaps/100))+"</h3>";
  }
  else if(methood=="Rocket" ){
     sch = "<h3>Your account balance is : "+ amount+" Taka</h3><h3>Cash Out Charge Rate is : "+ rc+"%</h3>"+"<h3> Cash Out Charge is :"+ amount*(rc/100)+"</h3><h3> Your totel amount need : "+(amount+amount*(rc/100))+"</h3> <h3>If You have not Cash Out Charge,You enter the amount is :"+(amount-amount*(rc/100))+"</h3>";
  }
  else if(methood=="Upay" ){
     sch = "<h3>Your account balance is : "+ amount+" Taka</h3><h3>Cash Out Charge Rate is : "+ up+"%</h3>"+"<h3> Cash Out Charge is :"+ amount*(up/100)+"</h3><h3> Your totel amount need : "+(amount+amount*(up/100))+"</h3> <h3>If You have not Cash Out Charge,You enter the amount is :"+(amount-amount*(up/100))+"</h3>";
  }
  else{
    sch=`<h1 class="baksss">Plase full fill correctly. thank you!</h1> ${methood}`
  }
  console.log(sch)
  document.getElementById("hemout").innerHTML=sch ;
}
// <!-- ========== End Section ========== -->
