import { Navigate } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext.jsx'

function RotaProtegida({ children }) {
    const { usuario } = useAuth()

    if (!usuario) {
        return <Navigate to='/login' replace />
    }

    return children
}

export default RotaProtegida 