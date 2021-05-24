package service.currency;

import java.math.BigDecimal;

public class AustralianDollar extends Currency {

	BigDecimal aud = new BigDecimal("0.0066");

	@Override
	public String toString() {

		return "Australian Dollar [aud=" + aud + "]";
	}

}