function bubblesort(array){

	/*
		we need 2 loops.

			1st loop : 
			keep track on which iteration we are on
			lock to highest number and put it in last
			then get the secoond largert number , then 3rd largest	
			this should be array: length - 1

			2nd loop :
			within the iteration
			we dont want to compare with the number afer it
			array length - 1 - i

			then if current element if larger than the next element replace it.
	*/

	for(let i=0; i < array.length - 1; i++){
		
		console.log("iteration "+i)
		
		for(let h=0; h < array.length - 1 - i; h++ ){

			console.log("comparing "+array[h]+" and "+array[h+1])

			if( array[h] > array[h+1] ){

				const temp = array[h]
				array[h] = array[h+1]
				array[h+1] = temp
			}
		}
		
		console.log("arr: "+array)
		console.log()
	}

	console.log("arr: "+array)
}

function bubblesort2(array){

	for(let i=0; i < array.length - 1; i++){
		
		console.log("iteration "+i)
		
		for(let h=array.length-1; h >= 0; h-- ){

			console.log("comparing "+array[h]+" and "+array[h+1])

			if( array[h] > array[h+1] ){

				const temp = array[h]
				array[h] = array[h+1]
				array[h+1] = temp
			}
		}
		
		console.log("arr: "+array)
		console.log()
	}

	console.log("arr: "+array)
}

function bubblesort3(array){

	for(let i=0; i < array.length - 1; i++){
		
		let swapIsDone = false

		console.log("iteration "+i)
		
		for(let h=0; h < array.length - 1 - i; h++ ){

			console.log("comparing "+array[h]+" and "+array[h+1])

			if( array[h] > array[h+1] ){

				const temp = array[h]
				array[h] = array[h+1]
				array[h+1] = temp
				
				
			}
			swapIsDone = true
		}
		
		if(swapIsDone == true)
			break;
		
		console.log("arr: "+array)
		console.log()
	}

	console.log("arr: "+array)
}

//bubblesort([ 1, 32, 4, 23, 5 ])
//bubblesort([15, 16, 6, 8, 5])
//bubblesort([15, 16, 6, 8, 5, 1, 100, 34, 66, 876, 543, 1024])

bubblesort([15, 16, 6, 8, 5, 1, 100, 34, 66, 876, 543, 1024])

