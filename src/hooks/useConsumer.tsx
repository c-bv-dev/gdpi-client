import ConsumerContext from '@contexts/ConsumerContext';
import { useContext } from 'react';

const useConsumer = () => {
    const context = useContext(ConsumerContext);
    if (!context) throw new Error('Context must be use inside provider');
    return context;
};

export default useConsumer;