var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var isDrawing = false;
var clr = document.getElementById('btnBorrar');
var vocalActual=0;
var puntosActuales= 0;

var vocales= [
   [
    { x: 250, y: 20 },
    { x: 270, y: 50 },
    { x: 290, y: 80 },
    { x: 310, y: 110 },
    { x: 330, y: 140 },
    { x: 350, y: 170 },
    { x: 370, y: 200 },
    { x: 390, y: 230 },
    { x: 410, y: 250 },
    { x: 230, y: 50 },
    { x: 210, y: 80 },
    { x: 190, y: 110 },
    { x: 170, y: 140 },
    { x: 150, y: 170 },
    { x: 130, y: 200 },
    { x: 110, y: 230 },
    { x: 90, y: 250 },
    { x: 190, y: 170 },
    { x: 230, y: 170 },
    { x: 270, y: 170 },
    { x: 310, y: 170 },
    { x: 350, y: 170 }, 
  ],
  [
    { x: 180, y: 40 },
    { x: 210, y: 40 },
    { x: 240, y: 40 },
    { x: 270, y: 40 },
    { x: 300, y: 40 },
    { x: 330, y: 40 },
    { x: 180, y: 250 },
    { x: 210, y: 250 },
    { x: 240, y: 250 },
    { x: 270, y: 250 },
    { x: 300, y: 250 },
    { x: 330, y: 250 },
    { x: 210, y: 145 },
    { x: 240, y: 145 },
    { x: 270, y: 145 },
    { x: 300, y: 145 },
    { x: 330, y: 145 },
    { x: 180, y: 70 },
    { x: 180, y: 100 },
    { x: 180, y: 130 },
    { x: 180, y: 160 },
    { x: 180, y: 190 },
    { x: 180, y: 220 },
  ],
  [
   
    { x: 250, y: 60 },
    { x: 250, y: 90 },
    { x: 250, y: 120 },
    { x: 250, y: 150 },
    { x: 250, y: 180 },
    { x: 250, y: 210 },
    { x: 150, y: 30 },
    { x: 180, y: 30 },
    { x: 210, y: 30 },
    { x: 240, y: 30 },
    { x: 270, y: 30 },
    { x: 300, y: 30 },
    { x: 330, y: 30 },
    { x: 360, y: 30 },
    { x: 150, y: 240 },
    { x: 180, y: 240 },
    { x: 210, y: 240 },
    { x: 240, y: 240 },
    { x: 270, y: 240 },
    { x: 300, y: 240 },
    { x: 330, y: 240 },
    { x: 360, y: 240 },
    
   
  ],
  [
    
    { x: 140, y: 160 },
    { x: 140, y: 130 },
    { x: 140, y: 100 },    
    
    { x: 150, y: 80 },
    { x: 160, y: 60 },
    { x: 180, y: 40 },
    
    { x: 200, y: 30 },
    { x: 230, y: 20 },
    { x: 260, y: 20 },
    { x: 290, y: 30 }, 
    
    { x: 310, y: 40 },  
    { x: 330, y: 60 },
    { x: 340, y: 80 },

    { x: 350, y: 100 },
    { x: 350, y: 130 },
    { x: 350, y: 160 },

    { x: 150, y: 190},
    { x: 160, y: 210 },
    { x: 180, y: 230 },
   
    { x: 200, y: 240 },
    { x: 230, y: 250 },
    { x: 260, y: 250 },
    { x: 290, y: 240 },
   
    { x: 310, y: 230 },
    { x: 330, y: 210 },
    { x: 340, y: 190 },
  ],
  [
    { x: 140, y: 160 },
    { x: 140, y: 130 },
    { x: 140, y: 100 },    
    { x: 140, y: 70 }, 
    { x: 140, y: 40 }, 

    { x: 350, y: 40 }, 
    { x: 350, y: 70 }, 
    { x: 350, y: 100 },
    { x: 350, y: 130 },
    { x: 350, y: 160 },

    { x: 150, y: 190},
    { x: 160, y: 210 },
    { x: 180, y: 230 },
   
    { x: 200, y: 240 },
    { x: 230, y: 250 },
    { x: 260, y: 250 },
    { x: 290, y: 240 },
   
    { x: 310, y: 230 },
    { x: 330, y: 210 },
    { x: 340, y: 190 },
    
  ],
  // Agrega más puntos según el contorno de la vocal
];

var rutasaudios = [
  "audioA.mp3", 
  "audioE.mp3",
  "audioI.mp3", 
  "audioO.mp3",
  "audioU.mp3",
];

var rutasobjetos = [
  "obja.gif", 
  "obje.gif",
  "obji.gif", 
  "objo.gif",
  "obju.gif",
];

var rutaspalabra = [
  "palabraa.png", 
  "palabrae.png",
  "palabrai.png", 
  "palabrao.png",
  "palabrau.png",
];


var rutasgifs = [
  "vocala.gif", 
  "vocale.gif",
  "vocali.gif", 
  "vocalo.gif",
  "vocalu.gif",
];

var rutasjpg = [
  "vocala.jpg", 
  "vocale.jpg",
  "vocali.jpg", 
  "vocalo.jpg",
  "vocalu.jpg",
];
var puntosTrazados = 0; // Variable para almacenar el número de puntos trazados correctamente

function dibujarPuntos(vocalActual) {
  ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
  puntos = vocales[vocalActual];
    for (var i = 0; i < puntos.length; i++) {
      punto=puntos[i];
      ctx.beginPath();
      ctx.arc(punto.x, punto.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
    }
    gifobjeto.src = rutasobjetos [vocalActual]; 
    palabra.src = rutaspalabra [vocalActual]; 
}

function cambiarVocal() {
  vocalActual = (vocalActual + 1)%vocales.length;
  dibujarPuntos(vocalActual);
  if(vocalActual==0 && puntosActuales>0){puntosTrazados=0;}
  puntosActuales=puntosTrazados;
  gifvocal.src = rutasjpg [vocalActual];
}
  
function trazarlinea(){
  
  canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    ctx.beginPath();
    var rect = canvas.getBoundingClientRect();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  });
  
  canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
      var rect = canvas.getBoundingClientRect();
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
      verificarTrazado(e.clientX- rect.left, e.clientY- rect.top);
    }
  });
  
  canvas.addEventListener('mouseup', function() {
    isDrawing = false;
  });
}  

function verificarTrazado(x, y) {
  for (var i = 0; i < puntos.length; i++) {
    var punto = puntos[i];
     // Comprueba si la línea trazada pasa cerca de la línea entre los puntos actuales
    var distanciax= Math.abs(x-punto.x);
    var distanciay = Math.abs(y-punto.y);

    if (distanciax < 5 && distanciay <5) {
      puntosTrazados++; // Incrementa la variable de puntos trazados
      break; // Rompe el ciclo una vez que se encuentra una coincidencia
    }
  }
}

function reproducir() {
  var patchaudio = rutasaudios [vocalActual];
  var audio = new Audio (patchaudio);
  audio.play();
  gifvocal.src = rutasgifs [vocalActual];
}

function mostrarpuntaje() {
  alert ("Has sumado " + puntosTrazados + " puntos");
}

clr.addEventListener('click',limpiar);

function limpiar(){
  ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
  dibujarPuntos(vocalActual);
  puntosTrazados = puntosActuales;
}
dibujarPuntos(vocalActual);
trazarlinea ();
