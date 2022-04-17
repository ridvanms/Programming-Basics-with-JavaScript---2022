function architect(value){
  let projects = Number(value[1]);
  const aProject = 3;
  let nHours = aProject * projects;
  
  let string = `The architect ${value[0]} will need ${nHours} hours to complete ${projects} project/s.`;
  console.log(string);
}
