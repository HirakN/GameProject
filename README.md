# Minewalker Project

## Description
This project is a browser based 2D game that can be played by the user. It it loosely inspired by minesweeper. The main way of interacting with the content is through using the mouse/trackpad to click HTML elements.

## Purpose
The main purpose of the game is to demostrate the progress made since the beggining of the training.

## Instruction
You start of on the top left orange square. The goal of the game is to make it to the same coloured square on the opposite side and get as many points as you can. You start off with 3 lives.

You accumulate points by moving through the grid.

You move by clicking any of the (up to) 8 adjacent squares. When you click a square, one of three things can happen:

- You can find a bomb, which will remove one life.
- You can find a heart which will give you one life.
- You can find a treasure chest (rare) which increases your score by 1000.
- You can find a perfectly safe blank square.

You can use the lantern to boost your points but it is risky. It will illuminate the 8 tiles around you revealing whatever they had inside bombs, hearts or empty squares and giving you their effects.

The game ends when you reach the end or run out of lives. If you run out of lives, you will end on 0 points.

## Technologies	
The technologies used in this page are:

- HTML5 to provide a layout for the page
- CSS to provide styling to the elements
- JavaScript using an external library (JQuery)

## Installation and Usage
To use the code simply clone the [GitHub repository](https://github.com/HirakN/GameProject) to your own local machine. Alternatively, download the entire folder.

Once available on your machine. Open up the bash terminal and navigate to the directory. Then open the index.html file using:

```Bash
open index.html
```
This should open the page in your default browser and the game should be ready to play.