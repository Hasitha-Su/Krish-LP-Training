package list.currency;

import java.util.ArrayList;
import java.util.List;
import service.currency.Currency;

public abstract class CurrencyList {
	
	protected List<Currency> currencyExchangeList = new ArrayList<>();
	
	public CurrencyList() {
		createCurrencyList();
	}
	
	protected abstract void createCurrencyList();
	
	@Override
	public String toString() {

		return "CurrencyList [currencyExchangeList=" + currencyExchangeList + "]";

	}


}



