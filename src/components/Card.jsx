import Tags from './Tags';

const Card = ({ image, name, description, text,  color }) => {
    return (
        <div className="card d-flex flex-column " style={{ width: '270px', height: '430px', margin: '12px'}}>
            <div className="card-img-top d-flex justify-content-center align-items-center">
                <img src={image}style={{ width: '210px', height: '180px', objectFit: 'cover', margin: '23px', borderRadius: '2%' }}alt={name}/>
            </div>
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-center">{name}</h5>
                <p className="card-text text-center">{description}</p>
                <div className= "cont d-flex justify-content-center">
                    <Tags text={text} color={color} />
                </div>
            </div>
        </div>
    );
};

export default Card;