import React, { useEffect, useState } from "react";
import "../style/css/TrackCal.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { IoChevronBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const TrackCal = () => {
  const cart = useSelector((state) => state.cart);
  const terpenuhi =
    cart.totalCalories +
    cart.totalCarbohydrate +
    cart.totalFat +
    cart.totalProtein;
  const tidakTerpenuhi = localStorage.getItem("hitung") - terpenuhi;
  const percentTerpenuhi = (terpenuhi / localStorage.getItem("hitung")) * 100;
  const percenetTidak =
    (tidakTerpenuhi <= 0
      ? 0
      : tidakTerpenuhi / localStorage.getItem("hitung")) * 100;
  const [data, setData] = useState({
    datasets: [
      {
        data: [percentTerpenuhi, percenetTidak],
        backgroundColor: ["#11999E", "#AFEFE3"],
      },
    ],
  });

  const [dataKarbo, setDataKarbo] = useState({
    datasets: [
      {
        data: [500, 1000],
        backgroundColor: ["#11999E", "#AFEFE3"],
      },
    ],
  });

  const [dataProtein, setDataProtein] = useState({
    datasets: [
      {
        data: [150, 800],
        backgroundColor: ["#11999E", "#AFEFE3"],
      },
    ],
  });

  const [dataLemak, setDataLemak] = useState({
    datasets: [
      {
        data: [350, 800],
        backgroundColor: ["#11999E", "#AFEFE3"],
      },
    ],
  });

  const [dataKarbon, setDataKarbon] = useState({
    datasets: [
      {
        data: [850, 1000],
        backgroundColor: ["#11999E", "#AFEFE3"],
      },
    ],
  });

  const [hitung, setHitung] = useState("");

  useEffect(() => {
    var beratbadan = localStorage.getItem("berat");
    var tinggibadan = localStorage.getItem("tinggi");
    var jeniskelamin = localStorage.getItem("kelamin");
    var umur = localStorage.getItem("umur");
    var kalori = localStorage.getItem("kalori");
    var hitung = "";
    if (jeniskelamin === "Laki") {
      hitung = 66.5 + 13.75 * beratbadan + 5.003 * tinggibadan - 6.75 * umur;
    } else if (jeniskelamin === "Perempuan") {
      hitung = 655.1 + 9.563 * beratbadan + 1.85 * tinggibadan - 4.676 * umur;
    } else {
      alert("Data Tidak Ditemukan");
    }
    localStorage.setItem("hitung", JSON.stringify(hitung));
  }, [hitung]);

  return (
    <div className="Track-Cal">
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
              <h6 className="heading">Track Kalori</h6>
              <p className="paragraf">
                Hai, menu Track Kalori menampilkan informasi detail tentang
                kebutuhan kalori harianmu dan jumlah kalori yang sudah
                terpenuhi. Yuk, semangat, pasti bisa memenuhi hidup sehat !
              </p>
            </div>
          </div>
          <div className="container section-track-kal">
            <div className="container track-left">
              <div className="card card-left" style={{ width: 750 }}>
                <div className="row g-0">
                  <h6 className="heading-card">Kebutuhan Kalori Harian</h6>
                  <div className="col-md-6 chart-item">
                    <div className="chart-container">
                      <div
                        className="chart "
                        data-percent="100"
                        data-bar-color="#11999E"
                      >
                        <Doughnut data={data} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card-body">
                      <h5 className="card-title">Dibutuhkan</h5>
                      <p
                        className="card-text"
                        style={{ fontWeight: "bold", fontStyle: "normal" }}
                      >
                        {" "}
                        <span className="fw-bold" id="hitung-cal">
                          {localStorage.getItem("hitung")}
                        </span>{" "}
                        Kkal
                      </p>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Terpenuhi</h5>
                      <p className="card-text">
                        {" "}
                        <span className="fw-bold" id="cal-terpenuhi">
                          {cart.totalCalories +
                            cart.totalCarbohydrate +
                            cart.totalFat +
                            cart.totalProtein}
                        </span>{" "}
                        Kkal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container track-right">
              <div className="card card-right">
                <div className="row g-0 row-right">
                  <div className="col-md-6 chart-item-right">
                    <div className="chart-container-right">
                      <div
                        className="chart chart-right"
                        data-percent="72"
                        data-bar-color="#11999E"
                      >
                        <Doughnut data={dataKarbo} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="jumlah-nutrisi">
                        {cart.totalCarbohydrate}g
                      </h6>
                      <p className="keterangan-nutrisi">Karbohidrat</p>
                    </div>
                  </div>
                </div>

                <div className="row g-0 row-right">
                  <div className="col-md-6 chart-item-right">
                    <div className="chart-container-right">
                      <div
                        className="chart chart-right"
                        data-percent="32"
                        data-bar-color="#11999E"
                      >
                        <Doughnut data={dataProtein} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="jumlah-nutrisi">{cart.totalProtein}g</h6>
                      <p className="keterangan-nutrisi">Protein</p>
                    </div>
                  </div>
                </div>

                <div className="row g-0 row-right">
                  <div className="col-md-6 chart-item-right">
                    <div className="chart-container-right">
                      <div
                        className="chart chart-right"
                        data-percent="62"
                        data-bar-color="#11999E"
                      >
                        <Doughnut data={dataLemak} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="jumlah-nutrisi">{cart.totalFat}g</h6>
                      <p className="keterangan-nutrisi">Lemak</p>
                    </div>
                  </div>
                </div>

                <div className="row g-0 row-right">
                  <div className="col-md-6 chart-item-right">
                    <div className="chart-container-right">
                      <div
                        className="chart chart-right"
                        data-percent="42"
                        data-bar-color="#11999E"
                      >
                        <Doughnut data={dataKarbon} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="jumlah-nutrisi">{cart.totalCalories}g</h6>
                      <p className="keterangan-nutrisi">Kalori</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container section-button"
            style={{ justifyContent: "center" }}
          >
            <button type="button" className="btn-lg">
              {" "}
              <Link to="/pilihMakanan"> Pilih Makanan </Link>
            </button>
          </div>
          <div
            className="container section-link"
            style={{ justifyContent: "center" }}
          >
            <Link className="detail" to="/detail">
              Lihat Detail
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackCal;
