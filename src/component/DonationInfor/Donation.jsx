import React from 'react'
import QRCode from "../../images/barcode.jpg"
import PayMentMethod from "../../images/pay.png"
const Donation = () => {
    return (
        <>
            <div className="container donation-container mt-4">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h2 className="fw-bold">राशि सहयोग के लिए</h2>
                        <p className="text-muted">आयकर अधिनियम 1961 के अंतर्गत 80 जी की छूट</p>
                        <p><strong>SRN No.</strong> ABDTS3757JE20221 / 05-09-2022 <strong>PAN No.</strong> ABDTS3757J</p>
                        <p><strong>State Bank of India, Bhinasar</strong></p>
                        <p><strong>A/c No.:</strong> 41367245166 &nbsp; <strong>IFSC:</strong> SBIN0031167</p>
                        <p><strong>CONTACT NO.:</strong> 8619474661</p>

                        <div className="payment-icons d-flex align-items-center mt-3">
                            <img src={PayMentMethod} alt="PhonePe" />

                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <img src={QRCode} alt="QR Code" className="img-fluid" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Donation
