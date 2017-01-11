const compose = (...fns) => initial => fns.reduceRight(
  (result, fn) => fn(result),
  initial
)

export default compose
