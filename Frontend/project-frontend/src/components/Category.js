import React, { Component } from 'react'
import axios from 'axios';

class Category extends Component {
    constructor(props){
        super(props);
        this.state ={
            categoryList :[],
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/product/")
        .then(res => {
            const categoryData = res.data;
            this.setState({
                categoryList:categoryData
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
                        <th>PARENT CATEGORY</th>
                        <th>GET BREADCRUMBS</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.categoryList.map((item,index) => (
                        <tr key ={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.parent_category}</td>
                            <td>{item.get_breadcrumbs}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        )
    }
}
export default Category;
