package list.currency;

import service.Currency.AustralianDollar;
import service.Currency.USDollar;
/**
 * 
 * @author Hasitha
 *
 */
public class ListWestern extends CurrencyList {

	@Override
	protected void createCurrencyList() {

		currencyExchangeList.add(new USDollar());
		currencyExchangeList.add(new AustralianDollar());
	}
}