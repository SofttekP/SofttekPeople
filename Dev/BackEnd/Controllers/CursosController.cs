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
    public class CursosController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public CursosController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearCurso(Curso obj)
        {
            loadDDL();

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        public IActionResult ListarCursos()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var ListaCurso = from a in _Db.Curso
                              join b in _Db.TipoCurso
                              on a.id_tipocurso equals b.Id
                              into TipoCursos
                              from b in TipoCursos.DefaultIfEmpty()
                              where a.id_pais == id_pais 

                              select new Curso
                              {
                                  Id = a == null ? 0 : a.Id,
                                  nombre = a == null ? "" : a.nombre,
                                  descripcion = a == null ? "" : a.descripcion,
                                  fecha_inicio = a.fecha_inicio,
                                  fecha_fin = a.fecha_fin,
                                  fecha_creacion = a.fecha_creacion,
                                  creado_por = a == null ? 0 : a.creado_por,
                                  id_pais = a == null ? 0 : a.id_pais,
                                  nombre_pais = a == null ? "" : a.nombre_pais,
                                  id_tipocurso = a == null ? 0 : a.id_tipocurso,
                                  nombre_TipoCurso = b == null ? "" : b.nombre_TipoCurso
                              };

                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                return View(ListaCurso.ToList());
            }
            catch (Exception ex)
            {
                return View();
            }
        }

        public IActionResult Create()
        {
            loadDDL();

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AgregarCurso(Curso obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Curso.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarCursos");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarCursos");
            }
        }


        public async Task<IActionResult> EliminarCurso(int Id)
        {
            try
            {
                var std = await _Db.Curso.FindAsync(Id);
                if (std != null)
                {
                    _Db.Curso.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarCursos");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarCursos");
            }
        }

        private void loadDDL()
        {
            try
            {
                List<TipoCurso> depList = new List<TipoCurso>();
                depList = _Db.TipoCurso.ToList();
                depList.Insert(0, new TipoCurso { Id = 0, nombre_TipoCurso = "Por favor seleccione el tipo de curso" });

                ViewBag.DepList = depList;
            }
            catch (Exception ex)
            {
            }
        }
    }
}
