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
})

//video: https://www.youtube.com/watch?v=ajiAl5UNzBU