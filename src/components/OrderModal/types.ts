import { Order } from '../../types/Order';

export interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}
