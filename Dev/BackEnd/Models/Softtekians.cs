using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellnessPeople.Models
{
    public class Softtekian
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Primer Nombre")]
        public string primer_nombre { get; set; }

        [Display(Name = "Segundo Nombre")]
        public string segundo_nombre { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Primer Apellido")]
        public string primer_apellido { get; set; }

        [Display(Name = "Segundo Apellido")]
        public string segundo_apellido { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [DataType(DataType.Date)]
        [Display(Name = "Fecha de Nacimiento")]
        public DateTime fecha_nacimiento { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Email")]
        public string email { get; set; }

        public string usuario { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "People")]
        public bool esPeople { get; set; }

        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Dirección Física")]
        public string direccion_fisica { get; set; }

        public string id_sexo { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Sexo")]
        public string sexo { get; set; }

        public string id_estado_civil { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "Estado Civil")]
        public string estado_civil { get; set; }

        public int id_pais { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Campo requerido")]
        [Display(Name = "País")]
        public string nombre_pais { get; set; }

        public int id_rol { get; set; }

        [NotMapped]
        [Display(Name = "Rol")]
        public string nombre_rol { get; set; }

        [Display(Name = "Activo")]
        public bool habilitado { get; set; }

    }
}