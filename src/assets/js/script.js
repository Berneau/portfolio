document.addEventListener("DOMContentLoaded", onDomLoad);

function onDomLoad() {
  setTimeout(cycleWords, 1000);
}

function cycleWords() {
  setNextWord();
  setTimeout(cycleWords, 3000);
}

function setNextWord() {
  const WORDS = {
    develop: 'create',
    create: 'build',
    build: 'love',
    love: 'enhance',
    enhance: 'develop'
  }
  
  var elem = document.getElementById('text-cycle');
  if (!elem) return;
  elem.classList.remove('fadein');
  elem.classList.add('fadeout');
  
  setTimeout(function() {
    elem.classList.remove('fadeout');
    elem.innerHTML = WORDS[elem.innerHTML]
    elem.classList.add('fadein');
  }, 450);
}
