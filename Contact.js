class Contact{
    firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    addressRegex = RegExp('^[A-Z][a-z]{4,}$');
    cityRegex = RegExp('^[A-Z][a-z]{3,}$');
    stateRegex = RegExp('^[A-Z][a-z]{4,}$');
    zipRegex = RegExp('^[0-9]{6}$');
    phonenumberRegex = RegExp('^[0-9]{2}[0-9]{10}$');
    emailRegex = RegExp('^[0-9a-zA-Z]+([+.-]([a-z0-9A-Z]+))*[@][a-zA-Z0-9]+[.][a-z]{2,4}[,]?([.][a-z]{2,4})?$');

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
      this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    get firstName(){
      return this._firstName;
    }

    set firstName(firstName){
      if(this.firstNameRegex.test(firstName))
        {
          this._firstName=firstName;
        }else{
          throw "Enter valid First Name ";
        }
    }


    get lastName(){
      return this._lastName;
    }

    set lastName(lastName){
        if(this.lastNameRegex.test(lastName))
        {
          this._lastName=lastName;
        }else{
          throw "Enter valid last Name ";
        }
    }

    get address(){
      return this._address;
    }

    set address(address){
        if(this.addressRegex.test(address))
        {
          this._address=address;
        }else{
          throw "Enter valid Address";
        }
    }

    get city(){
      return this._city;
    }

    set city(city){
        if(this.cityRegex.test(city))
        {
          this._city=city;
        }else{
          throw "check your city and Enter valid city ";
        }
    }

    get state(){
      return this._state;
    }

    set state(state){
        if(this.stateRegex.test(state))
        {
          this._state=state;
        }else{
          throw "Enter valid State";
        }
    }

    get zip(){
      return this._zip;
    }

    set zip(zip){
        if(this.zipRegex.test(zip))
        {
          this._zip=zip;
        }else{
          throw "Enter valid Code";
        }
    }

    get phoneNumber(){
      return this._phoneNumber;
    }

    set phoneNumber(phoneNumber){
        if(this.phonenumberRegex.test(phoneNumber))
        {
          this._phoneNumber=phoneNumber;
        }else{
          throw "Enter valid Phone Number";
        }
    }

    get email(){
      return this._email;
    }

    set email(email){
        if(this.emailRegex.test(email))
        {
          this._email=email;
        }else{
          throw "Enter valid Email ";
        }
    }
    toString(){
      return (`First Name: ${this.firstName} \nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip code : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}\n`)
    }

}
let ContactArray=[];
let myContact = new Contact('Prajwal', 'Gunjal', 'Kasarwadi', 'Pune', 'Maharashtra', '411034', '919881640062', 'prajwalgunjal@gmail.com');
ContactArray.push(myContact);
let myContact2 = new Contact('Arpit', 'Patil', 'Rahatni', 'Pune', 'Maharashtra', '411029', '918928038762', 'arpitPatil@gmail.com');
ContactArray.push(myContact2);
let myContact3 = new Contact('John', 'Dooeoe', 'Mumbai', 'Anytown', 'Njsjsjs', '123845', '918928038762', 'johndoe@example.com');
ContactArray.push(myContact3)
// console.log(myContact.toString());
// console.log(myContact2.toString());

ContactArray.Edit=function(name,newname){
  for(let i=0;i<ContactArray.length;i++){
    if(ContactArray[i]._firstName==name){
      ContactArray[i].firstName=newname;
    }
  }
  console.log(ContactArray.toString());
}

ContactArray.delete=function(name){
    for(let i =0;i<ContactArray.length;i++){
      if(ContactArray[i]._firstName==name){
        console.log("Contact found!!!")
        ContactArray.splice(i,1); 
        // delete ContactArray[i];   this is another method 
        /// 1 is use to specify how much element you want to remove if 1 then 1 element will remove 
        console.log("Contact delete !!!")
      }
    }
    console.log(ContactArray.toString());
}
ContactArray.FindNumberOfcontact=function(){

}



ContactArray.Edit("Prajwal","Praaajjjwwwaaalll");
ContactArray.delete("Praaajjjwwwaaalll");
const count = ContactArray.reduce((count, contacts) => {
  return count+= 1;
}, 0);
console.log("Number of contacts: ${count}");
ContactArray.FindNumberOfcontact;

// let ContactArray=[];
// let myContact = new Contact('Prajwal', 'Gunjal', 'Kasarwadi', 'Pune', 'Maharhtra', '411034', '919881640062', 'prajwalgunjal@gmail.com');
// ContactArray.push(myContact);
// let myContact2 = new Contact('Arpit', 'Patil', 'Rahatni', 'Pune', 'Maharhtra', '411029', '918928038762', 'arpitPatil@gmail.com');
// ContactArray.push(myContact2);
// console.log(myContact.toString());
// console.log(myContact2.toString());


// ContactArray.Edit=function(name,newname){
//   for(let i=0;i<ContactArray.length;i++){
//     if(ContactArray[i]._firstName==name){
//       ContactArray[i].firstName="Praaajjjwwwaaalll";
//     }
//   }
//   console.log(myContact.toString());
// }

// ContactArray.Edit("prajwal","Praaajjjwwwaaalll");