function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/-IhRodBW5/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('ambulancia')
        img2=document.getElementById('camion')
        img3=document.getElementById('patrulla')
        img4=document.getElementById('peligro')
        img5=document.getElementById('temblor')
        img6= document.getElementById('alerta')

        if(results[0].label=="Ruido de fondo"){
            img.src='ambulancia-sinfondo.png';
            img2.src= 'Camion-sinfondopng.png';
            img3.src= 'patrulla-sinfondo.png';
            img4.src='peliro-sinfondo.png';
            img5.src='temblor-sinfondo.png';
            img6.src='oreja-soin fondo.png';
        }else if(results[0].label=="alerta"){
            img.src='ambulancia-sinfondo.png';
            img2.src= 'Camion-sinfondopng.png';
            img3.src= 'patrulla-sinfondo.png';
            img4.src='peligo-sinfondo';
            img5.src='temblor-sinfondo.png';
            img6.src='oreja-sinfondo.gif';
        }else if(results[0].label=="ambulancia"){
            img.src='ambulancia.gif';
            img2.src= 'Camion-sinfondopng.png';
            img3.src= 'patrulla-sinfondo.png';
            img4.src='peliro-sinfondo.png';
            img5.src='temblor-sinfondo.png';
            img6.src='oreja-soin fondo.png';
        }else if(results[0].label=="camion"){
            img.src='ambulancia-sinfondo.png';
            img2.src= 'camion.gif';
            img3.src= 'patrulla-sinfondo.png';
            img4.src='peliro-sinfondo.png';
            img5.src='temblor-sinfondo.png';
            img6.src='oreja-soin fondo.png';
        }
        else if(results[0].label=="cuidado"){
            img.src='ambulancia-sinfondo.png';
            img2.src= 'Camion-sinfondopng.png';
            img3.src= 'patrulla-sinfondo.png';
            img4.src='peligro.gif';
            img5.src='temblor-sinfondo.png';
            img6.src='oreja-soin fondo.png';
        }
        else {
            img.src='ambulancia-sinfondo.png';
            img2.src= 'Camion-sinfondopng.png';
            img3.src= 'patrulla.gif';
            img4.src='peligro-sinfondo.png';
            img5.src='temblor-sinfondo.png';
            img6.src='oreja-soin fondo.png';
        }


    }
    

}