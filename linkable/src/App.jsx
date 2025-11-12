import * as React from 'react';
import TransparentAppBar from './components/appBar';
import LinkCard from './components/linkCard';
import './App.css'
import { Typography } from '@mui/material';

function App() {
  return (
    <>
      <TransparentAppBar />
      <LinkCard />
    </>
  )
}

export default App
