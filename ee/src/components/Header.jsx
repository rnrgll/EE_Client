import React from 'react';
import { Link } from 'react-router-dom';

export default function  Header() {
    return (
        <div className="header-container">
            <div className="heander-wrap">
                <div className="header-left-wrap">
                    <Link style={{display: 'flex', alingnItems: 'center'}} to='/'>
                        <img 
                           style={{ width: "154px", height: "20px" }}
                           src="https://www.figma.com/file/PSRw9C05cWnCq4Qed1ryJG/Easy-Excel-Wireframe?type=design&node-id=276-1743&mode=design&t=SHo60nV72GVIv96L-4"
                           alt="로고" />
                    </Link>
                    <ul>
                        <li>
                          <Link className="header-nav-item" to="/ourvision">
                            Our Vision
                          </Link>
                        </li>
                        <li>
                          <Link className="header-nav-item" to="/ourteam">
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link className="header-nav-item" to="contact">
                            Contact
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}