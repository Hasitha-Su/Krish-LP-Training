package service.currency;

import java.math.BigDecimal;


public class USDollar extends Currency {
	
    BigDecimal usd = new BigDecimal("197.04");

	@Override
	public String toString() {
		return "US Dollar [usd=" + usd + "]";
	}

}