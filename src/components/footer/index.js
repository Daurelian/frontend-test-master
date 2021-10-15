import React from "react";

export default function Footer() {
  return (
    <>
      <div className="col-12">
        <hr class="divisor_footer"></hr>
      </div>
      <div className="row footer">
        <div className="col-4">
          <span className="page_prev">
            <i class="fas fa-angle-left page_icon_prev"></i>Prev
          </span>
        </div>
        <div className="col-4">
          <ul className="ul_footer">
            <a class="active list_link" href="#home">
              <li className="li_footer">1</li>
            </a>
            <a class="active list_link" href="#home">
              <li className="li_footer">2</li>
            </a>
            <a class="active list_link" href="#home">
              <li className="li_footer">3</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <span className="page_next">
            Next<i class="fas fa-angle-right page_icon_next"></i>
          </span>
        </div>
      </div>
    </>
  );
}
