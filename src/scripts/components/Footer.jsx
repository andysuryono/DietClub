import React, {Component} from 'react';
import {Link} from 'react-router';
/**
 * Representing the header bar
 */
class Footer extends Component {
  /**
  * Describes the elements on the footer
  * @return {String} HTML elements
  */
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-manu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Beverages</Link></li>
                    <li><Link to="/">About Us</Link></li>
                  </ul>
                </div>
                <p>Copyright &copy; Crafted by <a href="home">Diat Club</a>.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
