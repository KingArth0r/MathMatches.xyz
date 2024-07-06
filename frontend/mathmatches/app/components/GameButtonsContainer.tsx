"use client";

function GameButtonsContainer({ onNewProblemClick }) {
    return (
        <div className="flex flex-cols-2 gap-2 p-1">
            <div className="bg-green-600 hover:cursor-pointer rounded p-1">
                Check Answer
            </div>
            <div className="bg-red-500 hover:cursor-pointer rounded p-1 select-none" onClick={onNewProblemClick}>New Problem</div>
        </div>
    );
}

export default GameButtonsContainer;