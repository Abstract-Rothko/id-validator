# South African ID Validator

This website is able to detect if the id number someone uses is a real, valid Id number or not. It then updates with a funny response depending on whether or not the id number presented is valid.

## Putting it live

Your project is plain static files with no build step, so GitHub Pages is the simplest option and you already have the repo (Abstract-Rothko/id-validator).

1. Add the .gitattributes, commit your fixes and git push origin main.
2. On GitHub, open the repo and go to Settings → Pages.
3. Under Build and deployment, choose Deploy from a branch, then pick main and / (root), and click Save.
4. After a minute or two it appears at https://abstract-rothko.github.io/id-validator/.
5. Open it in an incognito window and check that the images, favicon and CSS load, and that the form works. Paths are case-sensitive on GitHub’s servers, so assets/Laughing.png would fail where laughing.png works.
6. Paste the URL into the repo’s About box and the top of your README.

## Images
### Home Screen
![Screenshot of the home screen](screenshots/before.png)
![alt text](image.png)

### Correct Submission
![Sreenshot of the home screen after correct submission](screenshots/correct-submission.png)
![alt text](image.png)


### Incorrect Submission
![Screenshot of the home screen after the wrong submission](screenshots/wrong-submission.png)
![alt text](image.png)