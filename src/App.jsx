import './App.css';
import User from './Concepts/HigherOrderComponents/User';
import WithLoader from './Concepts/HigherOrderComponents/WithLoader';
import Click from './Concepts/RenderProps/Click';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import PropImage from './components/PRopImage';
import PropPost from './components/PropPost';

function App() {

  return (
    <div>
      <h3>Some Blog using HOC</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h3>Some Blog using Render Props</h3>
      <div className='buttons'>
      <PropPost />
      <PropImage />
      </div>

        {/* <User /> */}
        {/* <UserWithLoader /> */}
        {/* <Click /> */}
    </div>
  );
}

export default App;
