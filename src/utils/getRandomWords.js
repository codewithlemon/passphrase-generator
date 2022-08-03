import dictionary from "./dictionary"

/*
 * Credits to t.888 on StackOverflow for the random number
 * function used below.
 *
 * Source: https://stackoverflow.com/a/55598692/19193225
 */

function randomFloat() {
  return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295
}

export default (wordCount) => {
  const wordsList = []

  const lineNumbers = Array.from(Array(wordCount)).map(() => {
    return Math.floor(randomFloat() * dictionary.length)
  })

  lineNumbers.forEach((lineNumber) => {
    wordsList.push(dictionary[lineNumber])
  })

  return wordsList
}
