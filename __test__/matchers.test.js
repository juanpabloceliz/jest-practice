//In this file we practice the use of MATCHERS to let us test values in different ways. This is the documentation 'https://jestjs.io/docs/en/using-matchers'

// The function describe make a suit for our tests, it´s a good way to organize the code. The first param is a description and the second is an anonymous function with tests.

describe("We will use common matchers here", () => {
  //We can define variables to test in this place or we can import (in the beginning of the file) functions or piece of code to test, thanks to ECMA6 (2015).

  const plus = (a, b) => {
    return a + b
  }

  // The function test, obviously, is the test. The first param is the name of the test and the second is an anonymous function with the expectation.
  test("toBe uses Objects.is to test exact equality.", () => {
    // The function expect is what we expect of this test, the unique param is what we want to test and the method applied is the comparator with his param (the result).

    expect(plus(1, 1)).toBe(2)
  })

  test("not is the opposite of a matcher", () => {
    expect(plus(2, 2)).not.toBe(5)
  })

  const me = { name: "juan pablo" }
  me["surname"] = "celiz"

  test("toEqual recursively checks every field of an object or array.", () => {
    expect(me).toEqual({ name: "juan pablo", surname: "celiz" })
  })

  test("this will not be to be equal.", () => {
    expect(me).not.toEqual({ name: "lydia", surname: "jones" })
  })
})

describe("We will use truthiness matchers here", () => {
  const isNull = null
  const isUndefined = undefined
  const isTrue = true
  const isFalse = false
  const isOther = "other thing, no matters what type"

  test("toBeNull matches only with null.", () => {
    expect(isNull).toBeNull()
  })

  test("this will not be null", () => {
    expect(isOther).not.toBeNull()
  })

  test("toBeUndefined matches only with undefined.", () => {
    expect(isUndefined).toBeUndefined()
  })

  test("this will not be undefined", () => {
    expect(isOther).not.toBeUndefined()
  })

  test("toBeDefined is the opposite toBeUndefined", () => {
    expect(isNull).toBeDefined()
  })

  test("toBeTruthy matches with true value", () => {
    expect(isTrue).toBeTruthy()
  })

  test("this will not be to be truthy", () => {
    expect(isOther).toBeTruthy()
  })

  test("toBeFalsy matches with false value", () => {
    expect(isFalse).toBeFalsy()
  })

  test("this will not be to be falsy", () => {
    expect(isOther).toBeTruthy()
  })
})
