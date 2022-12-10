const canvas=document.querySelector('#lienzo')
const ctx=canvas.getContext('2d')

//CIELO CUADRO

// RELLENO de cuadrado
// ctx.fillRect(cordenada en : x, y, ancho, alto)


ctx.fillStyle= 'rgba(126,219,230,1)'
//ñmedidas en "x" y en "Y"
ctx.fillRect(0,0,500,500)


// borde de cuadrado
// ctx.rect (cx, cy, ancho y alto)
ctx.lineWidth=9;
ctx.strokeStyle="rgba(56,97,102,1)"
ctx.rect(0,0,500,500)
ctx.stroke()




//MONTAÑAS  (LINEAS)

//------- comienzo a dibujar ----- 
ctx.beginPath();  //empiezo el trazo
ctx.moveTo(0,200)

//--------- coordenadas ------

ctx.lineTo(100, 100)
ctx.lineTo(100,100)
ctx.lineTo(300,300)
ctx.lineTo(300,300)
ctx.lineTo(400,200)
ctx.lineTo(400,200)
ctx.lineTo(500,300)
ctx.lineTo(500,400)
ctx.lineTo(500,500)
ctx.lineTo(0,500)
ctx.lineTo(0,500)
ctx.lineTo(0,200)
//-------Estilo y linea --------

//stroke style: estilos a lineas
// fillStyle : relleno

ctx.lineWidth= 5; 
ctx.strokeStyle= 'rgba(230,199,161,1)'
ctx.stroke()

//------ Estilo y relleno  -----------
ctx.fillStyle = 'rgba(102,83,65,1)'
ctx.fill()


// Circulos (sol)


//trazo

ctx.beginPath()
ctx.arc(400,100,27,0, 2*Math.PI)

//Relleno del circulo
ctx.fillStyle="rgba(237,227,38,93)"
ctx.fill()

//borde
ctx.lineWidth=8;
ctx.strokeStyle="yellow"
ctx.stroke()

//Tronco
ctx.fillStyle= '#40261A'
ctx.fillRect(90,400,20,50)



//curvas cuadraticas
//trazo
ctx.beginPath();
ctx.moveTo(50,400);  // punto de control

//curva
ctx.quadraticCurveTo(100,200,150,400)

//borde Linea
ctx.lineWidth= 7;
ctx.strokeStyle='green'
ctx.stroke()

//relleno de curva
ctx.fillStyle='green'
ctx.fill()

//Tronco arbol B
ctx.fillStyle= '#40261A'
ctx.fillRect(290,400,20,50)


//CURVAS DE B
ctx.beginPath()
ctx.moveTo(200,400)

ctx.bezierCurveTo(250,300,350,300,400,400)

//BORDER DE LA CURVA
ctx.lineWidth=7;
ctx.strokeStyle='green'
ctx.stroke()

//RELLENAR LA CURVA
ctx.fillStyle= 'green'
ctx.fill()


//ELIPSES
ctx.beginPath()
ctx.ellipse(370,478,40,20,Math.PI/1,0,2*Math.PI)
ctx.strokeStyle='darkgray'
ctx.stroke()
ctx.fillStyle='gray'
ctx.fill()


ctx.beginPath()
ctx.ellipse(420,468,40,20,Math.PI/5,0,2*Math.PI)
ctx.strokeStyle='darkgray'
ctx.stroke()
ctx.fillStyle='gray'
ctx.fill()



