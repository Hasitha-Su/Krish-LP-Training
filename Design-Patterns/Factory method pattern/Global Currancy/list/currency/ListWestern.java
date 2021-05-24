package list.currency;

import service.currency.AustralianDollar;
import service.currency.USDollar;

public class ListWestern extends CurrencyList {

	@Override
	protected void createCurrencyList() {

		currencyExchangeList.add(new USDollar());
		currencyExchangeList.add(new AustralianDollar());
	}
}