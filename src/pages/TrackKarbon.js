import React, { useState } from "react";
import "../style/css/TrackKarbon.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import image1 from "../assets/img/img1.png";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const TrackKarbon = () => {
  const cart = useSelector((state) => state.cart);
  const terpenuhi =
    cart.totalCalories +
    cart.totalCarbohydrate +
    cart.totalFat +
    cart.totalProtein;
  const percentCarbo = (cart.totalCarbohydrate / terpenuhi) * 100;
  const percentAll = ((terpenuhi - cart.totalCarbohydrate) / terpenuhi) * 100;
  const [data, setData] = useState({
    datasets: [
      {
        data: [percentCarbo, percentAll],
        backgroundColor: ["#11999E", "#AFEFE3"],
      },
    ],
  });

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
              <h6 className="heading">Dampak Karbon</h6>
              <p className="paragraf">
                Hai, menu Dampak Karbon ini terdapat informasi jumlah karbon
                dari makanan yang telah kamu makan. Stay Healthy People!!
              </p>
            </div>
          </div>

          <div className="container section-track-kal p-3">
            <div className="container track-left">
              <div className="card card-left" style={{ width: 750 }}>
                <div className="row g-0">
                  <h6 className="heading-card">Karbon yang dihasilkan</h6>
                  <div className="col-md-6 chart-item">
                    <div className="chart-container">
                      <div
                        className="chart "
                        data-percent="92"
                        data-bar-color="#11999E"
                      >
                        <Doughnut data={data} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card-body">
                      <h5 className="card-title">Dihasilkan</h5>
                      <p
                        className="card-text"
                        style={{ fontWeight: "bold", fontStyle: "normal" }}
                      >
                        {" "}
                        <span className="fw-bold" id="hitung-cal"></span>{cart.totalCarbohydrate} Kg CO2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackKarbon;
