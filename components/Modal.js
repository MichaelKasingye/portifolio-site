
import React, { useEffect, useState } from 'react';
import {client} from '../contenfulClient/client'
import {contacts} from '../library/contact'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ImMail3 } from 'react-icons/im';
import { AiTwotonePhone } from 'react-icons/ai';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalCard from '../components/ModalCard'
import modaler from '../styles/Modal.module.css'

function Modaler(props) {
    const [figure, setFigure] = useState("");
    const [email, setEmail] = useState("");
    const [copied, setcopied] = useState(false)
    const [copiedEmail, setCopiedEmail] = useState(false)
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const [nestedModal, setNestedModal] = useState(false);
      const [closeAll, setCloseAll] = useState(false);
    
      const toggle = () => setModal(!modal);
      const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }
      const [items, setItems] = useState();

      useEffect(() => {
          
              client.getEntries()
          .then(response => 
            setItems(response.items)
            // console.log(response.items)
            )
          .catch(err => console.log(err));
          
      }, [])
    //   copy function
      function copyNo() {
        setFigure(contacts.tel)
      }
      function copyEmail() {
        setFigure(contacts.email)
      }
      function comma(inputNumber){
        let formetedNumber = Number(inputNumber)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        let splitArray = formetedNumber.split(".");
        if (splitArray.length > 1) {
          formetedNumber = splitArray[0];
        }
        return formetedNumber;
      }
      console.log(figure);
    return (
        <div>
        <Button color="danger" onClick={toggle} >Order</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}className={modaler.vgrey}>{props.title} - UGX: {comma(props.price)}</ModalHeader>
          <ModalBody>
          <ModalHeader className={modaler.vgrey}>Contact to order </ModalHeader>
              <ModalBody><div className={modaler.modalContact}><span className={modaler.modalContactSpan} ><p><AiTwotonePhone/></p><p  onClick={copyNo}>
            <CopyToClipboard text={figure}
          onCopy={() => setcopied({copied: true})}>
          <span>{contacts.tel}</span>
        </CopyToClipboard>
        
        </p> </span> <span className={modaler.modalContactSpan}><p><ImMail3/></p ><p onClick={copyEmail}>Send - <CopyToClipboard text={figure}
          onCopy={() => setCopiedEmail({copied: true})}>
          <span> {contacts.email}</span>
        </CopyToClipboard></p> </span> 
                  </div>  </ModalBody>
                  {copied ? <span style={{color: 'red'}}>Number has been copied, switch to the Dail pad and paste to make the order.</span> : null}
                  {copiedEmail ? <span style={{color: 'red'}}>Email has been copied, switch to your mail box and paste address to make the order.</span> : null}
              <ModalFooter>
              </ModalFooter>
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default Modaler
