

public class Drone implements Cloneable {

	private int droneId;
	private String droneName;
	private int deliveryDistance;

	public int getDroneId() {
		return droneId;
	}

	public void setDroneId(int droneId) {
		this.droneId = droneId;
	}

	public String getDroneName() {
		return droneName;
	}

	public void setDroneName(String droneName) {
		this.droneName = droneName;
	}

	public int getDeliveryDistance() {
		return deliveryDistance;
	}

	public void setDeliveryDistance(int deliveryDistance) {
		this.deliveryDistance = deliveryDistance;
	}

	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}
