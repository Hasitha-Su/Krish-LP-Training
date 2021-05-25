public class Application {

	public static void main(String[] args) {

		// telescopic constructor : 1st approach
		SalaryTelescopic1 salaryTelescopic1 = new SalaryTelescopic1("EMP-TC-1");
		System.out.println(salaryTelescopic1);

		// telescopic constructor : 2nd approach
		SalaryTelescopic2 salaryTelescopic2 = new SalaryTelescopic2("EMP-TC-2");
		System.out.println(salaryTelescopic2);

		// with builder pattern
		MonthlySalary.MonthlySalaryBuilder builder = new MonthlySalary.MonthlySalaryBuilder("EMP0001", 999.00);
		MonthlySalary monthlySalary = builder.addEmpEmail("johnDoe@gmail.com").addMotorCarAllowance(250.00).build();

		System.out.println(monthlySalary);
	}

}
