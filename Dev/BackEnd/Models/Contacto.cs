using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Contacto
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Nombre")]
        public string nombre_contacto { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Direccion fisica")]
        public string direccion_fisica { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Telefono")]
        public string telefono { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Email")]
        public string email { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Latitud")]
        public string Latitud { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Longitud")]
        public string Longitud { get; set; }

        public int id_sede { get; set; }

        [NotMapped]
        [Display(Name = "Sede")]
        public string nombre_sede { get; set; }
    }
}
