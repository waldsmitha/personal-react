const sources = import.meta.glob(['./assets/*.{jpg,JPG,png,PNG,svg}', '!./assets/{email,email-bl,insta,insta-bl,twitter,twitter-bl,down-arrow,react}.svg'], { eager: true, query: '?url', import: 'default' })
const files = [
  ['crowned.JPG', 'Crowned', 'spotlight', ['#160909', '#ff6c13', '#8128ff']],
  ['jimi.png', 'Jimi', 'portal', ['#251258', '#d1ff00', '#ef4aff']],
  ['peaceful-protest.jpg', 'Peaceful Protest', 'spotlight', ['#290d22', '#f33612', '#3450e8']],
  ['fates.jpg', 'Fates', 'spotlight', ['#051e27', '#bc8c34', '#047e89']],
  ['corgi.PNG', 'Corgi', 'portal', ['#153127', '#ff4eab', '#9aff00']],
  ['wolf.svg', 'Wolf', 'wash', ['#175145', '#ffb500', '#00df97']],
  ['swan.svg', 'Swan', 'portal', ['#260a32', '#ff374c', '#3743ff']],
  ['llama.svg', 'Llama', 'wash', ['#1e356e', '#72f5a3', '#9652ff']],
  ['bonchoix.jpg', 'Bonchoix', 'spotlight', ['#16140c', '#d8a820', '#837523']],
  ['socio.png', 'Socio', 'portal', ['#092a30', '#20efe1', '#c83448']],
  ['Hero.png', 'Hero', 'portal', ['#102245', '#005dff', '#25ff6d']],
]

export const artworks = files
  .filter(([file]) => sources[`./assets/${file}`])
  .map(([file, title, environment, colors]) => ({ title, environment, colors, url: sources[`./assets/${file}`] }))
