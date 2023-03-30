import { createPortal } from "react-dom";
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

interface IProps {
    type: 'success' | 'info' | 'warning' | 'error';
    title: string;
    body: string;
    actions: {
        label: string;
        onClick: () => void;
    }[];
};

const iconHandler = (type: string) => {
    switch (type) {
        case 'success':
            return <FiCheckCircle className='text-green-500' />;
        case 'info':
            return <FiInfo className='text-blue-500' />;
        case 'warning':
            return <FiAlertTriangle className='text-yellow-500' />;
        case 'error':
            return <FiXCircle className='text-red-500' />;
        default:
            return <FiInfo className='text-blue-500' />;
    }
};

const colorHandler = (type: string): { icon: string, bg: string } => {
    switch (type) {
        case 'success':
            return {
                icon: 'bg-green-100',
                bg: 'bg-green-500'
            }
        case 'info':
            return {
                icon: 'bg-blue-100',
                bg: 'bg-blue-500'
            }
        case 'warning':
            return {
                icon: 'bg-yellow-100',
                bg: 'bg-yellow-500'
            }
        case 'error':
            return {
                icon: 'bg-red-100',
                bg: 'bg-red-500'
            }
        default:
            return { icon: '', bg: '' };
    }
};

const Modal = (props: IProps) => {

    return createPortal(
        <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
            <div className='fixed inset-0 z-10 overflow-y-auto'>
                <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                    <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                        <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                            <div className='sm:flex sm:items-start'>
                                <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${colorHandler(props.type).icon}`}>
                                    {iconHandler(props.type)}
                                </div>
                                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                                    <h3 className='text-base font-semibold leading-6 text-gray-900' id='modal-title'>{props.title}</h3>
                                    <div className='mt-2'>
                                        <p className='text-sm text-gray-500'>
                                            {props.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse gap-2 sm:px-6'>
                            <button
                                type='button'
                                onClick={props.actions[1].onClick}
                                className={`inline-flex w-full justify-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-smsm:ml-3 sm:w-auto ${colorHandler(props.type).bg}`}>
                                {props.actions[1].label}
                            </button>
                            <button
                                type='button'
                                onClick={props.actions[0].onClick}
                                className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'>
                                {props.actions[0].label}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById('root') as HTMLElement
    );
};

export default Modal;