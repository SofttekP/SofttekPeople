using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WellnessPeople.Models;
using Microsoft.AspNetCore.Http;

namespace WellnessPeople.Controllers
{
    public class SubCategoriasController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public SubCategoriasController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearSubCategoria(SubCategoria obj)
        {
            loadDDL();

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        public IActionResult ListarSubCategorias()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var stdList = from a in _Db.SubCategoria
                              join b in _Db.Categoria
                              on a.Id_categoria equals b.Id
                              into Categorias
                              from b in Categorias.DefaultIfEmpty()
                             where b.Id_pais == id_pais

                              select new SubCategoria
                              {
                                  Id = a == null ? 0 : a.Id,
                                  nombre_subcategoria = a == null ? "" : a.nombre_subcategoria,
                                  Id_categoria = a == null ? 0 :  a.Id_categoria,
                                  nombre_categoria = b == null ? "" : b.nombre,
                                  habilitada = a == null ? false : a.habilitada
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
        public async Task<IActionResult> AgregarSubCategoria(SubCategoria obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.SubCategoria.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarSubCategorias");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarSubCategorias");
            }
        }


        public async Task<IActionResult> EliminarSubCategoria(int Id)
        {
            try
            {
                var std = await _Db.SubCategoria.FindAsync(Id);
                if (std != null)
                {
                    _Db.SubCategoria.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarSubCategorias");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarSubCategorias");
            }
        }

        private void loadDDL()
        {
            try
            {
                List<Categoria> depList = new List<Categoria>();
                depList = _Db.Categoria.ToList();
                depList.Insert(0, new Categoria { Id = 0, nombre = "Por favor seleccione la categoría" });

                ViewBag.DepList = depList;
            }
            catch (Exception ex)
            {
            }
        }
    }
}
