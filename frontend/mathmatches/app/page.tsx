import ProblemDisplay from './components/ProblemDisplay'
import GameContainer from './components/GameContainer';
import IntegerdleHeader from './components/IntegerdleHeader';

export default function Home() {
  return (
    <div className="bg-darkGrey-500">
      <IntegerdleHeader></IntegerdleHeader>
      <GameContainer></GameContainer>
    </div>
  )
}
