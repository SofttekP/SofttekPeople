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
    public class ContenidosController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public ContenidosController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearContenido(Contenido obj)
        {
            loadDDL();

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        public IActionResult ListarContenidos()
        {
            try
            {

                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var stdList = from a in _Db.Contenido
                              join b in _Db.Categoria
                                     on a.id_categoria equals b.Id
                              join c in _Db.SubCategoria
                                     on a.id_subcategoria equals c.Id
                             where a.id_pais == id_pais
                                
                              select new Contenido
                              {
                                  Id = a == null ? 0 : a.Id,
                                  nombre = a == null ? "" :a.nombre,
                                  id_categoria = a == null ? 0 : a.id_categoria,
                                  id_pais = a == null ? 0 : a.id_pais,
                                  id_subcategoria = a == null ? 0 : a.id_subcategoria,
                                  Url = a == null ? "" : a.Url,
                                  wysiwyg = a == null ? "" : a.wysiwyg,
                                  nombre_categoria = b == null ? "" : b.nombre,
                                  nombre_subcategoria = c == null ? "" :c.nombre_subcategoria
                              };

                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                return View(stdList.ToList());

            }
            catch (Exception ex)
            {
                return View();
            }
        }

        public IActionResult Create()
        {
            loadDDL();

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AgregarContenido(Contenido obj)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Contenido.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarContenidos");
                }

                return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarContenidos");
            }
        }


        public async Task<IActionResult> EliminarContenido(int Id)
        {
            try
            {
                var std = await _Db.Contenido.FindAsync(Id);
                if (std != null)
                {
                    _Db.Contenido.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarContenidos");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarContenidos");
            }
        }

        private void loadDDL()
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
