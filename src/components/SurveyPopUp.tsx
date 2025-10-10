// components/SurveyPopUp.tsx
import { useState } from 'react';
import '../styles/survey-popup.css';
import * as frog from "../assets/frog-two.PNG";
import * as shiny from '../assets/shiny-button.PNG';
import * as sword from '../assets/sword.PNG';

interface SurveyPopUpProps {
  isVisible: boolean;
  onClose: () => void;
}

type GameChoice = 'rock' | 'paper' | 'scissors' | null;
type GameResult = 'win' | 'lose' | 'tie' | null;
type imageSources = any | null;

export default function SurveyPopUp({ isVisible, onClose }: SurveyPopUpProps) {
  const [userChoice, setUserChoice] = useState<GameChoice>(null);
  const [computerChoice, setComputerChoice] = useState<GameChoice>(null);
  const [gameResult, setGameResult] = useState<GameResult>(null);
  const [gamePlayed, setGamePlayed] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);
  const [image, setImage] = useState<imageSources>(null);

  if (!isVisible) return null;

  const playGame = (choice: GameChoice) => {
    const choices: GameChoice[] = ['rock', 'paper', 'scissors'];
    const computer = choices[Math.floor(Math.random() * 3)];
    
    setUserChoice(choice);
    setComputerChoice(computer);
    setGamePlayed(true);
    setImageClicked(false);

    // Determine winner
    if (choice === computer) {
      setGameResult('tie');
      setImage(shiny);
    } else if (
      (choice === 'rock' && computer === 'scissors') ||
      (choice === 'paper' && computer === 'rock') ||
      (choice === 'scissors' && computer === 'paper')
    ) {
      setGameResult('win');
      setImage(sword);
    } else {
      setGameResult('lose');
      setImage(frog);
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setGameResult(null);
    setGamePlayed(false);
    setImageClicked(false);
  };

  const getResultMessage = () => {
    if (!gamePlayed) return 'Choose. Your. Weapon.';
    if (gameResult === 'win') return 'You win';
    if (gameResult === 'lose') return "You lose";
    if (gameResult === 'tie') return "Tie";
    return '';
  };

  const handleImageClick = () => {
    setImageClicked(true);
    // You can add additional logic here when the image is clicked
    setTimeout(() => {
      onClose(); // Close popup after image click (optional)
    }, 1000);
  };

  return (
    <div className="survey-popup-overlay">
      <div className="survey-popup">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="survey-content">
          <h2>Rock Paper Scissors!</h2>
          <p>Play a quick game to continue...</p>
          
          {/* Rock Paper Scissors Game */}
          <div className="rps-game">
            <div className="game-status">
              <p className="result-message">{getResultMessage()}</p>
            </div>
            
            {!gamePlayed ? (
              <div className="choices-container">
                <div className="choices">
                  <button 
                    className="choice-btn"
                    onClick={() => playGame('rock')}
                  >
                    <div className="choice-image rock"></div>
                    <span>Rock</span>
                  </button>
                  
                  <button 
                    className="choice-btn"
                    onClick={() => playGame('paper')}
                  >
                    <div className="choice-image paper"></div>
                    <span>Paper</span>
                  </button>
                  
                  <button 
                    className="choice-btn"
                    onClick={() => playGame('scissors')}
                  >
                    <div className="choice-image scissors"></div>
                    <span>Scissors</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="game-result">
                <div className="choices-display">
                  <div className="choice-display">
                    <div className={`choice-image ${userChoice}`}></div>
                    <span>You</span>
                  </div>
                  <div className="vs">VS</div>
                  <div className="choice-display">
                    <div className={`choice-image ${computerChoice}`}></div>
                    <span>Computer</span>
                  </div>
                </div>

                {/* Interactive Image that appears after game result */}
                <div className="interactive-image-section">
                  <div 
                   className={`interactive-image result-${gameResult} ${imageClicked ? 'clicked' : ''}`}
                   onClick={handleImageClick}
                  ><a href="https://forms.gle/ffTD7f8YkijWTJGe7" target="_blank"><img src={image}></img></a>
                    {/* This will be your result image (frog, shiny button, or prize) */}
                  </div>
                  <p className="image-instruction">
                    Click it!
                  </p>
                </div>

                <button className="play-again-btn" onClick={resetGame}>
                  Play Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}