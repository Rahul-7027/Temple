import React from 'react'

const Accordion = () => {
    return (
        <div className='my-5 container' >
            <h2 className='text-center'>आगामी आयोजन</h2>
            <h4 className='text-center'>आयोजन समय सारणी</h4>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header " style={{border:"4px solid black",borderRadius:"8px"}} id="flush-headingOne">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            प्रतिदिन निःशुल्क हवन कार्यक्रम
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">नित्य हवन आध्यात्मिक और धार्मिक अनुष्ठान है जो व्यक्ति को शारीरिक, मानसिक और आध्यात्मिक रूप से लाभ देता है।<br />
                            – नित्य हवन से व्यक्ति का शरीर, मन और आत्मा शुद्ध होता है।<br />
                            – नित्य हवन से व्यक्ति को शारीरिक और मानसिक स्वास्थ्य लाभ मिलते हैं।<br />
                            – नित्य हवन से व्यक्ति को आध्यात्मिक ज्ञान और शांति प्राप्त होती है।<br />
                            – प्रतिदिन हवन को करने के लिए किसी विशेष ज्ञान या कौशल की आवश्यकता नहीं होती है। कोई भी व्यक्ति नित्य हवन कर सकता है।</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
