package list.currency;

import service.Currency.IndianRupee;
import service.Currency.JapaneseYen;
/**
 * 
 * @author Hasitha
 *
 */
public class ListAsia extends CurrencyList {

	@Override
	protected void createCurrencyList() {
		currencyExchangeList.add( new JapaneseYen());
		currencyExchangeList.add( new IndianRupee());
	}
}
