const text = `To see all my projects and works please click on this link to visit my <a href="https://github.com/cooljoe623">GITHUB</a>  or contact me via my #contacts.
    `.split('.\n').filter(Boolean); // Split text into sentences and remove empty lines

    const typingSpeed = 55; // Speed in milliseconds per character

    const typingParagraph = document.getElementById("projects");
    let sentenceIndex = 0;
    let charIndex = 0;

    function typeText() {
      if (sentenceIndex < text.length) {
        if (charIndex < text[sentenceIndex].length) {
          typingParagraph.innerHTML += text[sentenceIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, typingSpeed);
        } else {
          typingParagraph.innerHTML += "<br><br>"; // Add extra line breaks between sentences
          sentenceIndex++;
          charIndex = 0;
          setTimeout(typeText, typingSpeed);
        }
      }
    }

    typeText();