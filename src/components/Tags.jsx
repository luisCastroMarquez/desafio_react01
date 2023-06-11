
import Badge from 'react-bootstrap/Badge';

const Tags = ({ color, text }) => {
    return (
            <Badge bg={color} style={{width: '210px'}}>{text}</Badge>
    );
};

export default Tags;