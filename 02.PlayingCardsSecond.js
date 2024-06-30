function playingCards (face, suit){
let validFaces = [`2`,`3`,`4`,`5`,`5`,`7`,`8`,`10`,`J`,`Q`,`K`,`A`];
let validSuits = ['S',`H`,`D`,`C`];
if (validFaces.includes(face)==true && validSuits.includes(suit)==true){
    if (suit === "H"){
        suit = `\u2665`
    }else if (suit === `S`){
        suit = `\u2660`
    }else if (suit === `D`){
        suit = `\u2666`
    }else if (suit === `C`){
        suit = `\u2663`
    }
    return (`${face} ${suit}`);
}else{
    throw new Error (`Invalid Card`);
}

    
}
console.log(playingCards(`1`,`C`))