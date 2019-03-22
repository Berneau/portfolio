document.addEventListener("DOMContentLoaded", onDomLoad);

function onDomLoad() {
  setTimeout(cycleWords, 1000)
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
  elem.innerHTML = WORDS[elem.innerHTML]
}
