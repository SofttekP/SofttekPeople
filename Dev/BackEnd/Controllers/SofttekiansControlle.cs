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
    public class SofttekiansController : Controller
    {
         private readonly WellnessPeopleContext _Db;
 
        public SofttekiansController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearSofttekian(Softtekian obj)
        {
            loadDDL("Rol");
            loadDDL("Sexo");

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }

        [HttpGet]
        public IActionResult ListarSofttekians()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var ListaSofttekians = from a in _Db.Softtekian
                                      where a.id_pais == id_pais

                              select new Softtekian
                              {
                                  Id = a == null ? 0 : a.Id,
                                  id_pais = a == null ? 0 : a.id_pais,
                                  id_rol = a == null ? 0 : a.id_rol,
                                  primer_nombre = a == null ? "" : a.primer_nombre,
                                  segundo_nombre = a == null ? "" : a.segundo_nombre,
                                  primer_apellido = a == null ? "" : a.primer_apellido,
                                  segundo_apellido = a == null ? "" : a.segundo_apellido,
                                  id_sexo = a == null ? "" : a.id_sexo,
                                  id_estado_civil = a == null ? "" : a.id_estado_civil,
                                  fecha_nacimiento = a.fecha_nacimiento,
                                  email = a == null ? "" : a.email,
                                  esPeople = a == null ? false : a.esPeople,
                                  direccion_fisica = a == null ? "" : a.direccion_fisica,
                                  usuario = a == null ? "" : a.usuario,
                                  habilitado = a == null ? false : a.habilitado
                              };

                ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
                ViewBag.usuario = HttpContext.Session.GetString("usuario");

                return View(ListaSofttekians.ToList());
            }
            catch (Exception ex)
            {
                return View();
            }
        }

        public IActionResult Create()
        {
            loadDDL("Rol");
            loadDDL("Sexo");

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AgregarSofttekian(Softtekian obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Softtekian.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarSofttekians");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarSofttekians");
            }
        }

        public async Task<IActionResult> EliminarSofttekian(int Id)
        {
            try
            {
                var std = await _Db.Softtekian.FindAsync(Id);
                if (std != null)
                {
                    _Db.Softtekian.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarSofttekians");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarSofttekians");
            }
        }

        private void loadDDL(string Opcion)
        {
            try
            {

                if (Opcion == "Rol")
                {
                    List<Rol> ListaRoles = new List<Rol>();
                    ListaRoles = _Db.Rol.ToList();
                    ListaRoles.Insert(0, new Rol { id = 0, nombre_rol = "Por favor seleccione el Rol" });

                    ViewBag.ListaRoles = ListaRoles;
                }

                if (Opcion == "Sexo")
                {
                    List<Sexo> ListaSexo = new List<Sexo>();
                    ListaSexo = _Db.Sexo.ToList();
                    ListaSexo.Insert(0, new Sexo { id_sexo = 0, sexo = "Por favor seleccione el Sexo" });

                    ViewBag.ListaSexo = ListaSexo;
                }

                if (Opcion == "EdoCivil")
                {
                    List<EdoCivil> ListaEdoCivil = new List<EdoCivil>();
                    ListaEdoCivil = _Db.EstadoCivil.ToList();
                    ListaEdoCivil.Insert(0, new EdoCivil { Id = 0, edoCivil = "Por favor seleccione el Edo. Civil" });

                    ViewBag.ListaEdoCivil = ListaEdoCivil;
                }
            }
            catch (Exception ex)
            {
            }
        }
    }
}
