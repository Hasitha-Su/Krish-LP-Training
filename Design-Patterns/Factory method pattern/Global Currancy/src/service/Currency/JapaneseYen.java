package service.Currency;

import java.math.*;
/**
 * 
 * @author Hasitha
 *
 */
public class JapaneseYen extends Currency {

	BigDecimal yen = new BigDecimal("0.55");

	@Override
	public String toString() {
		return "Japanese Yen [yen=" + yen + "]";
	}
}