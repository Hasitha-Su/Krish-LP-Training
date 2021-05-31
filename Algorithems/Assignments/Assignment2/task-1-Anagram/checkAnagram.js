const checkAnagram = (word11, word22)=>{

	//split for a array	
	let word1 = word11.split('')
	let word2 = word22.split('')
	
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
	
module.exports = {checkAnagram};