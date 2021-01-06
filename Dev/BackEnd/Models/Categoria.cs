using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Categoria
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Nombre Categoría")]
        public string nombre { get; set; }

        [Display(Name = "Color Categoría")]
        public string Color { get; set; }

        [Display(Name = "Activa")]
        public bool habilitada { get; set; }

        public int Id_pais { get; set; }

        [NotMapped]
        [Display(Name = "País")]
        public string nombre_pais { get; set; }
    }
}
