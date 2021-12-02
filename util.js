function randomColor() {
    let red = Math.floor(Math.random() * 3) * 127;
    let green = Math.floor(Math.random() * 3) * 127;
    let blue = Math.floor(Math.random() * 3) * 127;

    let rc = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rc;
}

function randomX() {
    let x = Math.floor(Math.random() * canvas.width);
    if (x < 30) {
        x = 30;
    } else if (x + 30 > canvas.width) {
        x = canvas.width - 30;
    }
    return x;
}

function randomY() {
    let y = Math.floor(Math.random() * canvas.height);
    if (y < 30) {
        y = 30;
    } else if (y + 30 > canvas.height) {
        y = canvas.height - 30;
    }
    return y;
}

function randomRadius() {
        let r = Math.ceil(Math.random() * 10 + 20);
        return r;
}

function randomDx() {
    let r = Math.floor(Math.random() * 100);
    return r;
}

function randomDy() {
    let r = Math.floor(Math.random() * 100);
    return r;
}

function distanceNextFrame(a, b) {
    return Math.sqrt((a.x + a.dx - b.x - b.dx)**2 + (a.y + a.dy - b.y - b.dy)**2) - a.radius - b.radius;
}

function distance(a, b) {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}