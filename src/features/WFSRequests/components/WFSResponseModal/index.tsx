/* eslint-disable react/no-danger */
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { changeState, types, useAppContext } from '../../../../context';
import { parseXML } from '../../../../wfsMetadata';
import formDecoratedXml from './utils/formDecoratedXml';

const modalContentStyle = { fontSize: '14px' };
const modalStyle = { maxWidth: '90%' };
const level = 1;

export default function WfsResponseModal() {
    const { state, dispatch } = useAppContext();

    const toggle = () =>
        dispatch(changeState(types.modalToggled, { modalOperation: 'normal' }));

    const response =
        state.modalOperation === 'normal'
            ? state.wfsResponse
            : state.wfsFilterResponse;

    const xml: XMLDocument = parseXML(response);
    const xmlOutput = formDecoratedXml(xml, level);

    const modalContent = response.length > 25 ? xmlOutput : response;

    return (
        <Modal
            isOpen={state.isModalOpen}
            size="lg"
            style={modalStyle}
            toggle={toggle}>
            <ModalHeader toggle={toggle}>{state.url}</ModalHeader>
            <ModalBody>
                <div
                    dangerouslySetInnerHTML={{ __html: modalContent }}
                    style={modalContentStyle}
                />
            </ModalBody>
        </Modal>
    );
}
