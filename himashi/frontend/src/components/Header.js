import React from 'react';

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SLIIT ICAF</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Research
              </a>
             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><a class="dropdown-item" href="researchAdd">Add Research</a></li>
                     <li><a class="dropdown-item" href="/researchlist">Research Papers</a></li>
             </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
            

  );
};

export default Header;
