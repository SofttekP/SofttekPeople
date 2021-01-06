using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WellnessPeople.Controllers
{
    public class RolesPerfilesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
