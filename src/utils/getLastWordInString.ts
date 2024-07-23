export const getLastWordInString = (string: string): [string, string] => {
  const wordsInside = string.split('\n')
  const allButLast = wordsInside.slice(0, -1).join('\n')
  const lastWord = wordsInside.length > 0 ? wordsInside[wordsInside.length - 1] : ''
  return [allButLast, lastWord]
}
