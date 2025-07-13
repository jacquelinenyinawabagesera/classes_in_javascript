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







// // 2.????? third method       // In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string),
// //  projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
// //  then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs) {
  this.freelancerName = freelancerName;
  this.projectDetails = projectDetails;
  this.logs = logs;
}

const timeLog = new TimeLog(
  "Jacky Uwase",
  {
    name: "Website Development",
    hourlyRate: 25,
  },
  [
    { date: "2025-05-20", hoursWorked: 15},
    { date: "2025-05-21", hoursWorked: 8 },
    { date: "2025-05-22", hoursWorked: 7 },
    { date: "2025-05-23", hoursWorked: 6 },
    { date: "2025-05-24", hoursWorked: 4 },
    { date: "2025-05-25", hoursWorked: 5 },
    { date: "2025-05-26", hoursWorked: 8 },
    { date: "2025-05-27", hoursWorked: 7 },
    { date: "2025-05-28", hoursWorked: 6 },
    { date: "2025-05-29", hoursWorked: 4 },
    { date: "2025-05-30", hoursWorked: 5 },
    { date: "2025-05-31", hoursWorked: 8 },
    { date: "2025-06-01", hoursWorked: 7 },
    { date: "2025-06-02", hoursWorked: 36 },
    { date: "2025-06-03", hoursWorked: 4 },
  ]
);

TimeLog.prototype.totalEarnings = function () {
  let totalHours = 0;
  for (let i = 0; i < this.logs.length; i++) {
    totalHours += this.logs[i].hoursWorked;
  }
  return totalHours * this.projectDetails.hourlyRate;
};

TimeLog.prototype.logsByDateRange = function (startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return this.logs.filter((logEntry) => {
    const logDate = new Date(logEntry.date);
    return logDate >= start && logDate <= end;
  });
};

TimeLog.prototype.weeklyHoursExceed40 = function () {
  this.logs.sort((a, b) => new Date(a.date) - new Date(b.date));

  const weeklySummary = [];

  for (let i = 0; i < this.logs.length; i += 5) {
    let weeklyHours = 0;

    let weekEndIndex = i + 4;
    if (weekEndIndex >= this.logs.length) {
      weekEndIndex = this.logs.length - 1;
    }

    for (let j = i; j <= weekEndIndex; j++) {
      weeklyHours += this.logs[j].hoursWorked;
    }

    let statusMessage = "";
    if (weeklyHours > 40) {
      statusMessage = "Exceeds 40 hours";
    } else if (weeklyHours === 40) {
      statusMessage = "Exactly 40 hours";
    } else {
      statusMessage = "Below 40 hours";
    }

    weeklySummary.push({
      week: "Week " + (weeklySummary.length + 1),
      totalHours: weeklyHours,
      status: statusMessage,
    });
  }

  return weeklySummary;
};


console.log("Total Earnings:", timeLog.totalEarnings());
console.log("Logs from 2025-05-25 to 2025-05-29:", timeLog.logsByDateRange("2025-05-25", "2025-05-29"));
console.log("Weekly Hours Summary:", timeLog.weeklyHoursExceed40());






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

Order.prototype.updateStatusBasedOnPayment = function(paymentStatus) {
  if (paymentStatus) {
      this.status = "Paid"; 
  } else {
      this.status = "unpaid"; 
  }
  return this.status;
};

Order.prototype.categorizeOrderByUrgency = function() {
  const statusString = String(this.status).toLowerCase();
  switch (statusString) {
      case 'paid':
          return "High urgency";
      case 'unpaid':
      case 'unPaid':
          return "Medium urgency";
      case 'pending':
          return "Low urgency";
      default:
          return "Unknown urgency";
  }
};

console.log(order1.totalCost());
console.log(order1.categorizeOrderByUrgency());
order1.updateStatusBasedOnPayment(true); 
console.log(order1.categorizeOrderByUrgency()); 






console.log(order1.totalCost());
console.log(order2.totalCost());
console.log(order3.totalCost());

console.log(order1.updateStatusBasedOnPayment(true))
console.log(order2.updateStatusBasedOnPayment(false));
console.log(order3.updateStatusBasedOnPayment(true));


console.log(order1.categorizeOrderByUrgency());
console.log(order2.categorizeOrderByUrgency());
console.log(order3.categorizeOrderByUrgency());








  



  4.//In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics 
  // (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to 
  // calculate an average score, classify performance level using control flow, and add new feedback based on conditions.



  class Employee {
    constructor(id,name,performanceMetrics,feedback){
    this.id = id,
    this.name=name,
    this.performanceMetrics = performanceMetrics,
    this.feedback = feedback
    }
 }
 const firstEmployee = new Employee (27, "Akeza Saloi",{communication:5,efficiency:8,reliability:6},[]);
 console.log(firstEmployee);
 Employee.prototype.calcAverageScore = function (){
 const scores =  Object.values(this.performanceMetrics);
 const totalScores = scores.reduce((a, b) => a + b, 0);
  return totalScores / scores.length;
 }
 console.log(`Your average score is ${firstEmployee.calcAverageScore()}`);
 Employee.prototype.classifyPerformance = function () {
     const avg = this.calcAverageScore();
     if (avg >= 8) {
        return "Excellent work";
     } else if (avg >= 7) {
        return "Good job";
     } else {
        return "Please improve your performance";
     }
  };
  console.log(`Performance level: ${firstEmployee.classifyPerformance()}`);
  Employee.prototype.addFeedback = function (feedbackMessage) {
     const avg = this.calcAverageScore();
     if (avg >= 7) {
        this.feedback.push(feedbackMessage);
        return "Feedback given";
     } else {
        return "No feedback given, employee unqualified";
     }
 };
  console.log(firstEmployee.addFeedback("Excellent work on your project!"));
  console.log(firstEmployee.feedback);
 



  5.          //Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise),
  //  and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course,
  //  count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.


  class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor; 
        this.students = []; 
    }

    addStudent(name, completionStatus) {
        this.students.push({ name, completionStatus });
    }

    getCompletedStudents() {
        return this.students
            .filter(student => student.completionStatus)
            .map(student => student.name);
    }

    countStudentsByExpertise() {
        const expertiseCount = {};
        this.students.forEach(student => {
            const expertise = this.instructor.expertise;
            if (!expertiseCount[expertise]) {
                expertiseCount[expertise] = 0;
            }
            expertiseCount[expertise]++;
        });
        return expertiseCount;
    }

    instructorMessage() {
        const studentCount = this.students.length;
        if (studentCount > 5) {
            return `${this.instructor.name} has a large class with ${studentCount} students.`;
        } else {
            return `${this.instructor.name} has a small class with only ${studentCount} students.`;
        }
    }
}

const instructor = { name: "JOHN", expertise: "Frontend" };
const course = new Course("Das", instructor);

course.addStudent("Jane", true);
course.addStudent("Jame", false);
course.addStudent("Jack", true);
course.addStudent("Jacky", true);
course.addStudent("Joy", false);
course.addStudent("Alice", true);

console.log(course.getCompletedStudents()); 
console.log(course.countStudentsByExpertise()); 
console.log(course.instructorMessage());


  