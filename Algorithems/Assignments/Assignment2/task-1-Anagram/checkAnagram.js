const checkAnagram = (word11, word22)=>{

	//split for a array	
	let word1 = word11.split('')
	let word2 =	word22.split('')

	//word1[0] = word2[0]
	// sort the array
	word1.sort()
	word2.sort()

	if(!(word1.length == word2.length)){
		console.log("These are not anagrams")
	}else{
		for(let i=0; i<word1.length -1; i++){

			if(!(word1[i] == word2[i])){
				console.log("These are not anagrams")
				return false
			}
		}
		console.log("These are anagrams")
	}
}
	

/*
let word1 = word01.split('')

 for(let a=0; a<word1.length - 1; a++){
	for(let b=0; b<word1.length - 1 - a; b++){
		if(word1[b+1] < word1[b])
			[word1[b], word1[b+1]] = [word1[b+1], word1[b]]
    }
    console.log(word1)   
}
*/

module.exports = {checkAnagram};