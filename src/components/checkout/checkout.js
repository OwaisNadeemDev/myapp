import React from 'react';
import './checkout.css';

const Checkout = () => {
    return (
        // <!-- Page Content -->
        <div class="main-container">
        
            {/* <!-- Portfolio Item Heading --> */}
           <h4 className='my-4'>Checkout</h4>
          
            {/* <!-- Portfolio Item Row --> */}
            <div class="row">
          
              <div class="col-md-7">
                <img class="img-fluid" src="https://via.placeholder.com/750x500" alt="item"/>
              </div>
          
              <div class="col-md-5">
                <h3 class="my-3 product_title">Apple iPhone 12 Pro Max 256gb Fully Unlocked</h3>
                <h2 className='product_price'>$300</h2>

                <div className="shipping_details my-2"><i class="fas fa-truck"></i>&nbsp;Ships for $14.49</div>

                <div className="pusblished">Posted 23 minutes ago in Queens, NY</div>

                <div className="condition">Condition: Used (normal wear)</div>

                <div className="category">Electronics & Media - Cell phones & Accessories</div>

                <button className='buyNow'></button>

                <div className="btn-group">
                    <button className='ask '>ASK</button>
                    <button className='make_offer '>Make Offer</button>
                </div>
                {/* <h3 class="my-3">Project Details</h3>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Dolor Sit Amet</li>
                  <li>Consectetur</li>
                  <li>Adipiscing Elit</li>
                </ul> */}
              </div>
          
            </div>
            {/* <!-- /.row --> */}
          
            {/* <!-- Related Projects Row --> */}
            <h3 class="my-4">Related Projects</h3>
          
            <div class="row">
          
              <div class="col-md-3 col-sm-6 mb-4">
                <a href="/">
                      <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="item"/>
                    </a>
              </div>
          
              <div class="col-md-3 col-sm-6 mb-4">
                <a href="/">
                      <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="item"/>
                    </a>
              </div>
          
              <div class="col-md-3 col-sm-6 mb-4">
                <a href="/">
                      <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="item"/>
                    </a>
              </div>
          
              <div class="col-md-3 col-sm-6 mb-4">
                <a href="/">
                      <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="item"/>
                    </a>
              </div>
          
            </div>
            {/* <!-- /.row --> */}
          
          </div>
          

    );
}

export default Checkout;
