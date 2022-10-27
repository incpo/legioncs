 const Modal = ({children, modalActive, setModalActive}) => {
    return(
        
        <div className={`modal-wrap ${modalActive}`} onClick={()=> {setModalActive('hide')}}>
            <div className="modal overflow-scroll" onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
        
    )
}
export default Modal;