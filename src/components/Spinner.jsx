import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

function Spinner() {
  return (
    <div className="min-h-52 w-full flex items-center justify-center">
      <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="#35AFA0" />
    </div>
  );
}

export default Spinner;
