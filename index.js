function scuberGreetingForFeet(numberInFeet){
  if(numberInFeet <= 400) {
    return 'This one is on me!'
  }
  else if(numberInFeet > 400 && numberInFeet <= 2000) {
    return `That will be twenty bucks.`
  }
  else if(numberInFeet > 2000 && numberInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if(numberInFeet > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC'?"Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(tipInDollars){
  switch(tipInDollars) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
}