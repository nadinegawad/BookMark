var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var sitesList = [];


if (localStorage.getItem("siteInfo") !=null){
   sitesList = JSON.parse(localStorage.getItem("siteInfo"));
   displaySiteInfo(sitesList);
}

// a     d     d

function submit() {
   if(validateSiteName()==true && validateSiteUrl()==true){
      var siteInfo = {
         siteName: siteNameInput.value,
         siteUrl: siteUrlInput.value
      }
      sitesList.push(siteInfo);
    
      localStorage.setItem("siteInfo", JSON.stringify(sitesList));
      displaySiteInfo(sitesList);
      clearForm();
   }else{
      sweetAlert();
   }
   

}

// c  l   e  a  r
function clearForm() {
   siteNameInput.value = "";
   siteUrlInput.value = "";
}
//d   i   s  p  l   a  y

function displaySiteInfo(list) {
   var cartona = ``;
   for (let i = 0; i < list.length; i++) {
      cartona += `<tr>
      <td>${i + 1}</td>
      <td>${list[i].siteName}</td>
    
<td> <a href="${list[i].siteUrl}" id="visitBtn" class="btn btn-success " target="_blank"> <i class="fa-solid fa-eye pe-2"></i> visit</a>
</td>
      <td><button  onclick = "deleteItem(${i})"  id="visitBtn" class="btn btn-danger"><i class="fa-regular fa-trash-can pe-2"></i>Delete</button></td>
    
    </tr>`
   }

   document.getElementById("dispalyInfo").innerHTML = cartona;
}

//d e l e t e 
function deleteItem(siteId) {
   sitesList.splice(siteId, 1);
   localStorage.setItem("siteInfo", JSON.stringify(sitesList));
   displaySiteInfo(sitesList);
}


//VAILIDATION
function validateSiteName(){
   var regex=/^[a-z0-9]{3,25}$/gmi;
   if(regex.test(siteNameInput.value)==true){
      siteNameInput.style.border="none";
      return true;
   }else{
      siteNameInput.style.border="5px solid red";
      return false;
   }
  
}
function validateSiteUrl(){
   
   var regex =/^(http(s):\/\/.)[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)$/gmi;
   if(regex.test(siteUrlInput.value)==true){
siteUrlInput.style.border="none";
document.getElementById("urlPara").classList.add("d-none")

      return true;
   }else{
   siteUrlInput.style.border ="5px solid red";
   document.getElementById("urlPara").classList.remove("d-none")
      return false;
   
   }
}

function sweetAlert(){
   swal({
      title :"Site Name or Url is not valid, Please follow the rules below :",
      text : ` Site name must contain at least 3 character,  
      Site URL must be a valid one.`,
      icon :"error",
    className:"swal-text"
    })
}
