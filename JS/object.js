function createPerson(){
	var person= new Object();
	//person.name = 'Gauri';
	person.name = prompt('user with name');
	person.designation = 'Associate';
    person.phone = 12345;
	person.dateofjoin = 26/09/2020;
	return person;
}
var gauri = createPerson();

