import React, { Component } from 'react';
import axios from 'axios';
class CreateProduct extends Component {
    constructor(props){
        super(props);
        this.state ={
            createProduct : [],
            selectBrand : [],
            selectCategory :[],
            categoryName:"",
            brandName:"",
            productData: "",
            createSpecification:[],
            specificationKey:"",
            specificationValue:"",
            specificationUnit:""
        }
    }
    // handleChange = event => {
    //     this.setState({createProduct : event.value.target});
    // }
    handleSubmit = event  => {
        event.preventDefault();
        const product=this.state.productData;
        const brand = this.state.brandName;
        const category = this.state.categoryName;
        const specification =this.state.createSpecification;
    
        console.log("product brand category",product,brand, category,specification)
        axios.post("http://127.0.0.1:8000/product/", {
            name:product,
            brand,
            category,
            specification
        })
        .then(res => console.log)

    }
    addSpecification = event  => {
        event.preventDefault();
        const spec_Key = this.state.specificationKey;
        const spec_Value = this.state.specificationValue;
        const spec_Unit = this.state.specificationUnit;
        console.log("specification", spec_Key,spec_Value,spec_Unit )
        const specification = [...this.state.createSpecification, {key:spec_Key, value:spec_Value, unit:spec_Unit}]
        console.log("list spec", specification)
        this.setState({
            createSpecification:specification,
            specificationKey:"",
            specificationValue:"",
            specificationUnit:""

        })
        // console.log("list of specification", this.state.createSpecification)
        // const specification = {
        //     createSpecification : this.state.createSpecification
        
        // };

    }



    componentDidMount(){
        axios.get("http://127.0.0.1:8000/brand/")
        .then(res =>{
            const selectData = res.data;
            this.setState({
                selectBrand:selectData
            })
        });

        axios.get("http://127.0.0.1:8000/category/")
        .then(res => {
            const selectCategoryData = res.data;
            this.setState({
                selectCategory : selectCategoryData
            })
        });
    }

        
    
    
    render() {
        return (
            <div>
                <form  onSubmit = {this.handleSubmit}>
                    <label>
                        <input type ="text" value={this.state.value} placeholder="Product Name" onChange ={() => this.setState({productData:event.target.value})}/>
                        <select value={this.state.value} onChange={() => this.setState({brandName:event.target.value})}>
                        <option>Select Brand</option>
                        {this.state.selectBrand.map((item,index) => (          
                            <option value={item.id} key={index}>{item.name}</option>
                        ))}
                        </select>
                        </label>
                    <label> 
                        <select value={this.state.value} onChange={() => this.setState({categoryName:event.target.value})}>
                        <option>Select Category</option>
                        {this.state.selectCategory.map((item,index) => (
                                <option value={item.id} key={index}>{item.name}</option>
                        ))}
                        </select>
                    </label>
                    <div>SPECIFICATION<br></br>
                    <input type="text" placeholder = "POWER" value={this.state.specificationKey} onChange ={() => this.setState({specificationKey:event.target.value})}></input>
                    <input type="text" placeholder = "MODEL NUMBER" value={this.state.specificationValue} onChange ={() => this.setState({specificationValue:event.target.value})}></input>
                    <input type="text" placeholder = "GRINDING MATERIAL" value={this.state.specificationUnit} onChange ={() => this.setState({specificationUnit:event.target.value})}></input>
                    <button onClick={this.addSpecification}  >ADD</button>
                    </div>
                        

                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
                
            </div>
        )
    }
}
export default CreateProduct;
