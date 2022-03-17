/* 
  when you need to manipulate data and
  don't want to impact other tests
*/


let animals = [];

describe("animals in the beginning", () => {

  beforeEach(() => {
    console.log('hello');
    animals = ['lion', 'zebra', 'elefant'];
  })

  it('should add in the array', () => {
    animals.push('cat');
    expect(animals[animals.length - 1]).toBe('cat')
  })

  it('should add in the beginning of array', () => {
    animals.unshift('dog');
    expect(animals[0]).toBe('dog');
  })

  it('length should be 3', () =>{
    expect(animals.length).toBe(3)
  })

})