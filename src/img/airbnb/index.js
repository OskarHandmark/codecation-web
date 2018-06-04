const range = n => Array.from(Array(n).keys())

const images = range(15).map(n => require(`./${n}.webp`));

export default images;