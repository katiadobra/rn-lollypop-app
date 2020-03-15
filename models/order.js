import moment, * as moments from 'moment';
// import moment from 'moment';
// with this, throw an error:
// moment is not a function. (In 'moment(this.date)', 'moment' is an instance of Object)

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    // return this.date.toLocaleDateString('en-EN', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit'
    // });

    // instead of this, use moment

    return moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
