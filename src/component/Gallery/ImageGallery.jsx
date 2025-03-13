import React, { useState } from 'react';
import Gallery1 from "../../images/g1.jpeg";
import Gallery2 from "../../images/g2.jpg";
import Gallery3 from "../../images/g3.jpeg";
import Gallery4 from "../../images/g4.jpeg";
import Gallery5 from "../../images/g5.jpeg";
import { IoMdCloseCircle } from "react-icons/io";

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className=" ">
            <div className="row g-3 justify-content-center">
                {[Gallery1, Gallery2, Gallery3, Gallery4, Gallery5].map((image, index) => (
                    <div key={index} className="col-6 col-sm-4 col-md-2">
                        <div className="card">
                            <img
                                src={image}
                                className="card-img-top p-2 rounded"
                                alt={`Gallery ${index + 1}`}
                                style={{ height: "150px", objectFit: "cover", cursor: "pointer" }}
                                onClick={() => openImage(image)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Bootstrap Modal */}
            {selectedImage && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                    <button className="btn btn-light mx-auto d-block my-3" onClick={() => setSelectedImage(null)}>{<IoMdCloseCircle />}</button>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content bg-transparent border-0">
                            <div className="modal-body text-center">
                                <img src={selectedImage} className="img-fluid rounded" alt="Full Size" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
