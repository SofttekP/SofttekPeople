using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Contenido
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Nombre")]
        public string nombre { get; set; }

        [Display(Name = "URL")]
        public string Url { get; set; }

        [Display(Name = "Editor Wysiwyg")]
        public string wysiwyg { get; set; }

        public int id_categoria { get; set; }

        [NotMapped]
        [Display(Name = "Categoria")]
        public string nombre_categoria { get; set; }

        public int id_subcategoria { get; set; }

        [NotMapped]
        [Display(Name = "SubCategoria")]
        public string nombre_subcategoria { get; set; }

        public int id_pais { get; set; }
    }
}