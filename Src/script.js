// 1920 * 940
// 1366 * 668 (x1.4055)
const MIN_WIDTH = 1366;
const MIN_HEIGHT = 668;

var resLoaded = false;
var images = {
  W01: "../Src/Imgs/W-01.png",
  W02: "../Src/Imgs/W-02.png",
  W03: "../Src/Imgs/W-03.png",
  W04: "../Src/Imgs/W-04.png",
  W05: "../Src/Imgs/W-05.png",
  W07: "../Src/Imgs/W-07.png",
  mapBg: "../Src/Imgs/mapBg.png",
  home: "../Src/Imgs/home.png",
  A001: "../Src/Imgs/stores/A-001.png",
  A002: "../Src/Imgs/stores/A-002.png",
  A003: "../Src/Imgs/stores/A-003.png",
  A004: "../Src/Imgs/stores/A-004.png",
  A005: "../Src/Imgs/stores/A-005.png",
  A006: "../Src/Imgs/stores/A-006.png",
  A007: "../Src/Imgs/stores/A-007.png",
  A008: "../Src/Imgs/stores/A-008.png",
  A009: "../Src/Imgs/stores/A-009.png",
  A010: "../Src/Imgs/stores/A-010.png",
  A011: "../Src/Imgs/stores/A-011.png",
  A012: "../Src/Imgs/stores/A-012.png",
  A013: "../Src/Imgs/stores/A-013.png",
  A014: "../Src/Imgs/stores/A-014.png",
  A015: "../Src/Imgs/stores/A-015.png",
  A016: "../Src/Imgs/stores/A-016.png",
  A017: "../Src/Imgs/stores/A-017.png",
  A018: "../Src/Imgs/stores/A-018.png",
  A019: "../Src/Imgs/stores/A-019.png",
  A020: "../Src/Imgs/stores/A-020.png",
  A021: "../Src/Imgs/stores/A-021.png",
  A022: "../Src/Imgs/stores/A-022.png",
  A023: "../Src/Imgs/stores/A-023.png",
  A024: "../Src/Imgs/stores/A-024.png",
  A025: "../Src/Imgs/stores/A-025.png",
  A026: "../Src/Imgs/stores/A-026.png",
  A027: "../Src/Imgs/stores/A-027.png",
  A028: "../Src/Imgs/stores/A-028.png",
  A029: "../Src/Imgs/stores/A-029.png",
  A030: "../Src/Imgs/stores/A-030.png",
  A031: "../Src/Imgs/stores/A-031.png",
  A032: "../Src/Imgs/stores/A-032.png",
  A033: "../Src/Imgs/stores/A-033.png",
  A034: "../Src/Imgs/stores/A-034.png",
  A035: "../Src/Imgs/stores/A-035.png",
  A036: "../Src/Imgs/stores/A-036.png",
  A037: "../Src/Imgs/stores/A-037.png",
  A038: "../Src/Imgs/stores/A-038.png",
  A039: "../Src/Imgs/stores/A-039.png",
  A040: "../Src/Imgs/stores/A-040.png",
  A041: "../Src/Imgs/stores/A-041.png",
  A042: "../Src/Imgs/stores/A-042.png",
  A043: "../Src/Imgs/stores/A-043.png",
  A044: "../Src/Imgs/stores/A-044.png",
  A045: "../Src/Imgs/stores/A-045.png",
  A046: "../Src/Imgs/stores/A-046.png",
  A047: "../Src/Imgs/stores/A-047.png",
  A048: "../Src/Imgs/stores/A-048.png",
  A049: "../Src/Imgs/stores/A-049.png",
  A050: "../Src/Imgs/stores/A-050.png",
  A051: "../Src/Imgs/stores/A-051.png",
  A052: "../Src/Imgs/stores/A-052.png",
  A053: "../Src/Imgs/stores/A-053.png",
  A054: "../Src/Imgs/stores/A-054.png",
  A055: "../Src/Imgs/stores/A-055.png",
  A056: "../Src/Imgs/stores/A-056.png",
  A057: "../Src/Imgs/stores/A-057.png",
  A058: "../Src/Imgs/stores/A-058.png",
  A059: "../Src/Imgs/stores/A-059.png",
  A060: "../Src/Imgs/stores/A-060.png",
  A061: "../Src/Imgs/stores/A-061.png",
  A062: "../Src/Imgs/stores/A-062.png",
  A063: "../Src/Imgs/stores/A-063.png",
  A064: "../Src/Imgs/stores/A-064.png",
  A065: "../Src/Imgs/stores/A-065.png",
  A066: "../Src/Imgs/stores/A-066.png",
  A067: "../Src/Imgs/stores/A-067.png",
  A068: "../Src/Imgs/stores/A-068.png",
  A069: "../Src/Imgs/stores/A-069.png",
  A070: "../Src/Imgs/stores/A-070.png",
  // A071: "../Src/Imgs/store/A-71.png",
  // A072: "../Src/Imgs/store/A-72.png",
  // A073: "../Src/Imgs/store/A-73.png",
  // A074: "../Src/Imgs/store/A-74.png",
  // A075: "../Src/Imgs/store/A-75.png",
  // A076: "../Src/Imgs/store/A-76.png",
  // A077: "../Src/Imgs/store/A-77.png",
  // A078: "../Src/Imgs/store/A-78.png",
  // A079: "../Src/Imgs/store/A-79.png",
  // A080: "../Src/Imgs/store/A-80.png",
  // A081: "../Src/Imgs/store/A-81.png",
  // A082: "../Src/Imgs/store/A-82.png",
  // A083: "../Src/Imgs/store/A-83.png",
  // A084: "../Src/Imgs/store/A-84.png",
  // A085: "../Src/Imgs/store/A-85.png",
  // A086: "../Src/Imgs/store/A-86.png",
  // A087: "../Src/Imgs/store/A-87.png",
  // A088: "../Src/Imgs/store/A-88.png",
  // A089: "../Src/Imgs/store/A-89.png",
  // A090: "../Src/Imgs/store/A-90.png",
  // A091: "../Src/Imgs/store/A-91.png",
  // A092: "../Src/Imgs/store/A-92.png",
  // A093: "../Src/Imgs/store/A-93.png",
  // A094: "../Src/Imgs/store/A-94.png",
  // A095: "../Src/Imgs/store/A-95.png",
  // A096: "../Src/Imgs/store/A-96.png",
  // A097: "../Src/Imgs/store/A-97.png",
  // A098: "../Src/Imgs/store/A-98.png",
  // A099: "../Src/Imgs/store/A-99.png",
};

