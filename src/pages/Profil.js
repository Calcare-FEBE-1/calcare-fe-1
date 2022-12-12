import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { IoChevronBack } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../style/css/profil.css";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import img from "../assets/img/1.jpeg";
import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";

const Profil = () => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [tinggi, setTinggi] = useState(localStorage.getItem("tinggi"));
  const [berat, setBerat] = useState(localStorage.getItem("berat"));

  const [aktivitas, setAktivitas] = useState(localStorage.getItem("aktivitas"));
  const [kelamin, setKelamin] = useState(localStorage.getItem("kelamin"));
  const [umur, setUmur] = useState(localStorage.getItem("umur"));
  const [errors, setErrors] = useState(false);
  const [image, setImage] = useState("");
  const [imageCrop, setImageCrop] = useState("");
  const [src, setSrc] = useState(false);
  const [profile, setProfile] = useState(
    localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : []
  );
  const [pview, setPview] = useState(false);

  const profilFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setPview(null);
  };
  const onCrop = (view) => {
    setPview(view);
  };
  const saveCropImage = () => {
    localStorage.setItem("profile", JSON.stringify([...profile, { pview }]));
    setProfile([{ pview }]);
    setImageCrop(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(true);
    } else {
      alert("Data berhasil diubah");
      localStorage.setItem("nama", nama);
      localStorage.setItem("email", email);
      localStorage.setItem("tinggi", tinggi);
      localStorage.setItem("berat", berat);
      localStorage.setItem("umur", umur);
    }
  };
  return (
    <>
      <Navbar />
      <div className="profil">
        <main>
          <div className="container-fluid">
            <div className="container section-atas">
              <div className="row backIcon">
                <Link className="back" to="/Home">
                  <IoChevronBack size={35} />
                </Link>
              </div>
              <div className="teks">
                <h6 className="heading">Profil</h6>
                <p className="paragraf">
                  Hai {nama}, di bagian profil berisi data penting tentang diri
                  kamu. Kamu juga bisa menyunting data kamu jika masih ada salah
                  input.
                </p>
              </div>
            </div>
            <div className="container section-main">
              <div className="kiri">
                <img
                  src={profilFinal.length ? profilFinal : img}
                  className="gambar-profil"
                  onClick={() => setImageCrop(true)}
                />
                <h4>{nama}</h4>
                <h5>
                  <FaBirthdayCake /> {umur}
                </h5>
                <h5>
                  <BsGenderAmbiguous /> {kelamin}
                </h5>
                <div>
                  <Dialog
                    visible={imageCrop}
                    header={() => (
                      <p
                        htmlFor=""
                        className="text-2xl font-semibold textcolor"
                      >
                        Unggah Foto Profil
                      </p>
                    )}
                    onHide={() => setImageCrop(false)}
                  >
                    <div className="confirmation-content flex flex-column align-items-center ">
                      <Avatar
                        width={500}
                        height={400}
                        onCrop={onCrop}
                        onClose={onClose}
                        src={src}
                        shadingColor={"#474649"}
                        backgroundColor={"#474649"}
                      />
                      <div className="flex flex-column align-items-center mt-5 w-12">
                        <div className="flex justify-content-center w-12 mt-4">
                          <Button
                            onClick={saveCropImage}
                            label="Simpan"
                            icon="pi pi-check"
                          />
                        </div>
                      </div>
                    </div>
                  </Dialog>

                  <InputText
                    type="file"
                    accept="/image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file && file.type.substring(0, 5) === "image") {
                        setImage(file);
                      } else {
                        setImage(null);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="kanan">
                <div className="content">
                  <div className="section-kiri">
                    <p>Email : </p>
                    <p>Berat Badan : </p>
                    <p>Tinggi Badan : </p>
                    <p>Aktivitas : </p>
                  </div>
                  <div className="section-kanan">
                    <p>{email}</p>
                    <p>{berat} kg</p>
                    <p>{tinggi} cm</p>
                    <p>{aktivitas}</p>
                  </div>
                </div>
                <div className="section-button">
                  <a
                    className="mx-3 btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    id="edit"
                  >
                    Edit Data
                  </a>
                </div>

                <div
                  class="modal fade"
                  id="modal"
                  aria-hidden="true"
                  aria-labelledby="modal"
                  tabindex="-1"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class=" modal-title " id="modal">
                          Edit Profil
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                          <label htmlFor="nama" className="form-label">
                            <h6>Nama</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="nama"
                            name="nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                          />

                          <label htmlFor="email" className="form-label">
                            <h6>Email</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />

                          <label htmlFor="berat" className="form-label">
                            <h6>Berat Badan</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="berat"
                            name="berat"
                            value={berat}
                            onChange={(e) => setBerat(e.target.value)}
                          />

                          <label htmlFor="tinggi" className="form-label">
                            <h6>Tinggi Badan</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="tinggi"
                            name="tinggi"
                            value={tinggi}
                            onChange={(e) => setTinggi(e.target.value)}
                          />

                          <label htmlFor="umur" className="form-label">
                            <h6>Umur</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="umur"
                            name="umur"
                            value={umur}
                            onChange={(e) => setUmur(e.target.value)}
                          />
                          <button
                            className="btn btn-info mb-3 mt-2"
                            id="signUp"
                          >
                            Daftar
                          </button>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          class="btn btn-primary"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                        >
                          Open second modal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id="exampleModalToggle2"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel2"
                  tabindex="-1"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1
                          class="modal-title fs-5"
                          id="exampleModalToggleLabel2"
                        >
                          Modal 2
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        Hide this modal and show the first with the button
                        below.
                      </div>
                      <div class="modal-footer">
                        <button
                          class="btn btn-primary"
                          data-bs-target="#modal"
                          data-bs-toggle="modal"
                        >
                          Back to first
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Profil;
