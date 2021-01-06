using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WellnessPeople.Models
{
    public class Sede
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Nombre")]
        public string nombre_sede { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Direccion")]
        public string direccion_fisica { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Latitud")]
        public string latitud { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Longitud")]
        public string longitud { get; set; }

        public int id_ciudad { get; set; }

        [NotMapped]
        [Display(Name = "Ciudad")]
        public string nombre_ciudad { get; set; }
    }
}
