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
    public class CategoriasController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public CategoriasController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearCategoria(Categoria obj)
        {
            //LoadDDL();
            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        public IActionResult Create(Categoria obj)
        {
            //LoadDDL();
            return View(obj);
        }
        
        [HttpGet]
        public IActionResult ListarCategorias()
        {
            try
            {
                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");


                var ListaCat = from a in _Db.Categoria
                               join b in _Db.Pais
                               on a.Id_pais equals b.Id
                               into Paises
                               from b in Paises.DefaultIfEmpty()
                               where a.Id_pais == id_pais

                               select new Categoria
                              {
                                  Id = a == null ? 0 : a.Id,
                                  nombre = a == null ? "" : a.nombre,
                                  Color = a == null ? "" : a.Color,
                                  Id_pais = a == null ? 0 : a.Id_pais,
                                  habilitada = a == null ? false : a.habilitada,
                                  nombre_pais = b == null ? "" : b.nombre_pais
                              };

                return View(ListaCat.ToList());
            }
            catch (Exception ex)
            {
                return View();
            }
        }

        [HttpPost]
        public async Task<IActionResult> AgregarCategoria(Categoria obj)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Categoria.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarCategorias");
                }

                return View();
                
            }
            catch (Exception ex)
                {
                return RedirectToAction("ListarCategorias");
            }
        }

        public async Task<IActionResult> EliminarCategoria(int Id)
        {
            try
            {
                var cat = await _Db.Categoria.FindAsync(Id);
                if (cat != null)
                {
                    _Db.Categoria.Remove(cat);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarCategorias");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarCategorias");
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
