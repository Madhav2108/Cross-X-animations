var icon_1 = document.getElementById("b1");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";  
var topLineY_1;
var middleLineY_1;
var bottomLineY_1;
var topLeftY_1;
var topRightY_1;
var bottomLeftY_1;
var bottomRightY_1;
var topLeftX_1;
var topRightX_1;
var bottomLeftX_1;
var bottomRightX_1;
var segmentDuration_1 = 15;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;
var currentFrame_1 = 1;



///Menu Disappear 
function menuDisappearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= menuDisappearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> { 
			//top line
			topLineY_1 = AJS.easeInBack( 37, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
			//bottom line
			bottomLineY_1 = AJS.easeInBack( 63, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
			//recursion
			menuDisappearAnimation_1();
		});
	} else {
		middleLine_1.style.opacity = "0";
		currentFrame_1 = 1;
		menuDisappearComplete_1 = true;
		openMenuAnimation_1();
	}
}

///Cross Appear
function arrowAppearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= arrowAppearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> { 
			//top line
			topLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			topLeftY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomRightY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
			//bottom line
			bottomLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomLeftY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topRightY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
			//recursion
			arrowAppearAnimation_1();
		});
	} else {
		currentFrame_1 = 1;
		arrowAppearComplete_1 = true;
		openMenuAnimation_1();
	}
}

///Combined Open Menu Animation
function openMenuAnimation_1() {
	if ( !menuDisappearComplete_1 ) { 
		menuDisappearAnimation_1();
	} else if ( !arrowAppearComplete_1) {
		arrowAppearAnimation_1();
	}
}


///Cross Disappear
function arrowDisappearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= arrowDisappearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topLeftY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomRightY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
			//bottom line
			bottomLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomLeftY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topRightY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
			//recursion
			arrowDisappearAnimation_1();
		});
	} else {
		middleLine_1.style.opacity = "1";
		currentFrame_1 = 1;
		arrowDisappearComplete_1 = true;
		closeMenuAnimation_1();
	}
}

///Menu Appear
function menuAppearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= menuAppearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLineY_1 = AJS.easeOutBack( 50, 37, menuDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
			//bottom line
			bottomLineY_1 = AJS.easeOutBack( 50, 63, menuDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
			//recursion
			menuAppearAnimation_1();
		});
	} else {
		currentFrame_1 = 1;
		menuAppearComplete_1 = true;
		closeMenuAnimation_1();
	}
}

///Close Menu Animation
function closeMenuAnimation_1() {
	if ( !arrowDisappearComplete_1 ) {
		arrowDisappearAnimation_1();
	} else if ( !menuAppearComplete_1 ) {
		menuAppearAnimation_1();
	}
}


///Events
icon_1.addEventListener( "click", ()=> { 
    if ( state_1 === "menu" ) {
        openMenuAnimation_1();
        state_1 = "arrow";
        arrowDisappearComplete_1 = false;
          menuAppearComplete_1 = false;
    } else if ( state_1 === "arrow" ) {
        closeMenuAnimation_1();
        state_1 = "menu";
        menuDisappearComplete_1 = false;
          arrowAppearComplete_1 = false;
    }
  });


// new 
  var icon_2 = document.getElementById("b2");
var topLine_2 = document.getElementById("top-line-2");
var middleLine_2 = document.getElementById("middle-line-2");
var bottomLine_2 = document.getElementById("bottom-line-2");
var state_2 = "menu";
var topLineY_2;
var middleLineY_2;
var bottomLineY_2;
var topLeftY_2;
var topRightY_2;
var bottomLeftY_2;
var bottomRightY_2;
var topLeftX_2;
var topRightX_2;
var middleLeftX_2;
var middleRightX_2;
var bottomLeftX_2;
var bottomRightX_2;
var segmentDuration_2 = 25;
var menuDisappearDurationInFrames_2 = segmentDuration_2;
var crossAppearDurationInFrames_2 = Math.round( segmentDuration_2*0.35 );
var crossDisappearDurationInFrames_2 = Math.round( segmentDuration_2*0.6 );
var menuAppearDurationInFrames_2 = segmentDuration_2;
var menuDisappearComplete_2 = false;
var crossAppearComplete_2 = false;
var crossDisappearComplete_2 = true;
var menuAppearComplete_2 = true;
var currentFrame_2 = 0;
var lineDisappearDelay_2 = segmentDuration_2*0.2;
var lineAppearDelay_2 = lineDisappearDelay_2;
var lineDisappearDurationInFrames_2 = segmentDuration_2 - lineDisappearDelay_2*2;
var lineAppearDurationInFrames_2 = lineDisappearDurationInFrames_2;
var topLineOpacity_2 = 1;
var middleLineOpacity_2 = 1;
var bottomLineOpacity_2 = 1;

