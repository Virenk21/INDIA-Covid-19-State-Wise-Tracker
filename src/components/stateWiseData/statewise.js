import React, { useEffect } from 'react'

const Statewise = () => {

    const getCovidData = async () => {
       const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const actualData = await res.json();
        console.log(actualData.regional);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            {" "}
            <span className="font-weight-bold">INDIA</span>Covid-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table clasName="table table-hover">
            <thead className="thead-dark">
              <tr>
                <td>State</td>
                <td>confirmed</td>
                <td>recovered</td>
                <td>deaths</td>
                <td>active</td>
                <td>updated</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>State</td>
                <td>confirmed</td>
                <td>recovered</td>
                <td>deaths</td>
                <td>active</td>
                <td>updated</td>
              </tr>
              <tr>
                <td>State</td>
                <td>confirmed</td>
                <td>recovered</td>
                <td>deaths</td>
                <td>active</td>
                <td>updated</td>
              </tr>
              <tr>
                <td>State</td>
                <td>confirmed</td>
                <td>recovered</td>
                <td>deaths</td>
                <td>active</td>
                <td>updated</td>
              </tr>
              <tr>
                <td>State</td>
                <td>confirmed</td>
                <td>recovered</td>
                <td>deaths</td>
                <td>active</td>
                <td>updated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Statewise;