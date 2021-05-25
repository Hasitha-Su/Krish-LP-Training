// the approach with constructor overloading
public class WithConstructor {

	String empId;
	String empEmail;
	Double basicSalary;
	Double motorCarAllowance;
	Double bonus;

	public WithConstructor(String empId) {
		this.empId = empId;
	}

	public WithConstructor(String empId, String empEmail) {
		this.empId = empId;
		this.empEmail = empEmail;
	}

	public WithConstructor(String empId, String empEmail, Double basicSalary) {
		this.empId = empId;
		this.empEmail = empEmail;
		this.basicSalary = basicSalary;
	}

	public WithConstructor(String empId, String empEmail, Double basicSalary, Double motorCarAllowance) {
		this.empId = empId;
		this.empEmail = empEmail;
		this.basicSalary = basicSalary;
		this.motorCarAllowance = motorCarAllowance;
	}

	public WithConstructor(String empId, String empEmail, Double basicSalary, Double motorCarAllowance, Double bonus) {
		this.empId = empId;
		this.empEmail = empEmail;
		this.basicSalary = basicSalary;
		this.motorCarAllowance = motorCarAllowance;
		this.bonus = bonus;
	}
}