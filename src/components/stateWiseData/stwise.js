import './statewise.css'
import React, { useState, useEffect } from "react";

const Stwise = () => {
  const [data, setData] = useState([]);
 
  

  const getCovidData = async () => {
    const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const data = await res.json();
    console.log(data.data.regional);

    setData(data.data.regional);
   
    
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span>Covid-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table clasName="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <td>confirmed</td>
                <td>recovered</td>
                <td>deaths</td>
                <td>active</td>
                <td>updated</td>
              </tr>
            </thead>
            <tbody>
              {
              data.map((curElem, ind) => {
        
                  return (
                    <div>
                      <tr key={ind}>
                        <th> {curElem.loc} </th>
                        <td> {curElem.confirmedCasesIndian} </td>
                        <td> {curElem.discharged} </td>
                        <td> {curElem.deaths} </td>
                        <td> {curElem.totalConfirmed} </td>
                        <td> {curElem.lastOriginUpdate} </td>
                      </tr>
                    </div>
                  );
                })
              }
            </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default Stwise;
