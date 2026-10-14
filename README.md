# QuizNova — Advanced Cloud Quiz Application

## Files
- `index.html` — page structure
- `style.css` — responsive visual design
- `script.js` — question bank, timer, scoring, review and quiz state

## Run locally
1. Keep all three files in the same folder.
2. Open `index.html` in a modern browser.
3. Choose a category and difficulty, then start the challenge.

## Features
- Tech & CS, Science, and Mixed Bag categories
- Easy, Medium, and Hard difficulty levels
- Optional 15-second per-question timer
- Progress indicator, score, accuracy, XP and streak
- Instant feedback and explanations
- Final results and answer review
- Responsive layout for desktop and mobile
- No database or backend required for this demo

## Cloud deployment
Upload all three files to a GitHub repository and connect that repository to a static hosting platform such as AWS Amplify Hosting. Ensure the deployed root contains `index.html`, `style.css`, and `script.js`. Check the current platform pricing before deployment.

## Limitations
This front-end demo keeps questions and correct answers in client-side JavaScript. It is not suitable for secure examinations or confidential results. A production-grade quiz would use a backend to validate answers and store users/results securely.
