const Colorpicker = document.getElementById('Colorpicker');
const Backgroundpicker = document.getElementById('Backgroundpicker');
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const fontSize = document.getElementById('fontSize');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

Colorpicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

Backgroundpicker.addEventListener('change', (e) => {
    canvas.style.backgroundColor = e.target.value;
});

fontSize.addEventListener('change', (e) => {
    ctx.font = e.target.value + 'px Arial';
});

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

//Background color
canvasColor =document.addEventListener('change',(e)=>{
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, 800,500);
})

//Font Picker

fontPicker = addEventListener('change',e=>{
    ctx.lineWidth = e.target.value;
})
// Clear canvas function
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save canvas function (not implemented here)
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    localStorage.setItem('savedCanvas', canvas.toDataURL());

    let link = document.createElement('a');
    link.download = 'signature.png';
    link.href = canvas.toDataURL();
    link.click();
    // Add code to save canvas content here
});