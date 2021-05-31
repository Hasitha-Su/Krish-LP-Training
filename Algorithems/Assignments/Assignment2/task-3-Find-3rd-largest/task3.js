const FindThirdLargest = (array)=>{

	console.log("input array is : "+array)

	if(array.length < 3){
		console.log("Array should have at leat 3 elemets to find the 3rd largest")
		process.exit()
	}

	for(let i=0; i < 3; i++){
		for(let h=0; h < array.length - 1 - i; h++ ){

			if( array[h] > array[h+1] ){
				const temp = array[h]
				array[h] = array[h+1]
				array[h+1] = temp
			}
		}
	}
	//console.log("input array is : "+array)
	console.log("3rd largest is: "+(array[array.length - 3])+"\n")
}

module.exports = {FindThirdLargest};