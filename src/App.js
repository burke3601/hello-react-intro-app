import './App.css';
import PhotoGallery from './PhotoGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello React!!!!</h1>
        <img src="/logo192.png" />
        <p className="message">added a className to my paragraph tag. notice the differnce between this and HTML</p>
        
       <PhotoGallery />
      </header>
    </div>
  );
}

export default App;
