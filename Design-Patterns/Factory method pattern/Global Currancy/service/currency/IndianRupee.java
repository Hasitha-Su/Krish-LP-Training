package service.currency;

import java.math.BigDecimal;

public class IndianRupee extends Currency {

		BigDecimal ind = new BigDecimal("2.70");

		@Override
		public String toString() {
			return "Indian Rupee [ind=" + ind + "]";
		}
}
