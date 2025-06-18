import Lib from '../../_lib/page';
import Counter from './counter';
import Map from './map';

export const metadata = {
  title: 'Contact Page',
};

const Contact = () => {
  return (
    <div>
      <Counter />
      <h1>Contact Page</h1>
      <Map />
      <Lib />
    </div>
  );
};
export default Contact;
