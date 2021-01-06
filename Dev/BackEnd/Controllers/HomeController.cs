using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WellnessPeople.Models;


namespace WellnessPeople.Controllers
{
    public class HomeController : Controller
    {
        private readonly WellnessPeople.Models.WellnessPeopleContext _Db;
        private readonly ILogger<HomeController> _logger;


        public HomeController(ILogger<HomeController> logger, WellnessPeopleContext Db)
        {
            _Db = Db;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            //ViewBag.LstPais = _Db.Pais.OrderBy(c => c.nombre_pais).ToList();
            //ViewBag.Lista = _Db.Pais.OrderBy(c => c.nombre_pais).ToList();
            //ViewBag.Lista = _Db.Idioma.OrderBy(c => c.nombre).ToList();

            //var model = _Db.Idioma.ToList();
            // return View(model);

            try
            {
                var idiomaList = from a in _Db.Idioma
                                 join b in _Db.Pais
                                 on a.Id equals b.Id
                                 into Paises
                                 from b in Paises.DefaultIfEmpty()

                                 select new Idioma
                                 {
                                     Id = a.Id,
                                     nombre = a.nombre,
                                     bandera_idioma = a.bandera_idioma,
                                     id_pais = a.id_pais,
                                     nombre_pais = b == null ? "" : b.nombre_pais,
                                     bandera_pais = b == null ? "" : b.bandera_pais,
                                 };

                return View(idiomaList.ToList());
            }
            catch (Exception ex)
            {
                return View(ex.Message);
            }
        }
    

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
