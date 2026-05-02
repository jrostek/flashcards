using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlashCards.Migrator.Migrations
{
    /// <inheritdoc />
    public partial class AddFlashCard : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FlashCards",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Language1 = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    Language1Text = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: false),
                    Language2 = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    Language2Text = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlashCards", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlashCards");
        }
    }
}
