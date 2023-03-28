interface IProps {

};

const Dashboard = (props: IProps) => {

    return (
        <div className="h-full min-h-screen overflow-auto bg-zinc-900 p-5">
            <div>
                <h6 className="my-4 font-Inter text-xs font-medium uppercase tracking-[1px] text-white">
                    STATISTIQUES
                </h6>
                <div className="flex gap-4">
                    {/* <Stats label="demandes à traiter" value="42" icons={<HiRss />} />
                    <Stats label="demandes en cours" value="42" icons={<HiSupport />} /> */}
                </div>
            </div>
            <div>
                <h6 className="my-4 font-Inter text-xs font-medium uppercase tracking-[1px] text-white">
                    Recherche Rapide
                </h6>
                <div className="flex flex-col gap-4">
                    {/* <Input
                        name="search"
                        type={InputType.text}
                        placeholder="Recherche"
                    /> */}
                </div>
            </div>
            <div>
                <h6 className="my-4 font-Inter text-xs font-medium uppercase tracking-[1px] text-white">
                    Dernière demande
                </h6>
                <div className="flex gap-4 px-4">
                    {/* <Timeline /> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;