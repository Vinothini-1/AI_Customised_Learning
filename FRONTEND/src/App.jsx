import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';
import CourseSummary from './components/CourseSummary';
import Courses from './components/Courses';
import MyProfile from './components/MyProfile';
import ContactUs from './components/ContactUs';
import Login from './components/login';
import Signup from './components/signup';

import CssLearningModule from './components/CssLearning.jsx';
import JavaScriptLearningModule from './components/Javascript.jsx';
 import ReactLearningModule from './components/React.jsx';
 import NodeJsLearningModule from './components/Node.jsx';
import PythonDataScience2 from './components/Python.jsx';
import MachineLearning from './components/MachineLearning.jsx';
import SkillAssessment from './components/SkillAssessment';
import { SkillsProvider } from './context/SkillsContext'; // Import the SkillsProvider
import Description from './components/Description.jsx';
import HtmlLearningModule from './components/Html.jsx';
import FullStackDevelopment from './components/fullstack.jsx';
import DeepLearningGuide from './components/deeplearning.jsx';
import DigitalMarketing from './components/digitalmarketting.jsx';
import GraphicDesignLearning from './components/graphic.jsx';

function App() {
  return (
    <SkillsProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/skill-assessment" element={<SkillAssessment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course-summary" element={<CourseSummary />} />
        <Route path="/python" element={<PythonDataScience2/>} />
        <Route path="/description" element={<Description/>} />
        <Route path="/html" element={<HtmlLearningModule/>} />
        <Route path="/css" element={<CssLearningModule/>} />
        <Route path="/machine" element={<MachineLearning/>} />
        <Route path="/js" element={<JavaScriptLearningModule/>} />
        <Route path="/fullstack" element={<FullStackDevelopment/>} />
        <Route path="/react" element={<ReactLearningModule/>} />
        <Route path="/node" element={<NodeJsLearningModule/>} />
        <Route path="/deeplearning" element={<DeepLearningGuide/>} />
        <Route path="/digitalmarketting" element={<DigitalMarketing/>} />
        <Route path="/graphic" element={<GraphicDesignLearning/>} />
        
        


        

      </Routes>
    </SkillsProvider>
  );
}

export default App;
