import {useState, useEffect} from 'react';

import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';

const ProblemDisplay = ({ problem }) => {
  return (
    <div className="w-1/3 h-1/4 bg-white">
        { problem ? (
          <BlockMath>{problem["problem-TeX"]}</BlockMath>
        ) : (
          <div>Loading problem... </div>
        )}
    </div>
  );
};

export default ProblemDisplay;