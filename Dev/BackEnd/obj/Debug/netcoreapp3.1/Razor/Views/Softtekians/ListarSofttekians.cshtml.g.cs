#pragma checksum "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9830fd75916cbebc6641315b00ce4637e1e2135a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Softtekians_ListarSofttekians), @"mvc.1.0.view", @"/Views/Softtekians/ListarSofttekians.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\_ViewImports.cshtml"
using WellnessPeople;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\_ViewImports.cshtml"
using WellnessPeople.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9830fd75916cbebc6641315b00ce4637e1e2135a", @"/Views/Softtekians/ListarSofttekians.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f3ca7123ee18d2ea082ec3391b4c8cde2ab94e16", @"/Views/_ViewImports.cshtml")]
    public class Views_Softtekians_ListarSofttekians : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<WellnessPeople.Models.Softtekian>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/iconoatras_Pink.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("onclick", new global::Microsoft.AspNetCore.Html.HtmlString("javascript:location.href=\'/PanelAdmin/Index\'"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("cursor: pointer;"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "CrearSofttekian", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-primary"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
  
    ViewData["Title"] = "Administración de Softtekians";
    Layout = "~/Views/Shared/_Layout_Backend.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<br />\r\n<h2>Administración de Softtekians</h2>\r\n<hr />\r\n\r\n<p class=\"float-right\">\r\n    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "9830fd75916cbebc6641315b00ce4637e1e2135a5551", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</p>\r\n\r\n<p class=\"float-left\">\r\n    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9830fd75916cbebc6641315b00ce4637e1e2135a6791", async() => {
                WriteLiteral("Agregar Softtekian");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</p>\r\n\r\n<table class=\"table2\" width=\"100%\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                ");
#nullable restore
#line 24 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayNameFor(model => model.primer_nombre));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 27 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayNameFor(model => model.primer_apellido));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 30 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayNameFor(model => model.email));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 33 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayNameFor(model => model.fecha_nacimiento));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 36 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayNameFor(model => model.esPeople));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 39 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayNameFor(model => model.habilitado));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n");
#nullable restore
#line 45 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
         foreach (var item in Model)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <tr>\r\n            <td>\r\n                ");
#nullable restore
#line 49 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayFor(modelItem => item.primer_nombre));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 52 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayFor(modelItem => item.primer_apellido));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 55 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayFor(modelItem => item.email));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 58 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayFor(modelItem => item.fecha_nacimiento));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 61 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayFor(modelItem => item.esPeople));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 64 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.DisplayFor(modelItem => item.habilitado));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 67 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.ActionLink("Editar", "CrearSofttekian", new { id = item.Id, primer_nombre = item.primer_nombre, segundo_nombre = item.segundo_nombre, primer_apellido = item.primer_apellido, segundo_apellido = item.segundo_apellido, estado_civil = item.estado_civil, fecha_nacimiento = item.fecha_nacimiento, email = item.email, esPeople = item.esPeople, direccion_fisica = item.direccion_fisica, habilitado = item.habilitado, id_pais = item.id_pais, id_rol = item.id_rol }, new { @class = "btn btn-success" }));

#line default
#line hidden
#nullable disable
            WriteLiteral(" |\r\n                ");
#nullable restore
#line 68 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
           Write(Html.ActionLink("Eliminar", "EliminarSofttekian", new { id = item.Id }, new { @class = "btn btn-danger", onclick = "return confirm('¿Está seguro/a de eliminar al Softtekian?')" }));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n        </tr>\r\n");
#nullable restore
#line 71 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Softtekians\ListarSofttekians.cshtml"
        }

#line default
#line hidden
#nullable disable
            WriteLiteral("    </tbody>\r\n</table>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<WellnessPeople.Models.Softtekian>> Html { get; private set; }
    }
}
#pragma warning restore 1591
