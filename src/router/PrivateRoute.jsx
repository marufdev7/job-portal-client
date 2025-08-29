import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Skeleton from '../utils/Skeleton';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <>
            <Skeleton/>
        </>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;