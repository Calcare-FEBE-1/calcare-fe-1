import React from "react";
import "../style/css/makanan.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Makanan = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="makanan">
      <Navbar />
      <main>
        <div className="container-fluid">
          <div className="container section-atas">
            <div className="row backIcon">
              <Link className="back" to="/Homepage">
                <IoChevronBack size={35} />
              </Link>
            </div>
            <div className="teks">
              <h6 className="heading">Daftar Pilihan Makanan</h6>

              <p className="paragraf">
                Pilihlah makanan yang sesuai dengan yang kamu makan dari daftar
                yang tersedia. Jika tidak ada, coba gunakan fitur pencarian
              </p>
            </div>
            <div className="date">
              <input type="date" name="date" className="tanggal" />
            </div>
          </div>

          <div className="container section-makanan">
            <div className="container section-makan-pagi">
              <table className="table tbl-pagi table-borderless">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#B8DB70", width: "35rem" }}
                      className="keterangan"
                    >
                      Makanan
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "white", color: "#11999E" }}
                    >
                      Jumlah
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "white", color: "#11999E" }}
                    >
                      Lemak
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "white", color: "#11999E" }}
                    >
                      Karb
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "white", color: "#11999E" }}
                    >
                      Protein
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "white", color: "#11999E" }}
                    >
                      Kal
                    </th>
                  </tr>
                </thead>
                <tbody className="baris-makan-pagi">
                  {cart.cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.jumlah}</td>
                      <td>{item.fat}</td>
                      <td>{item.carbohydrate}</td>
                      <td>{item.protein}</td>
                      <td id="kalori">{item.calories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className="container section-tengah"
            style={{ justifyContent: "center" }}
          >
            <div className="tambah-item ">
              <button className="tmbh-item-pagi">
                <Link to="/pilihMakanan">+ Tambahkan item</Link>
              </button>
            </div>
          </div>

          <div
            className="container section-bawah"
            style={{ justifyContent: "center" }}
          >
            <button type="button" className="btn-lg kalori-btn">
              <Link className="track-kal" to="/TrackCal">
                {" "}
                Track Kalori
              </Link>
            </button>
            <button type="button" className="btn-lg karbon-btn">
              {" "}
              <Link className="track-karbon" to="/TrackCarbon">
                Track Karbon
              </Link>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Makanan;
