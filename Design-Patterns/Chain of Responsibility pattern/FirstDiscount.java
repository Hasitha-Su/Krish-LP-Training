package discount;

public class FirstDiscount extends Handler {

	@Override
	public double getDiscount(OrderDetails orderDetails) {
		
		if(orderDetails.getPriceOfProducts() >= 1000) {
			
			orderDetails.setDiscountPrice( orderDetails.getPriceOfProducts() - (orderDetails.getPriceOfProducts() * 50) /100);				
			System.out.println();
			System.out.println("Total price of products: "+orderDetails.getPriceOfProducts()+" USD");
			System.out.println("Discount: 50%");
	
			return orderDetails.getDiscountPrice();
		}
		else {
			return successor.getDiscount(orderDetails);
		}

	}

}
