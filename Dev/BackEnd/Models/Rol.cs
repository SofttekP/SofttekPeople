using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Rol
    {

        [Key]
        public int id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Nombre del Rol")]
        public string nombre_rol { get; set; }

        public bool habilitado { get; set; }
    }
}
