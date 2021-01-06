using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WellnessPeople.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(int idPais, string nombrePais, string idIdioma, string Idioma, string banderaRuta)
        {
            ViewBag.idPais = idPais;
            ViewBag.nombrePais = nombrePais;
            ViewBag.idIdioma = idIdioma;
            ViewBag.Idioma = Idioma;
            ViewBag.banderaRuta = banderaRuta;

            return View();
        }

    }
}
