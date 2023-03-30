import { Card } from '@components/ui';
import useUser from '@hooks/useUser';
import { FiUser } from 'react-icons/fi';

const Dashboard = () => {

    const { user } = useUser();

    const infos = [
        {
            title: 'Intervention',
            description: '2 interventions en cours'
        },
        {
            title: 'Tickets',
            description: '3 tickets a traités'
        },
        {
            title: 'Clients',
            description: '2 commentaires de client'
        },
        {
            title: 'Matériels',
            description: 'CPU en rupture'
        }
    ];

    return (
        <section className='flex flex-col gap-4'>
            <div className='flex justify-between p-1 w-full h-48'>
                <div className='flex gap-4 px-3 bottom-3 items-center '>
                    <div className='bg-gray-900 rounded-full p-3'>
                        <FiUser className='text-4xl text-white' />
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <p className='text-2xl'>{user?.firstName} {user?.lastName}</p>
                        <p className='text-xs'>{user.role === 'user' ? 'Technician' : 'Admin'}</p>
                    </div>
                </div>
            </div>
            <div className='p-2 flex flex-col gap-4 w-full'>
                <div className='flex gap-6 whitespace-pre-wrap'>
                    {infos.map((info) => (
                        <Card
                            key={info.title}
                            title={info.title}
                            description={info.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;