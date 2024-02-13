function demo(){
 
   a=document.getElementById('truerespond1')
   b=document.getElementById('true3')
   c=document.getElementById('truee1')
   let s=0;
   if (document.getElementById("truerespond1").checked==true){
    
    s=s+1}
   
    if (document.getElementById("true3").checked==true){
        
        s=s+1}
        

        if (document.getElementById("truee1").checked==true){
            
            s=s+1}
            
            if(s<3){
                alert("your score is below 3 ")
            }
            else if (s=3){
                alert("congrats you won ! ")
            }
    }
