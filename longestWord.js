let str = "Shubhangi is a software developer"

const longestWord = (str) =>{
    if(str.trim() === 0 ){
        console.log(str.trim())
        return false
    }

    word = str.split(' ').sort((a,b)=> b.length - a.length)
    // console.log(word)

    return word[0]

}

console.log(longestWord(str))
