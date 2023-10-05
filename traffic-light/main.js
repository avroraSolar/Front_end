// function clearLights() {
//     document.querySelectorAll('.bulb').forEach( (bulb) => {
//         bulb.style.background = 'black';
//     });
//   }

//   function illuminateStopLight() {
//     clearLights();
//     document.querySelector('#stopLight').style.backgroundColor = 'red';
//   }

//   function illuminateSlowLight() {
//     clearLights();
//     document.querySelector('#slowLight').style.backgroundColor = 'orange';
//   }

//   function illuminateGoLight() {
//     clearLights();
//     document.querySelector('#goLight').style.backgroundColor = 'green';
//   }

//   window.onload = function(){

//     document.querySelector('#slowButton')
//             .addEventListener('click', illuminateSlowLight);

//     document.querySelector('#stopButton')
//             .addEventListener('click', illuminateStopLight);

//   };
//   document.querySelector('#goButton')
//   .addEventListener('click', illuminateGoLight);

; (function (doc) {
    let runLight = false;
    let interval;
    let step = 1; let count = 0;

    function removeClasses(elem, colors) {
        let len = colors.length;
        for (item of elem) {
            for (let i = 0; i < len; i++) {
                if (item.classList.contains(colors[i])) {
                    item.classList.remove(colors[i]);
                }
            }
        }
    }

    function runInterval(elem, colors) {
        elem[count].classList.add(colors[count]);
        let len = elem.length;
        interval = setInterval(function () {
            removeClasses(elem, colors);
            count += step;
            elem[count].classList.add(colors[count]);
            if (count === len - 1 || count === 0) {
                step = -step;
            }
        }, 1000);
    }

    function run() {
        let light = doc.querySelectorAll('.circle');
        if (light !== null) {
            let lightColor = ["red", "yellow", "green"];
            runInterval(light, lightColor);
        }
    }

    function start() {
        let btn = doc.querySelector('.btn-run');
        if (btn !== null) {
            btn.onclick = function (event) {
                runLight = !runLight;
                if (runLight) {
                    run();
                    btn.innerText = "Pause";
                } else {
                    clearInterval(interval);
                    btn.innerText = "Run";
                }
            }
        }
    }

    start();
})(document);
console.dir(document.body);
console.log(document.body)


// Создать HTML-страницу со светофором и кнопкой,
// которая переключает светофор на следующий цвет.
const trafficLights = document.querySelector("div.traffic__light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const butn = document.getElementById("btn");

butn.addEventListener("click", function () {
    if (redlight.classList.contains("traffic__red")) {
        redlight.classList.remove("traffic__red");
        yellowlight.classList.add("traffic__yellow");
    } else if (yellowlight.classList.contains("traffic__yellow")) {
        yellowlight.classList.remove("traffic__yellow");
        greenlight.classList.add("traffic__green");
    } else if (greenlight.classList.contains("traffic__green")) {
        greenlight.classList.remove("traffic__green");
        redlight.classList.add("traffic__red");
    }
});

const light = document.querySelectorAll('.traffic_light div');
let active = document.querySelectorAll('.active');
// console.log(active);
let activeColor = 0;

function getChangeLight() {
    const traffic = light[activeColor];
    // console.log(traffic.classList.value);
    // let arr = Array.from(traffic.classList);
    // console.log(active);
    // console.log(arr);
   
for(let i = 0; i < light.length; i++) {
    if (light[i].className.includes('active')) {
        light[i].classList.remove('active');
    }
}

    // if(light[0].className.includes('active') || light[1].className.includes('active') || light[2].className.includes('active')) {
    //     light[0].classList.remove('active');
    //     light[1].classList.remove('active');
    //     light[2].classList.remove('active');
    //     console.log('+');
    // }
        traffic.classList.toggle('active');
    
    
    activeColor++;
    if (activeColor > 2) {
        activeColor = 0;
    }
    
    // console.log(arr);
    console.log(traffic.className.includes('active'));
}


function clearLights() {
    document.getElementsByClassName('active').style.backgroundColor = "black";
}
console.log(document.querySelectorAll('.active'));