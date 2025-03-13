import React from 'react'
import Infromation1 from "../../images/information.jpg";
import "./guru.css"
import { Link } from 'react-router-dom';

const GuruInformation = () => {
    return (


        <div className="container card mb-3 my-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img style={{ height: "100%", padding: "10px", borderRadius: "23px" }} src={Infromation1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">महंत श्री सरजू दासजी महाराज</h5>
                        <p className="card-text">जश्री सरजूदासजी महाराज
                            जय सियाराम के उद्बोधन व हर पल जय सियाराम का सुमिरन करने वाले महामंडलेश्वर श्री सरजूदासजी महाराज  ने गद्दी संभालने के बाद क्रांतिकारी उद्देश्यों के साथ सेवा कार्यों को आगे बढ़ाया। मात्र सेवा ही नहीं धर्म की रक्षा के लिए हर समय तत्पर रहने वाले श्री सरजूदासजी महाराज संत समाज में अपनी विशिष्ट पहचान रखते हैं तथा हर माह सैकड़ों साधु-संतों के साथ संगत करते हैं। सरजूदासजी ने अपने गुरुजनों के बताए मार्ग पर चलकर कैलाश धाम को और भी भव्य स्वरूप प्रदान कर आस्था के इस केन्द्र को आगे बढ़ाने में कोई कमी नहीं रखी। मात्र 10 वर्ष की आयु में वैरागी बनने वाले सरजूदासजी ने अपनी शिक्षा व अध्यात्म का ज्ञान मथुरा में ही प्राप्त किया। मथुरा की माटी में रमे सरजूदासजी प्रारंभ से ही हिन्दूत्व व सनातन धर्म की पैरवी करते नजर आए। बीकानेर में रामझरोखा कैलाश धाम की गद्दी संभालने के साथ ही महाकुम्भ में बीकानेर का अखाड़ा पहली बार लगाने का श्रेय भी श्री सरजूदासजी महाराज को जाता है। उज्जैन महाकुम्भ में 2016 में रामझरोखा कैलाशधाम के पीठाधीश्वर नियुक्त होने से पूर्व भारत के सबसे छोटी आयु के महामंडलेश्वर महाकुम्भ में बीकानेर खालसा का नेतृत्व किया।
                        </p>
                        <Link to="/readmore"><button className="card-text btn btn-primary">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuruInformation
