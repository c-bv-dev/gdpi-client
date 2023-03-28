import React from 'react'
import { Input } from './ui'
import Card from './ui/Card'

const infos = [
    {
        title: "Intervention",
        description: "2 interventions en cours"
    },
    {
        title: "Tickets",
        description: "3 tickets a traités"
    },
    {
        title: "Clients",
        description: "2 commentaires de client"
    },
    {
        title: "Matériels",
        description: "CPU en rupture"
    }
]

const DashboardContainer = () => {
    return (
        <section className='bg-gray-700 w-full '>
            <div className='flex justify-between p-1 w-full h-48'>
                <div className='flex gap-4 px-3 bottom-3 items-center '>
                    <img src="https://images.assetsdelivery.com/compings_v2/nexusplexus/nexusplexus2101/nexusplexus210100387.jpg" alt="" className='w-24 h-24 rounded-full' />
                    <div className='flex flex-col gap-0.5'>
                        <p>Francis STER</p>
                        <p className='text-xs'>Technicien Réseaux</p>
                    </div>
                </div>
                <div>
                    {<Input type='search' name='dashSearch' placeholder='Search' />}
                </div>
            </div>
            <div className='w-full bg-gray-900 h-8'></div>
            <div className='p-2 flex flex-col gap-4'>
                <h1> En cours ...</h1>
                <div className='flex gap-6 whitespace-pre-wrap'>
                    {
                        infos.map((info) => (
                            <Card title={info.title} description={info.description} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default DashboardContainer



