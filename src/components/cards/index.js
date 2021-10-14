import React from "react";
import boiler from "../../images/boiler.png";

export default function Cards (props){

return (
<div className="row">
            {/* Card */}
            <div className="col-4 card_product">
              <img src={boiler} alt="Boiler_Image" className="image_product" />
              <i class="far fa-heart prefer_product"></i>
              <span className="alert_product">Risparmi il 20%</span>
              <h5 className="title_product">ARISTON</h5>
              <p className="description_product">
                Matis condens - Condensing Boiler 24 kW Methane - Indoor
              </p>
              <span className="price_product">1.350,00 €</span>
              <span className="sale_product"> 1.570 €</span>
              <h6 className="information_product">
                Sopralluogo e installazione inclusi
              </h6>
              <hr class="divisor_product"></hr>
              <div className="under_product">
                <div class="icon_span">
                  <i class="fas fa-star icon_product"></i>
                  <i class="fas fa-star icon_product"></i>
                  <i class="fas fa-star icon_product"></i>
                  <i class="fas fa-star icon_product"></i>
                  <i class="far fa-star icon_product"></i>
                </div>
                <span className="confront">CONFRONTA</span>
                <div>
                  <div class="container_filter_card">
                    <input type="checkbox"></input>
                    <div class="checkmark_card"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fine Card */}
            
            </div>
)

}