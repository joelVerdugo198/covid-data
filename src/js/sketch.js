let data = []

function setup() {
	$.getJSON('https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST?disableRedirect=true', function(mapData) {
        
        var infected = `${mapData.infected}`;
        var states = mapData.State;
                    
        $(".infected").html(infected);
  		mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lbDMtMTciLCJhIjoiY2twcTY5Nng3MDBneDJucXYyZ3FjdDB1eiJ9.efRkYMIiV-Uv0c0eQPMj0Q';


  var cnv = createCanvas(800, 800)
  cnv.parent(mapDiv)
  // array data filled with objects
  // Objects are variables too. But objects can contain many values.
  // The values are written as name:value pairs 
  // (name and value separated by a colon)
  data = [
    {size: states['Aguascalientes'].infected/100, label:"Aguascalientes"},
	{size: states['Baja California'].infected/100, label:"Baja California"},
	{size: states['Baja California Sur'].infected/100, label:"Baja California Sur"},
	{size: states['Campeche'].infected/100, label:"Campeche"},
	{size: states['Chiapas'].infected/100, label:"Chiapas"},
	{size: states['Chihuahua'].infected/100, label:"Chihuahua"},
	{size: states['Coahuila'].infected/100, label:"Coahuila"},
	{size: states['Colima'].infected/100, label:"Colima"},
	{size: states['Durango'].infected/100, label:"Durango"},
	{size: states['Estado de Mexico'].infected/100, label:"Estado de México"},
	{size: states['Guanajuato'].infected/100, label:"Guanajuato"},
	{size: states['Guerrero'].infected/100, label:"Guerrero"},
	{size: states['Hidalgo'].infected/100, label:"Hidalgo"},
	{size: states['Jalisco'].infected/100, label:"Jalisco"},
	{size: states['Michoacan'].infected/100, label:"Michoacán"},
	{size: states['Morelos'].infected/100, label:"Morelos"},
	{size: states['Nayarit'].infected/100, label:"Nayarit"},
	{size: states['Nuevo Leon'].infected/100, label:"Nuevo León"},
	{size: states['Oaxaca'].infected/100, label:"Oaxaca"},
	{size: states['Puebla'].infected/100, label:"Puebla"},
	{size: states['Queretaro'].infected/100, label:"Querétaro"},
	{size: states['Quintana Roo'].infected/100, label:"Quintana Roo"},
	{size: states['San Luis Potosi'].infected/100, label:"San Luis Potosí"},
	{size: states['Sinaloa'].infected/100, label:"Sinaloa"},
	{size: states['Tabasco'].infected/100, label:"Tabasco"},
	{size: states['Tamaulipas'].infected/100, label:"Tamaulipas"},
	{size: states['Tlaxcala'].infected/100, label:"Tlaxcala"},
	{size: states['Tlaxcala'].infected/100, label:"Veracruz"},
    ]
  
colors = [
	color(55, 255, 0),
    color(204, 255, 0),
    color(238, 255, 0),
    color(255, 212, 0),
    color(255, 182, 0),
    color(255, 157, 0),
    color(255, 123, 0),
    color(255, 97, 0),
    color(255, 63, 0),
    color(255, 16, 0)
]

  noStroke()

});
}


function draw() {
  background("#080C40")
  push()
  translate(60,650)
  // 
  data.forEach((el,i) => {
      push()
  		translate(i * 25, 0)
      let c = floor(map(el.size,0,89000/100,0,9))
    	fill(colors[c])
      rect(0,0,20,-el.size*1.5)
      fill(28, 110, 127)
    	push()
      translate(0,10)
      rotate(HALF_PI)
      fill(255)
      textStyle(ITALIC)
      text(el.label,0,-6)
    	pop()
  		pop()
	})
  pop()
}


