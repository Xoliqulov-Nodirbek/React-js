const ParrotsCard = ({title, price, sizes, birthDate, img}) => {
    return (
        <li className="col-6 product-line">
            <div className="card product-card">
            <img className="card-img-top product-img" src={img} alt={title} />
            <div className="card-body product-body">
                <h3 className="card-title product-title">{title}</h3>
                <p className="card-text fw-bold product-price"><mark className="product-mark">$ {price}</mark></p>
                <p className="badge bg-success product-size">{sizes.width} x {sizes.height}</p>
                <p className="card-text product-date">{birthDate}</p>
                <ul className="d-flex flex-wrap list-unstyled product-features">
                <li className="badge bg-primary me-1 spam mb-1">Beautiful</li>
                <li className="badge bg-primary me-1 spam mb-1">Tame</li>
                <li className="badge bg-primary me-1 spam mb-1">Can speak</li>
                </ul>
                <div className="position-absolute top-0 end-0 d-flex">
                <button className="btn rounded-0 btn-success">
                    <i className="fa fa-star-o" aria-hidden="true" style={{pointerEvents:"none"}}></i>
                </button>
                <button
                    className="btn rounded-0 btn-secondary product-edit" data-id="" data-bs-toggle="modal"
                    data-bs-target="#edit-parrot-modal"><i className="fa-solid fa-pen"
                    style={{pointerEvents:"none"}}></i>
                    </button>
                    <button className="btn rounded-0 btn-danger delete-btn product-delete"
                    data-id=""><i className="fa-solid fa-trash" style={{pointerEvents:"none"}}></i>
                </button>
                </div>
            </div>
            </div>
        </li>
    )
};

export default ParrotsCard;