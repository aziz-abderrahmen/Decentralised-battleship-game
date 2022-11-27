# Battleship game

Welcome to the DAAR project. The idea will be to implement a "Battleship" game
in a decentralized way, on Ethereum. This will have cool side effects, like not
be forced to pay for servers.
The project can't be run on Windows. Please, use WSL.

# How to play


The game supports 2 different players. 
- 4 ships have already been deployed to be registred on the game : 2 ships for each player.

Each player has a unique metamask wallet<br />
For simplicity, we kept the two players on the same board and the same tab, so when the first player places his two ships,<br />
the second player needs to pick his wallet from the metamask extension.<br />

- To register a ship there are 3 transaction to confirm : <br />

>> -- 1 -- Click on the cell where to place the ship and then confirming the transaction (ship contract)<br />
>> -- 2 -- Click to choose where the ship will fire and then confirming the transaction (ship contract)<br />
>> -- 3 -- Finally, click on the register button to register the ship on the board and eventually confirming the transaction (main contract)<br />
>> -- Repeat the same steps to register the second ship<br /><br />

- Then player 2 turn, change the wallet and do the same steps as the first player.

- After placing the 4 ships, click turn to start the game 

- If there are any ships touched by the other player, the will be reset to grey colors 

## Improvements 

- Resetting the board on each palyer's turn to hide the places of the previous player ships
- Add more player and more ships
- Improving the user experience 
- Improving the UI 

# Installation

Install the dependencies.

```bash
# Yarn users
yarn
```

Run the complete project.

```bash
# Yarn users
yarn dev
```

You’re good to go!

# Context

The idea of the game is to fight in a free for all style (every players will play in the same time) with ships. Each player have two ships, of size 1. At the beginning of the game, you're placing your ships on a grid (50x50). Every turn, your ships will be able to fire once. Your goal is to destroy all the opponents ships. In a second step, your ships will be able to talk to each other, and potentially to do some diplomacy with other ships.

