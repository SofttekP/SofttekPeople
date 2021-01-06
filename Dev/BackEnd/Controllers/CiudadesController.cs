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
    public class CiudadesController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public CiudadesController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearCiudad(Ciudades obj)
        {
            loadDDL();

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
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

        public IActionResult ListarCiudades()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var ListaCiudad = from a in _Db.Ciudad
                                  join b in _Db.Pais
                                  on a.Id_pais equals b.Id
                                  into Ciudades
                                  from b in Ciudades.DefaultIfEmpty()
                                  where a.Id_pais == id_pais

                              select new Ciudades
                              {
                                  Id = a == null ? 0 : a.Id,
                                  nombre_ciudad = a == null ? "" : a.nombre_ciudad,
                                  Id_pais = a == null ? 0 : a.Id_pais,
                                  nombre_pais = b == null ? "" : b.nombre_pais
                              };


                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                return View(ListaCiudad.ToList());
            }
            catch (Exception ex)
            {
                return View();
            }
        }

        [HttpPost]
        public async Task<IActionResult> AgregarCiudad(Ciudades obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Ciudad.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarCiudades");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarCiudades");
            }
        }

        public async Task<IActionResult> EliminarCiudad(int Id)
        {
            try
            {
                var std = await _Db.Ciudad.FindAsync(Id);
                if (std != null)
                {
                    _Db.Ciudad.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarCiudades");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarCiudades");
            }
        }

        private void loadDDL()
        {
            try
            {
                List<Ciudades> depList = new List<Ciudades>();
                depList = _Db.Ciudad.ToList();
                depList.Insert(0, new Ciudades { Id = 0, nombre_ciudad = "Por favor seleccione la ciudad" });

                ViewBag.DepList = depList;
            }
            catch (Exception ex)
            {
            }
        }
    }
}