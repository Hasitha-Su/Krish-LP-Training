
public class Application {

	public static void main(String[] args) {
		
		
		Registry registry = new Registry();

		SensFlyFast sensFlyFastDrone = (SensFlyFast) registry.getDrone(DroneType.SensFlyFast);
		System.out.println(sensFlyFastDrone);
		sensFlyFastDrone.setDroneSpeed(80);
		System.out.println(sensFlyFastDrone);
		
		SensFlyFast sensFlyFastDrone2 = (SensFlyFast) registry.getDrone(DroneType.SensFlyFast);
		System.out.println(sensFlyFastDrone2);
		

	}


}
