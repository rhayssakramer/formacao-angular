//JS
var minhaVar = 'minha variável';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//Arrow Functions
numeros.map(function (valor) { return valor * 2; }); //ES 2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return 13 + 7;
    };
    return Matematica;
}());
var n1 = 'rhayssa';
n1 = 4;
