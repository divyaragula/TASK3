// Image Carousel Logic
const images = [
    "https://via.placeholder.com/600x300?text=Image+1",
    "https://via.placeholder.com/600x300?text=Image+2",
    "https://via.placeholder.com/600x300?text=Image+3"
  ];
  
  let currentIndex = 0;
  const carouselImg = document.querySelector('.carousel-img');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImg.src = images[currentIndex];
  });
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImg.src = images[currentIndex];
  });
  
  // Fetch Joke API Logic
  function fetchJoke() {
    const jokePara = document.getElementById('joke');
    jokePara.textContent = 'Loading joke...';
    
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        jokePara.textContent = `${data.setup} - ${data.punchline}`;
      })
      .catch(error => {
        jokePara.textContent = 'Failed to fetch a joke. Try again.';
      });
  }
  
