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
    public class TipoEventosController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public TipoEventosController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearTipoEvento(TipoEvento obj)
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

        public IActionResult ListarTipoEventos()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var stdList = from a in _Db.TipoEvento

                              select new TipoEvento
                              {
                                  Id = a.Id,
                                  nombre_TipoEvento = a.nombre_TipoEvento
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
        public async Task<IActionResult> AgregarTipoEvento(TipoEvento obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.TipoEvento.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarTipoEventos");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarTipoEventos");
            }
        }

        public async Task<IActionResult> EliminarTipoEvento(int Id)
        {
            try
            {
                var std = await _Db.TipoEvento.FindAsync(Id);
                if (std != null)
                {
                    _Db.TipoEvento.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarTipoEventos");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarTipoEventos");
            }
        }
    }
}
