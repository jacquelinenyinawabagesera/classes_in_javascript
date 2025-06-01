1.     // You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), 
// isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole)
//  to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch
//   statements for different roles.

function FeatureToggle(featureName,isEnabled,userGroupAccess){
  this.featureName = featureName;
  this.isEnabled = isEnabled;
  this.userGroupAccess = userGroupAccess;
}

const feature = new FeatureToggle("Dark mode",true,["Admin","Testers","Guests"])

FeatureToggle.prototype.canAccess = function(useRole){
   for(let i =0;i<this.userGroupAccess.length;i++){
    if(this.userGroupAccess[i] == useRole){
      return true
    }
   }
   return false
}

console.log(feature.canAccess("Admin"))
console.log(feature.canAccess("Guest"))


FeatureToggle.prototype.toggleFeature = function(flag){
  this.isEnabled = flag;
  if(flag){
    for(let i = 0;i<this.userGroupAccess.length;i++){
      switch(this.userGroupAccess[i]){
        case 'Admin':
          console.log("Has Access")
          break;
        case 'Testers':
          console.log("Has access")
          break;
        default:
          console.log("Has no access")
          break;
      }
    }
  }
}


feature.toggleFeature(true)







// 2.????? theird method       // In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string),
//  projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
//  then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName,projectDetails,logs){
  this.freelancerName = freelancerName;
  this.projectDetails = projectDetails;
  this.logs = logs;
}



const timeLog = new TimeLog(
  "Jacky Uwase",
  {
    name: "Website Development", 
    hourlyRate: 25               
  },
  [
    { date: "2025-05-20", hoursWorked: 5 },
    { date: "2025-05-21", hoursWorked: 8 },
    { date: "2025-05-22", hoursWorked: 7 },
    { date: "2025-05-23", hoursWorked: 6 },
    { date: "2025-05-24", hoursWorked: 4 },
    { date: "2025-05-25", hoursWorked: 5 },
    { date: "2025-05-26", hoursWorked: 8 },
    { date: "2025-05-27", hoursWorked: 7 },
    { date: "2025-05-28", hoursWorked: 6 },
    { date: "2025-05-29", hoursWorked: 4 },
  ]  
);

TimeLog.prototype.totalEarnings = function(){
  let totalHours = 0;
  for(let i =0;i<this.logs.length;i++){
    totalHours += this.logs[i].hoursWorked
  }
  return totalHours*this.projectDetails.hourlyRate
}


TimeLog.prototype.logsByDateRange = function(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return this.logs.filter(logEntry => {
    const logDate = new Date(logEntry.date);
    return logDate >= start && logDate <= end;
  });
};



console.log(timeLog.totalEarnings())
console.log(timeLog.logsByDateRange("2025-05-25","2025-05-29"))




3.           //   You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email),
//    items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
//    update order status based on payment, and categorize order urgency using switch and conditional statements.


function Order(customer, items, status) {
  this.customer = customer;
  this.items = items;
  this.status = status;
}

const order1 = new Order(
  { 
    name: "Jacky Uwase", 
    email: "jacky.uwase@example.com" 
  },
  [
    { productName: "Perfume", quantity: 3, unitPrice: 50 },
    { productName: "Wireless Headphones", quantity: 2, unitPrice: 120 },
    { productName: "Smartphone Case", quantity: 5, unitPrice: 15 },
    { productName: "Bluetooth Speaker", quantity: 1, unitPrice: 80 }
  ],
  "unPaid"
);

const order2 = new Order(
  {
    name: "Alice Keza",
    email: "alice.keza@example.com"
  },
  [
    { productName: "Mouse", quantity: 1, unitPrice: 60 },
    { productName: "Keyboard", quantity: 1, unitPrice: 150 }
  ],
  "paid"
);

const order3 = new Order(
  {
    name: "Akeza Saloi",
    email: "akeza.saloi@example.com"
  },
  [
    { productName: "Monitor", quantity: 2, unitPrice: 350 },
    { productName: "USB", quantity: 3, unitPrice: 40 }
  ],
  "shipped"
);

Order.prototype.totalCost = function() {
  let total = 0; 
  for (let i = 0; i < this.items.length; i++) {
    total += this.items[i].quantity * this.items[i].unitPrice;
  }
  return `${total} USD`;
};



// Order.prototype.updateStatusBasedOnPayment = function(paymentStatus) {

// };

console.log(order1.totalCost());
console.log(order2.totalCost());
console.log(order3.totalCost());







  



  4.//In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics 
  // (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to 
  // calculate an average score, classify performance level using control flow, and add new feedback based on conditions.



  5.          //Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise),
  //  and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course,
  //  count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

