const r = require("raylib");
const g = require("./geometry");

const doraBlue = { r: 0, g: 141, b: 213, a: 255 };
const noseRed = { r: 219, g: 23, b: 0, a: 255 };
const outline = r.BLACK;
const window = {
    screenWidth: 800,
    screenHeight: 500,
    title: "Doraemon",
    FPS: 60,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.screenWidth, window.screenHeight, window.title);
    r.SetTargetFPS(window.FPS);
}

function running() {
    return !r.WindowShouldClose();
}

function update() {}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    // Center coordinates for Doraemon's face
    let cx = 400;
    let cy = 180;

    //Head Outer (Blue Circle)
    r.DrawCircle(400, 180, 150, r.BLACK);
    r.DrawCircle(400, 180, 148, r.BLUE);

    //Face White Area (White Ellipse/Circle)
    r.DrawEllipse(400, 195, 128, 115, r.BLACK);
    r.DrawEllipse(400, 195, 126, 113, r.WHITE);

    // Left Eye
    // r.DrawEllipse()
    r.DrawEllipse(365, 115, 35, 45, outline);
    r.DrawEllipse(365, 115, 33, 43, r.WHITE);
    r.DrawEllipse(365, 115, 15, 20, r.BLACK); // Pupil
    r.DrawEllipse(365, 115, 5, 8, r.WHITE); // Pupil
    // x-15,y-40
    // Right Eye
    r.DrawEllipse(435, 115, 35, 45, outline);
    r.DrawEllipse(435, 115, 33, 43, r.WHITE);
    r.DrawEllipse(435, 115, 15, 20, r.BLACK); // Pupil
    r.DrawEllipse(435, 115, 5, 8, r.WHITE); // Pupil

    //Nose
    r.DrawCircle(400, 155, 20, outline);
    r.DrawCircle(400, 155, 18, noseRed);
    r.DrawCircle(393, 148, 5, r.WHITE);

    //Line from nose to mouth
    r.DrawLineEx({ x: 400, y: 175 }, { x: 400, y: 275 }, 3, outline);

    //mouth
    r.DrawCircleSector({ x: 400, y: 175 }, 100, -80, 80, 40, outline);
    r.DrawCircleSector({ x: 400, y: 175 }, 97, -80, 80, 40, r.WHITE);

    //Draw Nose Line again from nose to mouth
    r.DrawLineEx({ x: 400, y: 175 }, { x: 400, y: 275 }, 3, outline);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