///Menu Disappear
function menuDisappearAnimation_2() {
	currentFrame_2++;
	if ( currentFrame_2 <= menuDisappearDurationInFrames_2 ) {
		window.requestAnimationFrame( ()=> { 
			//top line
      if ( currentFrame_2 <= lineDisappearDurationInFrames_2 ) {
        topLeftX_2 = AJS.easeInBack( 30, 130, lineDisappearDurationInFrames_2, currentFrame_2 );
        topRightX_2 = AJS.easeInBack( 70, 170, lineDisappearDurationInFrames_2, currentFrame_2 );
        topLine_2.setAttribute( "d", "M"+topLeftX_2+",37 L"+topRightX_2+",37 Z" );
        topLineOpacity_2 = AJS.linear( 1, 0, lineDisappearDurationInFrames_2*0.85, currentFrame_2 );
        topLine_2.style.opacity = topLineOpacity_2;
      }
      //middle line
      if ( currentFrame_2 > lineDisappearDelay_2 && currentFrame_2 <= lineDisappearDurationInFrames_2 + lineDisappearDelay_2 ) {
        middleLeftX_2 = AJS.easeInBack( 30, 130, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2 );
        middleRightX_2 = AJS.easeInBack( 70, 170, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2 );
        middleLine_2.setAttribute( "d", "M"+middleLeftX_2+",50 L"+middleRightX_2+",50 Z" );
        middleLineOpacity_2 = AJS.linear( 1, 0, lineDisappearDurationInFrames_2*0.85, currentFrame_2 - lineDisappearDelay_2 );
        middleLine_2.style.opacity = middleLineOpacity_2;
      }
      //bottom line
      if ( currentFrame_2 > lineDisappearDelay_2*2 ) {
        bottomLeftX_2 = AJS.easeInBack( 30, 130, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2*2 );
        bottomRightX_2 = AJS.easeInBack( 70, 170, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2*2 );
        bottomLine_2.setAttribute( "d", "M"+bottomLeftX_2+",63 L"+bottomRightX_2+",63 Z" );
        bottomLineOpacity_2 = AJS.linear( 1, 0, lineDisappearDurationInFrames_2*0.85, currentFrame_2 - lineDisappearDelay_2*2 );
        bottomLine_2.style.opacity = bottomLineOpacity_2;
      }
			//recursion
			menuDisappearAnimation_2();
		});
	} else {
		currentFrame_2 = 0;
		menuDisappearComplete_2 = true;
		openMenuAnimation_2();
	}
}

///Cross Appear
function crossAppearAnimation_2() {
	currentFrame_2++;
	if ( currentFrame_2 <= crossAppearDurationInFrames_2 ) {
		window.requestAnimationFrame( ()=> { 
			//top line
			topLeftX_2 = AJS.easeInQuad( -30, 35, crossAppearDurationInFrames_2, currentFrame_2 );
			topLeftY_2 = AJS.easeInQuad( -30, 35, crossAppearDurationInFrames_2, currentFrame_2 );
			bottomRightX_2 = AJS.easeInQuad( 0, 65, crossAppearDurationInFrames_2, currentFrame_2 );
			bottomRightY_2 = AJS.easeInQuad( 0, 65, crossAppearDurationInFrames_2, currentFrame_2 );
			topLine_2.setAttribute( "d", "M" + topLeftX_2 + "," + topLeftY_2 + " L" + bottomRightX_2 + "," + bottomRightY_2 );
      topLineOpacity_2 = AJS.easeInExpo( 0, 1, crossAppearDurationInFrames_2, currentFrame_2 );
      topLine_2.style.opacity = topLineOpacity_2;
			//bottom line
			bottomLeftX_2 = AJS.easeInQuad( -30, 35, crossAppearDurationInFrames_2, currentFrame_2 );
			bottomLeftY_2 = AJS.easeInQuad( 130, 65, crossAppearDurationInFrames_2, currentFrame_2 );
			topRightX_2 = AJS.easeInQuad( 0, 65, crossAppearDurationInFrames_2, currentFrame_2 );
			topRightY_2 = AJS.easeInQuad( 100, 35, crossAppearDurationInFrames_2, currentFrame_2 );
			bottomLine_2.setAttribute( "d", "M" + bottomLeftX_2 + "," + bottomLeftY_2 + " L" + topRightX_2 + "," + topRightY_2 );
      bottomLineOpacity_2 = AJS.easeInExpo( 0, 1, crossAppearDurationInFrames_2, currentFrame_2 );
      bottomLine_2.style.opacity = bottomLineOpacity_2;      
			//recursion
			crossAppearAnimation_2();
		});
	} else {
		currentFrame_2 = 0;
		crossAppearComplete_2 = true;
		openMenuAnimation_2();
	}
}

