Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
    });
    
    Webcam.attach("#webcam");
    
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("picture").innerHTML='<img id="capture_img" src="'+data_uri+'">';
        });
    }
    
    console.log("ml5 version", ml5.version);
            
     classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nAnHkISGo/", modelloaded);
    
     function modelloaded(){
         console.log("Model loaded")
     }  
    
     function check(){
        img= document.getElementById("capture_img");
        classifier.classify(img, gotresults);
    }
   
    function gotresults(error, results){
       if (error){
           console.error(error);
       } else{
           console.log(results);
       }
       
    }
   
   