var mainCanvas = document.getElementById("mainCanvas");
var mainCtx = mainCanvas.getContext("2d");
var dialogCanvas = document.getElementById("dialogCanvas");
var dialogCtx = dialogCanvas.getContext("2d");
var gameCanvas = document.getElementById("gameCanvas");
var gameCtx = gameCanvas.getContext("2d");

// var gameZoneWidth = 0;
// var gameZoneHeight = 0;
var gameZoneX = -180;
var gameZoneY = -150;

/*
  home: home/intro
  health: main
  exercise: 1/2/3...
  tasty: intro/main

  dialog types: intro
*/
var state = {
  firstUse: {
    health: true,
    tasty: true,
  },
  theme: "home",
  page: "home",
  gameObjects: {
    stars: 0,
    maps: [
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: -1, state: 0 },
        { store: -2, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
    ],
    // maps: [
    //   [1, 2, 3, 4, 5, 6, 7],
    //   [8, 9, 10, 11, 12, 13, 14],
    //   [15, 16, 17, 18, 19, 20, 21],
    //   [22, 23, 24, -1, -2, 25, 26],
    //   [27, 28, 29, 30, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    // ],
  },
};

var buttons = [
  {
    belong: {
      theme: "home",
      page: "home",
    },
    text: "開　始",
    size: {
      width: 200,
      heigth: 70,
    },
    position: {
      x: mainCanvas.width / 2 - 100,
      y: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - this.size.width / 2;
      this.position.y = mainCanvas.height - 120;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "normal",
    color: "#73A5BE",
    action: startBtnAction,
  },
  {
    belong: {
      theme: "home",
      page: "intro",
    },
    text: "確　定",
    size: {
      width: 200,
      heigth: 70,
    },
    position: {
      x: mainCanvas.width / 2 - 100,
      y: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - this.size.width / 2;
      this.position.y = mainCanvas.height - 120;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "normal",
    color: "#73A5BE",
    action: intorBtnAction,
  },
  {
    belong: {
      theme: "tasty",
      page: "intro",
    },
    text: "確　定",
    size: {
      width: 200,
      heigth: 70,
    },
    position: {
      x: mainCanvas.width / 2 - 100,
      y: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - this.size.width / 2;
      this.position.y = mainCanvas.height - 120;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "normal",
    color: "#88A073",
    action: tastyIntorBtnAction,
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Health",
    size: {
      width: 200,
      heigth: 60,
    },
    position: {
      x: mainCanvas.width / 2 - 200,
      y: 20,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - 200;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_l",
    color: "#73A5BE",
    //action: intorBtnAction,
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Tasty",
    size: {
      width: 200,
      heigth: 60,
    },
    position: {
      x: mainCanvas.width / 2,
      y: 20,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_r",
    color: "#555555",
    action: function () {
      if (state.firstUse.tasty) {
        changeThemePage("tasty", "intro");
      } else {
        changeThemePage("tasty", "main");
      }
    },
  },
  {
    belong: {
      theme: "tasty",
      page: "main",
    },
    text: "Health",
    size: {
      width: 200,
      heigth: 60,
    },
    position: {
      x: mainCanvas.width / 2 - 200,
      y: 20,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - 200;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_l",
    color: "#555555",
    action: function () {
      changeThemePage("health", "main");
    },
  },
  {
    belong: {
      theme: "tasty",
      page: "main",
    },
    text: "Tasty",
    size: {
      width: 200,
      heigth: 60,
    },
    position: {
      x: mainCanvas.width / 2,
      y: 20,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_r",
    color: "#88A073",
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Carpal Tunnel",
    subText: "腕隧道",
    size: {
      width: 350,
      heigth: 350,
    },
    position: {
      x: mainCanvas.width / 2 - 535,
      y: mainCanvas.height / 2 - 150,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - 535;
      this.position.y = mainCanvas.height / 2 - 150;
    },
    font: {
      size: 40,
      color: "#555555",
      family: "NotoSansTC-Light",
    },
    sharp: "imageBtn",
    color: "#F5F5F5",
    action: function () {
      changeThemePage("exercise", "1");
    },
    img: {
      src: "W02",
      size: {
        width: 325,
        height: 262,
      },
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Neck & Shoulder",
    subText: "肩頸",
    size: {
      width: 350,
      heigth: 350,
    },
    position: {
      x: mainCanvas.width / 2 - 175,
      y: mainCanvas.height / 2 - 150,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - 175;
      this.position.y = mainCanvas.height / 2 - 150;
    },
    font: {
      size: 40,
      color: "#555555",
      family: "NotoSansTC-Light",
    },
    sharp: "imageBtn",
    color: "#F5F5F5",
    //action: intorBtnAction,
    img: {
      src: "W03",
      size: {
        width: 325,
        height: 262,
      },
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Elbow",
    subText: "手肘",
    size: {
      width: 350,
      heigth: 350,
    },
    position: {
      x: mainCanvas.width / 2 + 185,
      y: mainCanvas.height / 2 - 150,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 + 185;
      this.position.y = mainCanvas.height / 2 - 150;
    },
    font: {
      size: 40,
      color: "#555555",
      family: "NotoSansTC-Light",
    },
    sharp: "imageBtn",
    color: "#F5F5F5",
    //action: intorBtnAction,
    img: {
      src: "W04",
      size: {
        width: 325,
        height: 262,
      },
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    sharp: "iconBtn",
    text: "內　容",
    icon: {
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
      drawIcon: function (x, y, w, h) {
        mainCtx.fillStyle = "white";
        roundRect(mainCtx, x, y, w, h, 5);

        mainCtx.strokeStyle = "#9BCAE5";
        mainCtx.beginPath();
        mainCtx.moveTo(x + 5, y + h / 2);
        mainCtx.lineTo(x + w - 5, y + h / 2);
        mainCtx.stroke();
        mainCtx.beginPath();
        mainCtx.moveTo(x + w / 2, y + 5);
        mainCtx.lineTo(x + w / 2, y + h - 5);
        mainCtx.stroke();
      },
    },
    showText: true,
    size: {
      width: 130,
      heigth: 30,
    },
    position: {
      x: mainCanvas.width / 2 - 535,
      y: 130,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 - 535;
      this.position.y = 130;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },

    action: function () {
      updateDialog = showContentDialog;
      updateDialog();
      showDialog();
      //console.log("click!");
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    sharp: "iconBtn",
    text: "介　紹",
    icon: {
      direction: "right",
      size: {
        w: 30,
        h: 30,
      },
      drawIcon: function (x, y, w, h) {
        mainCtx.strokeStyle = "white";
        mainCtx.lineWidth = 5;
        mainCtx.beginPath();
        mainCtx.moveTo(x, y + 2);
        mainCtx.lineTo(x + w, y + 2);
        mainCtx.stroke();
        mainCtx.beginPath();
        mainCtx.moveTo(x, y + h / 2);
        mainCtx.lineTo(x + w, y + h / 2);
        mainCtx.stroke();
        mainCtx.beginPath();
        mainCtx.moveTo(x, y + h - 2);
        mainCtx.lineTo(x + w, y + h - 2);
        mainCtx.stroke();
      },
    },
    showText: true,
    size: {
      width: 130,
      heigth: 30,
    },
    position: {
      x: mainCanvas.width / 2 + 535 - 130,
      y: 130,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width / 2 + 535 - this.size.width;
      this.position.y = 130;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },

    action: function () {
      changeThemePage("home", "intro");
      //updateDialog = showContentDialog;
      //updateDialog();
      //showDialog();
      //console.log("click!");
    },
  },

  //
];

var updateDialog = null;
var dialogButtons = null;

var loaded = 0;
function loadResources() {
  for (let key in images) {
    let _src = images[key];
    images[key] = new Image();
    images[key].src = _src;
    images[key].addEventListener(
      "load",
      function () {
        loaded++;
        if (loaded == Object.keys(images).length) {
          resLoaded = true;
          console.log("OK");
        }
      },
      false
    );
  }
}

function initialize() {
  loadResources();
  window.addEventListener("resize", redraw, false);
  redraw();
}

initialize();

function updateComponentPosition() {
  buttons.forEach((btn) => {
    btn.setPosition();
  });
}

function updateTheme() {
  //console.log("setTheme" + JSON.stringify(state));
  setBackGround();
  gameCanvas.style.zIndex = -1;
  switch (state.theme) {
    case "home":
    default:
      switch (state.page) {
        case "home":
        default:
          drawHome();
          break;
        case "intro":
          drawIntro();
          //alert('int');
          break;
        // case "content":
        //   drawContent();
        //   break;
      }

      break;
    case "health":
      switch (state.page) {
        case "main":
        default:
          //alert('??');
          drawMain();
          break;
      }
      break;
    case "tasty":
      switch (state.page) {
        case "intro":
        default:
          drawTastyIntro();
          break;
        case "main":
          gameCanvas.style.zIndex = 2;
          drawTastyMain();
          break;
      }
      break;
    case "exercise":
      drawExercise();
      switch (state.page) {
        case "1":
        default:
          drawExerciseText(10, "1~3", [
            "放鬆動作：",
            "手肘彎曲撐著，手腕維持正中位置，手指放鬆。",
          ]);
          break;
      }
      break;
  }
  drawButtons();
}

function redraw() {
  let newWidth = window.innerWidth < MIN_WIDTH ? MIN_WIDTH : window.innerWidth;
  let newHeight =
    window.innerHeight < MIN_HEIGHT ? MIN_HEIGHT : window.innerHeight;

  if (mainCanvas.width != newWidth || mainCanvas.height != newHeight) {
    mainCanvas.width = newWidth;
    mainCanvas.height = newHeight;
    dialogCanvas.width = newWidth;
    dialogCanvas.height = newHeight;
    gameCanvas.width = 1080;
    gameCanvas.height = newHeight - 140;
    updateComponentPosition();
    updateTheme();
    if (updateDialog) updateDialog();
  }
}

function setBackGround() {
  if (state.theme == "tasty") {
    mainCtx.fillStyle = "#B2CA9D";
    mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  } else {
    mainCtx.fillStyle = "#9BCAE5";
    mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  }
}

function roundRect(ctx, x, y, width, height, radius, boardOnly) {
  if (typeof radius === "undefined") {
    radius = 5;
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    //var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    //for (var side in defaultRadius) {
    //  radius[side] = radius[side] || defaultRadius[side];
    //}
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (boardOnly) {
    ctx.stroke();
  } else {
    ctx.fill();
  }
}

function drawButtons() {
  buttons.forEach((btn) => {
    //console.log(btn);
    if (btn.belong.theme == state.theme && btn.belong.page == state.page) {
      switch (btn.sharp) {
        case "normal":
        default:
          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            10
          );
          mainCtx.font = btn.font.size + "px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "top";
          mainCtx.textAlign = "left";
          mainCtx.fillText(
            btn.text,
            btn.position.x +
              btn.size.width / 2 -
              (btn.font.size * btn.text.length) / 2,
            btn.position.y + btn.size.heigth / 2 - btn.font.size / 2 + 3
          );
          //console.log(btn.font.size * btn.text.length);

          //console.log(btn.text.length);
          //console.log('hi');
          break;

        case "themeSelector_l":
          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            { tl: 10, tr: 0, br: 0, bl: 10 }
          );
          mainCtx.font = btn.font.size + "px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "middle";
          mainCtx.textAlign = "center";
          mainCtx.fillText(
            btn.text,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth / 2
          );
          break;
        case "themeSelector_r":
          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            { tl: 0, tr: 10, br: 10, bl: 0 }
          );
          mainCtx.font = btn.font.size + "px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "middle";
          mainCtx.textAlign = "center";
          mainCtx.fillText(
            btn.text,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth / 2
          );
          break;
        case "imageBtn":
          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            10
          );
          mainCtx.drawImage(
            images[btn.img.src],
            btn.position.x + 20,
            btn.position.y,
            btn.img.size.width,
            btn.img.size.height
          );
          mainCtx.font = "38px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "middle";
          mainCtx.textAlign = "center";
          mainCtx.fillText(
            btn.text,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth - 80
          );

          mainCtx.font = "32px " + btn.font.family;
          mainCtx.fillText(
            btn.subText,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth - 30
          );
          break;

        case "iconBtn":
          if (btn.icon.direction == "left") {
            btn.icon.drawIcon(
              btn.position.x,
              btn.position.y,
              btn.icon.size.w,
              btn.icon.size.h
            );
            mainCtx.font = btn.font.size + "px " + btn.font.family;
            mainCtx.fillStyle = btn.font.color;
            mainCtx.textBaseline = "middle";
            mainCtx.textAlign = "left";
            mainCtx.fillText(
              btn.text,
              btn.position.x + btn.icon.size.w + 10,
              btn.position.y + 18
            );
          } else {
            btn.icon.drawIcon(
              btn.position.x + btn.size.width - btn.icon.size.w,
              btn.position.y,
              btn.icon.size.w,
              btn.icon.size.h
            );

            mainCtx.font = btn.font.size + "px " + btn.font.family;
            mainCtx.fillStyle = btn.font.color;
            mainCtx.textBaseline = "middle";
            mainCtx.textAlign = "left";
            mainCtx.fillText(
              btn.text,
              btn.position.x - 10,
              btn.position.y + 18
            );
          }

          break;
      }
    }
  });
}

function showDialog() {
  dialogCanvas.style.zIndex = 3;
}

function closeDialog() {
  dialogButtons = null;
  updateDialog = null;
  dialogCanvas.style.zIndex = -1;
}

function changeThemePage(toTheme, toPage) {
  state.theme = toTheme;
  state.page = toPage;
  updateTheme();
}

mainCanvas.addEventListener("click", function (e) {
  let _theme = state.theme;
  let _page = state.page;
  buttons.forEach((btn) => {
    if (_theme == btn.belong.theme && _page == btn.belong.page) {
      //console.log("btn position" + JSON.stringify(btn.position));
      //console.log("btn size" + JSON.stringify(btn.size));
      if (
        e.layerX <= btn.position.x + btn.size.width &&
        e.layerX >= btn.position.x &&
        e.layerY >= btn.position.y &&
        e.layerY <= btn.position.y + btn.size.heigth
      ) {
        // alert(btn.text);
        //console.log(btn.action);
        if (btn.action) btn.action();
      }
    }
  });
});

dialogCanvas.addEventListener("click", function (e) {
  if (dialogButtons) {
    if (
      e.layerX <= dialogButtons.range.x + dialogButtons.range.w &&
      e.layerX >= dialogButtons.range.x &&
      e.layerY <= dialogButtons.range.y + dialogButtons.range.h &&
      e.layerY >= dialogButtons.range.y
    )
      if (dialogButtons.action) dialogButtons.action();
  }
  // let zIndex = dialogCanvas.style.zIndex;
  // dialogButtons.forEach((btn) => {
  //   if (zIndex) {
  //     console.log(JSON.stringify(btn));
  //   } else {
  //     console.log("no");
  //   }
  //   //   if(btn.action) btn.action();
  // });
});

//ctx.fillStyle = 'rgb(200, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);
// ctx.fillStyle = 'red';
//const { width, height } = canvas.getBoundingClientRect();
//console.log(canvas.width);
//console.log(canvas.height);

// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// Buttons Action Define
function startBtnAction() {
  if (!resLoaded) {
    console.log("Loading...");
    return;
  }

  if (state.firstUse.health) {
    changeThemePage("home", "intro");
    //state.page = 'hehe';
  } else {
    changeThemePage("health", "main");
    //alert("not first");
  }
}

function showContentDialog() {
  dialogCtx.fillStyle = "rgba(0, 0, 0, 0.7)";
  dialogCtx.fillRect(0, 0, dialogCanvas.width, dialogCanvas.height);

  let btnPosX = dialogCanvas.width / 2 - 100;
  let btnPosY = dialogCanvas.height - 80;
  dialogCtx.fillStyle = "#73A5BE";
  roundRect(dialogCtx, btnPosX, btnPosY, 200, 70, 10);

  dialogCtx.font = "40px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  dialogCtx.fillText("內容", dialogCanvas.width / 2, 40);

  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.textBaseline = "top";
  dialogCtx.textAlign = "left";
  dialogCtx.fillText("確　定", btnPosX + 46, btnPosY + 20);

  dialogCtx.fillStyle = "F5F5F5";
  let boxPosY = 65;
  let box1PosX = dialogCanvas.width / 2 - 535;
  let box2PosX = dialogCanvas.width / 2 - 175;
  let box3PosX = dialogCanvas.width / 2 + 185;

  roundRect(dialogCtx, box1PosX, boxPosY, 350, 510, 10);
  roundRect(dialogCtx, box2PosX, boxPosY, 350, 510, 10);
  roundRect(dialogCtx, box3PosX, boxPosY, 350, 510, 10);

  dialogCtx.drawImage(images["W02"], box1PosX + 30, boxPosY + 40);
  dialogCtx.drawImage(images["W03"], box2PosX + 30, boxPosY + 40);
  dialogCtx.drawImage(images["W04"], box3PosX + 30, boxPosY + 40);

  dialogCtx.fillStyle = "#555555";
  dialogCtx.font = "40px NotoSansTC-Light";
  dialogCtx.textAlign = "center";
  dialogCtx.fillText("腕隧道症候群", box1PosX + 175, boxPosY + 20);
  dialogCtx.fillText("肩頸痠痛", box2PosX + 175, boxPosY + 20);
  dialogCtx.fillText("網球肘", box3PosX + 175, boxPosY + 20);

  dialogCtx.font = "20px NotoSansTC-Light";
  dialogCtx.textAlign = "left";
  let textYbase = 290;
  let textHeight = 20;

  dialogCtx.fillText(
    "腕隧道症候群是一種常見的疾病，會",
    box1PosX + 14,
    boxPosY + textYbase
  );
  dialogCtx.fillText(
    "導致手和手臂疼痛、麻木和刺痛。",
    box1PosX + 14,
    boxPosY + textYbase + textHeight
  );
  dialogCtx.fillText(
    "當手的主要神經之一-正中神經-受到",
    box1PosX + 14,
    boxPosY + textYbase + textHeight * 3
  );
  dialogCtx.fillText(
    "擠壓或壓縮時，就會出現這種情況。",
    box1PosX + 14,
    boxPosY + textYbase + textHeight * 4
  );
  dialogCtx.fillText(
    "症狀通常可以通過簡單的措施得到",
    box1PosX + 14,
    boxPosY + textYbase + textHeight * 6
  );
  dialogCtx.fillText(
    "緩解和預防。",
    box1PosX + 14,
    boxPosY + textYbase + textHeight * 7
  );

  dialogCtx.fillText(
    "肌筋膜頸部疼痛是頸肩部慢性疼痛",
    box2PosX + 14,
    boxPosY + textYbase
  );
  dialogCtx.fillText(
    "的常見原因。",
    box2PosX + 14,
    boxPosY + textYbase + textHeight
  );
  dialogCtx.fillText(
    "頸部肌肉的過度使用或創傷，以及",
    box2PosX + 14,
    boxPosY + textYbase + textHeight * 3
  );
  dialogCtx.fillText(
    "壓力和姿勢，都可能導致頸部/肩部",
    box2PosX + 14,
    boxPosY + textYbase + textHeight * 4
  );
  dialogCtx.fillText(
    "的肌筋膜疼痛。",
    box2PosX + 14,
    boxPosY + textYbase + textHeight * 5
  );
  dialogCtx.fillText(
    "對於整天在辦公桌前工作並且在使",
    box2PosX + 14,
    boxPosY + textYbase + textHeight * 7
  );
  dialogCtx.fillText(
    "用計算機時操作不當的患者。肌肉",
    box2PosX + 14,
    boxPosY + textYbase + textHeight * 8
  );
  dialogCtx.fillText(
    "可能因過度使用或受傷而變得緊繃",
    box2PosX + 14,
    boxPosY + textYbase + textHeight * 9
  );
  dialogCtx.fillText(
    "或發炎。",
    box2PosX + 14,
    boxPosY + textYbase + textHeight * 10
  );

  dialogCtx.fillText(
    "網球肘是一種導致肘部外側疼痛的",
    box3PosX + 14,
    boxPosY + textYbase
  );
  dialogCtx.fillText("疾病。", box3PosX + 14, boxPosY + textYbase + textHeight);
  dialogCtx.fillText(
    "它經常發生在肘關節附近的前臂肌",
    box3PosX + 14,
    boxPosY + textYbase + textHeight * 3
  );
  dialogCtx.fillText(
    "肉過度使用或重複動作之後。",
    box3PosX + 14,
    boxPosY + textYbase + textHeight * 4
  );
  dialogCtx.fillText(
    "可能會注意到肘部外側疼痛，您可",
    box3PosX + 14,
    boxPosY + textYbase + textHeight * 6
  );
  dialogCtx.fillText(
    "能還會發現難以完全伸展手臂。",
    box3PosX + 14,
    boxPosY + textYbase + textHeight * 7
  );
  dialogCtx.fillText(
    "網球肘不治療會好起來的。",
    box3PosX + 14,
    boxPosY + textYbase + textHeight * 9
  );

  dialogButtons = {
    range: {
      x: btnPosX,
      y: btnPosY,
      w: 200,
      h: 70,
    },
    action: function () {
      closeDialog();
      state.firstUse.health = false;
    },
  };

  // dialogButtons.push({
  //   test: "hshs",
  // });
}

function intorBtnAction() {
  changeThemePage("health", "main");
  updateDialog = showContentDialog;
  updateDialog();
  showDialog();
}

function tastyIntorBtnAction() {
  changeThemePage("tasty", "main");
  // updateDialog = showContentDialog;
  // updateDialog();
  // showDialog();
}

// Theme Define
function drawHome() {
  let middleX = mainCanvas.width / 2;
  let middleY = mainCanvas.height / 2;

  //console.log('home');
  mainCtx.font = "78px NotoSansTC-Light";
  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";
  mainCtx.fillText("Work ? out !", middleX, middleY);

  images["W07"].addEventListener("load", () => {
    //console.log('load');
    mainCtx.drawImage(images["W07"], middleX - 250, middleY - 40);
  });
  //console.log('go');
  mainCtx.drawImage(images["W07"], middleX - 250, middleY - 40);

  //mainCtx.textAlign = "left";
  //  mainCtx.font = "48px NotoSansTC-Light";
  //  mainCtx.fillText(
  //    "中文字體範例 - NotoSansTC-Light",
  //    middleX,
  //    middleY + 100
  //  );

  // mainCtx.font = "38px 微軟正黑體";
  // mainCtx.fillText(
  //   "中文字體範例 - 微軟正黑體",
  //   middleX,
  //   middleY + 100
  // );

  // mainCtx.font = "38px NotoSansTC";
  // mainCtx.fillText(
  //   "中文字體範例 - NotoSansTC",
  //   middleX,
  //   middleY + 140
  // );

  // mainCtx.font = "38px NotoSansTC-Light";
  // mainCtx.fillText(
  //   "中文字體範例 - NotoSansTC-Light",
  //   middleX,
  //   middleY + 180
  // );
  // mainCtx.font = "38px NotoSansTC-Thin";
  // mainCtx.fillText(
  //   "中文字體範例 - NotoSansTC-Thin",
  //   middleX,
  //   middleY + 220
  // );
  //mainCtx.fillText("中文字體範例", middleX, middleY);

  mainCtx.font = "28px NotoSansTC-Light";
  mainCtx.fillText("Muscle Soothe for Office Worker", middleX, middleY + 50);
  //mainCtx.clearRect(10, 10, 20, 20);
}

function drawIntro() {
  mainCtx.drawImage(images["W01"], mainCanvas.width / 2 + 50, 100);

  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";
  //let middleY = mainCanvas.height / 2;

  mainCtx.font = "40px NotoSansTC-Light";
  mainCtx.fillText("介 紹", mainCanvas.width / 2, 50);

  mainCtx.font = "46px NotoSansTC-Light";
  mainCtx.textAlign = "left";
  mainCtx.fillText('關於 "Work ? out !"', 50, 240);

  let baseY = 300;
  let linStep = 40;
  //mainCtx.font = "26px 微軟正黑體";
  mainCtx.font = "26px NotoSansTC-Light";
  mainCtx.fillText(
    "現今上班族與學生族群，都經常坐著辦公或讀書，不斷的",
    50,
    baseY
  );
  mainCtx.fillText(
    "長時間重複某一特定動作，長時間坐著的上班族「電腦症",
    50,
    baseY + linStep
  );
  mainCtx.fillText(
    "候群」因姿勢、長時間打電腦或接電話，衍伸出毛病如：",
    50,
    baseY + linStep * 2
  );
  mainCtx.fillText("手腕、肩頸及手肘痠痛。", 50, baseY + linStep * 3);
  mainCtx.fillText(
    '"Work? Out!"則是以簡單的肌肉舒緩運動幫助使用者預防',
    50,
    baseY + linStep * 4
  );
  mainCtx.fillText(
    "及改善，並透過遊戲化的樂趣增加用戶的動機與習慣建立!",
    50,
    baseY + linStep * 5
  );
}

function drawMain() {
  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";
  //let middleY = mainCanvas.height / 2;
  let centerX = mainCanvas.width / 2;

  mainCtx.drawImage(images["W05"], mainCanvas.width / 2 - 540, 20);

  mainCtx.font = "32px NotoSansTC-Light";
  mainCtx.fillText("- 0", mainCanvas.width / 2 - 420, 75);
  mainCtx.fillText("您可以選擇您要緩解的部分。", centerX, 120);
  mainCtx.fillText("完成後，您將獲得積分!", centerX, 160);

  mainCtx.fillText("1", centerX - 360, mainCanvas.height / 2 + 230);
  mainCtx.fillText("2", centerX, mainCanvas.height / 2 + 230);
  mainCtx.fillText("3", centerX + 360, mainCanvas.height / 2 + 230);

  mainCtx.fillStyle = "#FFAFAF";
  mainCtx.fillText("僅為預防症狀，緩解肌肉。", centerX, mainCanvas.height - 65);
  mainCtx.fillText("若已嚴重不適請就醫。", centerX, mainCanvas.height - 30);
}

function drawExercise() {
  //console.log('cc');
  mainCtx.fillStyle = "#ECF4F9";
  roundRect(
    mainCtx,
    20,
    100,
    mainCanvas.width - 40,
    mainCanvas.height - 120,
    10
  );

  mainCtx.fillStyle = "#d5d5d5";
  roundRect(
    mainCtx,
    30,
    110,
    mainCanvas.width * 0.6,
    mainCanvas.height - 140,
    10
  );
}

function drawExerciseText(second, number, textArr) {
  mainCtx.fillStyle = "#555555";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";
  mainCtx.font = "34px NotoSansTC-Light";
  mainCtx.fillText(
    second + " 秒 / " + number + " 次",
    30 + (mainCanvas.width * 0.6) / 2,
    160
  );

  mainCtx.font = "30px NotoSansTC-Light";
  textArr.forEach((line, i) => {
    //console.log(i);
    mainCtx.fillText(
      line,
      30 + (mainCanvas.width * 0.6) / 2,
      130 + (mainCanvas.height - 140) / 2 + 42 * i
    );
  });

  mainCtx.fillStyle = "#FFAFAF";
  mainCtx.font = "34px NotoSansTC-Light";
  mainCtx.fillText(
    "若感到不適，請立即停止。",
    30 + (mainCanvas.width * 0.6) / 2,
    220
  );  

  mainCtx.font = "30px NotoSansTC-Light";
  mainCtx.fillText(
    "當感到舒緩或完成動作，",
    30 + (mainCanvas.width * 0.6) / 2,
    110 +mainCanvas.height - 240
  );
  mainCtx.fillText(
    "點擊螢幕中央，即可進入下一個動作。",
    30 + (mainCanvas.width * 0.6) / 2,
    110 +mainCanvas.height - 200
  );
}

// function drawContent() {}

function drawTastyIntro() {
  let middleX = mainCanvas.width / 2;
  // let middleY = mainCanvas.height / 2;
  //let img = new Image();

  // img.addEventListener(
  //   "load",
  //   function () {
  //     mainCtx.drawImage(img, mainCanvas.width / 2 + 50, 100);
  //     //mainCtx.drawImage(img, mainCanvas.width / 2 + 50, 100, 600, 576);
  //   },
  //   false
  // );
  // img.src = "../Src/Imgs/W-01.png"; //3126*3001

  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";
  //let middleY = mainCanvas.height / 2;

  mainCtx.font = "40px NotoSansTC-Light";
  mainCtx.fillText("介 紹", mainCanvas.width / 2, 50);

  mainCtx.font = "46px NotoSansTC-Light";
  mainCtx.textAlign = "left";
  mainCtx.fillText('關於 "Tasty ? out !"', 50, 180);

  let baseY = 240;
  let linStep = 40;
  let baseX = middleX + 130;
  mainCtx.font = "32px NotoSansTC-Light";
  mainCtx.fillText("配合Work?out! 肌肉舒緩。", baseX, baseY);
  mainCtx.fillText("遊戲中有8種不同的美食類型推薦，", baseX, baseY + linStep);
  mainCtx.fillText(
    "點擊新增將會消耗舒緩所累積的點數",
    baseX,
    baseY + linStep * 2
  );
  mainCtx.fillText(
    "並隨機新增推薦餐廳至玩家地圖中。",
    baseX,
    baseY + linStep * 3
  );
  mainCtx.fillText(
    "邊舒緩肌肉減緩長時間辦公的不適，",
    baseX,
    baseY + linStep * 5
  );
  mainCtx.fillText("同時組成屬於自己的美食地圖，", baseX, baseY + linStep * 6);
  mainCtx.fillText("能與好友、同事、家人 交流，", baseX, baseY + linStep * 7);
  mainCtx.fillText("再也不必煩惱下一餐吃甚麼!", baseX, baseY + linStep * 8);
  // mainCtx.fillText(
  //   '"Work? Out!"則是以簡單的肌肉舒緩運動幫助使用者預防',
  //   50,
  //   baseY + linStep * 4
  // );
  // mainCtx.fillText(
  //   "及改善，並透過遊戲化的樂趣增加用戶的動機與習慣建立!",
  //   50,
  //   baseY + linStep * 5
  // );

  // let img = new Image();

  // img.addEventListener(
  //   "load",
  //   function () {
  //     mainCtx.drawImage(img, middleX - 250, middleY - 40);
  //     // mainCtx.drawImage(img, middleX - 270, middleY - 40, 83, 124);
  //   },
  //   false
  // );
  // img.src = "../Src/Imgs/W-07.png"; //418*626

  // //console.log('home');
  // mainCtx.font = "78px NotoSansTC-Light";
  // mainCtx.fillStyle = "#FFF";
  // mainCtx.textBaseline = "middle";
  // mainCtx.textAlign = "center";
  // mainCtx.fillText("Work ? out !", middleX, middleY);
}

function drawTastyMain() {
  // gameCanvas.style= "board:1px solid red";
  updateGameZone();
  //
  // mainCtx.textBaseline = "middle";
  // mainCtx.textAlign = "center";
  // //let middleY = mainCanvas.height / 2;
  // let centerX = mainCanvas.width / 2;
  mainCtx.font = "32px NotoSansTC-Light";
  mainCtx.fillStyle = "#fff";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";

  mainCtx.fillText("- 0", mainCanvas.width / 2 - 420, 75);
  mainCtx.drawImage(images["W05"], mainCanvas.width / 2 - 540, 20);

  // mainCtx.font = "32px NotoSansTC-Light";
  // mainCtx.fillText("- 0", mainCanvas.width / 2 - 420, 75);
  // mainCtx.fillText("您可以選擇您要緩解的部分。", centerX, 120);
  // mainCtx.fillText("完成後，您將獲得積分!", centerX, 160);

  // mainCtx.fillText("1", centerX - 360, mainCanvas.height / 2 + 230);
  // mainCtx.fillText("2", centerX, mainCanvas.height / 2 + 230);
  // mainCtx.fillText("3", centerX + 360, mainCanvas.height / 2 + 230);

  // mainCtx.fillStyle = "#f00";
  // mainCtx.fillText("僅為預防症狀，緩解肌肉。", centerX, mainCanvas.height - 75);
  // mainCtx.fillText("若已嚴重不適請就醫。", centerX, mainCanvas.height - 40);
}

function updateGameZone() {
  // //gameZoneWidth = mainCanvas.width - (mainCanvas.width / 2 - 540) * 2;
  // gameZoneWidth = 1080;
  // gameZoneHeight = mainCanvas.height - 140;
  // gameZoneX = mainCanvas.width / 2 - 540;
  // gameZoneY = 120;

  // //console.log(gameZoneHeight);
  // console.log(state.gameObjects.maps[0].length)

  let _gameZoneX = gameZoneX;
  let _gameZoneY = gameZoneY;
  state.gameObjects.maps.forEach((row) => {
    row.forEach((obj) => {
      //console.log(obj);
      if (obj.store == 0) {
        gameCtx.drawImage(images["mapBg"], _gameZoneX, _gameZoneY);
      } else if (obj.store == -1) {
        gameCtx.drawImage(images["home"], _gameZoneX, _gameZoneY);
        //_gameZoneX += 180;
      } else if (obj.store > 0) {
        let name = "A" + obj.store.toString().padStart(3, "0");
        console.log(name);

        gameCtx.drawImage(images[name], _gameZoneX, _gameZoneY);
      }
      _gameZoneX += 180;
    });
    _gameZoneY += 150;
    _gameZoneX = gameZoneX;
  });
  // console.log(gameCanvas.offsetTop);
  // gameCtx.strokeStyle = "#B2caff";
  //      //mainCtx.strokeStyle = "#B2CA9D";
  // //     //     //mainCtx.strokeStyle = 'rgba(255,255,255,0.2)'
  // gameCtx.lineWidth = 30;
  //     roundRect(
  //       gameCtx,
  //       0,
  //       0,
  //       gameCanvas.width,
  //       gameCanvas.height,
  //       60,
  //       true
  //     );
}

var isDrag = false;
gameCanvas.onmousedown = (e) => {
  // 180 * 150
  let offsetX = e.layerX - gameZoneX;
  let offsetY = e.layerY - gameZoneY;
  isDrag = true;
  gameCanvas.onmousemove = (e) => {
    if (isDrag) {
      let newX = e.layerX - offsetX;
      let newY = e.layerY - offsetY;
      if (newX > 0) newX = 0;
      if (newY > 0) newY = 0;
      if (newX + state.gameObjects.maps[0].length * 180 < gameCanvas.width) {
        newX = gameCanvas.width - state.gameObjects.maps[0].length * 180;
      }
      if (newY + state.gameObjects.maps.length * 150 < gameCanvas.height) {
        newY = gameCanvas.height - state.gameObjects.maps.length * 150;
      }
      gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
      gameZoneX = newX;
      gameZoneY = newY;

      updateGameZone();
    }
  };
};

gameCanvas.onmouseup = (e) => {
  isDrag = false;
  gameCanvas.onmousemove = null;
};
