/* == COUNT DOWN FUNCTION == */
let aniversaryDate = new Date('oct 21, 2023 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    gap = aniversaryDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let days = Math.floor(gap / (day));
    let hours = Math.floor((gap % (day)) / (hour));
    let minutes = Math.floor((gap % (hour)) / (minute));
    let seconds = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
};

setInterval(function(){
    countDown();
}, 1000);
/* == COUNT DOWN FUNCTION == */



/* == IMAGE SLIDE SHOW FUNCTION == */
let i = 0; //start point
let time = 2000;

//Images List
let images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
     'image11.jpg',
     'image12.jpg',
     'image13.jpg',
     'image14.jpg',
     'image15.jpg',
     'image16.jpg',
     'image17.jpg',
     'image18.jpg',
     'image19.jpg',
     'image20.jpg',
     'image21.jpg',
     'image21.jpg',
     'image22.jpg',
     'image23.jpg',
     'image24.jpg',
     'image25.jpg',
     'image26.jpg',
     'image27.jpg'
]


//Change Image
function changeImage() {
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImage()', time);
}

window.onload = changeImage;

/* == IMAGE SLIDE SHOW FUNCTION == */
