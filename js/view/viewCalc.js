var listenersForCalc = {
    numbers: (function () {
        calculator.button0.addEventListener("click", function () {
            calculator.count(calculator.button0.id);
        }, false);
        calculator.button1.addEventListener("click", function () {
            calculator.count(calculator.button1.id);
        }, false);
        calculator.button2.addEventListener("click", function () {
            calculator.count(calculator.button2.id);
        }, false);
        calculator.button3.addEventListener("click", function () {
            calculator.count(calculator.button3.id);
        }, false);
        calculator.button4.addEventListener("click", function () {
            calculator.count(calculator.button4.id);
        }, false);
        calculator.button5.addEventListener("click", function () {
            calculator.count(calculator.button5.id);
        }, false);
        calculator.button6.addEventListener("click", function () {
            calculator.count(calculator.button6.id);
        }, false);
        calculator.button7.addEventListener("click", function () {
            calculator.count(calculator.button7.id);
        }, false);
        calculator.button8.addEventListener("click", function () {
            calculator.count(calculator.button8.id);
        }, false);
        calculator.button9.addEventListener("click", function () {
            calculator.count(calculator.button9.id);
        }, false)

    })(),

    point: (function () {
        calculator.point.addEventListener("click", function () {
            calculator.dot();
        }, false);
    })(),
    exponant: (function () {
        calculator.exponant.addEventListener("click", function () {
            calculator.doExponent();

        }, false);
    })(),
    plusMinus: (function () {
        calculator.plusMinusButton.addEventListener("click", function () {
            calculator.plusMinus();

        }, false);
    })(),
    clear: (function () {
        calculator.clearButton.addEventListener("click", function () {
            calculator.clear();

        }, false);
    })(),
    allClear: (function () {
        calculator.allClearButton.addEventListener("click", function () {
            calculator.allClear();

        }, false);
    })(),

    operation: (function () {

        calculator.plus.addEventListener("click", function () {
            calculator.operate(calculator.plus.id);
        }, false);
        calculator.minus.addEventListener("click", function () {
            calculator.operate(calculator.minus.id);
        }, false);
        calculator.multiply.addEventListener("click", function () {
            calculator.operate(calculator.multiply.id);
        }, false);
        calculator.divise.addEventListener("click", function () {
            calculator.operate(calculator.divise.id);
        }, false);
        calculator.letButton.addEventListener("click", function () {
            calculator.operate(calculator.letButton.id);
        }, false);
    })(),
    equale: (function () {
        calculator.equaleButton.addEventListener("click", function () {
            calculator.calculate();
        }, false);
    })()

};