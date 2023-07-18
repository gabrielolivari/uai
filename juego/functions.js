var sequence = [];
var sequenceClicked = [];
var level = 0;
var score = 0;
var errors = 0;
var time;
var playingSequence = false;
var hours = 0;
var minutes = 0;
var seconds = 0;

function addSequence() {
  if (sequence.length == 0) {
    startTime()
  }
  var random = Math.floor(Math.random() * 4)
  sequence.push(random)
  addLevel()
  cleanSequenceClicked()
  startSequence(0)
}

function startSequence(index) {
  playingSequence = true;
  document.getElementById('button-' + sequence[index]).style.opacity = 0.7
  setTimeout(function() {
    document.getElementById('button-' + sequence[index]).style.opacity = 1
    var newIndex = index + 1
    if (newIndex < sequence.length) {
      setTimeout(() => {
        startSequence(newIndex)
      }, 1500);
    } else {
      playingSequence = false;
    }
  }, 1000);
}

function clickButton(buttonNumber) {
  if (!playingSequence) {
    sequenceClicked.push(buttonNumber);
    if (sequenceClicked.length <= sequence.length) {
      var currentIndex = sequenceClicked.length - 1
      if (sequenceClicked[currentIndex] == sequence[currentIndex]) {
        addScore()
      } else {
        addError()
      }
      document.getElementById('button-' + buttonNumber).style.opacity = 0.7
      setTimeout(function() {
        document.getElementById('button-' + buttonNumber).style.opacity = 1
      }, 250);
    }
  }
}

function addLevel() {
  level += 1
  document.getElementById('score-sequence').innerText = level
}

function cleanLevel() {
  level = 0
  document.getElementById('score-sequence').innerText = level
}

function addError() {
  errors += 1
  document.getElementById('score-negative').innerText = errors
}

function cleanError() {
  errors = 0
  document.getElementById('score-negative').innerText = errors
}

function addScore() {
  score += 1
  document.getElementById('score').innerText = score
}

function cleanScore() {
  score = 0
  document.getElementById('score').innerText = score
}

function cleanSequenceClicked() {
  sequenceClicked = []
}

function startTime() {
  time = setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    document.getElementById('score-time').innerText = hours + ':' + minutes + ':' + seconds
  }, 1000);
}

function restartGame() {
  if (!playingSequence) {
    // Restart sequences
    sequence = []
    sequenceClicked = []
    // Restart level
    cleanLevel()
    // Restart scores
    cleanScore()
    cleanError()
    // Restart time
    clearInterval(time);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('score-time').innerText = '00:00:00'
  } else {
    alert('Debes esperar a que termine la secuencia para reiniciar el juego')
  }
}