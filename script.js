//qet elements
let imgSlider_up = document.getElementById('img_slider_1');
let imgSlider_bottom = document.getElementById('img_slider_2');
let textSlider_up = document.getElementById("container-info-1__position_1__text_1");
let textSlider_bottom = document.getElementById("container-info-1__position_1__text_2");
let ScrollButtonLeft = document.getElementsByClassName('container-info-2__button__left')[0];
let ScrollButtonRight = document.getElementsByClassName('container-info-2__button__right')[0];
let ScrollCardDisplay = document.getElementsByClassName('container-info-2__card-display')[0];
let ScrollButtonCounterRight = 1;


//main
const images_arr_up = ['images/glacier.jpg','images/dirtywater.jpg','images/metallurgy.jpeg'];
let images_arr_up_counter = 1;
const images_arr_bottom = ['images/reserve.jpg','images/tibet.jpg','images/amazonforests.jpg'];
let images_arr_bottom_counter = 1;
const text_arr_sider_up = [
    'За последние 55-65 лет площадь Гималайских ледников уменьшилась на 16-18%',
    'Около 14-14,5 тысяч людей каждый день гибнут из-за загрязнения воды',
    'Источником около 6-7% всего углекислого газа, который попадает в атмосферу и загрязняет её, является металлургия'
];
const text_arr_sider_bottom = [
    'Характеризующиеся особой влажностью леса Амазонки выделяют около 20% мирового запаса кислорода',
    'Статус заповедника имеет около 12% всей поверхности планеты Земля',
    'Тибет является областью с самой незагрязненной и чистой экологией'
];
//animate function
function animate_imgSlider({duration, draw, timing}) {
    let start = performance.now();
    requestAnimationFrame(function animate_imgSlider(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {timeFraction = 1;}

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate_imgSlider);
        }
    })
}


//First animathion
let timerImgSlider_up = setInterval(() => {
    let start = performance.now();``
    animate_imgSlider({
        duration: 1000,
        timing: (timeFraction) => {
            return timeFraction;
        },
        draw: (progress) => {
            switch (progress) {
                case 1:
                    imgSlider_up.src = images_arr_up[images_arr_up_counter];
                    textSlider_up.textContent = text_arr_sider_up[images_arr_up_counter];
                    images_arr_up_counter++;
                    if (images_arr_up_counter >= text_arr_sider_up.length) {images_arr_up_counter = 0;}     
            };
            i = 1 - progress;
            imgSlider_up.style.transform = 'scaleX(' + i + ')';
        }
    });
    setTimeout(() => {
        animate_imgSlider({
            duration: 1000,
            timing: (timeFraction) => {
                return timeFraction;
                // return Math.pow(timeFraction, 2);
                /* return 1 - Math.sin(Math.acos(timeFraction)); */
            },
            draw: (progress) => {
                imgSlider_up.style.transform = 'scaleX(' + progress + ')';
            }
        });
    }, 1000);

}, 4000);

//break first animathion
imgSlider_up.onclick = (()=> {
    clearInterval(timerImgSlider_up);
});


//Second animathion
let timerImgSlider_bottom = setInterval(() => {
    animate_imgSlider({
        duration: 1000,
        timing: (timeFraction) => {
            return timeFraction;
            // return Math.pow(timeFraction, 2);
            /* return 1 - Math.sin(Math.acos(timeFraction)); */
        },
        draw: (progress) => {
            switch (progress) {
                case 1:
                    imgSlider_bottom.src = images_arr_bottom[images_arr_bottom_counter];
                    textSlider_bottom.textContent = text_arr_sider_bottom[images_arr_up_counter];
                    images_arr_bottom_counter++;
                    if (images_arr_bottom_counter >= text_arr_sider_bottom.length) {images_arr_bottom_counter = 0;}
            };
            i = 1 - progress;
            imgSlider_bottom.style.transform = 'scaleX(' + i + ')';
        }
    });
    setTimeout(() => {
        animate_imgSlider({
            duration: 1000,
            timing: (timeFraction) => {
                return timeFraction;
                // return Math.pow(timeFraction, 2);
                /* return 1 - Math.sin(Math.acos(timeFraction)); */
            },
            draw: (progress) => {
                imgSlider_bottom.style.transform = 'scaleX(' + progress + ')';
            }
        });
    }, 1000);

}, 4000);
//break second animathion
imgSlider_bottom.onclick = (()=> {
    clearInterval(timerImgSlider_bottom);
});

//button scroll left
ScrollButtonLeft.onclick = (() => {
    console.log('Кнопка лево');
    ScrollCardDisplay.scrollLeft = 0;
});
//button scroll right
// ScrollButtonRight.onclick = (() => {
//     console.log('Кнопка право');
//     ScrollCardDisplay.scrollLeft = 700;
// });
ScrollButtonRight.onmousedown = (() => {
    console.log('Кнопка право');
    let timerScrollButtonRight = setInterval(() => {
        
    }, 20);
});