///Combined Open Menu Animation
function openMenuAnimation_2() {
	if ( !menuDisappearComplete_2 ) { 
		menuDisappearAnimation_2();
	} else if ( !crossAppearComplete_2) {
		crossAppearAnimation_2();
	}
}

///Cross Disappear
function crossDisappearAnimation_2() {
	currentFrame_2++;
	if ( currentFrame_2 <= crossDisappearDurationInFrames_2 ) {
		window.requestAnimationFrame( ()=> {
      //top line
			topLeftX_2 = AJS.easeInBack( 35, -30, crossDisappearDurationInFrames_2, currentFrame_2 );
			topLeftY_2 = AJS.easeInBack( 35, -30, crossDisappearDurationInFrames_2, currentFrame_2 );
			bottomRightX_2 = AJS.easeInBack( 65, 0, crossDisappearDurationInFrames_2, currentFrame_2 );
			bottomRightY_2 = AJS.easeInBack( 65, 0, crossDisappearDurationInFrames_2, currentFrame_2 );
			topLine_2.setAttribute( "d", "M" + topLeftX_2 + "," + topLeftY_2 + " L" + bottomRightX_2 + "," + bottomRightY_2 );
      topLineOpacity_2 = AJS.linear( 1, 0, crossDisappearDurationInFrames_2, currentFrame_2, crossDisappearDurationInFrames_2*0.75 );
      topLine_2.style.opacity = topLineOpacity_2;
			//bottom line
			bottomLeftX_2 = AJS.easeInBack( 35, -30, crossDisappearDurationInFrames_2, currentFrame_2 );
			bottomLeftY_2 = AJS.easeInBack( 65, 130, crossDisappearDurationInFrames_2, currentFrame_2 );
			topRightX_2 = AJS.easeInBack( 65, 0, crossDisappearDurationInFrames_2, currentFrame_2 );
			topRightY_2 = AJS.easeInBack( 35, 100, crossDisappearDurationInFrames_2, currentFrame_2 );
			bottomLine_2.setAttribute( "d", "M" + bottomLeftX_2 + "," + bottomLeftY_2 + " L" + topRightX_2 + "," + topRightY_2 );
      bottomLineOpacity_2 = AJS.linear( 1, 0, crossDisappearDurationInFrames_2, currentFrame_2, crossDisappearDurationInFrames_2*0.75 );
      bottomLine_2.style.opacity = bottomLineOpacity_2;
			//recursion
			crossDisappearAnimation_2();
		});
	} else {
		middleLine_2.style.opacity = "1";
		currentFrame_2 = 0;
		crossDisappearComplete_2 = true;
		closeMenuAnimation_2();
	}
}

