import React from 'react';
import './ListBuah.css';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

function ChangeWeight(data){
    for(let i = 0; i < dataHargaBuah.length; i++){
        data[i].berat /= 1000
    }
    return data
}

let databaru = ChangeWeight(dataHargaBuah)

class NamaBuah extends React.Component {
    render() {
        return(
            <h5 className="small-heading">
                {this.props.nama}
            </h5>
        );
    }
}

class HargaBuah extends React.Component {
    render() {
        return(
            <h5 className="small-heading">
                {this.props.harga}
            </h5>
        );
    }
}

class BeratBuah extends React.Component {
    render() {
        return(
            <h5 className="small-heading">
                {this.props.berat} Kg
            </h5>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <>
                <tr className="table-row1" >
                    <td className="table-td1">
                        <h5 className="small-heading1">
                            Nama
                        </h5>
                    </td>
                    <td className="table-td2">
                        <h5 className="small-heading1">
                            Harga
                        </h5>
                    </td>
                    <td className="table-td2">
                        <h5 className="small-heading1">
                            Berat
                        </h5>
                    </td>
                </tr>
            </>
        );
    }
}

class Buah extends React.Component {
    render() {
        return(
            <>
                {dataHargaBuah.map(el=> {
                    return (
                        <tr className="table-row2">
                            <td><NamaBuah nama={el.nama}/></td>
                            <td><HargaBuah harga={el.harga}/></td>
                            <td>
                                <BeratBuah berat={el.berat}/>
                            </td>
                        </tr>
                    )
                })}
            </>
        )
    }
}

class ListBuah extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 className="table-head">Tabel Harga Buah</h1>
                <table className="fruit-table">
                    <Header/>
                    <Buah/>
                </table>
            </div>
        );
    }
}

export default ListBuah;







