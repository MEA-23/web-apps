  
      const body = document.querySelector('body');
  
  
      const hiddenButton= document.querySelector('#clickHere');
  
  
      const num = document.querySelector('#content');
      const clearButton = document.querySelector('#t0');
      
      
     
      clearButton.onclick = function (){
        clear();
      };
 
      function nightMood (){
      body.style.backgroundColor = 'black';
    
     num.style.color = 'white';
      }
      
      
      const darkButton = document.querySelector('#black');
      darkButton.onclick = function (){
        nightMood();
      };
  
      
  
      function clear() {
        num.textContent ='0';
        text= 0;
        
        hiddenButton.innerHTML ='<img height="800px" width="800px" src="pic2.png" style="border-radius: 50%;">';
      }
      
      
      hiddenButton.addEventListener('click', function (){ add1()});
      let text = 0;
      function add1(){
     
        text +=1;
        num.textContent = text;
        
         
          hiddenButton.innerHTML ='';
        

      }
  
      const lightButton = document.querySelector('#white');
      
      lightButton.onclick = function (){
        lightMood();
      };
      
      function lightMood (){
      body.style.backgroundColor = 'white';
     num.style.color = 'black';
      }
  
  
      const witH =document.querySelector('#with');
  
    witH.onclick =function (){
      showButton();
    } ;
 
     function showButton() {
       hiddenButton.style.cssText = 
   ' height :800px; margin: 300px 100px  50px 100px; display: flex;align-items:center ;justify-content:center ;font-size: 40pt;color:#1a703f;border-radius: 50%; background-color:#72eeb386;';
     }
  
   const without =document.querySelector('#without');
  
    without.onclick =function (){
      hideButton();
    } ;
 
     function hideButton() {
       hiddenButton.style.cssText = "height :1300px; display: flex; align-items:center ;justify-content:center ; font-size: 40pt;color:#1a703f;";}
