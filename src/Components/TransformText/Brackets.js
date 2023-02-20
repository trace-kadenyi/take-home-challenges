const Brackets = (str) => {
  const container = [];

  if (str.length === 1) return false;

  for (let i = 0; i < str.length; i++) {
    let popped = container.pop();
    if(str[i] === "(" || str[i] === "[" || str[i] === "{") {
      container.push(str[i]);
    } else if (str[i] === "(") {
      if (popped !== "(") return false;
    } else if (str[i] === "[") {
      if (popped !== "[") return false;
    } else if (str[i] === "{") {
      if (popped !== "{") return false;
    }
  }
  if (container.length === 0) {
    return true;
  } else {
    return false;
  }
};