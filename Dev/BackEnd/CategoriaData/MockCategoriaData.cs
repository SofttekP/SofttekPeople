using WellnessPeople.Models;
using System;
using System.Collections.Generic;

namespace WellnessPeople.CategoriaData
{
    public class MockCategoriaData : ICategoriaData
    {
        public Categoria AgregarCategoria(Categoria categoria)
        {
            throw new NotImplementedException();
        }

        public Categoria EditarCategoria(Categoria categoria)
        {
            throw new NotImplementedException();
        }

        public void EmilinarCategoria(Categoria categoria)
        {
            throw new NotImplementedException();
        }

        public List<Categoria> GetCategoria()
        {
            throw new NotImplementedException();
        }

        public Categoria GetCategoria(int id)
        {
            throw new NotImplementedException();
        }
    }
}
