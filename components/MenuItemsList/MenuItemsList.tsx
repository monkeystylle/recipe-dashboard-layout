import { MenuItem as MenuItemType } from '../../constants/menu-items';
import MenuItem from '../MenuItem';

interface IMenuItemsList {
  options: MenuItemType[];
}

const MenuItemsList = ({ options }: IMenuItemsList) => {
  return (
    <>
      {options.map(option => (
        <MenuItem menuItem={option} key={option.id} />
      ))}
    </>
  );
};

export default MenuItemsList;
