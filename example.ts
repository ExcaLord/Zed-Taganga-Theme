// The warm colors of Taganga sunsets
const tagangaDream = {
  colors: ['coral', 'turquoise', 'gold'],
  inspiration: 'Caribbean coastal village',
  feeling: 'peaceful and creative'
};

function createMagic() {
  return tagangaDream.colors.map(color => 
    `${color} like the ${tagangaDream.inspiration}`
  );
}