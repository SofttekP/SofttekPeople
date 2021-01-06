using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Curso
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Nombre")]
        public string nombre { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Descripción")]
        public string descripcion { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Fecha Inicio")]
        [DataType(DataType.Date)]
        public DateTime fecha_inicio { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Fecha Fin")]
        [DataType(DataType.Date)]
        public DateTime fecha_fin { get; set; }

        [Display(Name = "Creado por")]
        public int creado_por { get; set; }

        [Display(Name = "Fecha Creación")]
        [DataType(DataType.Date)]
        public DateTime fecha_creacion { get; set; }
               
        public int id_pais { get; set; }

        [NotMapped]
        [Display(Name = "Pais")]
        public string nombre_pais { get; set; }

        public int id_tipocurso { get; set; }

        [NotMapped]
        [Display(Name = "Tipo de Curso")]
        public string nombre_TipoCurso { get; set; }
    }
}
