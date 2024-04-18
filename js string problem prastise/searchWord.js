const layrics = "Tmi mor jiboner vabona Hridoy er Shukher dola";
// const layricsLower = layrics.toLowerCase();
const layricsUppercase = layrics.toUpperCase();
const layricString = 'Hridoy';
// const layricStringUppercase = layricString.toUpperCase();
// const doesExists =  layricsUppercase.includes(layricStringUppercase);
// console.log(doesExists);

const doesExistsOneLine = layrics.toLowerCase().includes(layricString.toLowerCase());
// console.log(doesExistsOneLine);
// =========================================================================//

//Index of
const song = "tmi amar protom prame tmi amar ses";

// const indexof = song.indexOf('protom');
// console.log(indexof);
if(song.indexOf('tmi') !== -1){
console.log('Exits inside the string');
}
else{
    console.log('Not found word inside the string');
}

// startsWith/

// const string = 'Tmi valo hoiya jaw';
// const check = string.startsWith('2mi');
// console.log(check);

// endsWith//
 const fileName = 'mybiodata.pdf';
 const otherFile = 'mypic.jpg';
 console.log(fileName.endsWith('pdf'));