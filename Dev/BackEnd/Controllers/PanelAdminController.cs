using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WellnessPeople.Models;
using Microsoft.AspNetCore.Http;


namespace WellnessPeople.Controllers
{
    public class PanelAdminController : Controller
    {
        private readonly WellnessPeople.Models.WellnessPeopleContext _Db;
        private readonly ILogger<HomeController> _logger;

        public PanelAdminController(ILogger<HomeController> logger, WellnessPeopleContext Db)
        {
            _Db = Db;
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(string Usuario)
        {                     
            try
            {
                var ListaSofttekians = from a in _Db.Softtekian
                                       join b in _Db.Rol
                                              on a.id_rol equals b.id
                                       join c in _Db.Pais
                                              on a.id_pais equals c.Id
                                       where a.email == Usuario
                                          && b.habilitado

                                      select new Softtekian
                                      {
                                          Id = a == null ? 0 : a.Id,
                                          esPeople = a == null ? false : a.esPeople,
                                          primer_nombre = a == null ? "" : a.primer_nombre,
                                          segundo_nombre = a == null ? "" : a.segundo_nombre,
                                          primer_apellido = a == null ? "" : a.primer_apellido,
                                          segundo_apellido = a == null ? "" : a.segundo_apellido,
                                          //id_estado_civil = a == null ? 0 : a.id_estado_civil,
                                          //id_sexo = a == null ? 0 : a.id_sexo,
                                          email = a == null ? "" : a.email,
                                          direccion_fisica = a.direccion_fisica,
                                          id_rol = a == null ? 0 : a.id_rol,
                                          nombre_rol = b == null ? "" : b.nombre_rol,
                                          id_pais = a == null ? 0 : a.id_pais,
                                          nombre_pais = c == null ? "" : c.nombre_pais,
                                          usuario = a == null ? "" : a.usuario
                                      };


                foreach (Softtekian element in ListaSofttekians)
                {
                    HttpContext.Session.SetInt32("id_pais", element.id_pais);
                    HttpContext.Session.SetInt32("id_rol", element.id_rol);
                    HttpContext.Session.SetString("nombre_rol", element.nombre_rol);
                    HttpContext.Session.SetString("usuario", element.usuario);
                    ViewBag.id_pais = element.id_pais;
                }

                if (Usuario == null) Usuario = "";
                    ViewBag.usuario = Usuario;

                return View(ListaSofttekians);
            }
            catch (Exception ex)
            {
                return View();
            }
        }
    }
}