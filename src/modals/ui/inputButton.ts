interface InputButtonPropsTypes {
  item: ItemProps;
  handleOnClick: any;
}
interface ItemProps {
  value: number;
  id: string;
  title: string;
}

export type {InputButtonPropsTypes, ItemProps};
