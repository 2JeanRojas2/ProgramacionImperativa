const readline = require("readline");
const mascota = require(__dirname + "./Juego")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.setPrompt('comer: c, status: s > ');
rl.prompt();

rl.on("line", function (line) {
    //setInterval( .... mascota.vivir()  ..... )

    switch (line.trim()) {
        case 's':
            console.log(mascota.status());
            break;
        case 'c':
            mascota.comer();
            break;
        case 'v':
            mascota.vivir();
            break;
        default:
            rl.close();
            break;
    }
    rl.prompt();
}).on('close', function () {
    console.log('chau chau!');
    process.exit(0);
});
