using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class EdoCivil
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Estado Civil")]
        public string edoCivil { get; set; }

        [Display(Name = "Valor")]
        public string habilitado { get; set; }

    }
}
