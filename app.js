  
      const body = document.querySelector('body');
  
  
      const hiddenButton= document.querySelector('#clickHere');
  
  
      const num = document.querySelector('#content');
      const clearButton = document.querySelector('#t0');
      
      const witH =document.querySelector('#with');
     
      const darkButton = document.querySelector('#black');
  
  
      
 
      function nightMood (){
      body.style.backgroundColor = 'black';
    
     num.style.color = 'white';
      }
      
      let time;
  const reSize = () =>{
    
   clearTimeout(time);
   hiddenButton.style.height ='750px';
   hiddenButton.style.width ='750px';
   
  time = setTimeout(function() {

  hiddenButton.style.height ='800px';
   hiddenButton.style.width ='800px';
}, 400);
 };
      
      hiddenButton.innerHTML ='<img height="800px" width="800px" src="pic2.png" style="border-radius: 50%;">';
      
 let img = document.querySelector('img');
      function clear() {
        num.textContent ='0';
        text= 0;
        img.style.height = '800px';
        img.style.width = '800px';
      }
      
      
      hiddenButton.addEventListener('click', function (){ add1()});
      let text = 0;
      function add1(){
     
        text +=1;
        num.textContent = text;
        
         
          img.style.height = '0px';
        img.style.width = '0px';
        

      }
  
  
  
 
  
      
      
      
  
      
      function lightMood (){
      body.style.backgroundColor = 'white';
     num.style.color = 'black';
      }
  
  
 
  
 
 
     function hideButton() {
       hiddenButton.style.cssText = "height :1300px; display: flex; align-items:center ;justify-content:center ; font-size: 40pt;color:#1a703f;";}



     function showButton() {
       hiddenButton.style.cssText = 
   ' height :800px; margin: 300px 100px  50px 100px; display: flex;align-items:center ;justify-content:center ;font-size: 40pt;color:#1a703f;border-radius: 50%; background-color:#72eeb386;';
     }


       clearButton.onclick = function (){
        clear();
      };
       
       
  
    witH.onclick =function (){
      if(witH.value==="false"){
        
      showButton();
      witH.value="true";
      witH.textContent="اخفاء الزر";
      }
      else if(witH.value==="true"){
        hideButton();
     witH.value="false";
      witH.textContent="إظهار الزر";
      }
    } ;
 
 
 
    darkButton.onclick = function (){
        if(darkButton.value==='false'){
          nightMood();
          darkButton.value='true';
          darkButton.textContent="الوضع الفاتح";
          darkButton.style.backgroundColor='#e7e7e7';
        }
        else if (darkButton.value ==='true')
        {
          lightMood ();
          darkButton.value= 'false';
          darkButton.textContent="الوضع الداكن";
          darkButton.style.backgroundColor='#555555';
        }
      };
