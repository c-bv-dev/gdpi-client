import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div>
            <div style={{ height: '100vh', margin: '1rem', borderColor: 'red', borderStyle: 'solid', borderWidth: '1px' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;