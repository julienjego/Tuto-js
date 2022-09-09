// Exercice 1
document.getElementsByTagName("h2")[0].innerHTML = "Mon 1er script";

let btn = document.getElementById("button");

btn.addEventListener(
  "click",
  function (e) {
    alert("C'est mon 1er script");
  },
  false
);

// Exerice 3, fonction arguments

function perimetre(larg, long) {
  let resultat = 0;

  if (!larg) console.log("Y a un souci gros");
  else if (!long) {
    resultat = larg * 4;
    console.log("Carré : " + resultat);
  } else if (arguments.length == 2) {
    resultat = (larg + long) * 2;
    console.log("Rectangle : " + resultat);
  } else if (arguments.length > 2) {
    for (let arg in arguments) resultat += arguments[arg];
    console.log("Polygone : " + resultat);
  }
}

// perimetre();
perimetre(5);
// perimetre(5, 7);
// perimetre(5, 7, 8);
// perimetre(2, 4, 6, 8, 9);

// Exercice 4

let btn1 = document.getElementById("button1");
let radios = document.getElementsByClassName("radios");
let txtField = document.getElementById("text1");

btn1.addEventListener("click", function (e) {
  for (let rad of radios) {
    if (rad.checked) {
      txtField.value = rad.value;
      break;
    }
  }
});

// Exercice 5

let btnCache = document.getElementById("btnCache");
let btnAffiche = document.getElementById("btnAffiche");
let postIt = document.getElementById("postit");
let txtHover = document.getElementById("survol");

btnAffiche.addEventListener("click", function (e) {
  postIt.style.visibility = "visible";
});

btnCache.addEventListener("click", function (e) {
  postIt.style.visibility = "hidden";
});

txtHover.addEventListener("mouseover", function (e) {
  postIt.style.visibility = "visible";
  postIt.innerHTML = "C'est gentil de me survoler...";
});

txtHover.addEventListener("mouseout", function (e) {
  postIt.style.visibility = "hidden";
  postIt.innerHTML = "Vous avez cliqué sur le bouton affiche";
});

// Exercice 6

let chronos;
let chronoP = document.getElementById("chronoP");
let btnStart = document.getElementById("btnStart");
let btnPause = document.getElementById("btnPause");
let btnStop = document.getElementById("btnStop");
let [mins, secs, msecs] = [0, 0, 0];

btnPause.disabled = true;
btnStop.disabled = true;

function startChrono() {
  if (!chronos) {
    chronos = setInterval(timer, 10);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
    chronoP.style.color = "green";
    btnStart.value = "Start";
  }
}

function stopChrono() {
  clearInterval(chronos);
  chronos = null;
  chronoP.innerHTML = "00:00:00";
  mins = 0;
  secs = 0;
  msecs = 0;
  btnStart.disabled = false;
  btnPause.disabled = true;
  btnStop.disabled = true;
  chronoP.style.color = "black";
  btnStart.value = "Start";
}

function pauseChrono() {
  clearInterval(chronos);
  chronos = null;
  btnStart.disabled = false;
  btnPause.disabled = true;
  chronoP.style.color = "blue";
  btnStart.value = "Reprendre";
}

function timer() {
  msecs += 10;
  if (msecs == 1000) {
    msecs = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
      if (mins == 60) {
        msecs = 0;
        secs = 0;
        mins = 0;
      }
    }
  }

  let ms = msecs < 10 ? "00" + msecs : msecs < 100 ? "0" + msecs : msecs;
  let s = secs < 10 ? "0" + secs : secs;
  let m = mins < 10 ? "0" + mins : mins;

  chronoP.innerHTML = `${m}:${s}:${ms}`;
}

btnStart.addEventListener("click", startChrono, false);
btnStop.addEventListener("click", stopChrono, false);
btnPause.addEventListener("click", pauseChrono, false);

// Exercice 7

let btnControl = document.getElementById("btnControl");
let saisie = document.getElementById("saisie");

btnControl.addEventListener(
  "click",
  function (e) {
    if (
      saisie.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("Vous avez saisi : " + saisie.value);
    } else {
      alert("Votre mail n'est pas valide");
    }
  },
  false
);

// Exercie 8
// à activer uniquement pour l'exercice

// let importTxt = document.getElementById("importTxt");
// let importNb = document.getElementById("importNb");
// let uri = window.location;

// importNb.innerHTML = decodeURIComponent(uri).match(/cle1=(.*)&/)[1];
// importTxt.innerHTML = decodeURIComponent(uri).match(/cle2=(.*)/)[1];

// Exercice 9

let btnCode = document.getElementById("btnCode");
let btnName = document.getElementById("btnName");
let btnVersion = document.getElementById("btnVersion");
let btnUa = document.getElementById("btnUa");

let codeName = document.getElementById("codeName");
let appName = document.getElementById("appName");
let appVersion = document.getElementById("appVersion");
let ua = document.getElementById("ua");

btnCode.addEventListener("click", () => {
  codeName.value = navigator.appCodeName;
});

btnName.addEventListener("click", () => {
  appName.value = navigator.appName;
});

btnVersion.addEventListener("click", () => {
  appVersion.value = navigator.appVersion;
});

btnUa.addEventListener("click", () => {
  ua.value = navigator.userAgent;
});
