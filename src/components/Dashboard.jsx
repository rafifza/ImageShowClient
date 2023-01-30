import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/images")
      .then((response) => {
        setPhotos(response.data.photos.photo);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(photos);
  return (
    <>
      <nav className="w-100% h-25 bg-primary">
        <div className="d-flex justify-content-between ">
          <p className="m-3">Hello</p>
          <button
            onClick={Logout}
            className="justify-content-end m-3 rounded border-0 bg-danger"
          >
            Log Out
          </button>
        </div>
      </nav>
      <div className="d-flex flex-wrap d-flex justify-content-around">
        {photos.map((photo) => (
          <>
            <div className="card w-25 border border-dark m-5">
              <img
                className="card-img-top "
                src={photo.url_o}
                key={photo.id}
                alt={photo.title}
              />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-center">{photo.title}</h5>
                <p className="card-text text-center">{photo.owner}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
