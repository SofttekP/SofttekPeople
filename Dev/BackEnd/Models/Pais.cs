using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Pais
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage ="Campo requerido")]
        [Display(Name = "País")]
        public string nombre_pais { get; set; }

        [Display(Name = "Bandera pais")]
        public string bandera_pais { get; set; }

        //public virtual ICollection<Idioma> Idiomas { get; set; }
        //public List<Payroll> Payrolls { get; set; } = new List<Payroll>();
    }
}
