import { Board, OrdersContainer } from './styles';
import { OrdersBoardProps } from './types';

export const OrdersBoard = (props: OrdersBoardProps) => {
  const { icon, title } = props;

  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
};
