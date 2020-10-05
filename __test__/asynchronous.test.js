//In this file we practice the use of ASYNCHRONOUS to let us test values in different ways. This is the documentation 'https://jestjs.io/docs/en/asynchronous'

import axios from "axios"

//We will use axios because it's the best way to do the connection with API.

describe("Testing a callback", () => {
  const myCallback = (callback) =>
    setTimeout(() => callback("The done function it´s working"), 1000)

  // The DONE function advise Jest that the callback has already been executed, so in this moment Jest will finish the test.

  test("Testing with done function for callback", (done) => {
    const insideCallback = (data) => {
      expect(data).toBe("The done function it´s working")
      done()
    }
    myCallback(insideCallback)
  })
})

describe("Testing a promise", () => {
  // This is our promise, getting data from Rick&Morty API.

  const getData = () => {
    return axios.get("https://swapi.dev/api/people/1/").then(({ data }) => data)
  }

  test("Testing with done function for promise", (done) => {
    getData().then((data) => {
      console.log
      expect(data.name).toMatch(/Luke Skywalker/)
      done()
    })
  })
})
