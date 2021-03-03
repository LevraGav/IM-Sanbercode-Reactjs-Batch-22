import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './UpdateBuah2.css';

const Lists = () =>{
    const [dataHargaBuah, setDataHargaBuah] =  useState(null)
    const [InNama, setInputNama]  =  useState("")
    const [InHarga, setInputHarga]  =  useState("")
    const [InBerat, setInputBerat]  =  useState(0)
    const [currentID, setCurrentID] =  useState(null)

    useEffect( () => {
        if (dataHargaBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                let data = res.data
                setDataHargaBuah(data.map(el=>{
                    return {id: el.id, name: el.name, price: el.price, weight: el.weight}
                }))
            })
        }
    },[dataHargaBuah])
    
    const handleSubmit = (event) =>{
        console.log(event)
        event.preventDefault()
        
        if (currentID === null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: InNama, price: InHarga, weight: InBerat})
            .then(res => {
                let data = res.data
                setDataHargaBuah([...dataHargaBuah,{id: data.id, name: data.name, price: data.price, weight: data.weight}])
            })
        } else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${currentID}`, {name: InNama, price: InHarga, weight: InBerat})
            .then(() => {
                let buah = dataHargaBuah.find(el=> el.id === currentID)
                buah.name = InNama
                buah.price = InHarga
                buah.weight = InBerat
                setDataHargaBuah([...dataHargaBuah])
            })
        }
        setCurrentID(null)
        setInputNama("")
        setInputHarga("")
        setInputBerat(0)
    }

    const handleChange = (event) =>{
        if (event.target.name === "nama"){
            setInputNama(event.target.value);
        }else if(event.target.name === "harga"){
            setInputHarga(event.target.value);
        }else if(event.target.name === "berat"){
            setInputBerat(event.target.value);
        }
    }

    const handleEdit = (event) =>{
        let id = parseInt(event.target.value)
        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                let data = res.data
                setInputNama(data.name)
                setInputHarga(data.price)
                setInputBerat(data.weight)
                setCurrentID(data.id)
        })
    }

    const handleDelete = (event) => {
        let id = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
        .then(() => {
                let newData = dataHargaBuah.filter(el => {return el.id !== id} )
                setDataHargaBuah([...newData])
        })
    }

    return(
        <div className = "table_form">
            { dataHargaBuah !== null &&
                (
                    <>
                        <h1><strong>Daftar Harga Buah</strong></h1>
                            <table border="4" cellpadding="5">
                            <thead>
                                <tr>
                                    <td width="100px" ><strong>No</strong></td>
                                    <td width="200px" ><strong>Nama</strong></td>
                                    <td width="200px" ><strong>Harga</strong></td>
                                    <td width="200px" ><strong>Berat</strong></td>
                                    <td width="100px" ><strong>Action</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                dataHargaBuah.map((item, index)=>{
                                    return(                    
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.weight/1000} kg</td>
                                            <td >
                                                <button onClick={handleEdit} value={item.id}>Edit</button>
                                                <button onClick={handleDelete} value={item.id}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                            <h1><strong>Form Daftar Buah</strong></h1>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>
                                            <strong>Nama Buah:</strong>
                                        </label>      
                                        <input required name="nama" type="text" value={InNama} onChange={handleChange}/>
                                        <br /><br />
                                        <label>
                                            <strong>Harga Buah:</strong>
                                        </label> 
                                        <input required name="harga" type="number" value={InHarga} onChange={handleChange}/>
                                        <br /><br />
                                        <label>
                                            <strong>Berat Buah (dalam gram):</strong>
                                        </label>      
                                        <input required name="berat" type="number" value={InBerat} onChange={handleChange}/>
                                        <br /><br />
                                        <button><strong>Submit</strong></button>
                                        <br></br>
                                    </div>
                                </form>
                    </>
                )
            }
        </div>
    )
}

export default Lists;