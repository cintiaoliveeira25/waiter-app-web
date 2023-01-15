import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Array<Order> = [
  {
    '_id': '63b23b89de699c79fc71f6c5',
    'table': '123',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '1672609527741-quatro-queijos.png',
          'price': '40',
        },
        'quantity': 3,
        '_id': '63b23b89de699c79fc71f6c6'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1672614694434-coca-cola.png',
          'price': '7',
        },
        'quantity': 2,
        '_id': '63b23b89de699c79fc71f6c7'
      }
    ],
  }
];

export const Orders = () => {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
};
