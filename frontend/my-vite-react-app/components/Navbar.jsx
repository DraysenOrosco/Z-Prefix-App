import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div>
            <Link to='/'>Home </Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/login'> Log in page</Link>
        </div>
    )
}