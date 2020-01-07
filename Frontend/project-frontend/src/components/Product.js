import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';


class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      productList : [],

    }
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/product/')
      .then(res => {
        const productData = res.data;
        this.setState({
          productList:productData
        });
      })
  }
  // componentDidMount(){
  //   axios.get('http://127.0.0.1:8000/brand/')
  //     .then(res => {
  //       const categoryData = res.data;
  //       this.setState
  //       ({
  //         productList:categoryData
  //       })
  //     })
  // }


    render(){        
        return(
            <div>
              
              <table>
              
                <thead >
                  <tr className="table-body">
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {this.state.productList.map((item,index) => (
                    <tr  key={index}>
                      <td>{item.name}</td>
                      <td>{item.category.name}</td>
                      <td>{item.brand.name}</td>
                    </tr>
                  ))}          
  
                    
                  
                </tbody>
        
              </table> 

            </div>


        );

    }
}

export default Product;