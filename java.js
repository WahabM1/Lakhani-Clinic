document.getElementById("checked4").addEventListener("click",function(){
document.getElementById("checked").style.color="orange";
document.getElementById("checked1").style.color="orange";
document.getElementById("checked2").style.color="orange";
document.getElementById("checked3").style.color="orange";
document.getElementById("checked4").style.color="orange";
});
document.getElementById("checked3").addEventListener("click",function(){
    document.getElementById("checked").style.color="orange";
    document.getElementById("checked1").style.color="orange";
    document.getElementById("checked2").style.color="orange";
    document.getElementById("checked3").style.color="orange";
    });
    document.getElementById("checked2").addEventListener("click",function(){
        document.getElementById("checked").style.color="orange";
        document.getElementById("checked1").style.color="orange";
        document.getElementById("checked2").style.color="orange";
        });
        document.getElementById("checked1").addEventListener("click",function(){
            document.getElementById("checked").style.color="orange";
            document.getElementById("checked1").style.color="orange";
            });
            document.getElementById("checked").addEventListener("click",function(){
                document.getElementById("checked").style.color="orange";
                }); 

                function test(){
                 var x =   document.getElementById('optionList');
                 var value=x.value;
                 var disp = document.getElementById('result');
                 dispatchEvent.innerHTML=value;
                }
                
                
                    
                

                