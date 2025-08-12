function typeWriter({
  elementId,
  texts,
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  loop = true
}) {
  const el = document.getElementById(elementId);
  const cursor = document.getElementById('cursor');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    el.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, deletingSpeed);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, pauseDuration);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
      }
    }
  }

  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0'? '1': '0';
  }, 500);

  type();
}

document.addEventListener('DOMContentLoaded', () => {
  typeWriter({
    elementId: 'typewriter',
    texts: [
      "Maryland Data Science Grad",
      "Data-driven Problem Solver",
      "UX- Focused Designer & Developer"
      "Cyberecurity Professional"
    ]
  });
});
