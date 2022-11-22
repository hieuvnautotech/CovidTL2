import React from 'react';
import './App.css';
import Summaries from './components/Summaries';
import Countries from './components/Countries';
import { getContries } from "./components/apis";
import { useState, useEffect } from 'react'
import { sortBy } from 'lodash'
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const App=()=> {

  const [countries, setCountries] = useState([])
  const [valueCountry, setValueCountry] = useState('')

  useEffect(() => { 
    getContries().then((res) => {
      console.log("quocGia", res);
      const sortByCountries = sortBy(res.data, "Country");
      setCountries(sortByCountries);
      setValueCountry('vn')
    });
  }, [])
  
  const handleOnChange = (e) => { 
    setValueCountry(e.target.value);
  }

  useEffect(() => {
    if (valueCountry) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === valueCountry
      );

      // getReportByCountry(Slug).then((res) => {
      //   // xóa đi item cuối trong array
      //   res.data.pop();
      //   setReport(res.data);
      // });
    }
  }, [countries, valueCountry]);

  return (
    <Container>
      <Typography variant="body1">Số Liệu Covid-19</Typography>
      <Countries
        countries={countries}
        value={valueCountry}
        handleOnChange={handleOnChange}
      />
      <Summaries />
    </Container>
  );
}

export default App;
