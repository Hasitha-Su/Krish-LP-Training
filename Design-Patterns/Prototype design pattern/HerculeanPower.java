
// Drone for heavy weight deliveries
public class HerculeanPower extends Drone {

	
	private int deliveryItemWeight;


	public int getDeliveryItemWeight() {
		return deliveryItemWeight;
	}


	public void setDeliveryItemWeight(int deliveryItemWeight) {
		this.deliveryItemWeight = deliveryItemWeight;
	}


	@Override
	public String toString() {
		return "HerculeanPower [deliveryItemWeight=" + deliveryItemWeight + "]";
	}

}