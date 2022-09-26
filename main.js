function startClassification(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/seQMXZRbl/model.json", modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
r=Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="I Can Hear: "+results[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy Rate: "+(results[0].confidence*100).toFixed(0)+"%";
document.getElementById("result_label").style.color="rgb("+r+", "+g+", "+b+")";
document.getElementById("result_confidence").style.color="rgb("+r+", "+g+", "+b+")";
img=document.getElementById("img");

if (results[0].label=="Barking"){
img.src="Dog.png";
}
else if (results[0].label=="Meowing"){
    img.src="Cat.png";
    }
    else if (results[0].label=="Roaring"){
        img.src="Lion.png";
        }
    else if (results[0].label=="Mooing"){
            img.src="Cow.png";
            }

            else {
                img.src="Listen.png";
            }
}
}