using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace WellnessPeople.Models
{
    public class Evento
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Nombre")]
        public string nombre { get; set; }

        [Display(Name = "Descripción")]
        public string descripcion { get; set; }

        [Display(Name = "Fecha Inicio")]
        [DataType(DataType.Date)]
        public DateTime fechahora_inicio { get; set; }

        [Display(Name = "Fecha fin")]
        [DataType(DataType.Date)]
        public DateTime fechahora_fin { get; set; }

        [Display(Name = "Fecha Creacion")]
        [DataType(DataType.Date)]
        public DateTime fecha_creacion { get; set; }

        [Display(Name = "Creado por")]
        public int creado_por { get; set; }

        public int id_tipoevento { get; set; }

        [NotMapped]
        [Display(Name = "Tipo de Evento")]
        public string nombre_TipoEvento { get; set; }

        public int id_pais { get; set; }
    }
}
