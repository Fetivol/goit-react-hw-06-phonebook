import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { filterAction } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => {
          dispatch(filterAction(e.target.value));
        }}
      ></Input>
    </Label>
  );
};
