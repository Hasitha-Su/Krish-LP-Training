import factoryPatternTest.*;
import list.currency.*;

public class Application{

	public static void main (String[] args) {

		CurrencyList currencyList1 = CurrencyFactory.createCurrencyList(CurrencyListName.ListAsia);
		System.out.println(currencyList1);
		
		CurrencyList currencyList2 = CurrencyFactory.createCurrencyList(CurrencyListName.ListWestern);
		System.out.println(currencyList2);
	}
}