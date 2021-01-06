using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
        public class Sexo
        {
            [Key]
            public int id_sexo { get; set; }

            [Required(ErrorMessage = "Campo requerido")]
            [Display(Name = "Sexo")]
            public string sexo { get; set; }

            [Display(Name = "Valor")]
            public string valor { get; set; }
        }
}
