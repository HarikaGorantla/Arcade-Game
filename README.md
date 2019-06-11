# Classic Arcade Game Clone Project

**Arcade Game** is usually a coin-operated game designed for play at an amusement arcade.

## Table of Contents

-   [Instructions](#instructions)
-   [Links](#Links-to-Download-the-scratch-Project)
-   [Running the scratch project](<#Running the scratch project>)
-   [Steps to complete the Project](#Steps-to-complete-the-Project)
-   [Process to play the game](#Process-to-play-the-game)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Links to Download the scratch Project

 The github repository for downloading the project is <https://github.com/udacity/frontend-nanodegree-arcade-game>.
 The zipped link is <https://github.com/udacity/frontend-nanodegree-arcade-game.git>.

## Running the scratch project

  Download files from above given links and then unzip the files by extracting. In order to run, open the index file in the browser.
  First you  won't get anything on the screen. Then on inspecting the screen from console you will notice the errors. On correcting all the errors then you will get the required canvas on the browser.

## Steps to complete the Project

1.  First, select a `player`👸 from the images folder which is present in scratch Project.
2.  Next, fix the position of the player in the _grass_ block.
3.  Then apply the `key events` to the player. So that the player moves up, down, right and left.
4.  And then write the conditions so that the player does not move outside of the screen.
5.  place the `enemies`🐱‍🐉🐱‍🐉🐱‍🐉 on the screen.
6.  Fix the positions of the enemies in the _stone_ block.
7.  And using `random` method in Maths provide random movement to the bugs.
8.  Then if the player and the enemy **collision** takes place then game should _restart_.
9.  Enemies should cross the screen and should randomly regenerate.
10. If the player from grass reaches the water without any collisions then a message appears in the _popup_ using model box.
11. Whenever player collides then the player come back to its original position. If the collision takes place 4 times then a popup appears showing that game is completed. If the player wants play again can play again using Try Again button.

## Process to play the game

  Using the up, down, right and left keys from keyboard move the player from grass block in the canvas to water block in the canvas without any player enemy collision. Then the player wins the game.

  Otherwise if collisions take place then the player reaches the grass block and if the collisions are more than 3 then game is over and have to play again in order to win the game.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
