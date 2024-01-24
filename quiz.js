

function submitQuiz() {
  const Answers = {
    q1: document.querySelector('input[name="q1"]:checked').value,
    q2: document.querySelector('input[name="q2"]:checked').value,
    q3: document.querySelector('input[name="q3"]:checked').value,
    q4: document.querySelector('input[name="q4"]:checked').value,
  };

  let score = 0;
  let percent = 0;
  let total = 4;

  if (Answers.q1 === 'c') score++;
  if (Answers.q2 === 'a') score++;
  if (Answers.q3 === 'd') score++;
  if (Answers.q4 === 'a') score++;

  percent = score/total*100;

  const percentContainer = document.getElementById('percent');
  const resultContainer = document.getElementById('result');
  const messageContainer = document.getElementById('message');

  if (score === 4) {
      messageContainer.innerHTML = `Way to go!`;
      messageContainer.style.display = 'block';
  }
  

  resultContainer.innerHTML = `You scored ${score} out of 4`;
  percentContainer.innerHTML = `${percent.toFixed(2)}%`;

document.querySelector('.quiz-container').style.display = 'none';
document.querySelector('.result-container').style.display = 'block';
document.querySelector('.percent-container').style.display = 'block'; 
document.querySelector('.message-container').style.display = 'block'; 

}

