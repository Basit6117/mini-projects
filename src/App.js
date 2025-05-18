import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian/Accordian';
import Newsapi from './components/accordian/Newsapi';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import Carasoul from './components/image-slider/Carousel';
import Load from './components/load-data/Load';
import QRCodeGen from './components/QRCode/QRCodeGen';

function App() {
  return (
    <div className="App">
      {/* accordian component */}
      {/* < Accordian /> */}
      {/*Real Time News app accordian component  */}
{/* <Newsapi /> */}

{/* Random Color Generator component*/}
{/* <RandomColor /> */}

{/* Star Rating component */}
{/* <StarRating noOfStars={10} />*/}

{/* image slider */}
{/* <Carasoul
 url={"https://picsum.photos/v2/list"}
 limit={10}
 page={1}
 /> */}

 {/* load more products */}
 {/* <Load /> */}

 {/* QR Code Generator */}
 <QRCodeGen />
    </div>
  );
}

export default App;
