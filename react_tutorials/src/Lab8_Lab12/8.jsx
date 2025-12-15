import React  from "react";  
  
class LifeCycle extends React.Component{  
    constructor(props){  
        super(props);  
        this.state ={ City :"Mysore"};  
        console.log("Constructor Called");  
        }  
        static getDerivedStateFromProps(props,state){  
            console.log("");  
            return null;  
        }  
        componentDidMount(){  
            console.log("componentDidMount Called");  
            setTimeout(()=>{  
                this.setState({City:"Bangalore"});  
            },2000);  
        }  
        shouldComponentUpdate(nextProps,nextState){  
            console.log("shouldComponentUpdate Called");  
            return true;  
        }  
         getSnapshotBeforeUpdate(prevProps,prevState){  
            console.log("getSnapshotBeforeUpdate Called");  
            return null;       
        }  
        componentDidUpdate(prevProps ,prevState,snapshot){  
            console.log("componentDidUpdate Called");  
            console.log("Previous Props:",prevProps);  
        }  
        render(){  
            return(  
                <div>  
                    <h2>Life Cycle Methods</h2>  
                    <h3>City:{this.state.City}</h3>  
                </div>  
            );  
        }  
    }  
export default LifeCycle; 