import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


function AnswerBox() {
    const [latex, setLatex] = useState('');

    const handleInputChange = (event) => {
        setLatex(event.target.value);
    };

    return (
        <div className="flex flex-col p-2 border-solid gap-2 border-red-500">
            <div className="bg-red-300 p-1">
            {latex ? <BlockMath>{latex}</BlockMath> : <BlockMath>{'\\text{Current answer here}'}</BlockMath>}
            </div>
            <textarea
                className="w-36 h-12"
                value={latex}
                onChange={handleInputChange}
                placeholder="Type LaTeX here"
            />
            
        </div>
    );
}

export default AnswerBox;