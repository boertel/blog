(function (window, document, undefined) {
    function createElement(name, className, style) {
        var node = document.createElement(name);
        if (className) {
            node.className = "cccookie-" + className;
        }
        for (var key in style) {
            node.style[key] = style[key];
        }
        return node;
    }

    function px(value) {
        return parseInt(value, 10) + "px";
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    

    var Cccookie = function (diameter, options) {
        this.diameter = diameter;
        this.radius = diameter / 2;

        options = options || {};
        this.options = {
            hover: options.hover || 1.2,
            doughColor: options.doughColor || "#d8a33b",
            chipColor: options.chipColor || "#6e4903"
        };

        this.size = {
            small: this.diameter * 0.06,
            medium: this.diameter * 0.1,
            large: this.diameter * 0.14
        };

        this.css = ".cccookie-dough, .cccookie-chip, .cccookie-bite {" +
            "-webkit-transition-duration: " + (this.options.hover * 0.25) + "s;" +
            "-webkit-transition-timing-function: ease-out;" +
            "-webkit-transition-property: width, height, border-radius;" +
            "-moz-transition-duration: " + (this.options.hover * 0.25) + "s;" +
            "-moz-transition-timing-function: ease-out;" +
            "-moz-transition-property: width, height, border-radius;" +
        "}";

        this._chips = [];

    };

    Cccookie.prototype.stylesheet = function () {
        var style = createElement("style");
        style.type = "text/css";

        if (style.styleSheet) {
            style.styleSheet.cssText = this.css;
        } else {
            style.appendChild(document.createTextNode(this.css));
        }

        var entry = document.getElementsByTagName("script")[0];
        entry.parentNode.insertBefore(style, entry);
        return style;
    };

    Cccookie.prototype.inside = function (x, y) {
        var correctedRadius = this.radius - 25,
            dx = x - correctedRadius,
            dy = y - correctedRadius;

        return (dx * dx) + (dy * dy) <= (correctedRadius * correctedRadius);
    };

    Cccookie.prototype.overlap = function (x, y, size) {
        var x1 = x;
            x2 = x + size,
            y1 = y,
            y2 = y + size,
            b = false;
        for (var i = 0; i < this._chips.length; i += 1) {
            var chip = this._chips[i];
            c_x1 = chip.x;
            c_x2 = chip.x + chip.size;
            c_y1 = chip.y;
            c_y2 = chip.y + chip.size;

            var overlap = (x1 < c_x2 && x2 > c_x1 && y1 < c_y2 && y2 > c_y1);
            if (overlap) {
                b = true;
                break;
            }
        }
        return b;
    };

    Cccookie.prototype.sprinkle = function (chip, sizeName) {
        var size = this.size[sizeName];
        do {
            do {
                x = random(0, this.diameter);
                y = random(0, this.diameter);
            } while (this.overlap(x, y, size));
        } while (!this.inside(x, y));

        this._chips.push({x: x, y: y, size: size});

        x = (x * 100) / this.diameter;
        y = (y * 100) / this.diameter;
        coord = {x: x, y: y};


        chip.style.left = coord.x + '%';
        chip.style.top = coord.y + '%';

        return chip;
    };

    Cccookie.prototype.dough = function () {
        var dough = createElement("div", "dough");

        var hoverDiameter = this.diameter * this.options.hover;

        var doughCss = ".cccookie-dough {" +
            "position: relative;" +
            "overflow: hidden;" +
            "background-color: " + this.options.doughColor + ";" +
            "width: " + px(this.diameter) + ";" +
            "height: " + px(this.diameter) + ";" +
            "border-radius: " + px(this.radius) + ";" +
            "}" +
            ".cccookie-dough:hover, .cccookie-dough:focus {" +
            "width: " + px(hoverDiameter) + ";" +
            "height: " + px(hoverDiameter) + ";" +
            "border-radius: " + px(hoverDiameter / 2) + ";" +
            "cursor: pointer;" +
        "}";

        this.css += doughCss;

        return dough;
    };

    Cccookie.prototype.chip = function (s) {
        var chip = createElement("div", "chip " + s);

        var chipCss = ".cccookie-chip {" +
            "position: absolute;" +
            "background-color: " + this.options.chipColor + ";" +
        "}";

        for (var key in this.size) {
            var size = this.size[key],
                sizeHover = this.size[key] * this.options.hover;

            chipCss += ".cccookie-chip." + key + " {" +
                "width: " + px(size) + ";" +
                "height: " + px(size) + ";" +
                "border-radius: " + px(size) + ";" +
            "}";
            chipCss += ".cccookie-dough:hover .cccookie-chip." + key + " {" +
                "width: " + px(sizeHover) + ";" +
                "height: " + px(sizeHover) + ";" +
                "border-radius: " + px(sizeHover / 2) + ";" +
            "}";
        }

        this.css += chipCss;

        return chip;
    };

    Cccookie.prototype.bite = function (diameter, right, bottom) {
        var bite = createElement("div", "bite", {
            right: px(right),
            bottom: px(bottom),
        });

        var hoverDiameter = diameter * this.options.hover;

        this.css += ".cccookie-bite {" +
            "position: absolute;" +
            "background-color: #fff;" +
            "width: " + px(diameter) + ";" +
            "height: " + px(diameter) + ";" +
            "border-radius: " + px(diameter / 2) + ";" +
        "}" +
        ".cccookie-dough:hover .cccookie-bite {" +
            "width: " + px(hoverDiameter) + ";" +
            "height: " + px(hoverDiameter) + ";" +
            "border-radius: " + px(hoverDiameter / 2) + ";" +
        "}";

        return bite;
    };

    Cccookie.prototype.bake = function (chips) {
        chips = chips || Math.ceil(this.diameter * 0.04);
        var dough = this.dough();
        var size = ['small', 'medium', 'large'];

        for (var i = 0; i < chips; i += 1) {
            var r = random(0, 2);
            dough.appendChild(this.sprinkle(this.chip(size[r]), size[r]));
        }

        dough.appendChild(this.eat());

        this.stylesheet();
        return dough;
    };

    Cccookie.prototype.eat = function () {
        var bites = createElement('div', 'bites');
        var cornerRadius = this.diameter * 0.2;

        var coords = [
            {right: -35, bottom: 25},
            {right: 0, bottom: 15},
            {right: 10, bottom: -25}
        ];
        for (var i = 0; i < 3; i += 1) {
            var coord = coords[i];
            var bite = this.bite(Math.ceil(this.diameter * 0.3), coord.right, coord.bottom, coord.bg);
            bites.appendChild(bite);
        }
        return bites;
    };

    window.Cccookie = Cccookie;
})(window, document);
