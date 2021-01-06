using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace WellnessPeople.Models
{
    public class WellnessPeopleContext : DbContext
    {
        public WellnessPeopleContext(DbContextOptions<WellnessPeopleContext> options) : base(options)
        {

        }

        public DbSet<Softtekian> Softtekian { get; set; }

        public DbSet<Categoria> Categoria { get; set; }

        public DbSet<SubCategoria> SubCategoria { get; set; }

        public DbSet<TipoCurso> TipoCurso { get; set; }

        public DbSet<TipoEvento> TipoEvento { get; set; }

        public DbSet<Rol> Rol { get; set; }

        public DbSet<Pais> Pais { get; set; }

        public DbSet<Idioma> Idioma { get; set; }

        public DbSet<Ciudades> Ciudad { get; set; }

        public DbSet<Contenido> Contenido { get; set; }

        public DbSet<Curso> Curso { get; set; }

        public DbSet<Evento> Evento { get; set; }

        public DbSet<Contacto> Contacto { get; set; }

        public DbSet<Sede> Sede { get; set; }

        public DbSet<Sexo> Sexo { get; set; }

        public DbSet<EdoCivil> EstadoCivil { get; set; }

        /*
        public DbSet<Rol> Rol { get; set; }
         
        public DbSet<Pais> EventoCalendario { get; set; }

        public DbSet<Pais> Pais { get; set; }

         

        public DbSet<TipoCursos> Perfiles { get; set; }

        public DbSet<TipoCursos> Roles { get; set; }

        

*/
    }


}
