import { Link } from "react-router-dom";
import './index.css'


const Home = () => {
  return (
    <div>
      <div className="head line">
        <div className="name"><div className="upper">Cars</div><div className="normal">online</div></div>
        <div className="search">
            <input type="text"/>
            <button>search</button>
        </div>
        </div>
        <ul className="nav line">
            <li className="navbar-item not-last first" >Home<i className="ti-arrow-circle-down"></i></li>
            <li className="navbar-item not-last">About<i className="ti-arrow-circle-down"></i></li>
            <li className="navbar-item not-last">Specials</li>
            <li className="navbar-item not-last">New</li>
            <li className="navbar-item" id = "contact"><Link to = "/contact">Contact</Link></li>
        </ul>
        <div className="content line">
            <div className="left">
                <img src="punchline.jpg" alt="" className="logo"/>
                <div className="product">Main products for July</div>
                <ul className="line">
                    <li><img src="punchline.jpg" alt=""/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.!</li>
                    <li><img src="punchline.jpg" alt=""/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.!</li>
                    <li><img src="punchline.jpg" alt=""/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.!</li>    
                </ul>
            </div>
            <div className="right">
                <ul className="product-list">
                    <li className = "line">Cars  <img src="punchline.jpg" alt=""/></li>
                    <li className = "line">Rental <img src="punchline.jpg" alt=""/></li>
                    <li className = "line">Banking <img src="punchline.jpg" alt=""/></li>
                    <li className = "line">Trucks <img src="punchline.jpg" alt=""/></li>    
                </ul> 
                <div className="cart"><div className="heading">Cart:</div>
                <div className="cart-status">Now in your cart 0 items</div>
                </div>
                <ul className="branches">
                    <li className="line"><img className = "left" src="punchline.jpg" alt=""/>    <img src="punchline.jpg" alt=""/></li>
                    <li className="line"><img className = "left" src="punchline.jpg" alt=""/>    <img src="punchline.jpg" alt=""/></li>
                    <li className="line"><img className = "left" src="punchline.jpg" alt=""/>    <img src="punchline.jpg" alt=""/></li>
                    <li className="line"><img className = "left" src="punchline.jpg" alt=""/>    <img src="punchline.jpg" alt=""/></li>    
                </ul>
            </div>
        </div>
        <div class="footer">
        <img src="footer.jpg" alt=""/>
      </div>

    </div>
  );
};

export default Home;
