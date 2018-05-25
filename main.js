/*Exercice 1 : chrono

Créez une classe Chrono avec:

une méthode start()

une méthode pause()

une méthode stop()

une propriété currentTime

Indices:
setTimeout
setInterval

Bonus: Mesurer le temps que met le chrono pour écouler 5 min.
Même chose pour 10 min.Comment réduire l'écart entre le temps affiché et le temps réel?*/

function Chrono() {
    let seconde = 1;
    let minute = 1;
    let currentTime;
    this.start = function () {

        currentTime = setInterval(function () {
            document.getElementById("affichesec").innerHTML = seconde++;
            if (seconde == 61) {
                seconde = 1;
                document.getElementById("affichesec").innerHTML = 0;
                document.getElementById("affichemin").innerHTML = minute++;
            }
        }, 1000);
    }
    this.pause = function () {
        clearInterval(currentTime);
    }
    this.stop = function () {
        clearInterval(currentTime);
        seconde = 1;
    }
}

var chrono = new Chrono();

