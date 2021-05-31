
const MissingNumberInSequence = (arr)=>{

	for(let i=0; i<arr.length - 1; i++){

		let temp = arr[i]

		if( !(arr[i+1] == temp+1) ){
			console.log("\nmissing number is :",temp+1 )
		}
	}
}

module.exports = {MissingNumberInSequence};