TO MY BABY, MARIA — BIRTHDAY WEBSITE
=====================================

HOW TO OPEN
1. Extract this ZIP folder.
2. Open the folder.
3. Double-click index.html. It should open in your browser.
4. Click through the navigation to explore all six chapters.

IMPORTANT
- The eight photos you uploaded are already included in assets/photos/.
- The site works locally. Google Fonts need an internet connection; the site has fallback fonts.
- Before publishing, personalize the story, letter, reasons and finale so the wording sounds like you.

PERSONALIZING THE SITE
- Our Story: edit story.html and replace the starter prompts with your real memories and dates.
- Reasons: edit the text inside each .reason-card in reasons.html.
- Letter: edit the paragraphs inside .letter-paper in letter.html.
- Drawing: create assets/drawings/ and add your image as maria-drawing.png. Then replace the art-placeholder section in masterpiece.html with:
  <img class="your-art" src="assets/drawings/maria-drawing.png" alt="A drawing made for Maria">
  Add this CSS rule if you want it to fit the frame:
  .your-art { display:block; max-width:100%; max-height:650px; margin:auto; object-fit:contain; }
- Video: create assets/videos/ and add your video as birthday-video.mp4. Replace the video-placeholder div in finale.html with:
  <video controls playsinline width="100%">
    <source src="assets/videos/birthday-video.mp4" type="video/mp4">
  </video>

PUBLISHING
You can publish this folder using GitHub Pages or another static website host. Keep all folders together so the images and styles load correctly.
For a private surprise, remember that a public website link can be opened by anyone who has it. Avoid adding private information you wouldn't want shared.

Have fun making her 19th birthday unforgettable. ♡


GITHUB PAGES QUICK PUBLISH
==========================
1. Sign in to GitHub and click the + button, then New repository.
2. Name it: to-my-maria (or another name you like).
3. Set it to Public if you want GitHub Pages on the free plan.
4. Create the repository.
5. On the repository page, choose Add file > Upload files.
6. Open the extracted To_My_Maria folder on your computer and upload its CONTENTS:
   index.html, all the other .html files, css/, js/, assets/, and README.txt.
   Do not upload only the ZIP file.
7. Click Commit changes.
8. Go to Settings > Pages.
9. Under Build and deployment, choose Deploy from a branch.
10. Choose branch main and folder /(root), then Save.
11. Wait for GitHub Pages to publish. Your site URL will look like:
    https://YOUR-USERNAME.github.io/to-my-maria/

NOTE: A public GitHub Pages site is accessible to anyone with its URL and may be discoverable. Do not put private information, private chat screenshots, or anything Maria would not want public on it. You can unpublish it after her birthday.
