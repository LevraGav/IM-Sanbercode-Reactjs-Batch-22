import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="content">
      <h1>Form Pembelian Buah</h1>
      <table>
        <tr>
          <td>
            <label for="nama"><b>Nama Pelanggan</b></label> 
          </td>
          <div className="box">
            <td>
              <input type="text" id="nama" size="21"></input>
            </td>
          </div>
        </tr>
        <tr>
          <td>
            <label for="daftar-item"><b>Daftar Item</b></label> 
          </td>
          <td className="iteminput">
            <div className="box">
              <input type="checkbox" name="daftar-item" value="Semangka"></input>
              <label className="fruit">Semangka</label>
              <br></br>
            </div>

            <div className="box">
            <input type="checkbox" name="daftar-item" value="Semangka"></input>
            <label className="fruit">Jeruk</label>
            <br></br>
            </div>

            <div className="box">
            <input type="checkbox" name="daftar-item" value="Semangka"></input>
            <label className="fruit">Nanas</label>
            <br></br>
            </div>

            <div className="box">
            <input type="checkbox" name="daftar-item" value="Semangka"></input>
            <label className="fruit">Salak</label>
            <br></br>
            </div>

            <div className="box">
            <input type="checkbox" name="daftar-item" value="Semangka"></input>
            <label className="fruit">Anggur</label>
            <br></br>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <button>Kirim</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;