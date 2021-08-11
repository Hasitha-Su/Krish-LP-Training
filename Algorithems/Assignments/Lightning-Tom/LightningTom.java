import java.util.*;

class LightningTom{

	public void calcTomDistance(int distance){

		int totalSecondsOfRest = 0, totalHops = 0, currentDistance = 0, counter = -1, fifthSeconds = 0;

		while(currentDistance < distance){
						
			//Tom jumps 5m
			if(currentDistance < distance){
				currentDistance += 5;
				totalHops++;

				//Tom jumps 3m
				if(currentDistance < distance){	
					currentDistance += 3;
					totalSecondsOfRest += 1; 
					totalHops++;
							
					//Tom jumps 1m
					if(currentDistance < distance){	
						currentDistance += 1;
						totalSecondsOfRest += 2;
						totalHops++;
					}		
				}
			}
			counter++;											
		}

		System.out.println("Tom hopped a total of "+currentDistance+"m");
		System.out.println("Tom hopped "+totalHops+" times");
		System.out.printf("Tom rested for %d seconds ", totalSecondsOfRest += fifthSeconds = 5 * counter); 
	}

	public static void main(String[] args){
        
		Scanner scann=  new Scanner(System.in);

		System.out.print("Please enter a distance(m) : ");
		int distance = scann.nextInt();
		
		LightningTom obj1 = new LightningTom();

		if(distance > 0)
			obj1.calcTomDistance(distance);
			
	}				
}