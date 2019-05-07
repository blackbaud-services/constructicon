const delayPromise = (len, toReturn) =>
  new Promise(resolve => setTimeout(() => resolve(toReturn), len))

export default delayPromise
