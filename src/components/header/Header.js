import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function Header() {
    return (
        <div className='header'>
            <div className='header-logo'>
                <div className='header_logoImage'>
                    <ShoppingBasketIcon/>
                </div>
                <h2 className='header_logoTitle'>EloShop</h2>
            </div>
            <div className='header_search'>
                <input className='header_searchInput'></input>
                <SearchIcon className='header_searchIcon'/>
            </div>
            <div className='header_nav'>
                <div className='nav-item'>
                    <span className='nav_itemLineOne'>
                        hello guset
                    </span>
                    <span className='nav_itemLineTwo'>
                        sign in
                    </span>
                </div>
                <div className='nav-item'>
                    <span className='nav_itemLineOne'>
                        your
                    </span>
                    <span className='nav_itemLineTwo'>
                        shop
                    </span>
                </div>
                <div className='nav-item'>
                    <ShoppingCartCheckoutIcon className='itemBasket' />
                    <span className='nav_itemLineOne nav_basketCount'>
                        0
                    </span>
                </div>
            </div></div>
    )
}

export default Header