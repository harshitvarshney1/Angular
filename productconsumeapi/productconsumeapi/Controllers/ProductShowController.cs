using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using productconsumeapi.Infrastructure;
using productconsumeapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace productconsumeapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductShowController : ControllerBase
    {
        private readonly ProductContext _context;
        public ProductShowController(ProductContext context)
        {
            _context = context;
        }

        [HttpGet("products")]
        public List<Product> getItems()
        {
            var res = from r in _context.product select r;
            return res.ToList();
        }

        [HttpPost("products")]
        public Product createItems(Product item)
        {
            _context.product.Add(item);
            _context.SaveChanges();
            return item;
        }

        [HttpPut("products/{id}")]
        public Product updateItems(Product item)
        {
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
            return item;
        }

        [HttpDelete("products/{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(long id)
        {
            var product = await _context.product.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.product.Remove(product);
            await _context.SaveChangesAsync();

            return product;
        }

        [HttpGet("products/{id}")]
        public async Task<ActionResult<Product>> GetProduct(long id)
        {
            var product = await _context.product.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

    }

}
