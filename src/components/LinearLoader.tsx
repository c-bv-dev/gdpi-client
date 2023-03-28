import { createPortal } from 'react-dom';

const LinearLoader = () => {
    return createPortal(
        <div className='fixed top-0 w-full h-1 overflow-hidden bg-gray-600
        after:absolute 
        after:w-full 
        after:top-0 
        after:left-0 
        after:right-0 
        after:bottom-0
        after:-translate-x-full 
        after:h-full 
        after:animate-shimmer 
        after:bg-gradient-to-r
        after:from-blue-600
        after:to-blue-400
        '/>
        , document.getElementById('root') as HTMLElement
    );
};

export default LinearLoader;