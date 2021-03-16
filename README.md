Pre-work - Memory Game
Memory Game is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Carlos Chavez

Time spent: 5 hours spent in total

Link to project: (https://glitch.com/~carlos-chavez-codepath-memory-game)

Required Functionality
The following required functionality is complete:

[x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
[x] "Start" button toggles between "Start" and "Stop" when clicked.
[x] Game buttons each light up and play a sound when clicked.
[x] Computer plays back sequence of clues including sound and visual cue for each button
[x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
[x] User wins the game after guessing a complete pattern
[x] User loses the game after an incorrect guess
The following optional features are implemented:

[x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
[x] Buttons use a pitch (frequency) other than the ones in the tutorial
[x] More than 4 functional game buttons
[x] Playback speeds up on each turn
[x] Computer picks a different pattern each time the game is played
[x] Player only loses after 3 mistakes (instead of on the first mistake)
[x] Game button appearance change goes beyond color (e.g. add an image)
[ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
[x] User has a limited amount of time to enter their guess on each turn
The following additional features are implemented:

[Add difficulty stages where user picks between to set speed of game. Improve the app to be more responsive.] List anything else that you can get done to improve the app!
Video Walkthrough
Here's a walkthrough of implemented user stories:
Gif of app walkthrough: https://i.imgur.com/jaeresE.mp4

Reflection Questions
If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
[Yes, I used w3schools website and "Eloquent Javascript" book as references]

What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
[I had some trouble implementing the timer at first because it would not function how I wanted. At first it would not stop the game, then it would not reset after a new game was started. At this point I managed to get it to work, but it required a page refresh in order to start again from the beginning and it was starting on the page reload and not the start of the game. I did some reading on setInterval and clearInterval using w3schools and a book "Eloquent Javascript" and managed to get it working almost how I wanted. All that was left was to stop it from starting on the page load and get it to start at the beginning of the game. This took me a bit to correct, but finally I initialized the count under startGame() instead of making it a global variable. I also wanted to display the time to the player, this way they are not left wondering why they lost the game. I had some trouble at first displaying the timer, but I knew I could use innerHTML to do this. The biggest issue I was then having was that the timer would reset to 45 seconds once the game started, but the user would not see the 45. They would only see 44, 43, 42... and even though this works just fine for the game, I wanted it to display properly, so I had to set the innerHTML for the timer again at the startGame() so that it reset to 45 at the start and was visable to the player. This was actually great because when implementing the 3 strikes, the strike count would stay at 3 if the user struck out, but when starting again it would show 3 still. It worked properly, when the user madethe first mistake it updated to 1, but I wanted it to show 0 at the start always for the user to not think it was wrong. Having done this for the timer, it was very simple to fix this for the strikes since I knew exactly what to do this time.]

What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
[I would like to learn more about problem solving and learning to implement ideas efficiently. I have solutions to the challenges I faced, but there are many ways to solve problems and some are more efficient than others. I would like to learn more about doing this in a quicker manner that yields good results. Working on projects and running into problems is a great way to learn this because it forces me to think and overcome the problem, but I would like to get even better at this. I also have some questions on best practices and how to improve the speed of the website. I believe I can still learn a lot and improve many aspects of this submission, and given the opportunity to have a mentor and work on more projects would allow me to improve my skills and pick up new ones along the way.]

If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
[If I had a couple more hours I would go back and make the timer be shorter and reset after each sequence of guesses, this way the time is not just for the whole game, but per round. As it is now you would have to change the timer if you add more values to the array, but with a timer of say 10 seconds per round, you could increase the array knowing you have enough time. I could also make the timer increase as the rounds progress since the amount of guesses gets larger the user would need more time to account for this. Lastly, I started working a bit on media queries and responsive design. When I first began altering the design, I had an idea of what I wanted so I created a prototype using Figma with designs for mobile, tablet, and desktop versions of the web app. I ended up only adding one media query to account for a smaller window size, but with more time I would go back and make the design more responsive and use more than just one media query. This way if a user opens it in a phone or in a much smaller window it looks a lot better than how it currently would.]

License
Copyright [Carlos Chavez]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
