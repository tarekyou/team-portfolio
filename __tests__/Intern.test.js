const Intern = require("../lib/Intern");

test('school from object', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org'  
    const school = 'anyschool'
    const employ = new Intern(name, id, email, school)
    expect(employ.school).toBe(school)
})


test('test getSchool()', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org'  
    const school = 'anyschool'
    const employ = new Intern(name, id, email, school)
    expect(employ.getSchool()).toBe(school);
})

test('adjust getRole to render Intern', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org'  
    const school = 'anyschool'
    const role = "Intern";
    const employ = new Intern(name, id, email, school, role)
    expect(employ.getRole()).toBe(role);
})

