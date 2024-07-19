const currentYear = new Date().getFullYear();


const lastModifiedDate = document.lastModified;


const footerSecondParagraph = document.querySelector('footer p:nth-of-type(2)');
footerSecondParagraph.textContent = `Last modified: ${lastModifiedDate}`;