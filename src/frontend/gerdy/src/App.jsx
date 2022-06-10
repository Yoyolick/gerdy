import './app.css';

export const server_address = "http://127.0.0.1:5000/"; //TODO .env IS NOT WORKING

function App() {
  
  // BACKGROUND STYLING
  const numbackgrounds = 9; //TODO this is scuffy to do this lol
  const backgroundnum = Math.floor(Math.random() * numbackgrounds) + 1; //gets a background 1 to max
  document.body.style.backgroundImage = "url("+server_address+"static/backgrounds/"+backgroundnum+".jpeg)";
  
  return (
    <div class="app">
      <h1 class='header'>Gerdy Downloader</h1>
    </div>
  );
}

export default App;