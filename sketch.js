// Global constants

// Engine for the game
const Engine = Matter.Engine;
// World of the engine
const World = Matter.World;
// Bodies of the world
const Bodies = Matter.Bodies;
// Body of the world
const Body = Matter.Body;

// Global variables

// engine(Engine)
var engine;

// world(World)
var world;

// Star and Star image
var star, starImg;
// StarBody
var starBody;

// Background image
var bgImg;

// create variable for fairy sprite and fairyImg(fairyAnimation)

// Fairy and Fairy Animation
var fairy, fairy_flyingAnimation;

// Background Music
var background_music;

// edges
var edges;

// preload function
function preload() {
	// loading star image
	starImg = loadImage("images/star.png");

	// loading background image
	bgImg = loadImage("images/starNight.png");

	// load animation for fairy here
	
	// loading fairy flying animation
	fairy_flyingAnimation = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");

	background_music = loadSound("sound/JoyMusic.mp3");
}

// setup function
function setup() {
	// creating canvas
	createCanvas(800, 750);

	// write code to play fairyVoice sound

	// create fairy sprite and add animation for fairy
	
	background_music.play();

	// creating fairy sprite
	fairy = createSprite(130, 550);
	fairy.addAnimation("fairyFlying", fairy_flyingAnimation);
	fairy.scale = 0.22;
	//fairy.debug = true;
	fairy.debug = false;
	fairy.setCollider("rectangle", 0, 0, 1025, 1250);

	// creating star sprite
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	//star.debug = true;
	star.debug = false;

	edges = createEdgeSprites();

	// creating Engine using the variable 'engine'
	engine = Engine.create();

	// creating world in the engine(Engine) using the variable 'world'
	world = engine.world;

	// Star Body Options
	// starBody's properties(options)
	var starBody_options = {
		restitution: 0.5,
		isStatic: true
	}

	// creating starBody sprite
	starBody = Bodies.circle(650, 30, 5, starBody_options);
	// adding starbody and world in the World
	World.add(world, starBody);
	
	// Running the engine using the variable 'engine'
	Engine.run(engine);
}

// draw function
function draw() {
	// setting background image
  	background(bgImg);

	// setting the x position of the star equal to the starBody's x position
  	star.x= starBody.position.x 
	// setting the y position of the star equal to the starBody's y position
  	star.y= starBody.position.y 

	fairy.collide(edges);
	fairy.collide(edges[0]);
	fairy.collide(edges[2]);

	// write code to stop star in the hand of fairy

	if (star.y > 515 && starBody.position.y > 515) {
		Matter.Body.setStatic(starBody, true);
	}

	// Logging star's y position in the console
  	//console.log(star.y);

	//console.log("star.y =>", star.y);

	// Logging fairy's x position in the console
	//console.log(fairy.x);

	//console.log("fairy.x =>", fairy.x);

	//console.log("mouse y coordinates =>", mouseY, "fairy.x =>", fairy.x);

	console.log("fairy's x coordinates =>", fairy.x, " star's y coordinates =>", star.y);

	// Calling drawSprites function to draw sprites(display sprites)
  	drawSprites();
}

// keyPressed function
function keyPressed() {
	// write code to move fairy left and right

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 5;
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 5;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
