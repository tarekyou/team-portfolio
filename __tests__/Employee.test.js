
const Employee = require('../lib/Employee')

test('start employee object',() =>{
    const employ = new Employee();
    expect(typeof(employ)).toBe("object")
} )


test('get employee name from the object', () => {
    const name = 'anyname'
    const employ = new Employee(name)
    expect(employ.name).toBe(name)
})

test('get employee ID', () => {
    const name = 'anyname'
    const id = 1
    const employ = new Employee(name, id)
    expect(employ.id).toBe(id)
})

test ('get employee email', ()=> {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org'
    const employ = new Employee(name, id, email)
    expect(employ.email).toBe(email)
})

test('test getName()', () => {
    const name = 'anyname'
    const employ = new Employee(name)
    expect(employ.getName()).toBe(name)
  });
  
  test('test getId()', () => {
    const name = 'anyname'
    const id = 1
    const employ = new Employee(name, id)
    expect(employ.getId()).toEqual(expect.any(Number))
  });
  

  test('test getEmail()', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org'
    const employ = new Employee(name, id, email)
    expect(employ.getEmail()).toBe(email)
  });
  
  test('getRole()', () => {
    const employ = new Employee() 
    const role = "Employee";
    expect(employ.getRole()).toBe(role);
  });