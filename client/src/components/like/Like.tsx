import "./Like.scss"
import { TfiEmail } from "react-icons/tfi";
import { IoPrint } from "react-icons/io5";
import { GiWatch } from "react-icons/gi";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store/store";

const Like = () => {

    const likedProducts = useSelector((state: RootState) => state.like.likedProducts);
    
    return (
        <div className="like-container">
            <div className="like-bg-img">
                <h2 className="like-title">Wishlist</h2>
                <div className="like-title-text">
                    <h2 className="like-title2">YOUR WISHLIST</h2>
                    <p className="like-title-p">Your wishlist is saved locally on your device during 6 months.</p>
                </div>
            </div>
            <div className="like__buttons">
                <div className="like-btn1">
                    <div className="like-btn-text">
                        <TfiEmail style={{fontSize: 25}}/>
                        <p className="like-sent">SEND BY E-MAIL</p>
                    </div>
                </div>
                <div className="like-btn2">
                    <div className="like-btn-text">
                        <IoPrint style={{fontSize: 25}}/>
                        <p className="like-sent">Print</p>
                    </div>
                </div>
                <div className="like-btn3">
                    <div className="like-btn-text2">
                        <span>+</span>
                        <GiWatch style={{fontSize: 25}}/>
                        <p className="like-sent">add a watch</p>
                    </div>
                </div>
            </div>
            {likedProducts.length > 0 ?

                likedProducts.map(({img, title, material_code}) => 
                    <Link to="/">
                        <div className="watch">
                        <div className="watch_picture">
                            <img src={img} alt="" />
                        </div>
                        <div className="watch_description">
                            <h5>{title}</h5>
                            <p>{material_code}</p>
                        </div>
                        </div>
                    </Link>
                )
                :
                <div className="like-bg">
                    <div className="like-hover-frame">
                    <div className="like-bg-img2"></div>
                    <p className="like-bg-text">add watch from the collection</p>
                    </div>
                </div>
            
            
            }
            <div className="like-line"></div>
            <div className="like__buttons">
                <div className="like-btn1">
                    <div className="like-btn-text">
                        <TfiEmail style={{fontSize: 25}}/>
                        <p className="like-sent">SEND BY E-MAIL</p>
                    </div>
                </div>
                <div className="like-btn2">
                    <div className="like-btn-text">
                        <IoPrint style={{fontSize: 25}}/>
                        <p className="like-sent">Print</p>
                    </div>
                </div>
                <div className="like-btn3">
                    <div className="like-btn-text2">
                        <span>+</span>
                        <GiWatch style={{fontSize: 25}}/>
                        <p className="like-sent">add a watch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Like