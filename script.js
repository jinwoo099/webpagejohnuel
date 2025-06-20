const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const slides = Array.from(slider.querySelectorAll('.slide'));
        const dots = Array.from(slider.parentElement.parentElement.querySelectorAll('.slider-dot'));
        let currentIndex = 0;

        function updateSlides(newIndex) {
            // Update slides
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next');
                if (index === newIndex) {
                    slide.classList.add('active');
                } else if (index === (newIndex + 1) % slides.length) {
                    slide.classList.add('next');
                } else if (index === (newIndex - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                }
            });

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === newIndex);
            });

            currentIndex = newIndex;
        }

        // Initialize
        updateSlides(0);

        // Add click handlers to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlides(index);
            });
        });

        // Next button handler
        const nextBtn = slider.parentElement.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                updateSlides((currentIndex + 1) % slides.length);
            });
        }

        // Previous button handler
        const prevBtn = slider.parentElement.querySelector('.prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                updateSlides((currentIndex - 1 + slides.length) % slides.length);
            });
        }
    });
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const all = document.querySelectorAll("body *:not(script):not(style)");

    all.forEach(el => {
      if (el.children.length === 0 && el.textContent.trim().length > 0) {
        const original = el.textContent;
        if (query !== "") {
          const regex = new RegExp(`(${query})`, "gi");
          el.innerHTML = original.replace(regex, "<mark>$1</mark>");
        } else {
          el.innerHTML = original; // reset
        }
      }
    });
  });
  function openPopup() {
  document.getElementById("developerPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("developerPopup").style.display = "none";
}

