
import java.util.HashMap;
import java.util.Map;

public class Registry {
	
	private Map<DroneType, Drone> drones = new HashMap<>();
	
	public Registry() {
		this.initialize();
	}
	
	public Drone getDrone(DroneType droneType) {
		
		Drone drone = null;
		//casting has to be done because it always returns the object type
		try {
			 drone = (Drone) drones.get(droneType).clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}
		return drone;	
	}
	
	private void initialize() {
		
		SensFlyFast sensFlyFast = new SensFlyFast();
		sensFlyFast.setDroneId(00001);
		sensFlyFast.setDroneName("Drone-SensFlyFast");
		sensFlyFast.setDroneSpeed(70);
		sensFlyFast.setDeliveryDistance(30);

		HerculeanPower herculeanPower = new HerculeanPower();
		herculeanPower.setDroneId(0023001);
		herculeanPower.setDroneName("Drone-HerculeanPower");
		herculeanPower.setDeliveryDistance(10);
		herculeanPower.setDeliveryItemWeight(12);
		
		//add them to registry	
		drones.put(DroneType.SensFlyFast, sensFlyFast);
		drones.put(DroneType.HerculeanPower, herculeanPower);
	}
}
