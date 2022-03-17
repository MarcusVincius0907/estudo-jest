//video: https://www.youtube.com/watch?v=ajiAl5UNzBU

const sum = require('./sum.js');

describe("example test 1", () => {
  it('adds 1 + 2 = 3', () => {
    expect(sum(1,2)).toBe(3);
  })

  it('object assingment', () => {
    const obj = {};
    expect(obj).toEqual({});
  })
})

describe("truthy or falsy", () => {
  it('null', ()=>{
    const n = null;

    //not recomended use more than one expect
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).not.toBeUndefined();
    expect(n).toBeNull();
  })
})

describe("numbers", () => {
  it('2 + 2', () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
  })

  it('adding floats', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.2999999)
  })

})

describe("string", () => {
  it('there is no I in team', () => {
    expect("team").not.toMatch(/I/)
  })
})

describe("arrays", () => {
  it('check if contain', () => {
    const arr = [
      'banana', 'apple', 'grape'
    ]
    expect(arr).toContain('banana');
  })
})

function compileSomething(){
  throw new Error("error to compile");
}

describe("exceptions", () => {
  it("compile something", () => {
    expect(() => compileSomething()).toThrow()
  })
})

