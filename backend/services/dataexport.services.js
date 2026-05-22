import UserData from '../model/db.model.js';

export const UserseedData = [
  {
    name: "John",
    email: "johncarry2005@gmail.com",
    age: 21,
    profession: "Accountant",
    isActive: true,
    maritalStatus: "single"
  },
  {
    name: "Sarah",
    email: "sarah.miller@gmail.com",
    age: 28,
    profession: "Software Engineer",
    isActive: true,
    maritalStatus: "married"
  },
  {
    name: "Michael",
    email: "michael.johnson@gmail.com",
    age: 34,
    profession: "Data Analyst",
    isActive: true,
    maritalStatus: "single"
  },
  {
    name: "Emily",
    email: "emily.davis@gmail.com",
    age: 25,
    profession: "Teacher",
    isActive: false,
    maritalStatus: "single"
  },
  {
    name: "David",
    email: "david.wilson@gmail.com",
    age: 42,
    profession: "Project Manager",
    isActive: true,
    maritalStatus: "married"
  },
  {
    name: "Jessica",
    email: "jessica.brown@gmail.com",
    age: 31,
    profession: "Nurse",
    isActive: true,
    maritalStatus: "married"
  },
  {
    name: "Daniel",
    email: "daniel.martinez@gmail.com",
    age: 23,
    profession: "Graphic Designer",
    isActive: false,
    maritalStatus: "single"
  },
  {
    name: "Ashley",
    email: "ashley.anderson@gmail.com",
    age: 29,
    profession: "Marketing Specialist",
    isActive: true,
    maritalStatus: "single"
  },
  {
    name: "Christopher",
    email: "christopher.taylor@gmail.com",
    age: 37,
    profession: "Financial Advisor",
    isActive: true,
    maritalStatus: "married"
  },
  {
    name: "Amanda",
    email: "amanda.thomas@gmail.com",
    age: 26,
    profession: "UX Designer",
    isActive: true,
    maritalStatus: "single"
  },
  {
    name: "Matthew",
    email: "matthew.moore@gmail.com",
    age: 45,
    profession: "Sales Manager",
    isActive: false,
    maritalStatus: "divorced"
  },
  {
    name: "Olivia",
    email: "olivia.jackson@gmail.com",
    age: 22,
    profession: "Student",
    isActive: true,
    maritalStatus: "single"
  },
  {
    name: "James",
    email: "james.white@gmail.com",
    age: 39,
    profession: "Business Analyst",
    isActive: true,
    maritalStatus: "married"
  },
  {
    name: "Sophia",
    email: "sophia.harris@gmail.com",
    age: 33,
    profession: "HR Specialist",
    isActive: false,
    maritalStatus: "single"
  },
  {
    name: "Andrew",
    email: "andrew.clark@gmail.com",
    age: 27,
    profession: "Web Developer",
    isActive: true,
    maritalStatus: "single"
  },
  {
    name: "Megan",
    email: "megan.lewis@gmail.com",
    age: 30,
    profession: "Operations Manager",
    isActive: true,
    maritalStatus: "married"
  },
  {
    name: "Ryan",
    email: "ryan.walker@gmail.com",
    age: 24,
    profession: "IT Support Specialist",
    isActive: true,
    maritalStatus: "single"
  },
  {
    name: "Lauren",
    email: "lauren.hall@gmail.com",
    age: 36,
    profession: "Product Manager",
    isActive: false,
    maritalStatus: "married"
  },
  {
    name: "Brandon",
    email: "brandon.young@gmail.com",
    age: 41,
    profession: "Account Executive",
    isActive: true,
    maritalStatus: "divorced"
  },
  {
    name: "Rachel",
    email: "rachel.king@gmail.com",
    age: 32,
    profession: "Content Strategist",
    isActive: true,
    maritalStatus: "single"
  }
]; 

export const insertSeedData = async () => { 
  try {  
    if (await UserData.countDocuments() === 0) {
      await UserData.insertMany(UserseedData);   
      console.log('Seed data successfully inserted'); 
    }
  } catch (error) { 
    console.log('Error inserting seed data into model'); 
  }
}; 