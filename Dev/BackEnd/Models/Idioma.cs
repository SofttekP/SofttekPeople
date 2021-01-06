using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Idioma
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Idioma")]
        public string nombre { get; set; }

        [Display(Name = "Bandera")]
        public string bandera_idioma { get; set; }

        public int id_pais { get; set; }

        [NotMapped]
        [Display(Name = "País")]
        public string nombre_pais { get; set; }

        [NotMapped]
        [Display(Name = "Bandera")]
        public string bandera_pais { get; set; }
    }
}
