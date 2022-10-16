import { FC } from 'react';
import { increment, decrement, selectCounterValue } from '../model';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui';
import s from './index.module.scss';



export const Counter: FC = () => {
  const
    dispatch = useDispatch(),
    counterValue = useSelector(selectCounterValue),
    handlerIncrement = () => dispatch(increment()),
    handlerDecrement = () => dispatch(decrement());

  return (
    <div className={s.buttons}>
      <h1 data-testid='value-title' className={s.value}>{counterValue}</h1>
      <Button
        data-testid = 'decrement-button'
        theme       = {ButtonTheme.SIMPLE}
        className   = {s.button}
        onClick     = {handlerDecrement}
      >
        -
      </Button>
      <Button
        data-testid = 'increment-button'
        theme       = {ButtonTheme.SIMPLE}
        className   = {s.button}
        onClick     = {handlerIncrement}
      >
        +
      </Button>
    </div>
  )
};
