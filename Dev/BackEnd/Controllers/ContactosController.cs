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
    public class ContactosController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public ContactosController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearContacto(Contacto obj)
        {
            loadDDL();


            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        public IActionResult ListarContactos()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var ListaContacto = from a in _Db.Contacto
                              join b in _Db.Sede
                              on a.id_sede equals b.Id
                              into Sedes
                              from b in Sedes.DefaultIfEmpty()

                              select new Contacto
                              {
                                  Id = a.Id,
                                  nombre_contacto = a.nombre_contacto,
                                  direccion_fisica = a.direccion_fisica,
                                  telefono = a.telefono,
                                  email = a.email,
                                  Latitud = a.Latitud,
                                  Longitud = a.Longitud,
                                  nombre_sede = b == null ? "" : b.nombre_sede
                              };

                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                return View(ListaContacto.ToList());
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
        public async Task<IActionResult> AgregarContacto(Contacto obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Contacto.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarContactos");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarContactos");
            }
        }

       public async Task<IActionResult> EliminarContacto(int Id)
        {
            try
            {
                var std = await _Db.Contacto.FindAsync(Id);
                if (std != null)
                {
                    _Db.Contacto.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarContactos");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarContactos");
            }
        }

        private void loadDDL()
        {
            try
            {
                //List<TipoContacto> depList = new List<TipoContacto>();
                //depList = _Db.TipoContacto.ToList();
                //depList.Insert(0, new TipoContacto { Id = 0, nombre_TipoContacto = "Por favor seleccione el tipo de Contacto" });

                //ViewBag.DepList = depList;
            }
            catch (Exception ex)
            {
            }
        }

    }
}
