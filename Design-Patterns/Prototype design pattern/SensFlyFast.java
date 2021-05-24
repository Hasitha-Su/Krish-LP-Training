
// Drone for fast deliveries
public class SensFlyFast extends Drone{
	
	//per hour
	private int droneSpeed;

	public int getDroneSpeed() {
		return droneSpeed;
	}

	public void setDroneSpeed(int droneSpeed) {
		this.droneSpeed = droneSpeed;
	}

	@Override
	public String toString() {
		return "SensFlyFast [droneSpeed=" + droneSpeed + "]";
	}

}
