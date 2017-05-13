// Converts a URL Query String into an object map
function convertQueryToMap(query) {
if(!query) return {};
  let resultMap = {}
  let queries = query.split('&');
  for(let i = 0; i < queries.length; i++){
    let params = queries[i].split('.');
    for(let v = 0; v < params.length; v++){
      if(params[v].indexOf('%20') >= 0){
        params[v] = params[v].slice(0, params[v].indexOf('%20')) + ' ' + params[v].slice((params[v].indexOf('%20') + 3), params[v].length);
      }
      if(params[v].indexOf('%3D') >= 0){
        params[v] = params[v].slice(0, params[v].indexOf('%3D')) + '=' + params[v].slice((params[v].indexOf('%3D') + 3), params[v].length);
      }
      if(params[v].indexOf('%26') >= 0){
        params[v] = params[v].slice(0, params[v].indexOf('%26')) + '&' + params[v].slice((params[v].indexOf('%26') + 3), params[v].length);
      }
      if(params[v].indexOf('%3F') >= 0){
        params[v] = params[v].slice(0, params[v].indexOf('%3F')) + '?' + params[v].slice((params[v].indexOf('%3F') + 3), params[v].length);
      }
    }
    let current = resultMap;
    for(let b = 0; b < params.length; b++){
      if(b === params.length - 1){
        let keyVal = params[b].split('=');
        current[keyVal.shift()] = keyVal.join('=');
      } else if(!current[params[b]]) {
        current[params[b]] = {};
        current = current[params[b]];
      } else {
        current = current[params[b]];
      }
    }
  }
  return resultMap
}
