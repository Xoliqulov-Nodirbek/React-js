const ParrotsList = () => {
    
    return (
        <>
        <section className="col-6">
        <div className="d-flex justify-content-between align-items-baseline">
        <h2 className="h4 mb-4">Parrots list</h2>
        <p className="count">Count: 2</p>
        </div>
        
        <ul className="row list-unstyled g-3 parrots-wrapper">
        
        </ul>
        </section>
        
        <section className="col-3">
        <h2 className="h4 mb-4">Favorite parrots</h2>
        <ul className="list-unstyled">
        <li className="card p-3 mb-2">
        <h3 className="card-title h5 mb-2">Qizil Ara</h3>
        <button className="btn btn-danger btn-sm d-inline" style={{width: 'fit-content'}} type="button">Remove</button>
        </li>
        </ul>
        </section>
        </>
        
        
        )
        
    }
    
    export default ParrotsList;