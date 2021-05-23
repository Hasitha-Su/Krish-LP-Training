package service.Currency;
import java.math.*;
/**
 * 
 * @author Hasitha
 *
 */
public class USDollar extends Currency {
	
    BigDecimal usd = new BigDecimal("197.04");

	@Override
	public String toString() {
		return "US Dollar [usd=" + usd + "]";
	}
}