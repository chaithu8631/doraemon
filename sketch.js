const r = require("raylib");
const g = require("./geometry");

const doraBlue = { r: 0, g: 141, b: 213, a: 255 };
const noseRed = { r: 219, g: 23, b: 0, a: 255 };
const bellGold = { r: 247, g: 202, b: 24, a: 255 };
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
    const facex = 400;
    const facey = 180;

    //Head Outer (Blue Circle)
    r.DrawCircle(facex, facey, 150, r.BLACK);
    r.DrawCircle(facex, facey, 148, doraBlue);

    //Face White Area (White Ellipse/Circle)
    r.DrawEllipse(facex, facey + 15, 128, 115, r.BLACK);
    r.DrawEllipse(facex, facey + 15, 126, 113, r.WHITE);

    // Left Eye
    // r.DrawEllipse()
    r.DrawEllipse(facex - 35, facey - 65, 35, 45, outline);
    r.DrawEllipse(facex - 35, facey - 65, 33, 43, r.WHITE);
    r.DrawEllipse(facex - 25, facey - 45, 15, 20, r.BLACK); // Pupil
    r.DrawEllipse(facex - 25, facey - 45, 5, 8, r.WHITE); // Pupil
    // x-15,y-40
    // Right Eye
    r.DrawEllipse(facex + 35, facey - 65, 35, 45, outline);
    r.DrawEllipse(facex + 35, facey - 65, 33, 43, r.WHITE);
    r.DrawEllipse(facex + 25, facey - 45, 15, 20, r.BLACK); // Pupil
    r.DrawEllipse(facex + 25, facey - 45, 5, 8, r.WHITE); // Pupil

    //Nose
    r.DrawCircle(facex, facey - 25, 20, outline);
    r.DrawCircle(facex, facey - 25, 18, noseRed);
    r.DrawCircle(393, 148, 5, r.WHITE);

    //Line from nose to mouth
    r.DrawLineEx({ x: facex, y: facey-5 }, { x: facex, y: facey+95 }, 3, outline);

    //mouth
    r.DrawRing({ x: facex, y: facey-5 }, 99, 101, -75, 75, 40, outline);

    //meesalu(moustache)

    //LeftSide
    r.DrawLineEx(
        { x: facex - 60, y: facey + 15 },
        { x: facex - 130, y: facey - 5 },
        3,
        outline,
    );
    r.DrawLineEx(
        { x: facex - 60, y: facey + 35 },
        { x: facex - 140, y: facey + 35 },
        3,
        outline,
    );
    r.DrawLineEx(
        { x: facex - 60, y: facey + 55 },
        { x: facex - 130, y: facey + 75 },
        3,
        outline,
    );

    //RightSide
    r.DrawLineEx(
        { x: facex + 60, y: facey + 15 },
        { x: facex + 130, y: facey - 5 },
        3,
        outline,
    );
    r.DrawLineEx(
        { x: facex + 60, y: facey + 35 },
        { x: facex + 140, y: facey + 35 },
        3,
        outline,
    );
    r.DrawLineEx(
        { x: facex + 60, y: facey + 55 },
        { x: facex + 130, y: facey + 75 },
        3,
        outline,
    );

    //Red tie
    r.DrawRectangleRec(
        { x: facex - 110, y: facey + 115, width: 220, height: 16 },
        outline,
    );
    r.DrawRectangleRec(
        { x: facex - 110 + 2, y: facey + 115 + 2, width: 216, height: 12 },
        r.RED,
    );

    //GOLD Bell
    r.DrawCircle(facex, facey + 138, 22, outline);
    r.DrawCircle(facex, facey + 138, 20, bellGold);

    //Bell lines
    r.DrawLineEx(
        { x: facex - 20, y: facey + 132 },
        { x: facex + 20, y: facey + 132 },
        3,
        outline,
    );
    r.DrawCircle(facex, facey + 144, 6, outline);
    r.DrawLineEx(
        { x: facex, y: facey + 150 },
        { x: facex, y: facey + 160 },
        3,
        outline,
    );

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
