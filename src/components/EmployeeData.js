import React,{Component} from "react";

class EmployeeData extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (<>
            <h1>Employee Data</h1>
            <div id="data_container">
                {this.props.data.map( (ele) => {
                    console.log(ele);
                    return (
                        <div id="inner_container">
                            <h3>{ele.count} : {ele.name} || {ele.dept} || {ele.rating} </h3>
                        </div>
                    );
                    })
                }
            </div>
            <button className="dynamic_button" onClick={this.props.toggleFunc}>Go back</button>
        </>
    )
    }
}

export default EmployeeData;