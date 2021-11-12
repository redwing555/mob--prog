'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    let fromBack =  Math.floor((n-p)/2)
    let fromFront = Math.round(Math.abs(1-p)/2)
    if(p==1 || p==n){
        return 0
    }else if(n%2==0 && n-p == 1){
        return 1
    }
    else if(fromBack == fromFront){
        return fromBack;
    }else if(fromBack < fromFront){
        
        return fromBack;
        
    }else{
        return fromFront;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
