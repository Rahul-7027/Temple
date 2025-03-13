import React from 'react';


// Importing images
import news1 from '../../images/press1.jpg';
import news2 from '../../images/press2.jpg';
import news3 from '../../images/press3.jpg';
import news4 from '../../images/press4.jpg';
import news5 from '../../images/press5.jpg';
import news6 from '../../images/press6.jpg';

const News = () => {
    return (
        <div className="container text-center" style={{marginTop:"90px"}}>

            <div className="row g-4 justify-content-center">
                <h2 className='my-5'>NewsPaper Headlines</h2>
                {/* First Large Image */}
                <div className="col-md-6 col-lg-4">
                    <img src={news1} className="img-fluid rounded shadow-lg" alt="News 1" />
                </div>

                {/* Small News Articles */}
                <div className="col-md-6 col-lg-4">
                    <img src={news2} className="img-fluid rounded shadow-lg" alt="News 2" />
                </div>
                <div className="col-md-6 col-lg-4">
                    <img src={news3} className="img-fluid rounded shadow-lg" alt="News 3" />
                </div>
                <div className="col-md-6 col-lg-4">
                    <img src={news4} className="img-fluid rounded shadow-lg" alt="News 4" />
                </div>
                <div className="col-md-6 col-lg-4">
                    <img src={news5} className="img-fluid rounded shadow-lg" alt="News 5" />
                </div>
                <div className="col-md-6 col-lg-4">
                    <img src={news6} className="img-fluid rounded shadow-lg" alt="News 6" />
                </div>

            </div>
        </div>
    );
};

export default News;
