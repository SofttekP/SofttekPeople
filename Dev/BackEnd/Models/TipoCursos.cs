using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class TipoCurso
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Tipo de Curso")]
        public string nombre_TipoCurso { get; set; }

        [Display(Name = "Activo")]
        public bool habilitado { get; set; }

    }
}
