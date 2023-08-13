const lyrics = 'tumi bondu kala pakhi. ami jeno ki. bosontokale tomay bolte parii ni';
const parts = lyrics.split(' ')
// console.log(parts)

const sentence = lyrics.split('.')
// console.log(sentence)

const chars = lyrics.split('')
// console.log(chars)

const lines = [
    'tumi bondu kala pakhi',
    'ami jeno ki',
    'bosontokale tomay bolte parii ni',
    'sada sada kala kala ',
    'rong jomeche sada kala'
  ]
  console.log(lines.join('. '))