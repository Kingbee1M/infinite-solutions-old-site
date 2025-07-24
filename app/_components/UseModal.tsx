"use client"

import { useState } from "react"
import { UseModalProp } from "../_types/type"
import Modal from "../_ui/Modal"
import LoginForm from "./LoginForm"

function ModalButton({children}:UseModalProp) {
    const [visible, setVisible] = useState(false)
    const toggle = () => {
        setVisible(false)
    }
  return (
    <>
    <div className={`px-3 py-1 bg-primary text-center text-white rounded-md tracking-widest hover:scale-90 transition-all duration-200 cursor-pointer hover:bg-hover hover:text-primary w-fit`} onClick={()=>setVisible(true)}>
      {children}
    </div>
    {visible &&
    <Modal visible={visible} onClose={toggle}><LoginForm/></Modal>
    }
    </>
  )
}

export default ModalButton
