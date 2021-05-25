/**
 * in this approach constructor refer to the previous constructor  
 *
 */
public class SalaryTelescoping1 {

	String empId;
	String empEmail;
	Double basicSalary;
	Double motorCarAllowance;
	Double bonus;

	public SalaryTelescoping1(String empId){
		this.empId = empId;
	}
	
	public SalaryTelescoping1(String empId, String empEmail){
		this(empId);
		this.empEmail = empEmail;	
	}

	public SalaryTelescoping1 (String empId, String empEmail, Double basicSalary){
		this(empId, empEmail);
		this.basicSalary = basicSalary;
	}

	public SalaryTelescoping1 (String empId, String empEmail, Double basicSalary, Double motorCarAllowance){
		this(empId, empEmail, basicSalary);
		this.motorCarAllowance = motorCarAllowance;
	}

	public SalaryTelescoping1 (String empId, String empEmail, Double basicSalary, Double motorCarAllowance, Double bonus){
		this(empId, empEmail, basicSalary, motorCarAllowance);
		this.bonus = bonus;
	}

	@Override
	public String toString(){
		return "Employee Salary (telescoping-1) - Id: "+empId+" Email: "+empEmail+" Basic salary: "+basicSalary+" Motor car allowance: "+motorCarAllowance+" Bonus: "+bonus;
	}
}