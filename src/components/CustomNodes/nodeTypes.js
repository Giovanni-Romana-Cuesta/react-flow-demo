import Email from './Email';
import Exit from './Exit';
import PushNotifcation from './PushNotifcation';
import Source from './Source';
import TimeDelay from './TimeDelay';
import Trigger from './Trigger';

// We define the types outside the component for avoid re-renderings
const nodeTypes = {
  trigger: Trigger,
  timeDelay: TimeDelay,
  pushNotification: PushNotifcation,
  email: Email,
  source: Source,
  exit: Exit,
};

export default nodeTypes;
