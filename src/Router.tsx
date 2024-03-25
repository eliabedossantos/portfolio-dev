import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";


export function Router({}){


    return(
        <Routes>
            {/* general routes */}
            <Route 
                path="/" 
                element={<Login />}
            />
        </Routes>
    );
}