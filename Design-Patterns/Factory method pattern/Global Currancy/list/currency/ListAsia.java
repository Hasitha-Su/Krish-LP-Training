package list.currency;

import service.currency.IndianRupee;
import service.currency.JapaneseYen;

public class ListAsia extends CurrencyList {

	@Override
	protected void createCurrencyList() {

		currencyExchangeList.add( new JapaneseYen());
		currencyExchangeList.add( new IndianRupee());
	}


}



