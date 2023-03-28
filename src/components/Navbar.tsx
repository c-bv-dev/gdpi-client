import { AiFillAlert } from 'react-icons/ai'
import { BsBoxFill, BsCalendarWeek } from 'react-icons/bs'
import { IoStatsChartOutline, IoTicketSharp } from 'react-icons/io5'
import { TiHome } from 'react-icons/ti'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const links = [
        {
            name: 'Dashboard',
            icon: <TiHome className='w-5 h-5' />,
            link: '/dashboard'
        },
        {
            name: 'Intervention',
            icon: <AiFillAlert className='w-5 h-5' />,
            link: '/intervention'
        },
        {
            name: 'Materiel',
            icon: <BsBoxFill className='w-5 h-5' />,
            link: '/dashboard'
        },
        {
            name: 'Calendrier',
            icon: <BsCalendarWeek className='w-5 h-5' />,
            link: '/calendrier'
        },
        {
            name: 'Status',
            icon: <IoStatsChartOutline className='w-5 h-5' />,
            link: '/status'
        },
        {
            name: 'Tickets',
            icon: <IoTicketSharp className='w-5 h-5' />,
            link: '/tickets'
        },
    ];

    return (
        <nav className='bg-gray-900 p-1 w-64 flex flex-col gap-2 relative h-full'>
            <div>
                <h1>GDPI</h1>
            </div>
            <div className='flex pt-6 flex-col gap-3'>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.link}
                        className='flex p-1 px-1 rounded items-center gap-2'
                    >
                        {link.icon}{link.name}
                    </Link>
                ))}
            </div>
            <div className='flex gap-4 px-3 absolute bottom-3 items-center'>
                <img src='https://images.assetsdelivery.com/compings_v2/nexusplexus/nexusplexus2101/nexusplexus210100387.jpg' alt='22' className='w-10 h-10 rounded-full' />
                <div className='flex flex-col gap-0.5'>
                    <p>Francis</p>
                    <p className='text-xs'>View profile</p>
                </div>
            </div>
        </nav>
    )
}


export default Navbar