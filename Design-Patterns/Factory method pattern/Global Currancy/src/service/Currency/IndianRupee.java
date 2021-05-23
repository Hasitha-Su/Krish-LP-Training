package service.Currency;

import java.math.BigDecimal;
/**
 * 
 * @author Hasitha
 *
 */
public class IndianRupee extends Currency {

		BigDecimal ind = new BigDecimal("2.70");

		@Override
		public String toString() {
			return "Indian Rupee [ind=" + ind + "]";
		}
}
