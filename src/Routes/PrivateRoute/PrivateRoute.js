import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {loading , user} = useContext(AuthContext);
  
 const location = useLocation();

    
    if (loading) {
    return <div className="mx-auto mt-4 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
		
	}
	
    if (!user) {
			
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
	

	return children; 	
        
};

export default PrivateRoute;