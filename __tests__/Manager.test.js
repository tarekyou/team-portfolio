const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test('Office number', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org' 
    const office = 100;
    const employ = new Manager(name, id, email, office)
    expect(employ.office).toEqual(expect.any(Number))
});

test(' test getRole() to render Manager', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org' 
    const office = 100;
    const role = "Manager"
    const employ = new Manager(name, id, email, office, role)  
    expect(employ.getRole()).toBe(role)
});

test('test getOffice()', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org' 
    const office = 100;
    const employ = new Manager(name, id, email, office)  
    expect(employ.getOffice()).toEqual(expect.any(Number))
});