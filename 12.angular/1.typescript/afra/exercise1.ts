import * as readline from 'readline';
const rl = readline.createInterface({
input:process.stdin,
output:process.stdout
});
interface jobs{
    jobtitle:string;
    experience:string;
    qualification:string;
}
const initialMenu=():void=>{
    console.log("Welcome! Please select an option:");
    console.log("1. Login");
    console.log("2. EXit");
    rl.question('Enter your choice: ',(choice:string)=>{
        if(choice==='1'){
            login();
        }else if(choice==='2'){
            exit();
        }else{
            console.log("Invalid Choice...Try again!!!");
            initialMenu();
        }
    });
};

function login(){
  rl.question('Enter Username: ', (username:string)=>{
    rl.question('Enter password: ',(password:string)=>{
     if(username=='admin' && password=='admin123'){
      loggedInMenu();
     }else{
        console.log("Invalid Username and Password");
        login();
     }
    });
  });
}

function loggedInMenu(){
    console.log("Logged in Menu\n1.All Jobs\n2.My Applications");
    rl.question('Enter your choice: ',(choice:string)=>{
        if(choice==='1'){
            allJobs();
        }else if(choice==='2'){
            myApplication();
        }else{
            console.log("Invalid Choice:");
        loggedInMenu();
        }
    });
}

function allJobs(){
    var joblist:jobs[]=[
        {
            jobtitle:"angular developer",
            experience:"2years",
            qualification:"btech"

        },
        {
            jobtitle:".net ddeveloper",
            experience:"3 years",
            qualification:"Mtech"
        },
        {
            jobtitle:"java developer",
            experience:"2 years",
            qualification:"MCA"
        }
    ];
    console.log("\n...............Job list............\n");
    joblist.forEach(list=>{
        console.log("jobtitle:"+list.jobtitle+" experience:"+list.experience+" qualification:"+list.qualification+"\n");
    })
    redirectMenu();
}
function myApplication(){
    var applicationlist:jobs[]=[
        {
            jobtitle:"angular developer",
            experience:"2years",
            qualification:"btech"

        },
        {
            jobtitle:".net ddeveloper",
            experience:"3 years",
            qualification:"Mtech"
        },
        {
            jobtitle:"java developer",
            experience:"2 years",
            qualification:"MCA"
        }
    ];
    console.log("\n...............Application list............\n");
    applicationlist.forEach(list=>{
        console.log("jobtitle:"+list.jobtitle+" experience:"+list.experience+" qualification:"+list.qualification+"\n");
    })
    redirectMenu();
}

const redirectMenu = (): void => {
    rl.question('Redirect to previous menu? (Y/N): ', (choice: string) => {
      if (choice.toLowerCase() === 'y') {
        initialMenu();
      } else if (choice.toLowerCase() === 'n') {
        exit();
      } else {
        console.log('Invalid choice. Exiting...');
        exit();
      }
    });
  };
function exit(){
    rl.close();
}
initialMenu();