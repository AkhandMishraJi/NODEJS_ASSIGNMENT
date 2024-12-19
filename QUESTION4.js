const os = require('os')
console.log(`You Are Currently Working On ${os.platform()} OS`);
console.log("Your PC's Hostname Is:",os.hostname());
console.log("Your Machine Is:",os.machine());
console.log(`Total RAM: ${Math.round(os.totalmem()/ (1024 * 1024 * 1024))}GB`);//WE HAVE ROUND OFF THE TOTAL MEMORY BECAUSE IT WILL NOT EXACT NO. , IT WILL BE DECIMAL LIKE 7.9764  
console.log("Tour OS Type:",os.type());
console.log(`Your CPU related Data` ,os.cpus())
console.log("Your Network Interfaces",os.networkInterfaces());