#pragma checksum "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "92fdae5cee390d0877042862a7f5a0b83147fcc5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"92fdae5cee390d0877042862a7f5a0b83147fcc5", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f3ca7123ee18d2ea082ec3391b4c8cde2ab94e16", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<WellnessPeople.Models.Idioma>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/logoSofftekColor.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/logoWellness.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frmHome"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", new global::Microsoft.AspNetCore.Html.HtmlString("frmHome"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("/login/index"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Portal de Wellness People - Softtek";
    Layout = "_Layout";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<table border=\"0\" width=\"80%\">\r\n    <tr>\r\n        <td>\r\n            ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "92fdae5cee390d0877042862a7f5a0b83147fcc55796", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"<br />
        </td>
        <td style=""text-align:center"">
            <h1 class=""display-4"">Bienvenido/a</h1>
            <p>Puede obtener más información sobre People Softtek <a href=""https://www.softtek.com"" target=""_blank"">aquí</a></p>
        </td>
    </tr>
</table>

");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "92fdae5cee390d0877042862a7f5a0b83147fcc57115", async() => {
                WriteLiteral("\r\n\r\n    <div id=\"ImagenesCorp\" name=\"ImagenesCorp\">\r\n\r\n        <div id=\"Bienvenida\" name=\"Bienvenida\" style=\"text-align:center\">\r\n            <br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "92fdae5cee390d0877042862a7f5a0b83147fcc57577", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral(@"<br /><br /><br />
        </div>

        <div id=""Banderas"" name=""Banderas"" style=""text-align:center"">
            <h1 class=""display-5"">Seleccione el país:</h1> <br />

            <input type=""hidden"" id=""idPais"" name=""idPais"" />
            <input type=""hidden"" id=""nombrePais"" name=""nombrePais"" />
            <input type=""hidden"" id=""idIdioma"" name=""idIdioma"" />
            <input type=""hidden"" id=""idioma"" name=""idioma"" />
            <input type=""hidden"" id=""banderaRuta"" name=""banderaRuta"" />


");
#nullable restore
#line 38 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
             if (Model != null)
            {
                

#line default
#line hidden
#nullable disable
#nullable restore
#line 40 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
                 foreach (var item in Model)
                {
                    var @etqIdPais = @Html.DisplayFor(modelItem => item.id_pais);
                    var @etqNombrePais = @Html.DisplayFor(modelItem => item.nombre_pais);
                    var @etqBanderaPais = @Html.DisplayFor(modelItem => item.bandera_pais);
                    var @etqIdIdioma = @Html.DisplayFor(modelItem => item.Id);
                    var @etqNombreIdioma = @Html.DisplayFor(modelItem => item.nombre);

                    

#line default
#line hidden
#nullable disable
                WriteLiteral("<input type=\"image\"");
                BeginWriteAttribute("id", " id=\"", 1946, "\"", 1963, 1);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 1951, etqIdIdioma, 1951, 12, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("value", " value=\"", 1964, "\"", 1986, 1);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 1972, etqNombrePais, 1972, 14, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("src", " src=\"", 1987, "\"", 2008, 1);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 1993, etqBanderaPais, 1993, 15, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("alt", " alt=\"", 2009, "\"", 2029, 1);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 2015, etqNombrePais, 2015, 14, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("onclick", " onclick=\"", 2030, "\"", 2148, 14);
                WriteAttributeValue("", 2040, "javascript:SeleccionPais(", 2040, 25, true);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 2065, etqIdPais, 2065, 10, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 2075, ",", 2075, 1, true);
                WriteAttributeValue(" ", 2076, "\'", 2077, 2, true);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 2078, etqNombrePais, 2078, 14, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 2092, "\',", 2092, 2, true);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue(" ", 2094, etqIdIdioma, 2095, 12, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 2107, ",", 2107, 1, true);
                WriteAttributeValue(" ", 2108, "\'", 2109, 2, true);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 2110, etqNombreIdioma, 2110, 16, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 2126, "\',", 2126, 2, true);
                WriteAttributeValue(" ", 2128, "\'", 2129, 2, true);
#nullable restore
#line 48 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
WriteAttributeValue("", 2130, etqBanderaPais, 2130, 15, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 2145, "\');", 2145, 3, true);
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <span> &nbsp; &nbsp; &nbsp; &nbsp;</span>\r\n");
#nullable restore
#line 50 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 50 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\Home\Index.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n        </div>\r\n    </div>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_5.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<WellnessPeople.Models.Idioma>> Html { get; private set; }
    }
}
#pragma warning restore 1591