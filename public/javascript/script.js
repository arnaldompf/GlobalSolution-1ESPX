function slide1(){
    document.getElementById('slideshow').src="../../public/assets/images/slide1.webp";
    setTimeout("slide2()", 3000)
}

function slide2(){
    document.getElementById('slideshow').src="../../public/assets/images/slide2.webp";
    setTimeout("slide3()", 3000)
}

function slide3(){
    document.getElementById('slideshow').src="../../public/assets/images/slide3.webp";
    setTimeout("slide4()", 3000)
}

function slide4(){
    document.getElementById('slideshow').src="../../public/assets/images/slide4.webp";
    setTimeout("slide5()", 3000)
}

function slide5(){
    document.getElementById('slideshow').src="../../public/assets/images/slide5.webp";
    setTimeout("slide1()", 3000)
}
