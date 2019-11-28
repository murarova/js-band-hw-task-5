import EventEmitter from './services/event-emitter';
import Cost from './cost';
import vehicleFactory from './services/factory';

export default class View extends EventEmitter {
  constructor() {
    super();

    this.container = document.querySelector('.container');
    this.list = document.querySelector('.list');
    this.container.addEventListener('submit', this.handleAdd.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  formValidator(obj) {
    return Object.values(obj).some(el => el === '');
  }

  handleAdd(e) {
    e.preventDefault();

    const form = e.target;
    const model = form.querySelector('.model-input');
    const name = form.querySelector('.name-input');
    const producedYear = form.querySelector('.date-input');
    const capacity = form.querySelector('.capacity-input');
    const averageSpeed = form.querySelector('.averageSpeed-input');
    const countOfTeam = form.querySelector('.team-input');
    const licensePlate = form.querySelector('.license-plate-input');
    const typeOfGas = form.querySelector('.type-of-gas-input');
    const costByKgInput = form.querySelector('.cost-by-kg-input');
    const costByKmInput = form.querySelector('.cost-by-km-input');
    const shipType = 'Ship';
    const truckType = 'Truck';

    if (e.target.className === 'ship-form') {
      const newShip = vehicleFactory.create(
        shipType,
        model.value,
        name.value,
        producedYear.value,
        capacity.value,
        averageSpeed.value,
        countOfTeam.value,
      );

      if (this.formValidator(newShip)) {
        // eslint-disable-next-line no-alert
        alert('Please fill in all fields');
        return;
      }

      this.emit('addVehicles', newShip);
      form.reset();
    }

    if (e.target.className === 'truck-form') {
      const newTruck = vehicleFactory.create(
        truckType,
        model.value,
        producedYear.value,
        capacity.value,
        averageSpeed.value,
        licensePlate.value,
        typeOfGas.value,
      );

      if (this.formValidator(newTruck)) {
        // eslint-disable-next-line no-alert
        alert('Please fill in all fields');
        return;
      }

      this.emit('addVehicles', newTruck);
      form.reset();
    }

    if (e.target.className === 'cost-form') {
      const newCost = new Cost(
        model.value,
        costByKgInput.value,
        costByKmInput.value,
      );

      if (this.formValidator(newCost)) {
        // eslint-disable-next-line no-alert
        alert('Please fill in all fields');
        return;
      }

      this.emit('addCost', newCost);
      form.reset();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderVehicle(vehicle) {
    const vehicleList = document.querySelector('.vehicles-list');

    vehicleList.insertAdjacentHTML(
      'beforeend',
      `
          <div class="list-item">
          <div class="item"><span>Type:</span> <span> ${vehicle.truckType ||
            vehicle.shipType}</span></div>
            <div class="item"><span>Model:</span> <span> ${
              vehicle.model
            }</span></div>
            <div class="item"><span>Produced year:</span> <span> ${
              vehicle.producedYear
            }</div>
            <div class="item"><span>Capacity:</span> <span> ${
              vehicle.capacity
            }</span></div>
            <div class="item"><span>Average speed:</span> <span> ${
              vehicle.averageSpeed
            }</span></div>
            <div class="item"><span>Count of team:</span> <span> ${vehicle.countOfTeam ||
              'none'}</span></div>
            <div class="item"><span>Serial number/Name:</span> <span> ${vehicle.name ||
              'none'}</span></div>
            <div class="item"><span>License plate:</span> <span> ${vehicle.licensePlate ||
              'none'}</span></div>
            <div class="item"><span>Type of gas:</span> <span> ${vehicle.typeOfGas ||
              'none'}</span></div>

          </div>
        `,
    );
  }

  initVehicles(vehicles) {
    vehicles.forEach(vehicle => this.renderVehicle(vehicle));
  }

  // eslint-disable-next-line class-methods-use-this
  renderCost(cost) {
    const costList = document.querySelector('.costs-list');

    costList.insertAdjacentHTML(
      'beforeend',
      `
          <div class="list-item">
            <div class="item"><span>Model:</span> <span> ${cost.model}</span></div>
            <div class="item"><span>Cost by kg:</span> <span> ${cost.costByKg}</span></div>
            <div class="item"><span>Cost By Km:</span> <span> ${cost.costByKm}</span></div>
          </div>
        `,
    );
  }

  initCosts(costs) {
    costs.forEach(cost => this.renderCost(cost));
  }
}
