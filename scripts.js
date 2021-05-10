window.addEventListener('load', comenzar);

// Tener presente el ámbito de las variables.
// Si se declara con var es local, mientras que si se declara sin var es por definición global

function comenzar() {
    canva = document.getElementById('canvas1');
    ctx = canva.getContext('2d');

    
    xIni = 240;
    yIni = 160;
    r = 40;
    mov = r/4;
    yBottomPos = canva.height - r;
    yTopPos = yIni;
    direction = 'goDown';
    
    setInterval(animacion, 3);
}

function animacion() {
    if (direction == 'goDown') {
        ctx.clearRect(xIni-r, (yIni-mov)-r, 2*r, 2*r);
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(xIni, yIni, r, Math.PI*2, false);
        ctx.fill();
        if (yIni >= yBottomPos) {
            yIni -= mov;
            direction = 'goUp';
            yTopPos += r;
        } else {
            yIni += mov;
            // return false;
        }
    }  
    else {
        if (yTopPos < yBottomPos) {
            ctx.clearRect(xIni-r, (yIni+mov)-r, 2*r, 2*r);
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(xIni, yIni, r, Math.PI*2, false);
            ctx.fill();
            if (yIni <= yTopPos) {
                yIni += mov;
                direction = 'goDown';
            } else {
                yIni -= mov;
            }
        }
    }
    
}
   
