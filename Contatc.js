class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    
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
}
let myContact = new Contact('prajwal', 'gunjal', 'Pune', 'Pune', 'maharhtra', '411034', '9881640062', 'prajwalgunjal@.com');
console.log(myContact);