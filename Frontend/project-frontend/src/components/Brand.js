import React, { Component } from 'react'
import axios from 'axios';


class Brand extends Component {
    constructor(props){
        super(props);
        this.state = {
            brandList : [],
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/brand/')
        .then(res => {
            const brandData=res.data;
            this.setState({
                brandList : brandData
            });
        })
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.brandList.map((item,index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
export default Brand;
