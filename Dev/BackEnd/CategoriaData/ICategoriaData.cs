using System.Collections.Generic;
using WellnessPeople.Models;

namespace WellnessPeople.CategoriaData
{
    public interface ICategoriaData
    {
        List<Categoria> GetCategoria();

        Categoria GetCategoria(int id);

        Categoria AgregarCategoria(Categoria categoria);

        void EmilinarCategoria(Categoria categoria);

        Categoria EditarCategoria(Categoria categoria);
    }
}
