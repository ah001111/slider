
var imgs = document.querySelectorAll('#slider img');
var fixedlayer = document.querySelector('.fixedlayer');
var container = document.querySelector('.container');
var innerimg = document.querySelector('.fixedlayer img');

var prevbtn = document.querySelector('#prev-btn');
var nextbtn = document.querySelector('#next-btn');
var closevbtn = document.querySelector('#close-btn');


var imgsArray = [];

for (var i = 0; i < imgs.length; i++) {
    imgsArray.push(imgs[i]);
}

console.log(imgs);
console.log(imgsArray);


var index;

container.addEventListener('click', function (e) {

    var imgclick = e.target;
    var imgsrc = imgclick.getAttribute('src');

    index = imgsArray.indexOf(imgclick);
    console.log(index);

    if (imgsrc !== null) {
        innerimg.setAttribute('src', imgsrc);
        fixedlayer.classList.replace('d-none', 'd-flex');
    }

    console.log(imgsrc);
})

//===================================close function======================================

function closePopup() {
    fixedlayer.classList.replace('d-flex', 'd-none');
}

closevbtn.addEventListener('click', closePopup)
fixedlayer.addEventListener('click', closePopup)

//====================================next function=====================================

function getNextSlide() {
    index++;

    if (index >= imgsArray.length) {
        index = 0;
    }

    var nextImg = imgsArray[index];
    var srcimg = nextImg.getAttribute('src');
    innerimg.setAttribute('src', srcimg);
}

nextbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    getNextSlide()
})

//=====================================prev function====================================

function getPrevSlide() {
    index--;

    if (index < 0) {
        index = imgsArray.length - 1;
    }

    var previmg = imgsArray[index];
    var srcimg = previmg.getAttribute('src');
    innerimg.setAttribute('src', srcimg);
}

prevbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    getPrevSlide();
})

//=====================================keyboard====================================

document.addEventListener('keydown', function (e) {
    
    if (fixedlayer.classList.contains('d-flex')) {

        if (e.key == 'ArrowRight') {
            getNextSlide();
        }
        else if (e.key == 'ArrowLeft') {
            getPrevSlide();
        }
        else if (e.key == 'Escape') {
            closePopup();
        }

    }

})

