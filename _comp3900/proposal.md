---
layout: page
title: Initial Proposal
topic: Proposal
---
The main ideas:

Database:
- (UI/DATABASE) Users can create an account and log in, authenticate, with persisted data.
- (UI/DATABASE) The system keeps track of all GLOBAL players rankings / leaderboard / games
- (DATBASE/UI) The user can view their own PERSONAL profile to see their stats for all their games they have played
- **(N)** (DATABASE/UI) The system stores games to allow The player to do post game replays of past games. They are able to rewind or fast forward through the game to view moments.

Backend:

- (LOGIC/little ui) The system must enforce "Yavalath" board game ruleset on an online desktop website
- (LOGIC/UI) Users can play against friend/s using the same url (remote play)
- (LOGIC/little ui) User can select a mode to play against an AI/Computer only.


## Flesh out dotpoints
1. The system must enforce "Yavalath" board game ruleset on an online desktop website


<!-- - **(N)** (UI/LOGIC) Ability to play both ranked and casual gamemodes. Causual will have additional gamemodes which offer customized gameplay. ~~with custom maps being an extension of casual gameplay.~~
  - Custom board configurations (missing hex squares or larger board sizes)
  - handicaps??  
~~- powerups~~  -->


- **(N)** (UI/LOGIC) Ability to play ranked, casual and additional custom gamemodes that offer changes to the normal gameplay. 

~~8. The game is played on an online website??~~

# Dot point ideas
- Training module
- Play Yavalath with friends (multiplayer)
- Play Yavalath against computer (single player + ai)
- Make an account
- Account users can view their stats
- Account users can see their rating on leaderboard against other players
- play weekly/daily challenges
- player can customize ruleset/board size
- the system can support online multiplayer... 3 players
- system records games and provides a replay system.
the system should have a game archive/search.
- The system should enforce ruleset and disallow illegal moves
- The website live updates against other player.

Novelty ideas:
- Additional ruleset mode that is different from classic. Ie powerups etc

## **Loose description of game:**
People want to play simple party games / board games online with their friends. Yavalath is a board game that has a similar ruleset to connect-4. 

Rules: Two players play on a hexagonal board. If you get 4 hexes in a row you win, but if you get 3 in a row you lose. 

We want to make a website that allows people to play against the computer or anyone online. It will also keep track of their games and stats compared to other people in the world.

# **Similar to the following:**
# [Online Yavalath](https://play.yavalath.com/)
Simple UI. Only supports 2 player ruleset.
![Yavalath](/assets/images/comp3900/yavalathonline.png)
![Yavalath](/assets/images/comp3900/gameover.png)
- This website does not have a play again feature (must always pick a new url)
  - Want a better UI experience
- We want to add a 3 player ruleset.
- This website does not have players make an account
  - We want a login to record your player stats
  - Provide an online ranking system (elo)
  - Watch replays of your own game
- We want to add an option to verse the computer

<br>
# [Desktop version of Yavalath](http://cambolbro.com/games/yavalath/)
- This website lists the game rules and simple variants that we want to implement on the website
- Also include a desktop application to verse the computer
![desktopversion](/assets/images/comp3900/desktopversion.png)
- The computer takes 15 seconds to make any move. We want to improve the time that it takes to make a move

<br>
# [Another web version](https://www.yourturnmyturn.com/java/yavalath/index.php)
- Allows you to verse computer.
  - However is slow and not responsive
- UI covers up the screen making it unplayable
![desktopversion](/assets/images/comp3900/broken.png)

# [Yavalath on mobile](https://play.google.com/store/apps/details?id=nl.whitedove.yavalath&hl=en_AU&gl=US)