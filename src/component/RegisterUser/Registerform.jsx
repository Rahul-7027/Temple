import React from 'react';

const RegisterForm = () => {
    const pdfUrl = "/filedata.pdf"; // Ensure file is inside public/

    const openPDF = () => {
        window.open(pdfUrl, "_blank"); // Open in a new tab
    };

    return (
        <div className="container">
            <h3 style={{ marginTop: "150px" }}>
                श्री राम झरोखा कैलाश धाम
                आगामी आयोजन
                फोटो गैलरी
                संपर्क करे
                बीकानेर खालसा
            </h3>

            {/* Button to Open PDF */}
            <button className="btn btn-primary justify-content-center" onClick={openPDF}>
                श्री रामझरोखा कैलाश-धाम की सदस्यता हेतु फॉर्म डाउनलोड करें
            </button>
        </div>
    );
};

export default RegisterForm;
