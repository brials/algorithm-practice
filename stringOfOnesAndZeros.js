function stringQs(string, index){
  if(!index) index = 0;
  if(index === string.length) {
    console.log(string);
    return;
  }
  if(string[index] === '?'){
    string = string.substr(0,index) + '0' + string.substr(index+1);
    stringQs(string, index + 1);
    string = string.substr(0,index) + '1' + string.substr(index+1);
    stringQs(string, index + 1);
  } else {
    stringQs(string, index + 1);
  }
}
