let fullName=prompt("Enter your full name and I will generate your username");
fullName=fullName.replaceAll(" ","");
fullName=fullName.toLowerCase();
let username=`@`.concat(fullName.concat(String(fullName.length)));
alert(`Your username is : ${username}`);