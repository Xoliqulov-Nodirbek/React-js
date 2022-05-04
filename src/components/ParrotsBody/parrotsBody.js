import ParrotsCard from "../ParrotsCard/parrotsCard";
import { parrots } from "../../data"

const ParrotsBody = () => {
    
    return (
        <>
            <section className="col-6">
                <div className="d-flex justify-content-between align-items-baseline">
                    <h2 className="h4 mb-4">Parrots list</h2>
                    <p className="count">Count: 2</p>
                </div>
            
                <ul className="row list-unstyled g-3 parrots-wrapper">
                    {parrots.map((parrot) => (<ParrotsCard
                                id={parrot.id}
                                key={parrot.id}
                                title={parrot.title}
                                price={parrot.price}
                                birthDate={parrot.birthDate}
                                sizes={parrot.sizes}
                            />
                            ))};
                </ul>
            </section>
        </>

        )
        
    }
    
    export default ParrotsBody;