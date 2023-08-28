export interface ModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  style?: any;
  description?: any;
  title?: string;
  textClose?: string;
  textConfirm?: string;
  subTitle?: string;
  icon?: any;
}
