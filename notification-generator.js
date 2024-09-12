function sendNotification(email) {

    const emailArr = email.split('@',email.length);
    

    if(email.indexOf('@') !== -1 && emailArr.length === 2 && typeof email === 'string' ){
        const userName = emailArr[0];
        const domainName = emailArr[1];
        const mail = userName.concat(' sent you an email from ', domainName)  
        return mail;
    }else{
        return "Invalid Email";
    }
    
}

const notification = sendNotification('mehedee.cu.soc@gmail.com')

console.log(notification);
    