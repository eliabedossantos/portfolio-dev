import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";


export function Router({}){


    return(
        <Routes>
            {/* general routes */}
            <Route 
                path="/" 
                element={<Home />}
            />
        </Routes>
    );
}