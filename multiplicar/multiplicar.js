const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        console.log(`${ base } is not a valid number`);
        return;
    }

    console.log('===================================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('===================================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } x ${ i } = ${ i * base }`);
    }
}


let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } is not a valid number`)
            return;
        }
        let result = '';
        for (let i = 1; i <= limite; i++) {
            result += `${ base } x ${ i } = ${ i * base }\n`;

        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tables/table-${ base }-to-${ limite }.txt`, result, (err) => {
            if (err) reject(err)
            else
                resolve(`table-${ base }-to-${ limite }.txt`)
            console.log('The file has been saved!');
        });

    })
}

module.exports = { createFile, listarTabla };