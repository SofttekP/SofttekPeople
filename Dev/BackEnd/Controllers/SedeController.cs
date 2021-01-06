using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WellnessPeople.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace WellnessPeople.Controllers
{
    public class SedeController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public SedeController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearSede(Sede obj)
        {
            //LoadDDL();
            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        public IActionResult Create(Sede obj)
        {
            //LoadDDL();
            return View(obj);
        }

        [HttpGet]
        public IActionResult ListarSedes()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");


                var ListaSede = from a in _Db.Sede
                               join b in _Db.Ciudad
                               on a.id_ciudad equals b.Id
                               into Ciudades
                               from b in Ciudades.DefaultIfEmpty()
                               where b.Id_pais == id_pais

                               select new Sede
                               {
                                   Id = a == null ? 0 : a.Id,
                                   nombre_sede = a == null ? "" : a.nombre_sede,
                                   nombre_ciudad = b == null ? "" : b.nombre_ciudad,
                                   direccion_fisica = a == null ? "" : a.direccion_fisica
                               };

                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                return View(ListaSede.ToList());
            }
            catch (Exception ex)
            {
                return View();
            }
        }

        [HttpPost]
        public async Task<IActionResult> AgregarSede(Sede obj)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Sede.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarSedes");
                }

                return View();

            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarSedes");
            }
        }

        public async Task<IActionResult> EliminarSede(int Id)
        {
            try
            {
                var cat = await _Db.Sede.FindAsync(Id);
                if (cat != null)
                {
                    _Db.Sede.Remove(cat);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarSedes");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarSedes");
            }
        }

        private void LoadDDL()
        {
            try
            {
                List<Pais> depList = new List<Pais>();
                depList = _Db.Pais.ToList();
                depList.Insert(0, new Pais { Id = 0, nombre_pais = "Por favor seleccione el país" });

                ViewBag.DepList = depList;
            }
            catch (Exception ex)
            {
            }
        }
    }
}
