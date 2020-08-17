import React, { Component } from 'react';
import API from "../utils/API";
import Search from "./Search/Search";
import Table from "./Table";
import Navbar from "./Navbar/Navbar";


class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    console.log('HEY I MOUNTED YO');
    API.search()
      .then((res) => {
        
        const resultsWithFullName = res.data.results.map(employee => {
          let fullName = `${employee.name.first} ${employee.name.last}`;
          
          employee.fullName = fullName;

          return employee;
        })
    
        this.setState({ result: resultsWithFullName });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSort = (choice) => {
    const newResult = [...this.state.result];
    newResult.sort((a, b) => (a[choice] > b[choice]) ? 1 : -1);

    console.log({ newResult });

    this.setState({ result: newResult })
  }

  render() {
    // this is just restructuring syntax
   // const { result, search } = this.state;

    const result = this.state.result;
    const search = this.state.search;

   
    const filteredResult = result.filter((result) =>
      result.fullName.toLowerCase().includes(search.toLowerCase())
    );

 

    return (
      <div className="App">
        <Navbar />
        <br></br>
        <div>
          <h4>Search Employees by Name</h4>
          <Search
            placeholder="search by name"
            handleChange={this.handleChange}
            value={this.state.search}
          />
        </div>
        <br></br>
        <br></br>
        <div className="tableDiv">
          <Table employees={filteredResult} handleSort={this.handleSort} />
        </div>
      </div>
    );
  }
}

export default EmployeeContainer;