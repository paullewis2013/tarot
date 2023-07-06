function animateCanvas() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
  
    function draw() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);     
        
        // draw the background
        // context.fillStyle = "black";
        // context.fillRect(0, 0, canvas.width, canvas.height);

        // draw the points
        drawPoints(context, randomPoints);
    
        // Call the draw function again in the next frame
        requestAnimationFrame(draw);
    }
    
    // Start the animation
    draw();
}
  
// Call the animateCanvas function to start the animation
document.addEventListener("DOMContentLoaded", animateCanvas);

function generateRandomPoints(canvas, numPoints) {
    const points = [];
    const { width, height } = canvas;
  
    for (let i = 0; i < numPoints; i++) {
        var x = Math.random() * width;
        var vx = Math.random() * 2 - 1;
        var y = Math.random() * height;
        var vy = Math.random() * 2 - 1;
        points.push({ x, y, vx, vy });
    }
  
    return points;
}
  
// Example usage:
const canvas = document.getElementById("canvas");
// Resize the canvas initially and whenever the window is resized
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const numPoints = 25;
const randomPoints = generateRandomPoints(canvas, numPoints);
console.log(randomPoints);

let numConnections = [];
for (let i = 0; i < numPoints; i++) {
    numConnections.push(Math.floor(Math.random() * 3) + 1);
}
  
function drawPoints(context, points) {

    
    points.forEach(({ x, y }) => {

        //halo
        context.fillStyle = "#FFDF00";
    
        //lower the opacity
        let opacity = 0.01;
        context.globalAlpha = opacity;

        context.beginPath();
        context.arc(x, y, 256, 0, 2 * Math.PI);
        context.fill();

        opacity = 0.03;
        context.globalAlpha = opacity;

        context.beginPath();
        context.arc(x, y, 96, 0, 2 * Math.PI);
        context.fill();

        opacity = 0.05;
        context.globalAlpha = opacity;

        context.beginPath();
        context.arc(x, y, 32, 0, 2 * Math.PI);
        context.fill();

        opacity = 0.2;
        context.globalAlpha = opacity;

        context.beginPath();
        context.arc(x, y, 12, 0, 2 * Math.PI);
        context.fill();
    
        //lower the opacity
        opacity = 0.5;
        context.globalAlpha = opacity;

        context.beginPath();
        context.arc(x, y, 6, 0, 2 * Math.PI);
        context.fill();

        // dot
        context.fillStyle = "#FFa000";
        opacity = 1;
        context.beginPath();
        context.arc(x, y, 2, 0, 2 * Math.PI);
        context.fill();
    });

    // draw the lines
    context.strokeStyle = "#FFDF00";
    context.lineWidth = 0.4;

    for (let i = 0; i < points.length; i++) {

        function distance(point1, point2) {
            const xDiff = point1.x - point2.x;
            const yDiff = point1.y - point2.y;
            return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        }

        context.beginPath();
        context.moveTo(points[i].x, points[i].y);

        //find any points that are close to the current point
        const closePoints = [];
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const dist = distance(points[i], points[j]);
                closePoints.push([dist, points[j]]);
            }
        }

        //sort the points by distance
        closePoints.sort((a, b) => a[0] - b[0]);

        for (let k = 0; k < numConnections[i]; k++) {
            context.lineTo(closePoints[k][1].x, closePoints[k][1].y);
            context.lineTo(points[i].x, points[i].y);
        }
        
        context.stroke();
    }
}

function animatePoints(points) {

    // console.log(points);

    // update the points with gravity
    for (let i = 0; i < points.length; i++) {
        points[i].y += points[i].vy;

        // change vy to go towards center
        if (points[i].y > window.innerHeight / 2) {
            points[i].vy -= 0.005;
        } else {
            points[i].vy += 0.005;
        }
        
        points[i].x += points[i].vx;

        // change vx to go towards center
        if (points[i].x > window.innerWidth / 2) {
            points[i].vx -= 0.005;
        } else {
            points[i].vx += 0.005;
        }
    }

    // console.log(points);
}

setInterval(animatePoints, 50, randomPoints);

function resizeCanvas() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}