import React, {Component} from 'react'
import './UpdateBuah.css';

class Lists extends Component{
    constructor(props){
        super(props)
        this.state ={
            dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            nama: "",
            harga: "",
            berat: 0,
            currentIndex: -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let target = event.target
        let name = target.name
        this.setState({
            [name]: target.value
        });
    }
    
    handleSubmit(event){
        event.preventDefault()
        let indexSkrg = this.state.currentIndex
        let buah = this.state.dataHargaBuah
        let baru = {
            nama: this.state.nama, 
            harga: this.state.harga, 
            berat: this.state.berat
        }

        if(indexSkrg === -1){
            this.setState({
                dataHargaBuah: [...buah, baru],
                nama: "",
                harga: "",
                berat: 0,
            })
        }else{
            buah[indexSkrg] = baru
            this.setState({
                dataHargaBuah: [...buah],
                nama: "",
                harga: "",
                berat: 0,
                currentIndex: -1
            })
        }
    }

    handleEdit = (event) =>{
        let index = event.target.value
        let buah = this.state.dataHargaBuah[index]
        this.setState({
            nama: buah.nama,
            harga: buah.harga,
            berat: buah.berat,
            currentIndex: index
        })
    }

    handleDelete = (event) =>{
        let index = parseInt(event.target.value)
        let newBuah = this.state.dataHargaBuah.filter((val,idx) =>{
            return idx !== index
        })
        this.setState({
            dataHargaBuah: [...newBuah]
        })
    }

    render(){
        return(
            <div className = "table_form">
                <h1><strong>Daftar Harga Buah</strong></h1>
                <table border="4" cellpadding="5">
                    <thead>
                        <tr>
                            <td width="100px" ><strong>No</strong></td>
                            <td width="200px" ><strong>Nama</strong></td>
                            <td width="200px" ><strong>Harga</strong></td>
                            <td width="200px" ><strong>Berat</strong></td>
                            <td width="100px" ><strong>Aksi</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataHargaBuah.map((item,index)=>{
                                return(                    
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.berat/1000} kg</td>
                                        <td >
                                            <button onClick={this.handleEdit} value={index}>Edit</button>
                                            <button onClick={this.handleDelete} value={index}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {/* Form */}
                <h1><strong>Form Daftar Harga Buah</strong></h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            <strong>Nama :</strong>
                        </label>      
                        <input required name="nama" placeholder="Nama Buah" type="text" value={this.state.nama} onChange={this.handleChange}/>
                        <br /><br />

                        <label>
                            <strong>Harga :</strong>
                        </label> 
                        <input required name="harga" placeholder="Harga Buah" type="text" value={this.state.harga} onChange={this.handleChange}/>
                        <br /><br />

                        <label>
                            <strong>Berat (dalam gram) :</strong>
                        </label>      
                        <input required name="berat" type="text" value={this.state.berat} onChange={this.handleChange}/>
                        <br /><br />

                        <button><strong>Submit</strong></button>
                        <br></br>
                    </div>
                </form>
            </div>
        )
    }
}

export default Lists;