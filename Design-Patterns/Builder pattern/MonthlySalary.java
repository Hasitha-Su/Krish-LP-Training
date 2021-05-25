

//concrete class
public class MonthlySalary {

	private final String empId; // required
	private final Double basicSalary; // required
	private final String empEmail; 	// optional
	private final Double motorCarAllowance; // optional
	private final Double bonus; 	// optional

	// constructor
	public MonthlySalary(MonthlySalaryBuilder builder) {

		this.empId = builder.empId;
		this.empEmail = builder.empEmail;
		this.basicSalary = builder.basicSalary;
		this.motorCarAllowance = builder.motorCarAllowance;
		this.bonus = builder.bonus;
	}

	// Inner static class
	// Builder class
	public static class MonthlySalaryBuilder {

		// arguments from outer class
		private String empId;
		private String empEmail;
		private Double basicSalary;
		private Double motorCarAllowance;
		private Double bonus;

		public MonthlySalaryBuilder() {}

		// get instance of monthly salary
		public MonthlySalary build() {
			// constructor of monthly salary
			// builder instance is passed as parameter
			return new MonthlySalary(this);
		}

		// required parameter
		public MonthlySalaryBuilder(String empId, Double basicSalary) {
			this.empId = empId;
			this.basicSalary = basicSalary;
		}
	
		//below methods might look like setters or constructors but they are not
		
		//set value of employee email
		public MonthlySalaryBuilder addEmpEmail(String empEmail) {
			this.empEmail = empEmail;
			return this;
		}

		//set value of motor car allowance
		public MonthlySalaryBuilder addMotorCarAllowance(Double motorCarAllowance) {
			this.motorCarAllowance = motorCarAllowance;
			return this;
		}

		//set value of bonus
		public MonthlySalaryBuilder adddBonus(Double bonus) {
			this.bonus = bonus;
			return this;
		}
	}

	@Override
	public String toString() {
		return "Employee Salary (Builder) - Id: " + empId + " Email: " + empEmail + " Basic salary: " + basicSalary
				+ " Motor car allowance: " + motorCarAllowance + " Bonus: " + bonus;
	}
}