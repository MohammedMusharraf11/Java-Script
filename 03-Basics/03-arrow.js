const user = {
    username: "John Doe",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to the website`);
        
    }
}

user.welcomeMsg()