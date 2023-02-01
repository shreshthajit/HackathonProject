import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import MyAvatar from './pages/MyAvatar';
import Home from './Home';
import Program from './pages/Program';
import Consultant from './pages/Consultant';
import Review from './pages/Review';
import Guide from './pages/Guide';
import ProgramDetails from './pages/ProgramDetails';
import Navbar from './components/Navbar';
import DocumentReviewForm from './pages/DocumentReviewForm';
import PaymentPage from './pages/PaymentPage';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myAvatar" element={<MyAvatar />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/" element={<Home />} />

        <Route path="/programs" element = {<Program/>}/>
        <Route path="/consultant" element = {<Consultant />}/>
        <Route path="/review" element = {<Review />}/>
        <Route path="/guide" element = {<Guide/>}/>
        <Route path="/programs/:id" element={<ProgramDetails/>}></Route>

        <Route path="/documentReviewForm" element = {<DocumentReviewForm/>}/>

        <Route path="/paymentPage" element = {<PaymentPage/>}/>

        <Route path="/documentReviewForm" element = {<DocumentReviewForm/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
