using Microsoft.EntityFrameworkCore;
using productconsumeapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace productconsumeapi.Infrastructure
{
    public class ProductContext : DbContext
    {
        public DbSet<Product> product { get; set; }

        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {

        }
    }
}
