import React from 'react';
import { FormComponent } from 'ui/components/FormComponent';

type ModalWindowType = {
  isOpen:boolean
  onClose:()=>void
}
export const ModalWindow = ({isOpen,onClose}:ModalWindowType) => {
  return (
    <div>
      <FormComponent/>
    </div>
  );
};

