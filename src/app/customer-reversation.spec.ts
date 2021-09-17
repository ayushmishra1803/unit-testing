import { CustomerRevervation } from './customer-reversation';

describe('custoumer Reservation', () => {
  it('Customer Reservation', () => {
    let custumerService = new CustomerRevervation();
    let custumerCount = custumerService.registerCustomer();
    expect(custumerCount).toEqual(11);
  });
  it('Customer UnReservation', () => {
    let custumerService = new CustomerRevervation();
    let custumerCount = custumerService.unRegisterCustomer();
    expect(custumerCount).toEqual(9);
  });
});
