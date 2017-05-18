//for the Code Wars kata Pete, the baker, (Part2)

function getMissingIngredients(recipe, added) {
  let divisor = 0
  for(let key in recipe){
    if(added[key]){
      let temp = Math.ceil(added[key] / recipe[key]);
      if(temp > divisor) divisor = temp;
    }
  }
  if(divisor == 0) return recipe;
  let result = {};
  for(let key2 in recipe){
    let nonZero = recipe[key2] * divisor;
    if(added[key2]) nonZero -= added[key2];
    if(nonZero) result[key2] = nonZero;
  }
  return result;
}
