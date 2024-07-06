"use client";

import {useState, useEffect} from 'react';

import ProblemDisplay from "./ProblemDisplay";
import AnswerBox from "./AnswerBox";
import GameButtonsContainer from "./GameButtonsContainer";


function GameContainer() {
    const [problem, setProblem] = useState(null);
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetch('/integral-problems.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.integrals && data.integrals.length > 0) {
                    setProblems(data.integrals);
                    setProblem({...data.integrals[Math.floor(Math.random() * data.test.length)]});
                } else {
                    setProblem({ "problem-TeX": "No problems available" });
                }
            })
            .catch(error => {
                console.error('Error fetching JSON data:', error);
                setProblem({ "problem-TeX": "Error loading problems" });
            });
    }, []);

    const getRandomProblem = () => {
        setProblem(p => {
            if (p.length == 0) return p;
            let newProblem;
            do {
                newProblem = problems[Math.floor(Math.random() * problems.length)];
            } while (newProblem == p)
            return newProblem;
        });
    };

    return(
        <div className="flex flex-col justify-center items-center">
            <ProblemDisplay problem={problem}></ProblemDisplay>
            <AnswerBox></AnswerBox>
            <GameButtonsContainer onNewProblemClick={getRandomProblem}></GameButtonsContainer>
        </div>
    );
}

export default GameContainer;
