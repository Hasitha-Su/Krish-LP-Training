package bank.service.account;

public class AllUsersAccount {

	private static volatile AllUsersAccount AllUsersAccount;

	// monthly free texts available
	private int monthlyFreetexts = 100;

	public static AllUsersAccount getAccountInstance() {
		if (AllUsersAccount == null) {

			synchronized (AllUsersAccount.class) {

				if (AllUsersAccount == null) {
					AllUsersAccount = new AllUsersAccount();
				}
			}
		}
		return AllUsersAccount;
	}

	public void sendText() {
		monthlyFreetexts -= 1;
	}

	public int getAvailableFreetexts() {
		return monthlyFreetexts;
	}
}