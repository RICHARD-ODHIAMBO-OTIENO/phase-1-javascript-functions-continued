// creating a fuction called saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

// create a function called mondaywork
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

// Creation of a function known as wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }