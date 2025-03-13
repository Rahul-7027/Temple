import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Nav/Navbar';
import Carousel from './component/CarsouleData/Carousel';
import Section from './component/SectionData/Section';
import GuruInformation from './component/Infromation/GuruInformation';
import Accordion from './component/AccodionData/Accordion';
import Donation from './component/DonationInfor/Donation';
import ImageGallery from './component/Gallery/ImageGallery';
import News from './component/NewsData/News';
import Footer from './component/Footerdata/Footer';
import Contact from './component/ContactPages/Contact';
import Readmore from './component/Infromation/Readmore';
import Video from './component/VideoData/Video';
import Shri from './component/ShriguruData/Shri';
import Registerform from './component/RegisterUser/Registerform';
import Temple from './component/TempleInfo/Temple';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Accordion />
            <Donation />
            <Section />
            <GuruInformation />
            <ImageGallery />
            <Video />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/about/guru" element={<Shri/>} />
        <Route path="/about/temple" element={<Temple/>} />
        <Route path="/readmore" element={<Readmore />} />
        <Route path="/register" element={<Registerform/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
