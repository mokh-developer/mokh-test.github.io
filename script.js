

      var btnOn  = document.getElementById("btnOn");
      var btnOff = document.getElementById("btnOff");
      var main   = document.getElementById("main");
      var h2     = document.getElementById("title");
         function turnOn(){
            bulb.src='img/pic_bulbon.gif';
            main.style.backgroundColor = "#d2ab67";
            btnOff.style.backgroundColor = "#0573a1";
            btnOff.style.color = "#fcfaf2";
            btnOn.style.backgroundColor = "#0573a1";
            btnOn.style.color = "#fcfaf2";
            h2.style.color = "#033571";
        }
        function turnOff(){
            bulb.src='img/pic_bulboff.gif';
            main.style.backgroundColor = "#2b3647";
            btnOff.style.backgroundColor = "#ffbb00";
            btnOff.style.color = "#2b3647";
            btnOn.style.backgroundColor = "#ffbb00";
            btnOn.style.color = "#2b3647";
            h2.style.color = "#d2ab67";
        }

       function changeStyle(id){
        id.style.backgroundColor = "yellow";
        id.style.padding = "12px";
       }