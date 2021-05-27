// //////////////////////////////
// // CLASSES
// // Code goes here!
// abstract class Department {
//   static fiscalYear = 2020;
//   // private name: string;
//   // private id: string;
//   protected employees: string[] = [];
//   constructor(protected readonly id: string, public name: string) {
//     // this.name = name;
//     // this.id = id;
//   }

//   static createEmployee(name: string) {
//     return { name: name };
//   }

//   abstract describe(this: Department): void;

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }

//   describe() {
//     console.log("IT Department- ID: " + this.id);
//   }
// }

// class AccountingDepartment extends Department {
//   private lastReport: string;
//   private static instace: AccountingDepartment;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }

//     throw new Error("No report found!");
//   }

//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error("Please pass in a valid report");
//     }

//     this.addReport(value);
//   }

//   private constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }

//   static getInstance() {
//     if (AccountingDepartment.instace) {
//       return this.instace;
//     }

//     this.instace = new AccountingDepartment("D1", []);
//     return this.instace;
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }

//   describe() {
//     console.log("Accountig Department-ID : " + this.id);
//   }

//   printReports() {
//     console.log(this.reports);
//   }

//   addEmployee(employee: string) {
//     if (employee === "Henry") {
//       return;
//     }

//     return this.employees.push(employee);
//   }
// }

// const employee1 = Department.createEmployee("Neur");
// console.log(employee1);
// console.log(Department.fiscalYear);

// const it = new ITDepartment("d1", ["tim"]);
// it.addEmployee("Henry");
// it.addEmployee("John");

// it.describe();
// it.printEmployeeInformation();
// console.log(it);

// const accounting = AccountingDepartment.getInstance();

// accounting.addReport("something went wrong...");
// accounting.mostRecentReport = "End of year report";
// console.log(accounting.mostRecentReport);
// accounting.printReports();
// accounting.addEmployee("Henry");
// accounting.addEmployee("John");
// accounting.describe();

// console.log(accounting);
// accounting.printEmployeeInformation();
