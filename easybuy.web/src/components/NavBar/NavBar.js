import './NavBar.css'
function NavBar(){
    return(
        <div>
            <div className="row w-100 nav-bar pt-2">
                <div className="col-md-1">
                    {/* TODO: Change the logo */}
                    <img src="easyBuyLogo.png" className="image-fluid w-100 easybuy-logo" alt="Logo" />
                </div>
                <div className="col-md-2">
                     {/* TODO: display location */}
                     <span>Location of user</span>
                    <div>
                        <i className="bi bi-geo-alt"></i> Update location
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex">
                        <select className="form-select" style={{width:'20%'}} >
                            <option value="1">All</option>
                            <option value="1">Electronics</option>
                            <option value="2">Accesseries</option>
                        </select>
                        <input type="text"
                        className="form-control search-input"
                        placeholder="Search..."/>
                        <button className="btn btn-secondary">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <div className="col-md-1">
                    Hello
                </div>
                <div className="col-md-1">
                    <span>Returns &Orders</span>
                </div>
                <div className="col-md-1">
                    <span><i class="bi bi-cart"></i>Cart</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar