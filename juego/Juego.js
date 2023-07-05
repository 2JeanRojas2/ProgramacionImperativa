const tamagochi = {
    energiaVital: 70,
    hambre: 50,
    edad: 0,
    vivir: function () {
        this.edad++;
        this.energiaVital -=10;
        this.hambre += 25;
    },
    status: function () {
        console.log("Su edad es " + this.edad
        + " su energia vital esta en " + this.energiaVital + " Su hambre es " + this.hambre);
    },
    sigueConVida: function () {
        return this.energiaVital > 0 && this.hambre < 100 && this.hambre > 0 && this.energiaVital >= 100;
    },
    darleDeComer: function () {
        this.hambre -= 20;
        this.energiaVital += 5;
    },
    ejercitarse: function () {
        this.hambre += 35;
        this.energiaVital += 5;
    }
}

module.exports = tamagochi;

