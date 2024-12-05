using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace SubletUC.Data;
using NodaTime;

public class SubletUCContext : DbContext
{
    private int? userId;

    public void setUserId(int? value)
    {
        userId = value;
    }
    public SubletUCContext(DbContextOptions<SubletUCContext> options) : base(options) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure Listing and Roommate relationship
        modelBuilder.Entity<Listing>()
            .HasMany(l => l.Roommates)
            .WithOne(r => r.Listing)
            .HasForeignKey(r => r.ListingId)
            .OnDelete(DeleteBehavior.Cascade);
        // Store Roommate Gender as an integer
        modelBuilder.Entity<Roommate>()
            .Property(r => r.Gender)
            .HasConversion<int>(); // Store enums as integers
        // Store User Role as an integer
        modelBuilder.Entity<User>()
            .Property(u => u.Role)
            .HasConversion<int>(); // Store enums as integers
    }
    // Define DbSet properties for your entities
    public DbSet<Listing> Listings { get; set; }
    public DbSet<Roommate> Roommates { get; set; }
    public DbSet<User> Users { get; set; }

    private void SetChangeData()
        {
            this.ChangeTracker.DetectChanges();

            var added = this.ChangeTracker.Entries()
                .Where(x => x.State == EntityState.Added)
                .Select(x => x.Entity)
                .ToArray();

            foreach (var entity in added)
            {
                if (entity is History)
                {
                    var hist = entity as History;
                    hist.CreatedAt = SystemClock.Instance.GetCurrentInstant();
                    hist.CreatorId = userId;
                }
            }

            var modified = this.ChangeTracker.Entries()
                .Where(x => x.State == EntityState.Modified)
                .Select(x => x.Entity)
                .ToArray();

            foreach (var entity in modified)
            {
                if (entity is History)
                {
                    var hist = entity as History;

                    if (hist.Deleted)
                    {
                        hist.DeletedAt = SystemClock.Instance.GetCurrentInstant();
                        hist.DeletedById = userId;
                    }
                }
            }
        }

        public override int SaveChanges()
        {
            SetChangeData();

            return base.SaveChanges();
        }
}

