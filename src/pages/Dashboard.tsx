import DashboardContainer from "@components/DashboardContainer";
import Navbar from "@components/Navbar";

const Dashboard = () => {

    return (
        <div className="flex h-full">
            <Navbar/>
            <DashboardContainer/>
        </div>
    );
};

export default Dashboard;