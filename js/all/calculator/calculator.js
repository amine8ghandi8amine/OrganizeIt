function Calc() {
    this.memory = "0";
    this.current = "0";
    this.operation = 0;
    this.maxLength = 30;
    this.button0 = document.getElementById(0);
    this.button1 = document.getElementById(1);
    this.button2 = document.getElementById(2);
    this.button3 = document.getElementById(3);
    this.button4 = document.getElementById(4);
    this.button5 = document.getElementById(5);
    this.button6 = document.getElementById(6);
    this.button7 = document.getElementById(7);
    this.button8 = document.getElementById(8);
    this.button9 = document.getElementById(9);
    this.plusMinusButton = document.getElementById("plusMinus");
    this.plus = document.getElementById("+");
    this.minus = document.getElementById("-");
    this.multiply = document.getElementById("multiply");
    this.letButton = document.getElementById("%");
    this.divise = document.getElementById("divise");
    this.equaleButton = document.getElementById("=");
    this.point = document.getElementById(".");
    this.clearButton = document.getElementById("C");
    this.allClearButton = document.getElementById("AC");
    this.exponant = document.getElementById("EXP");
    this.onOff = document.getElementById("on/off");


    /* methode */



    //ADD A DIGIT TO DISPLAY (kept as 'Current')
    this.count = function (dig) {
        if (this.current.length > this.maxLength) {
            this.current = "Aargh! Too long"; //limit length
        } else {
            if ((eval(this.current) == 0) && (this.current.indexOf(".") == -1)) {
                this.current = dig;
            } else {
                this.current += dig;
            }
        };
        this.display(this.current, 0);
    };

    //PUT IN "." if appropriate.
    this.dot = function () {
        //no leading ".", use "0."
        if (this.current.length == 0) {
            this.current = "0.";
        } else {
            if (this.current.indexOf(".") == -1) {
                this.current += ".";
            };
        };
        this.display(this.current, 0);
    };

    this.display = function (currently, where) {
        //this.current
        if (where === 0) {
            document.getElementById("screen").value = currently;
        } else if (where === 1) {
            document.getElementById("screen").value += currently;
        }
    };

    this.doExponent = function () {
        if (this.current.indexOf("e") == -1) {
            this.current += "e0";
        };
        this.display(this.current, 0);
    };

    this.plusMinus = function () {
        //if there is an exponent:
        if (this.current.indexOf("e") != -1) {
            var epos = this.current.indexOf("e-");
            if (epos != -1) {
                this.current = this.current.substring(0, 1 + epos) + this.current.substring(2 + epos); //clip -ve exp 
            } else {
                epos = this.current.indexOf("e");
                this.current = this.current.substring(0, 1 + epos) + "-" + this.current.substring(1 + epos);
                //insert
            };
        } else {
            if (this.current.indexOf("-") == 0) {
                this.current = this.current.substring(1);
            } else {
                this.current = "-" + this.current;
            };
        };
        this.display(this.current, 0);
    };
    //CLEAR ENTRY
    this.clear = function () {
        this.current = "0";
        this.display(this.current, 0);
    };
    //Clear ALL entries!
    this.allClear = function () {
        this.current = "0";
        this.operation = 0; //clear operation
        this.memory = "0"; //clear memory
        this.display(this.current, 0);
    };

    //STORE OPERATION e.g. + * / etc.
    this.operate = function (op) {
        if (op.indexOf("multiply") > -1) {
            this.operation = 1;
        }; //codes for *
        if (op.indexOf("divise") > -1) {
            this.operation = 2;
        }; // slash (divide)
        if (op.indexOf("+") > -1) {
            this.operation = 3;
        }; // sum
        if (op.indexOf("-") > -1) {
            this.operation = 4;
        }; // difference
        if (op.indexOf("%") > -1) {
            this.operation = 5;
        }; // let

        this.memory = this.current; //store value
        this.current = ""; //or we could use "0"
        this.display(this.current, 0);
    };
    //PERFORM CALCULATION (= button)
    this.calculate = function () {
        if (this.operation == 1) {
            this.current = eval(this.memory) * eval(this.current);
        };
        if (this.operation == 2) {
            this.current = eval(this.memory) / eval(this.current);
        };
        if (this.operation == 3) {
            this.current = eval(this.memory) + eval(this.current);
        };
        if (this.operation == 4) {
            this.current = eval(this.memory) - eval(this.current);
        };
        if (this.operation == 5) {
            this.current = eval(this.memory) % eval(this.current);
        };
        this.operation = 0; //clear operation
        this.memory = "0"; //clear memory
        this.display(this.current, 0);
    };

    /*



    this.fixCurrent = function(){
      current = document.getElementById("screen").value;
      current = "" + parseFloat(current);
      if (current.indexOf("NaN") != -1)
        { current = "Aargh! I don't understand";
        };
      this.display(current,0);
     }
    */

};
Calc.prototype = Object.create(All.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Calc,
        writable: true
    }
});

/*
//replacing something
Calc.prototype.toString = function () {
    var text = All.prototype.toString.call(this);
    return text.replace("xx", "xx");
};
*/

var calculator = new Calc();

