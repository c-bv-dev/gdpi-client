import { Modal } from '@components/ui';
import { createContext, useState } from 'react';

const ModalContext = createContext({} as any);

interface IModal {
    type: 'success' | 'info' | 'warning' | 'error';
    title: string;
    body: string;
    actions: {
        label: string;
        onClick: () => void;
    }[];
};

export const ModalProvider = ({ children }: any) => {
    const [open, setOpen] = useState(false);

    const [modal, setModal] = useState<IModal>({} as IModal);

    const openModal = (
        type: 'success' | 'info' | 'warning' | 'error',
        title: string,
        body: string,
        actions: {
            label: string;
            onClick: () => void;
        }[]
    ) => {
        setOpen(true);
        setModal({
            type,
            title,
            body,
            actions
        });
    };

    const closeModal = () => {
        setOpen(false);
        setModal({} as IModal);
    };

    return (
        <ModalContext.Provider
            value={{
                modal, setModal,
                openModal, closeModal
            }}
        >
            {children}
            {open && <Modal {...modal} />}
        </ModalContext.Provider>
    );
};

export default ModalContext;