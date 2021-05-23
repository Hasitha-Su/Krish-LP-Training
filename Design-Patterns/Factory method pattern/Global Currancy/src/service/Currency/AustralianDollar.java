package service.Currency;

import java.math.*;
/**
 * 
 * @author Hasitha
 *
 */
public class AustralianDollar extends Currency {

	BigDecimal aud = new BigDecimal("0.0066");

	@Override
	public String toString() {
		return "Australian Dollar [aud=" + aud + "]";
	}
}