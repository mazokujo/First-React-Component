//react component using a class 
class Hello extends React.Component{
	render(){
		return <h1>Hello There!</h1>
	}
}

function Hi(){
return(
	<div>
	<h1>Hello There!</h1>
	<h1>Hello There!</h1>
	<h1>Hello There!</h1>	
	</div>
)
}

// name of our class
ReactDOM.render(<Hi/>, document.getElementById('root'))