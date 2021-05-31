const FindRepeatedCharacters = (str)=>{

	let trimStr = str.replace(/\s+/g, "")
	let lowerCaseStr= trimStr.toLowerCase();
	let arr = lowerCaseStr.split("")

	//sort
	for(let a=0; a<arr.length - 1; a++){
		for(let b=0; b<arr.length - 1 - a; b++){
			if(arr[b+1] < arr[b])
				[arr[b], arr[b+1]] = [arr[b+1], arr[b]]
		}
	}
	
	//duplicate array
	let originalArr = arr.slice()

	let LastChecked = ""
	let repetationsArr = [];

	for(let a=originalArr.length - 1; a >= 0; a--){

		let repetations = 0
		
		if(LastChecked === originalArr[a]){
			originalArr.pop()
		}else{
			for(let b=arr.length - 1; b >= 0; b--){

				if(originalArr[a] === arr[b]){
					LastChecked = originalArr[a]
					repetations++
					arr.pop()
				}
			}
			repetationsArr.push([originalArr[a],repetations]);
		}	
	}

	console.log("\n Input - "+str)
	console.table(repetationsArr)
}

module.exports = {FindRepeatedCharacters};