import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductDescription from './components/ProductDescription';
import PartList from './components/PartList';
import AssemblyArea from './components/AssemblyArea';
import FinalView from './components/FinalView';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/" element={<ProductDescription />} />
        <Route path="/parts" element={<PartList />} />
        <Route path="/assemble" element={<AssemblyArea />} />
        <Route path="/final-view" element={<FinalView />} />
      </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
