package bank.service.user;

import java.util.concurrent.TimeUnit;

import bank.service.account.AllUsersAccount;

public class Application {

	public static void main(String[] args) {

		long start, end;

		start = System.currentTimeMillis();
		AllUsersAccount userAccount = AllUsersAccount.getAccountInstance();
		end = System.currentTimeMillis();

		System.out.println("Time consumed by Singleton 1st instatiation :" + (end - start));

		start = System.currentTimeMillis();
		AllUsersAccount userAccount2 = AllUsersAccount.getAccountInstance();
		end = System.currentTimeMillis();

		System.out.println("Time consumed by Singleton 2st instatiation :" + (end - start));

		System.out.println(userAccount.getAvailableFreetexts());
		userAccount.sendText();
		System.out.println(userAccount.getAvailableFreetexts());

		userAccount2.sendText();
		userAccount2.sendText();
		System.out.println(userAccount2.getAvailableFreetexts());

	}
}
