import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: [],
    areas: ["California", "Chico MSA", "Sacramento--Roseville--Arden-Arcade MSA", "Redding MSA", "Oakland-Hayward-Berkeley Metro Div", "Napa MSA", "Modesto MSA", "Merced MSA", "Madera MSA", "Los Angeles-Long Beach-Glendale Metro Div", "San Jose-Sunnyvale-Santa Clara MSA", "San Francisco-Redwood City-South San Francisco Metro Div"],
    area_selection: "California",
    occcupation_selection_1 : "Software Engineering",
    occcupation_selection_1 : "Accounting"
  }

  componentDidMount () {
    fetch(`https://data.edd.ca.gov/resource/pwxn-y2g5.json?wage_type=Annual wage or salary&area_name=${this.state.area_selection}&$limit=10000`)
    .then(response => response.json())
    .then(data => {
        this.setState({
          data : data
        });
    });
    // this.setState({
    //   areas : [...new Set(this.state.data.map(stat => stat.area_name))]
    // })
  }
  // onNameChange = (ev) => {
  //   let value = ev.target.value;
  //   this.setState({
  //     name: value,
  //   });
  // }

  // addAnimal = () => {
  //   const animals = this.state.animals.concat([]);
  //   animals.push(this.state.name);
  //   this.setState({
  //       animals: animals,
  //   });
  // }

  // removeAnimal = (index) => {
  //   const animals = this.state.animals.concat([]);
  //   animals.push(this.state.name);
  //   this.setState({
  //       animals: animals,
  //   });  
  // }

  render() {
    // console.log('adding a new animal!');
        console.log(this.state.data)
        console.log(this.state.areas);

    return (
      <div>
        <h2>How Occupation Statistics have changed in the past 9 years in the San Francisco Bay Area</h2>
        <div className="Container">
            <div className="Occupations">
                <label>Available areas</label>
                <select className="Areas">
                    {
                      this.state.areas.map(area => (
                      <option value={area}>{area}</ option>
                       ))
                    }    
                </select>
                <label>Choose occupations to compare:</label>
                <select id="first-select" onchange="displayOutput()">
                    {
                      this.state.data.map(title => (
                      <option value={title.occupational_title}>{title.occupational_title}</ option>
                        ))
                    }
                </select>
                <select id="second-select" onchange="displayOutput()">
                    {
                      this.state.data.map(title => (
                      <option value={title.occupational_title}>{title.occupational_title}</ option>
                        ))
                    }
                </select>
            </div>
            <div className="ChartAreaContainer">
                <div className="Graph1">
                    <div className="ChartAreaContainer-leftLabel">Accounting
                        </div>
                    <div className="Graph1-bar" onClick="doFetch()"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 15,310. Mean salary: $94,090.00.')"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 15,730. Mean salary: $91,572.87.')"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 14,720. Mean salary: $93,022.46.')"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 15,140. Mean salary: $89,067.02.')"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 13,970. Mean salary: $86,991.35.')"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 14,080. Mean salary: $86,641.85.')"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 13,010. Mean salary: $87,212.92.')"></ div>
                    <div className="Graph1-bar" onClick="alert('Employed: 13,350. Mean salary: $85,568.64.')"></ div>
                </div>
                <div className="barLabels">
                    <div></div>
                    <div>2019</div>
                    <div>2018</div>
                    <div>2017</div>
                    <div>2016</div>
                    <div>2015</div>
                    <div>2014</div>
                    <div>2013</div>
                    <div>2012</div>
                    <div>2011</div>
                </div>
                <div className="Graph2">
                    <div className="ChartAreaContainer-rightLabel">Software Engineering
                        </div>
                    <div className="Graph2-bar" onClick="alert('Employed: 31,200. Mean salary: $153,561.92.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 30,120. Mean salary: $149,873.00.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 26,250. Mean salary: $123,967.17.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 22,950. Mean salary: $119,476.81.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 19,060. Mean salary: $119,252.87.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 15,220. Mean salary: $115,740.25.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 14,070. Mean salary: $114,211.20.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 11,310. Mean salary: $110,304.80.')"></ div>
                    <div className="Graph2-bar" onClick="alert('Employed: 10,820. Mean salary: $108,630.01.')"></ div>
                </div>
                <div className="GraphTicks">
                        <div className="Tick"><span>30,000</span></div>
                        <div className="Tick"><span>20,000</span></div>
                        <div className="Tick"><span>10,000</span></div>
                        <div className="Tick"><span>0</span></div>
                        <div className="Tick"><span>10,000</span></div>
                        <div className="Tick"><span>20,000</span></div>
                        <div className="Tick"><span>30,000</span></div>
                </div>
            </div>
        </div>    
    </div>
    );
  }
}

export default App;
