using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class SubCategoria
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "SubCategoria")]
        public string nombre_subcategoria { get; set; }

        [Display(Name = "Activa")]
        public bool habilitada { get; set; }

        public int Id_categoria { get; set; }

        [NotMapped]
        [Display(Name = "Categoria")]
        public string nombre_categoria { get; set; }

    }
}
