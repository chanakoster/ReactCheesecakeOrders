using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCheesecakeOrders.Data;

namespace ReactCheesecakeOrders.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesecakeController : ControllerBase
    {
        private string _connectionString;

        public CheesecakeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getallorders")]
        public List<Order> GetAllOrders()
        {
            var repo = new OrderRepository(_connectionString);
            return repo.GetOrders();
        }

        [Route("getorder")]
        public Order GetOrderById(int id)
        {
            var repo = new OrderRepository(_connectionString);
            return repo.GetOrderById(id);
        }


        [Route("submitorder")]
        [HttpPost]
        public void SubmitOrder(Order order)
        {
            var repo = new OrderRepository(_connectionString);
            repo.SubmitOrder(order);

        }
    }
}
