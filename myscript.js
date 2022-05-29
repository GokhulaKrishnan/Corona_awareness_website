function changeimage(){
    var image = document.getElementById('myimage');
    if(image.src.match("maskandwithout2")){
        image.src = "maskandwithout1.jpg";
    }
    else{
        image.src = "maskandwithout2.jpg";
    }

}

