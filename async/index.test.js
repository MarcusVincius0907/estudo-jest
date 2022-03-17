const fetchData = require('./index.js');

it('should validate todo', async () => {
  const id = 1;
  const todo = await fetchData(id);
  expect(todo).toEqual({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  })
})