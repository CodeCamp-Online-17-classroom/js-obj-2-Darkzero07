const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user);      //{ email: 'cc@gmail.com', isActive: false } isActive has changed value



user = {};
console.log(user);          // Error user already declare


