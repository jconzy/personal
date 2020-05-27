typer ();

function typer (){
    var y = 0;
    var skill = ["I Design   ", "I Code   ", "And I See Lots Of Movies   "];
    var x = 0;
    

    function printSentence(id, sentence, speed) {
      var index = 0;
          timer = setInterval(function() {
            var char= sentence.charAt(index);
            if(char === '<') index= sentence.indexOf('>',index);
            document.getElementById(id).innerHTML= sentence.substr(0,index);

            if(index++ === sentence.length){
                clearInterval(timer);
                removeSentence('dropping-texts', skill[x], 50);
                if (x==2){
                    x = -1;
                }
            }
          }, speed);
    } //printSentence

    function removeSentence(id, sentence, speed) {
      var index = sentence.length;
          timer = setInterval(function() {
            var char= sentence.charAt(index);
            if(char === '<') index= sentence.indexOf('>',index);
            document.getElementById(id).innerHTML= sentence.substr(0,index);

            if(index-- === 0){
                clearInterval(timer);
                x++;
                printSentence('dropping-texts', skill[x], 150); 
            }
          }, speed);
    } //removeSentence
    
//    printSentence('intro', intro, 30);
    printSentence('dropping-texts', skill[x], 150);
    
    blink = setInterval(function(){
    document.getElementById('dropping-texts').style.borderRight = "2px solid rgba(225, 204, 41, " + y + ")";
    
        if (y == 1){
            y = 0;
        } else if (y == 0){
            y = 1;
        }
    }, 150);  
}
