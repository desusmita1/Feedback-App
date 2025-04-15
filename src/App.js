import Card from './components/shared/Card';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact
            path="/" 
            element={
              <>
                <FeedbackForm  />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
          {/* <Route path="/post/:id/:name" element={<Post />} /> */}
          
        </Routes>
        <Card>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
        </NavLink>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            About
        </NavLink>
        </Card>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  );
};

export default App;
