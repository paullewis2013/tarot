function animateCanvas() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
  
    let x = 100;
    const speed = 2;
  
    function draw() {

        // Set the fill style to blue
        context.fillStyle = "blue";

        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);        

        // Draw a blue square at the current position
        context.fillRect(x, x, 50, 50);
    
        // Update the position
        x += speed;
    
        // Check if the square has reached the edge of the canvas
        if (x > canvas.width) {
            x = 0;
        }
    
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
        const x = Math.random() * width;
        const y = Math.random() * height;
        points.push({ x, y });
    }
  
    return points;
}
  
// Example usage:
const canvas = document.getElementById("canvas");
const numPoints = 10;
const randomPoints = generateRandomPoints(canvas, numPoints);
console.log(randomPoints);
  