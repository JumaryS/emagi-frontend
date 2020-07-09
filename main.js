
// first youll need to bring the files 

const search = require('./emagi-search.js');
const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');
const random = require('./emagi-random.js');
const emagify = require('./emagify.js')
//ill need a variable to hold my 
let start= process.argv.slice(2)
// console.log(start)
// let wordInput = getInput[0]


// const usersInput = function(){
    
    if(start[0] === 'convert'){
        console.log(emagify(start.slice(1)))
        }
    else if (words[i]===('search')){
        console.log(search(words.slice(1)))
    }else if(random){
        console.log(random)
    }
    
// }
// console.log(usersInput())
