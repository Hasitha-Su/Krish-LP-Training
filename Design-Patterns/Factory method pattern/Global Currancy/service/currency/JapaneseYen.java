package service.currency;

import java.math.BigDecimal;

public class JapaneseYen extends Currency {

	BigDecimal yen = new BigDecimal("0.55");

	@Override
	public String toString() {
		return "Japanese Yen [yen=" + yen + "]";
	}

}