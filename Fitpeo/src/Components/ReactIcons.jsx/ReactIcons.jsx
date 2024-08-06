import { FiSearch } from 'react-icons/fi';
import { BiBarChartSquare } from 'react-icons/bi';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { TiHome } from 'react-icons/ti';
import { CiMail } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsClipboard2Check } from 'react-icons/bs';
import { BsClipboard2CheckFill } from 'react-icons/bs';
import { CiWallet } from 'react-icons/ci';
import { RiWallet3Fill } from 'react-icons/ri';
import { BsBagCheck } from 'react-icons/bs';
import { BsBagCheckFill } from 'react-icons/bs';
import { FaBasketShopping } from 'react-icons/fa6';
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import { FaDownLong } from 'react-icons/fa6';
import { PiCrosshairBold } from 'react-icons/pi';
import { CiBurger } from 'react-icons/ci';
import { PiHardHat } from 'react-icons/pi';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { TbStarFilled } from 'react-icons/tb';

import classes from './ReactIcons.module.css';

// making custom icon which are directly not achievable using after or before pseudo elements or when multiple icons are required to be clubbed together.
function CustomIcon({ icon }) {
  switch (icon) {
    case 'revenue':
      return (
        <div>
          <span className={classes.customRevenueIconContainer}>
            <span className={classes.column}>
              <span className={classes.dollarSign}>
                <span className={classes.topIcon}>
                  <PiCurrencyCircleDollarFill />
                </span>
              </span>
              <span className={classes.downArrowSecondary}>
                <FaDownLong />
              </span>
            </span>
            <span className={classes.rightDownPrimary}>
              <FaDownLong />
            </span>
          </span>
        </div>
      );
    default:
      return null;
  }
}

// component to return required react icon component or custom icon generated above. checks for isActive flag to return another element to show active state
export default function ReactIcons({ icon, isActive = false }) {
  icon += isActive ? '-active' : '';
  switch (icon) {
    case 'messages-active':
      return <CiMail />;
    case 'messages':
      return <CiMail />;
    case 'settings-active':
      return <IoSettingsOutline />;
    case 'settings':
      return <IoSettingsOutline />;
    case 'notifications-active':
      return <IoNotificationsOutline />;
    case 'notifications':
      return <IoNotificationsOutline />;
    case 'home':
      return <TiHome />;
    case 'home-active':
      return <TiHome />;
    case 'charts':
      return <BiBarChartSquare />;
    case 'charts-active':
      return <BiSolidBarChartSquare />;
    case 'clipboard':
      return <BsClipboard2Check />;
    case 'clipboard-active':
      return <BsClipboard2CheckFill />;
    case 'wallet':
      return <CiWallet />;
    case 'wallet-active':
      return <RiWallet3Fill />;
    case 'cart':
      return <BsBagCheck />;
    case 'cart-active':
      return <BsBagCheckFill />;
    case 'logout':
      return <RiLogoutCircleRLine />;
    case 'logout-active':
      return <RiLogoutCircleRLine />;
    case 'add':
      return <IoMdAddCircle />;
    case 'checkmark':
      return <IoMdCheckmarkCircle />;
    case 'cancelled':
      return <MdCancel />;
    case 'total-orders':
      return <FaBasketShopping />;
    case 'total-delivered':
      return <BsFillHandbagFill />;
    case 'total-cancelled':
      return <BsFillHandbagFill />;
    case 'total-revenue':
      return <CustomIcon icon="revenue" />;
    case 'goal':
      return <PiCrosshairBold />;
    case 'dish':
      return <CiBurger />;
    case 'menu':
      return <PiHardHat />;
    case 'star':
      return <TbStarFilled />;
    case 'search':
      return <FiSearch />;

    default:
      return null;
  }
}
