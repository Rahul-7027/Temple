import React from "react";

const Contact = () => {
    return (
        <div className="container mt-5" >
            <div className="row" style={{marginTop:"170px"}}>
                <div className="col-md-6">
                    {/* <p className="text-danger fw-bold">
                        Please note, any correspondence will be received by The Office of His Holiness  and not by His Holiness Swami Kailashanand Giri personally.
                    </p> */}
                    <h5 className="fw-bold">Our Address :</h5>
                    <p>
                        SriRam Jarokha Kailash Dham, Sujandesar, Bikaner
                    </p>
                    <h5 className="fw-bold">Contact Number :</h5>
                    <p>+91 7568906878, +91 6377459799</p>
                    <h6 className="fw-bold">For event or press enquiries, please write to:</h6>
                    <p className="fw-bold">office@ikaner.com</p>
                </div>

                <div className="col-md-6">
                    <h3 className="text-center">संपर्क करे</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Your name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your Mobile No.</label>
                            <input type="text" className="form-control" placeholder="Enter your mobile number" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your message (optional)</label>
                            <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
