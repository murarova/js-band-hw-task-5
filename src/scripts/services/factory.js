import Ship from '../vehicles/ship';
import Truck from '../vehicles/truck';

class VehicleFactory {
  // eslint-disable-next-line consistent-return,class-methods-use-this
  create(type, ...rest) {
    if (type === 'Ship') return new Ship(type, ...rest);
    if (type === 'Truck') return new Truck(type, ...rest);
  }
}

const vehicleFactory = new VehicleFactory();

export default vehicleFactory;
