import React from 'react'

export const Footer = () => {
    return (

        <div>
        <div className="card text-center" style={{marginTop: "7rem"}}>
        <div className="card-header">
        </div>
            <div className="card-body"  style={{height:"18rem"}}>
              <h3 className="card-title" style={{marginTop: "3rem"}}>CONTACT INFO</h3>
              <p className="card-text"><h4>If you want clasifications we are here to help you</h4></p>
              <div className="row g-0">
              <div className="col-md-3" style={{marginLeft: "20rem"}}>
              <h5> <i className="fas fa-phone-square-alt"></i><nbsp/> 0117234343 ( Perera )</h5>
              <h5> <i className="fas fa-envelope-square"></i> sliit8thicaf2021gmail.com </h5>
              </div>
              <div className="col-md-3">
              <h5><i className="fab fa-whatsapp-square"></i> 07167565656 ( Dulani )</h5>
              <h5><i className="fab fa-linkedin"></i> SLIIT 8TH ICAF - 2021 </h5>
          </div>
        </div>
        </div>
      </div>
        </div>
    )
}

export default Footer

