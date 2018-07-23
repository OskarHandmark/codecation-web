const range = n => Array.from(Array(n).keys())

const images = range(9).map(n => require(`./${n}.jpg`));

export default images;