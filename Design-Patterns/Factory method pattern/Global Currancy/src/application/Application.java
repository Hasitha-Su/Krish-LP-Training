package application;

import factoryPatternTest.CurrencyFactory;
import list.currency.CurrencyList;
import list.currency.CurrencyListName;
/**
 * 
 * @author Hasitha
 *
 */
public class Application {

	public static void main(String[] args) {
		
		CurrencyList currencyList1 = CurrencyFactory.createCurrencyList(CurrencyListName.ListAsia);
		System.out.println(currencyList1);
		
		CurrencyList currencyList2 = CurrencyFactory.createCurrencyList(CurrencyListName.ListWestern);
		System.out.println(currencyList2);
	}
}
