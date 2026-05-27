using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCheesecakeOrders.Data
{
    public class OrderRepository
    {
        private string _connenectionString;

        public OrderRepository(string connectionString)
        {
            _connenectionString = connectionString;
        }

        public List<Order> GetOrders()
        {
            var contex = new OrdersDataContext(_connenectionString);
            return contex.Orders.ToList();
        }

        public Order GetOrderById(int id)
        {
            var contex = new OrdersDataContext(_connenectionString);
            return contex.Orders.FirstOrDefault(o => o.Id == id);
        }

        public void SubmitOrder(Order order)
        {
            var context = new OrdersDataContext(_connenectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }
    }
}
