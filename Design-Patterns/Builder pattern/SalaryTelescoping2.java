/**
 * passing null types directly in the constructor
 */
public class SalaryTelescoping2 {

	String empId;
	String empEmail;
	Double basicSalary;
	Double motorCarAllowance;
	Double bonus;

	public SalaryTelescoping2(String empId, String empEmail, Double basicSalary, Double motorCarAllowance,
			Double bonus) {

		this.empId = empId;
		this.empEmail = empEmail;
		this.basicSalary = basicSalary;
		this.motorCarAllowance = motorCarAllowance;
		this.bonus = bonus;
	}

	public SalaryTelescoping2(String empId, String empEmail, Double basicSalary, Double motorCarAllowance) {
		this(empId, empEmail, basicSalary, motorCarAllowance, null);
	}

	public SalaryTelescoping2(String empId, String empEmail, Double basicSalary) {
		this(empId, empEmail, basicSalary, null);
	}

	public SalaryTelescoping2(String empId, String empEmail) {
		this(empId, empEmail, null);
	}

	public SalaryTelescoping2(String empId) {
		this(empId, null);
	}

	@Override
	public String toString() {
		return "Employee Salary (telescoping-2) - Id: " + empId + " Email: " + empEmail + " Basic salary: "
				+ basicSalary + " Motor car allowance: " + motorCarAllowance + " Bonus: " + bonus;
	}
}