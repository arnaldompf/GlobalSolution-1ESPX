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

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector("#slider");
    const afterImage = document.querySelector('.image.after');
    const handle = document.querySelector('.icon');

    let isSliding = false;

    handle.addEventListener('mousedown', function(e) {
        isSliding = true;
        document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('mouseup', function(e) {
        isSliding = false;
        document.body.style.cursor = 'default';
    });

    document.addEventListener('mousemove', function(e) {
        if (isSliding) {
            const sliderRect = slider.getBoundingClientRect();
            let offsetX = e.clientX - sliderRect.left;

            if (offsetX < 0) offsetX = 0;
            if (offsetX > sliderRect.width) offsetX = sliderRect.width;

            handle.style.left = offsetX + 'px';
            afterImage.style.clipPath = `inset(0 ${sliderRect.width - offsetX}px 0 0)`;
        }
    });

    slider.addEventListener('touchstart', function(e) {
        isSliding = true;
        document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('touchend', function(e) {
        isSliding = false;
        document.body.style.cursor = 'default';
    });

    document.addEventListener('touchmove', function(e) {
        if (isSliding) {
            const sliderRect = slider.getBoundingClientRect();
            let offsetX = e.touches[0].clientX - sliderRect.left;

            if (offsetX < 0) offsetX = 0;
            if (offsetX > sliderRect.width) offsetX = sliderRect.width;

            handle.style.left = offsetX + 'px';
            afterImage.style.clipPath = `inset(0 ${sliderRect.width - offsetX}px 0 0)`;
        }
    });
});

function validar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value

    if(usuario == "admin" && senha == "1234"){
        alert("Acesso Permitido")
        window.open('index.html')
    }
    else{
        alert("ACESSO NEGADO!")
    }
}