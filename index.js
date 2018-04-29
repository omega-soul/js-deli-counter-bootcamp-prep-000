var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  let i = katzDeliLine;
  i=1;
  do {katzDeliLine.push(name);
  } while (i++);
  return (`Welcome, ${name}. You are number ${i} in line.`);  
}

function nowServing(katzDeliLine, name) {
  
}