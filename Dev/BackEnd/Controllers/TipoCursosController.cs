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
    public class TipoCursosController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public TipoCursosController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearTipoCurso(TipoCurso obj)
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

        public IActionResult ListarTipoCursos()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var stdList = from a in _Db.TipoCurso

                              select new TipoCurso
                              {
                                  Id = a.Id,
                                  nombre_TipoCurso = a.nombre_TipoCurso
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
        public async Task<IActionResult> AgregarTipoCurso(TipoCurso obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.TipoCurso.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarTipoCursos");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarTipoCursos");
            }
        }

        public async Task<IActionResult> EliminarTipoCurso(int Id)
        {
            try
            {
                var std = await _Db.TipoCurso.FindAsync(Id);
                if (std != null)
                {
                    _Db.TipoCurso.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarTipoCursos");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarTipoCursos");
            }
        }

    }
}