///Menu Appear
function menuAppearAnimation_2() {
	currentFrame_2++;
	if ( currentFrame_2 <= menuAppearDurationInFrames_2 ) {
		window.requestAnimationFrame( ()=> {  
			//top line
      if ( currentFrame_2 <= lineAppearDurationInFrames_2 ) {
        topLeftX_2 = AJS.easeOutBack( 130, 30, lineAppearDurationInFrames_2, currentFrame_2 );
        topRightX_2 = AJS.easeOutBack( 170, 70, lineAppearDurationInFrames_2, currentFrame_2 );
        topLine_2.setAttribute( "d", "M"+topLeftX_2+",37 L"+topRightX_2+",37 Z" );
        topLineOpacity_2 = AJS.linear( -2, 1, lineAppearDurationInFrames_2, currentFrame_2 );
        topLine_2.style.opacity = topLineOpacity_2;
      }
			//middle line
			if ( currentFrame_2 > lineAppearDelay_2 && currentFrame_2 <= lineAppearDurationInFrames_2 + lineAppearDelay_2 ) {
        middleLeftX_2 = AJS.easeOutBack( 130, 30, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2 );
        middleRightX_2 = AJS.easeOutBack( 170, 70, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2 );
        middleLine_2.setAttribute( "d", "M"+middleLeftX_2+",50 L"+middleRightX_2+",50 Z" );
        middleLineOpacity_2 = AJS.easeOutBack( -2, 1, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2 );
        middleLine_2.style.opacity = middleLineOpacity_2;
			}
			//bottom line
			if ( currentFrame_2 > lineAppearDelay_2*2 ) {
        bottomLeftX_2 = AJS.easeOutBack( 130, 30, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2*2 );
        bottomRightX_2 = AJS.easeOutBack( 170, 70, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2*2 );
        bottomLine_2.setAttribute( "d", "M"+bottomLeftX_2+",63 L"+bottomRightX_2+",63 Z" );
        bottomLineOpacity_2 = AJS.easeOutBack( -2, 1, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2*2 );
        bottomLine_2.style.opacity = bottomLineOpacity_2;
			}
			//recursion
			menuAppearAnimation_2();
		});
	} else {
		currentFrame_2 = 0;
		menuAppearComplete_2 = true;
	}
}

///Close Menu Animation
function closeMenuAnimation_2() {
	if ( !crossDisappearComplete_2 ) {
		crossDisappearAnimation_2();
	} else if ( !menuAppearComplete_2 ) {
		menuAppearAnimation_2();
	}
}

///Events
icon_2.addEventListener( "click", ()=> { 
  if ( state_2 === "menu" ) {
  	openMenuAnimation_2();
  	state_2 = "cross";
  	crossDisappearComplete_2 = false;
		menuAppearComplete_2 = false;
  } else if ( state_2 === "cross" ) {
  	closeMenuAnimation_2();
  	state_2 = "menu";
  	menuDisappearComplete_2 = false;
		crossAppearComplete_2 = false;
  }
});

// new 
var icon_3 = document.getElementById("b3");
var topLine_3 = document.getElementById("top-line-3");
var middleLine_3 = document.getElementById("middle-line-3");
var bottomLine_3 = document.getElementById("bottom-line-3");
var state_3 = "menu"; 
var topLineY_3;
var middleLineY_3;
var bottomLineY_3;
var topLeftX_3;
var topRightX_3;
var middleLeftX_3;
var middleRightX_3;
var bottomLeftX_3;
var bottomRightX_3;
var topLeftY_3;
var topRightY_3;
var middleLeftY_3;
var middleRightY_3;
var bottomLeftY_3;
var bottomRightY_3;
var segmentDuration_3 = 20;
var menuDisappearDurationInFrames_3 = segmentDuration_3;
var crossAppearDurationInFrames_3 = segmentDuration_3*1.5;
var crossDisappearDurationInFrames_3 = segmentDuration_3*1.5;
var menuAppearDurationInFrames_3 = segmentDuration_3;
var menuDisappearComplete_3 = false;
var crossAppearComplete_3 = false;
var crossDisappearComplete_3 = true;
var menuAppearComplete_3 = true;
var currentFrame_3 = 0;
var cPt_3 = { x: 50, y: 50 };  
var tlPt_3 = { x: 30, y: 37 };  
var trPt_3 = { x: 70, y: 37 };  
var mlPt_3 = { x: 30, y: 50 };  
var mrPt_3 = { x: 70, y: 50 };  
var blPt_3 = { x: 30, y: 63 };  
var brPt_3 = { x: 70, y: 63 };  
var topLineOpacity_3 = 1;
var middleLineOpacity_3 = 1;
var bottomLineOpacity_3 = 1;

function positionRotation( centerPoint, orbitPoint, angleInRads ) {
    var distance = Math.sqrt( Math.pow( orbitPoint.x-centerPoint.x, 2 ) + Math.pow( orbitPoint.y-centerPoint.y, 2 ) );
    orbitPoint.x = centerPoint.x + Math.cos( angleInRads ) * distance;
    orbitPoint.y = centerPoint.y + Math.sin( angleInRads ) * distance;
  }