var textInput = document.querySelector('#textInput');
var message = document.querySelector('#message');


        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-eg';
        recognition.interimResults = false;
        let p = document.createElement("p");
        function CloseM(){
            sendButton();
        }
        message.value="";
        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            textInput.value = command;
            message.textContent =  command;
        };

        recognition.onspeechend = function() {
            recognition.stop();
            getBotResponse(textInput.value);
        };

        recognition.onerror = function(event) {
            message.textContent = 'Error occurred in recognition: ' + event.error();
            
        }
        function VoiceReco(){
            recognition.start();
            
        }
            
        //firstBot msg
       

            
       
        function getBotResponse(input) {
            if (input=="on") {
                window.open("https://192.168.1.20/1");
               return;
            }
            if (input=="off") {
                window.open("https://192.168.1.20/2");
               return;
            }
        }
        //////
      
          
      

