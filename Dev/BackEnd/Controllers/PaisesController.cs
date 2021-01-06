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
    public class PaisesController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public PaisesController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearPais(Pais obj)
        {
            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        public IActionResult Create()
        {
            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View();
        }

        public IActionResult ListarPaises()
        {
            try
            {

                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var stdList = from a in _Db.Pais

                              select new Pais
                              {
                                  Id = a.Id,
                                  nombre_pais = a.nombre_pais,
                                  bandera_pais = a.bandera_pais
                              };

                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                return View(stdList);
            }
            catch (Exception ex)
            {
                return View();
            }
        }

        [HttpPost]
        public async Task<IActionResult> AgregarPais(Pais obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Pais.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarPaises");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarPaises");
            }
        }

        public async Task<IActionResult> EliminarPais(int Id)
        {
            try
            {
                var std = await _Db.Pais.FindAsync(Id);
                if (std != null)
                {
                    _Db.Pais.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarPaises");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarPaises");
            }
        }
    }
}