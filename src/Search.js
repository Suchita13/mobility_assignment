import React from 'react';

class Search extends React.Component{
	constructor() {
    super();
    this.state={
	newSalaryFilter: "",
    newSalaryAmount: 0,
    searchSalary:false
	}
	}
	searchNewSalary = event => {
    let input = event.target;
	//let name = event.target.name;
    let value = input.value;
 
    this.setState({ newSalaryAmount: value });
  };

  newSalaryFilter = event => {
	let input = event.target;
    let value = input.value;
    this.setState({ newSalaryFilter: value });
  };
	   handleForm2Submit=(e)=>{
		   e.preventDefault();
	  // console.log(this.props.initialDetails);
	  //console.log(this.state.newSalaryFilter);
	  //console.log(this.state.newSalaryAmount);
	   const flag=this.state.searchSalary;
	   this.setState({searchSalary:true});
	   
   }
render(){
	const style={
			  backgroundColor: 'Green',
			  borderRadius: '8px',
			  color: 'white'
		  }
return(
<div className='search'>
<form onSubmit={this.handleForm2Submit}>
<label>Search Salary:
<input type='text' pattern="[0-9]*" name='search_salary' onChange={this.searchNewSalary} value={this.state.newSalaryAmount}/>
</label>
<br/>
<select name='salary_filter' onChange={this.newSalaryFilter} value={this.state.newSalaryFilter}>
<option value=''>Choose Salary</option>
<option value='less than'>less than</option>
<option value='greater than'>greater than</option>
</select>
<br/>
<button style={style} type="submit" value="Submit">Search</button>
</form>	
{this.state.searchSalary?(
	this.props.initialDetails.map((prevDetails, index) =>{ return this.state.newSalaryFilter === 'greater than' ? (parseInt(prevDetails.salary) > parseInt(this.state.newSalaryAmount)?
	<h3><span>Name</span> - {prevDetails.name}      <span>Email</span> - {prevDetails.email}      <span>Salary</span>- {prevDetails.salary}</h3>:null):(parseInt(prevDetails.salary) < parseInt(this.state.newSalaryAmount)?
				<h3><span>Name</span> - {prevDetails.name}      <span>Email</span> -  {prevDetails.email}      <span>Salary</span>-  {prevDetails.salary}</h3>:null)
	}
)):null
}

</div>
);
}		
}


export default Search;