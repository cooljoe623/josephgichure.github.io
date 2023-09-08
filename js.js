const text = `root$$$:
      NAME: Ndegwa Joseph Gichure  (cooljoe623).
      root$$$: Date Of Birth: 01/July/2004 0816hrs Thur.

      root$$$: CONTACT: +254 758 213 683.
      root$$$: PROFESSION: FULL STACK SOFTWARE-ENGINEER.
      root$$$: EXPERIENCE: 3+ years.
      root$$$: RESIDENCE: Kenya, Nairobi.

      root$$$: PARENTS/KIN: Patrick Gicheru & Mary Gicheru.
      root$$$: CONTACT: +254 722 958 042 & +254 714 691 203.

      root$$$: SIBLING: Patrick Gicheru.
      root$$$: CONTACT: +254 101 260 024
    `.split('.\n').filter(Boolean); // Split text into sentences and remove empty lines

    const typingSpeed = 55; // Speed in milliseconds per character

    const typingParagraph = document.getElementById("typing-paragraph");
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