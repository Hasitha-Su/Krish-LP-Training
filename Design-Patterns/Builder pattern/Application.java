public class Application {

	public static void main(String[] args) {

		// telescoping constructor : 1st approach
		Salarytelescoping1 salarytelescoping1 = new Salarytelescoping1("EMP-TC-1");
		System.out.println(salarytelescoping1);

		// telescoping constructor : 2nd approach
		Salarytelescoping2 salarytelescoping2 = new Salarytelescoping2("EMP-TC-2");
		System.out.println(salarytelescoping2);

		// with builder pattern
		MonthlySalary.MonthlySalaryBuilder builder = new MonthlySalary.MonthlySalaryBuilder("EMP0001", 999.00);
		MonthlySalary monthlySalary = builder.addEmpEmail("johnDoe@gmail.com").addMotorCarAllowance(250.00).build();

		System.out.println(monthlySalary);
	}

}
