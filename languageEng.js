// 
// document.querySelector('#enternet').addEventListener('click',()=>{
//   window.location.href=`https://www.google.com/search?channel=fs&client=ubuntu-sn&q=how+to+blow+up+the+internet%3F`;
// });
const fieldsets=document.querySelector('input[type="checkbox"]');
function checkLanguage(){
  if(fieldsets.checked){
    document.querySelector('meta[name="description"]').setAttribute('content', 'how to blow up the internet');
    document.title='blow up the internet';
    document.querySelector('fieldset > span').innerHTML='English';
    for(let e=0;e<document.querySelectorAll('#eng').length;e++){
      document.querySelectorAll('#rus')[e].style.cssText='display:none;';
      document.querySelectorAll('#eng')[e].style.cssText='display:block;';
    }
    localStorage.setItem('language','Eng');
  }else{
    document.title='взорвать ёнтернет';
    document.querySelector('meta[name="description"]').setAttribute('content', 'как взорвать ёнтернет');
    document.querySelector('fieldset > span').innerHTML='Русишь';
    for(let y=0;y<document.querySelectorAll('#rus').length;y++){
      document.querySelectorAll('#rus')[y].style.cssText='display:block;';
      document.querySelectorAll('#eng')[y].style.cssText='display:none;';
    }
    localStorage.removeItem('language');
  }
}//checkLanguage
if(localStorage.getItem("language")=='Eng'){
  checkLanguage();
}
if(window.location.search=='?eng'){
  fieldsets.checked=true;
  checkLanguage();
  localStorage.setItem('language','Eng');
}
// fieldset
fieldsets.addEventListener('DOMContentLoaded',checkLanguage());
fieldsets.addEventListener('click',checkLanguage);

console.log('oK');
