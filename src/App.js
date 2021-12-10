import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import styled from 'styled-components';

import Nasa from './Components/Nasa';

const StyledFriend = styled.div`
  width: 60%
  display: flex;
  justify-content: space-between;
  padding: 8px
  border-bottom: 2px solid white;
  line-height: 1.6;
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white}
`

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=iuZ0MCtSF5sDdt8apQEPwg3AxliAa6jSz22qjzTz`)
      .then(res => {
        setNasaData(res.data);
      }).catch(err => console.error(err))
  }, [])

  return (
    <StyledFriend>
    <div className="App">
      {nasaData && <Nasa nasaData={nasaData} /> }
    </div>
    </StyledFriend>
  );
}

export default App;
