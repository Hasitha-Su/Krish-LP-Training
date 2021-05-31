package discount;

public class SecondDiscount extends Handler {

	@Override
	public double getDiscount(OrderDetails orderDetails) {
		if (orderDetails.getPriceOfProducts() >= 500) {

			orderDetails.setDiscountPrice( orderDetails.getPriceOfProducts() - (orderDetails.getPriceOfProducts() * 30) / 100);
			System.out.println();
			System.out.println("Total price of products: " + orderDetails.getPriceOfProducts() + " USD");
			System.out.println("Discount: 30%");

			return orderDetails.getDiscountPrice();
		} else {
			return successor.getDiscount(orderDetails);
		}
	}

}
