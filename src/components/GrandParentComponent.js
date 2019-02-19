import React, {Component} from 'react';
import { FamilyProvider, FamilyConsumer } from "./FamilyContext";


export default class GrandParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: 'Manoharan'
        }
    }

    render(){
        return <FamilyProvider value={this.state.lastName}>
                    <Mother />
                </FamilyProvider>;
        
        // <Mother lastName={this.state.lastName} >sdfds</Mother>;
    }
}

//const Mother = ({ lastName }) => {
const Mother = () => {

    return <Child />
  // return <Child lastName={lastName} />
}
//const Child = ({ lastName }) => {
const Child = () => {
  // return <p>{lastName}</p>
  return <FamilyConsumer>{context => <p>{context}</p>}</FamilyConsumer>;
}