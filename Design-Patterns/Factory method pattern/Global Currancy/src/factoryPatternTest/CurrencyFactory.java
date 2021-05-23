package factoryPatternTest;

import list.currency.CurrencyList;
import list.currency.CurrencyListName;
import list.currency.ListAsia;
import list.currency.ListWestern;

/**
 * 
 * @author Hasitha
 *
 */
public class CurrencyFactory {

	public static CurrencyList createCurrencyList(CurrencyListName currencyListName) {

		switch (currencyListName) {
		case ListAsia:
			return new ListAsia();
		case ListWestern:
			return new ListWestern();
		default:
			return null;
		}
	}
}