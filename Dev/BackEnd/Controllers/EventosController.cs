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
    public class EventosController : Controller
    {
        private readonly WellnessPeopleContext _Db;

        public EventosController(WellnessPeopleContext Db)
        {
            _Db = Db;
        }

        public IActionResult CrearEvento(Evento obj)
        {
            loadDDL();

            ViewBag.id_pais = HttpContext.Session.GetInt32("id_pais");
            ViewBag.usuario = HttpContext.Session.GetString("usuario");

            var id_pais = HttpContext.Session.GetInt32("id_pais");
            var usuario = HttpContext.Session.GetString("usuario");

            return View(obj);
        }
        public IActionResult ListarEventos()
        {
            try
            {
                var id_pais = HttpContext.Session.GetInt32("id_pais");
                var usuario = HttpContext.Session.GetString("usuario");

                var stdList = from a in _Db.Evento
                              join b in _Db.TipoEvento
                              on a.id_tipoevento equals b.Id
                              into TipoEventos
                              from b in TipoEventos.DefaultIfEmpty()
                              where a.id_pais == id_pais

                              select new Evento
                              {
                                  Id = a == null ? 0 : a.Id,
                                  nombre = a == null ? "" : a.nombre,
                                  descripcion = a == null ? "" : a.descripcion,
                                  fechahora_inicio = a.fechahora_inicio,
                                  fechahora_fin = a.fechahora_fin,
                                  fecha_creacion = a.fecha_creacion,
                                  creado_por = a == null ? 0 : a.creado_por,
                                  id_tipoevento = a == null ? 0 : a.id_tipoevento,
                                  nombre_TipoEvento = b == null ? "" : b.nombre_TipoEvento
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
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AgregarEvento(Evento obj)
        {
            try
            {
                //if (ModelState.IsValid)
                if (true)
                {
                    if (obj.Id == 0)
                    {
                        _Db.Evento.Add(obj);
                        await _Db.SaveChangesAsync();
                    }
                    else
                    {
                        _Db.Entry(obj).State = EntityState.Modified;
                        await _Db.SaveChangesAsync();
                    }

                    return RedirectToAction("ListarEventos");
                }

                //return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarEventos");
            }
        }


        public async Task<IActionResult> EliminarEvento(int Id)
        {
            try
            {
                var std = await _Db.Evento.FindAsync(Id);
                if (std != null)
                {
                    _Db.Evento.Remove(std);
                    await _Db.SaveChangesAsync();
                }

                return RedirectToAction("ListarEventos");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ListarEventos");
            }
        }

        private void loadDDL()
        {
            try
            {
                List<TipoEvento> depList = new List<TipoEvento>();
                depList = _Db.TipoEvento.ToList();
                depList.Insert(0, new TipoEvento { Id = 0, nombre_TipoEvento = "Por favor seleccione el tipo de Evento" });

                ViewBag.DepList = depList;
            }
            catch (Exception ex)
            {
            }
        }
    }
}
