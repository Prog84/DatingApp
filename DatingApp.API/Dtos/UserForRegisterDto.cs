using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(6, MinimumLength = 2, ErrorMessage = "You must specify password between 2 and 6 character")]
        public string Password { get; set; }
    }
}