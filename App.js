import React from 'react';
import './App.css';
import Search from './Search';

class App extends React.Component{
	 constructor(props) {
    super(props);
    let initialDetails = JSON.parse(localStorage.getItem("details") || "[]")
console.log(initialDetails);
    this.state = {
      nme: '',
      email: '',
	  salary:'',
	  details:initialDetails
    }
  };
    
   handleChange = (event) => {
    let input = event.target;
	let name = event.target.name;
    let value = input.value;
 
    this.setState({ [name]: value });
  };
  
  handleFormSubmit = () => {
   /* let { nme, email, salary } = this.state;
  localStorage.setItem('names', nme);
  localStorage.setItem('email',email);
  localStorage.setItem('salary',salary);*/
  this.state.details.push({
      name: this.state.nme,
      email: this.state.email,
	  salary: this.state.salary
    });
    this.setState({
      details: this.state.details
    });
    localStorage.setItem( 'details', JSON.stringify(this.state.details) );
  };
	render(){
  return (
    <div className="App">
<Form handleFormSubmit={ this.handleFormSubmit } handleChange={ this.handleChange } newName={this.state.nme} newEmail={this.state.email} newSalary={this.state.salary}/>
     <Search  initialDetails={this.state.details}/>
	</div>
  );
}
}

class Form extends React.Component{
	  render() {
		 const style={
			  backgroundColor: 'Green',
			  borderRadius: '8px',
			  color: 'white'
		  }
    return (
      <div id="Form" className='detailsForm'>
        <form onSubmit={this.props.handleFormSubmit}>
	<label>Name:   
	  <input type='text' name='nme' value={this.props.newName} onChange={this.props.handleChange} required/>
	  </label><br/>
	  <label>Email: 
	  	  <input type='email' name='email' value={this.props.newEmail} onChange={this.props.handleChange} required/>
	  </label><br/>
	  <label>Salary: 
	  	  <input type="text" pattern="[0-9]*" name='salary' value={this.props.newSalary} onChange={this.props.handleChange} required/>
	  </label><br/>
          <button style={style} type="submit" value="Submit">Go</button>
 </form>
 </div>
	);
} }

export default App;
