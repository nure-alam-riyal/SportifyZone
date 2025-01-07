import { Link } from 'react-router-dom';
import error from '../assets/404 error with portals.gif'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="flex justify-center flex-col items-center h-screen">
            <h1 className='text-center '><Link  className='btn bg-green-300 text-3xl ' to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft>Back To Home page</Link></h1>
            <div className="w-11/12  flex justify-center text-center">
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;