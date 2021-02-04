let App = {
  init: function () {

    this.elements.createElements();
  },
  store: {},
  controllers: {},
  elements: {
    app: null,
    header: null,
    elImg: null,
    grid: null,
    logo: null,
    backbar: null,
    bar: null,
    glass: null,
    voice: null,
    button: null,
    footer: null,

    createApp: function () {
      this.app = document.getElementById("app");
      this.app.style.position = "absolute";
      this.app.style.width = "100%";
      this.app.style.height = "100%";
    },

    createHeader: function (word, align) {

      this.header = document.createElement("a");

      if (align == "left") {
        this.header.innerHTML = word;
        this.header.style.color = "black";
        this.header.style.fontSize = "13px";
        this.header.style.display = "inline";
        this.header.style.marginRight = "6px";
        this.header.style.marginLeft = "6px";
        this.header.style.paddingTop = "4px"
        this.header.style.position = "relative";
        this.header.style.float = "left";
        this.header.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
        this.header.style.textDecoration = "none";
        this.header.style.cursor = "pointer";
        this.header.style.outline = "none";
        this.header.setAttribute("href", "#" + word);
        // this.header.setAttribute("onmouseover", "hoverunder(this)");
        // this.header.setAttribute("onmouseout", "noneline(this)");
        this.app.appendChild(this.header);
      } else if (align == "right") {
        this.header.innerHTML = word;
        this.header.style.color = "black";
        this.header.style.fontSize = "14px";
        this.header.style.textAlign = "right";
        this.header.style.right = "0";
        this.header.style.display = "inline";
        this.header.style.marginRight = "6px";
        this.header.style.marginLeft = "6px";
        this.header.style.paddingTop = "4px"
        this.header.style.position = "relative";
        this.header.style.float = "right";
        this.header.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
        this.header.style.textDecoration = "none";
        this.header.style.cursor = "pointer";
        this.header.style.outline = "none";
        this.header.setAttribute("href", "#" + word);
        // this.header.setAttribute("onmouseover", "hoverunder(this)");
        // this.header.setAttribute("onmouseout", "noneline(this)");
        this.app.appendChild(this.header);
      }
    },

    createGrid: function (link, word) {
      this.elImg = document.createElement("img");
      this.elA = document.createElement("a");

      this.grid = this.elImg.innerHTML = word;

      this.elA.style.fontSize = "14px";
      this.elA.style.textAlign = "right";
      this.elA.style.right = "0";
      this.elA.style.display = "inline";
      this.elA.style.marginRight = "6px";
      this.elA.style.marginLeft = "6px";
      this.elA.style.position = "relative";
      this.elA.style.float = "right";
      this.elA.style.cursor = "pointer";
      this.elA.style.outline = "none";

      this.elImg.style.height = "24px";
      this.elImg.style.width = "25px";
      this.elImg.style.borderRadius = "50%";

      this.elImg.setAttribute("src", link);
      this.elImg.setAttribute("alt", word);

      if (word == "account") {
        // this.elImg.setAttribute("onmouseover", "brownaccount(this)");
        // this.elImg.setAttribute("onmouseout", "nonetext(this)");
      }

      if (word == "Google apps") {
        // this.elImg.setAttribute("onmouseover", "appstext(this)");
        // this.elImg.setAttribute("onmouseout", "nonetext(this)");
      }

      this.elA.setAttribute("href", "#" + word.replace(/\s/g, ""));
      this.elA.appendChild(this.elImg);

      this.app.appendChild(this.elA);
    },

    createLogo: function (link) {
      this.logo = document.createElement("img");

      this.div = document.createElement("div");

      this.div.style.minWidth = "580px";

      this.logo.style.textAlign = "center";
      this.logo.style.display = "block";
      this.logo.style.position = "relative";
      this.logo.style.paddingTop = "190px";
      this.logo.style.marginLeft = "auto";
      this.logo.style.marginRight = "auto";
      this.logo.style.paddingLeft = "90px";

      this.logo.setAttribute("src", link);
      this.logo.setAttribute("alt", "Google");
      this.div.appendChild(this.logo);
      this.app.appendChild(this.div);
    },

    createBar: function () {
      this.backbar = document.createElement("div");
      this.backbar.setAttribute("id", "backbar");
      this.backbar.style.margin = "0 auto";
      this.backbar.style.height = "45px";
      this.backbar.style.border = "1px solid #909090";
      this.backbar.style.borderRadius = "30px";
      this.backbar.style.width = "580px";
      this.backbar.style.marginTop = "30px";
      this.backbar.style.paddingleft = "170px";
      this.backbar.style.outline = "none";
      this.backbar.style.display = "block";
      this.backbar.style.position = "relative";
      this.backbar.style.textDecoration = "none";

      this.backbar.setAttribute("type", "text");
      this.backbar.setAttribute("title", "Search");
      // this.backbar.setAttribute("onmouseover", "hoverbar(this)");
      // this.backbar.setAttribute("onmouseout", "noneshadow(this)");
      this.app.appendChild(this.backbar);

      this.bar = document.createElement("input");
      this.bar.style.margin = "0 auto";
      this.bar.style.height = "40px";
      this.bar.style.border = "1px #505050";
      this.bar.style.width = "490px";
      this.bar.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
      this.bar.style.fontSize = "16px";
      this.bar.style.paddingleft = "170px";
      this.bar.style.outline = "none";
      this.bar.style.display = "block";
      this.bar.style.position = "relative";
      this.bar.style.textDecoration = "none";
      this.bar.setAttribute("id", "bar");
      this.bar.setAttribute("type", "text");
      this.bar.setAttribute("title", "Search");
      document.getElementById("backbar").appendChild(this.bar);
    },

    createFigSearch: function (linkglass, linkvoice) {

      this.glass = document.createElement("img");

      this.glass.style.position = "relative";
      this.glass.style.left = "12px";
      this.glass.style.bottom = "32px";
      this.glass.style.height = "22px";
      this.glass.style.opacity = "0.6";

      this.glass.setAttribute("src", linkglass);
      document.getElementById("backbar").appendChild(this.glass);

      this.a = document.createElement("a");
      this.a.style.outline = "none";

      this.voice = document.createElement("img");
      this.voice.style.position = "relative";
      this.voice.style.left = "530px";
      this.voice.style.bottom = "33px";
      this.voice.style.height = "20px";
      this.voice.style.outline = "none";

      this.a.setAttribute("href", "#voicesearch");
      this.voice.setAttribute("src", linkvoice);
      this.voice.setAttribute("title", "Search by Voice");
      document.getElementById("backbar").appendChild(this.a);
      this.a.appendChild(this.voice);
    },

    createButton: function (word) {
      this.div = document.createElement("div");
      this.div.style.margin = "0 auto";
      this.div.style.height = "45px";
      this.div.style.width = "290px";
      this.div.style.marginTop = "-10px";
      this.div.style.paddingleft = "170px";
      this.div.style.outline = "none";
      this.div.style.display = "block";
      this.div.setAttribute("id", "buttondiv");

      this.button = document.createElement("button");
      this.button.style.background = "#f5f5f5";
      this.button.style.position = "relative";
      this.button.style.color = "#505050";
      this.button.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
      this.button.style.fontSize = "15px";
      this.button.style.border = "none";
      this.button.style.borderRadius = "5px";
      this.button.style.margin = "5px";
      this.button.style.marginTop = "35px";
      this.button.style.width = "130px";
      this.button.style.height = "40px";
      this.button.style.outline = "none";
      this.button.style.cursor = "pointer";

      if (word == "Google Search") {
        this.button.innerHTML = word;
        //TODO
        // el.setAttribute("onmouseover", "hoverbutton(this)");
        // el.setAttribute("onmouseout", "noneshadowbutton(this)");
      } else {
        this.button.innerHTML = word;
        //TODO
        // el.setAttribute("onmouseover", "hoverbutton(this)");
        // el.setAttribute("onmouseout", "noneshadowbutton(this)");
      }

      this.button.setAttribute("id", "button");
      this.button.setAttribute("type", "button");
      this.app.appendChild(this.div);
      document.getElementById("buttondiv").appendChild(this.button);
    },

    createGrayBg: function () {
      this.div = document.createElement("div");
      this.div.setAttribute("id", "graybox");
      this.div.style.background = "#f2f2f2";
      this.div.style.height = "40px";
      this.div.style.bottom = "0";
      this.div.style.right = "0";
      this.div.style.left = "0";
      this.div.style.display = "relative";
      this.div.style.position = "absolute";

      this.app.appendChild(this.div);
    },

    createFooter: function (word, align) {
      this.footer = document.createElement("a");

      if (align == "left") {
        this.word = this.footer.innerHTML = word;

        this.footer.style.color = "black";
        this.footer.style.fontSize = "13px";
        this.footer.style.display = "inline";
        this.footer.style.bottom = "0";
        this.footer.style.position = "block";
        this.footer.style.float = "left";
        this.footer.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
        this.footer.style.marginRight = "6px";
        this.footer.style.marginLeft = "6px";
        this.footer.style.display = "relative";
        this.footer.style.cursor = "pointer";
        this.footer.style.outline = "none";
        this.footer.style.textDecoration = "none";
        this.footer.style.paddingTop = "11px";
        this.footer.style.paddingLeft = "10px";
        this.footer.setAttribute("href", "#" + word);
        // this.footer.setAttribute("onmouseover", "hoverunder(this)");
        // this.footer.setAttribute("onmouseout", "noneline(this)");

        document.getElementById("graybox").appendChild(this.footer);
      } else if (align == "right") {
        this.word = this.footer.innerHTML = word;

        this.footer.style.color = "black";
        this.footer.style.fontSize = "13px";
        this.footer.style.textAlign = "right";
        this.footer.style.display = "inline";
        this.footer.style.bottom = "0";
        this.footer.style.position = "block";
        this.footer.style.float = "right";
        this.footer.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
        this.footer.style.marginRight = "6px";
        this.footer.style.marginLeft = "6px";
        this.footer.style.display = "relative";
        this.footer.style.cursor = "pointer";
        this.footer.style.outline = "none";
        this.footer.style.textDecoration = "none";
        this.footer.style.paddingTop = "11px";
        this.footer.style.paddingRight = "10px";
        this.footer.setAttribute("href", "#" + word);
        // this.footer.setAttribute("onmouseover", "hoverunder(this)");
        // this.footer.setAttribute("onmouseout", "noneline(this)");

        document.getElementById("graybox").appendChild(this.footer);
      }
    },


    createElements: function () {
      this.createApp();
      this.createHeader("About", "left");
      this.createHeader("Store", "left");
      this.createGrid("https://i.pinimg.com/originals/d1/4d/4c/d14d4cff66e29ab30702d0188d9264f9.jpg", "account");
      this.createGrid("https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png", "Google apps");
      this.createHeader("Images", "right");
      this.createHeader("Gmail", "right");
      this.createLogo("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
      this.createBar();
      this.createFigSearch("https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Google_Magnifying_Glass.svg/1200px-Google_Magnifying_Glass.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png");
      this.createButton("Google Search");
      this.createButton("I'm Feeling Lucky");
      this.createGrayBg();
      this.createFooter("Advertising", "left");
      this.createFooter("Business", "left");
      this.createFooter("Settings", "right");
      this.createFooter("Terms", "right");
      this.createFooter("Privacy", "right");
    }
  },
};

App.init();