using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Ciudades
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Ciudad")]
        public string nombre_ciudad { get; set; }

        public int Id_pais { get; set; }

        [NotMapped]
        [Display(Name = "País")]
        public string nombre_pais { get; set; }

    }
}
