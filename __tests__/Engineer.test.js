const Engineer = require('../lib/Engineer')




test('render github username', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org' 
    const github = 'anyuser'
    const employ = new Engineer(name, id, email, github);
    expect(employ.github).toBe(github);
});

test('test getGithub()', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org' 
    const github = 'anyuser'
    const employ = new Engineer(name, id, email, github);
    expect(employ.getGithub()).toBe(github);
});
  
test('change getRole to render Engineer', () => {
    const name = 'anyname'
    const id = 1
    const email = 'any@any.org' 
    const github = 'anyuser'
    const role = 'Engineer'
    const employ = new Engineer(name, id, email, github, role)
    expect(employ.getRole()).toBe(role);
});
  

  