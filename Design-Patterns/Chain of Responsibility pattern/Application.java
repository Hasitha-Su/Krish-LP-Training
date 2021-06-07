package discount;

public class Application {

	public static void main(String[] args) {

		FirstDiscount firstDiscount = new FirstDiscount();
		SecondDiscount secondDiscount = new SecondDiscount();
		ThirdDiscount thirdDiscount = new ThirdDiscount();

		Discount discount = new Discount();

		// chain begin
		discount.setSuccessor(firstDiscount);
		firstDiscount.setSuccessor(secondDiscount);
		secondDiscount.setSuccessor(thirdDiscount);

		// orders
		OrderDetails orderDetails = new OrderDetails(0001, 250);
		System.out.println("Discount price: "+discount.getDiscount(orderDetails)+" USD");
		
		OrderDetails orderDetails2 = new OrderDetails(0001, 450);
		System.out.println("Discount price: "+discount.getDiscount(orderDetails2)+" USD");
		
		OrderDetails orderDetails3 = new OrderDetails(0001, 500);
		System.out.println("Discount price: "+discount.getDiscount(orderDetails3)+" USD");
		
		OrderDetails orderDetails4 = new OrderDetails(0001, 600);
		System.out.println("Discount price: "+discount.getDiscount(orderDetails4)+" USD");
		
		OrderDetails orderDetails5 = new OrderDetails(0001, 1000);
		System.out.println("Discount price: "+discount.getDiscount(orderDetails5)+" USD");
		
		OrderDetails orderDetails6 = new OrderDetails(0001, 1200);
		System.out.println("Discount price: "+discount.getDiscount(orderDetails6)+" USD");

	}

}
