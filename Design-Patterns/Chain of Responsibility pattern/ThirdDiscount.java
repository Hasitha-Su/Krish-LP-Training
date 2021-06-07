package discount;

public class ThirdDiscount extends Handler {

	@Override
	public double getDiscount(OrderDetails orderDetails) {

		if (orderDetails.getPriceOfProducts() >= 250) {

			orderDetails.setDiscountPrice( orderDetails.getPriceOfProducts() - (orderDetails.getPriceOfProducts() * 10) / 100);
			System.out.println();
			System.out.println("Total price of products: " + orderDetails.getPriceOfProducts() + " USD");
			System.out.println("Discount: 10%");

			return orderDetails.getDiscountPrice();
		} else {
			return successor.getDiscount(orderDetails);
		}
	}

}
