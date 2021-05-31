
// passing the array and the element we are looking for
function lienearSearch(arr, element){
	
	for(i=0; i< arr.length; i++){
		if( arr[i] == element){	
			console.log("element found on index: "+i )
			break
		}	
	}
}


let arr1 = [4, 476, 89, 1, 17, 90, 650]

lienearSearch(arr1, 89)