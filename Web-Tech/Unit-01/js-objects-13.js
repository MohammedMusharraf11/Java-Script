let employee = {
    firstName: "John",
    lastName:  "Doe",
    showName: function (){
        alert(this.firstName + '' +this.lastName);
        
    }
}

employee.showName



function Person(fName,lName,age){
    this.firstName = fName,
    this.lastName = lName,
    this.age = age
}
Person.prototype.name = function(){
    alert(this.firstName + "" + this.lastName);
}

var p1 = Person("Mohammed","Musharraf", 20)
p1.name()