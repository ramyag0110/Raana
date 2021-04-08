class Employee{
    #age=30; //private 

    getAge(){ // getter : used to return value of a private field
        return this.#age;
    }

    setAge(age){ //setter : used to update value of a private field
        if (age<20) {
            console.log("Employee age must be greater than or equal 20");            
        }else if (age>65) {
            console.log("Employee age must be less than or equal 65");            
        }else{
            this.#age=age;
            console.log("Employee age updated to "+this.#age);            
        }
    }
}

let emp1 = new Employee()
console.log(emp1.getAge())
emp1.setAge(19)
console.log(emp1.getAge())
emp1.setAge(66)
console.log(emp1.getAge())
emp1.setAge(35)
console.log(emp1.getAge())
       



