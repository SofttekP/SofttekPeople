#pragma checksum "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4e999e9238cc39481f2c5670645d675a6542dbd5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PanelAdmin_Index), @"mvc.1.0.view", @"/Views/PanelAdmin/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4e999e9238cc39481f2c5670645d675a6542dbd5", @"/Views/PanelAdmin/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f3ca7123ee18d2ea082ec3391b4c8cde2ab94e16", @"/Views/_ViewImports.cshtml")]
    public class Views_PanelAdmin_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<WellnessPeople.Models.Softtekian>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/imgMujerAlegre.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frmPanelAdmin"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", new global::Microsoft.AspNetCore.Html.HtmlString("frmPanelAdmin"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 6 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
  
    ViewData["Title"] = "Panel de Administración";
    Layout = "~/Views/Shared/_Layout_Backend.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n\r\n<div id=\"ContenedorLogin\">\r\n\r\n    <img src=\"/images/fondoSofttek.png\" style=\"width:95%\" />\r\n    <p style=\"text-align: justify;\">\r\n\r\n        <h3>Bienvenido/a a Wellness People</h3>\r\n        <br />\r\n    </p>\r\n\r\n    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4e999e9238cc39481f2c5670645d675a6542dbd55313", async() => {
                WriteLiteral("\r\n\r\n");
#nullable restore
#line 23 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
         if (Model != null)
        {
            var cuenta = Model.Count();

            

#line default
#line hidden
#nullable disable
#nullable restore
#line 27 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
             if (cuenta == 1)
            {

                

#line default
#line hidden
#nullable disable
#nullable restore
#line 30 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
                 foreach (var item in Model)
                {


#line default
#line hidden
#nullable disable
                WriteLiteral("                <table width=\"100%\" border=\"0\">\r\n                    <tr>\r\n                        <td width=\"50%\">\r\n                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "4e999e9238cc39481f2c5670645d675a6542dbd56483", async() => {
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
                WriteLiteral("\r\n                        </td>\r\n                        <td width=\"50%\">\r\n                            <input type=\"hidden\" id=\"primerNombre\" name=\"primerNombre\"");
                BeginWriteAttribute("value", " value=\"", 1119, "\"", 1176, 1);
#nullable restore
#line 39 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 1127, Html.DisplayFor(modelItem => item.primer_nombre), 1127, 49, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" style=\"border:0\" />\r\n                            &nbsp;\r\n                            <input type=\"hidden\" id=\"segundoNombre\" name=\"segundoNombre\"");
                BeginWriteAttribute("value", " value=\"", 1323, "\"", 1381, 1);
#nullable restore
#line 41 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 1331, Html.DisplayFor(modelItem => item.segundo_nombre), 1331, 50, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" style=\"border:0\" />\r\n                            &nbsp;\r\n                            <input type=\"hidden\" id=\"primerApellido\" name=\"primerApellido\"");
                BeginWriteAttribute("value", " value=\"", 1530, "\"", 1589, 1);
#nullable restore
#line 43 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 1538, Html.DisplayFor(modelItem => item.primer_apellido), 1538, 51, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" style=\"border:0\" />\r\n                            &nbsp;\r\n                            <input type=\"hidden\" id=\"segundoApellido\" name=\"segundoApellido\"");
                BeginWriteAttribute("value", " value=\"", 1740, "\"", 1800, 1);
#nullable restore
#line 45 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 1748, Html.DisplayFor(modelItem => item.segundo_apellido), 1748, 52, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" style=\"border:0\" />\r\n                        </td>\r\n                    </tr> \r\n                  </table>\r\n");
#nullable restore
#line 49 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
                

                // Método POST

#line default
#line hidden
#nullable disable
                WriteLiteral("                    <input type=\"hidden\" id=\"primerNombre\" name=\"primerNombre\"");
                BeginWriteAttribute("value", " value=\"", 2040, "\"", 2097, 1);
#nullable restore
#line 52 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 2048, Html.DisplayFor(modelItem => item.primer_nombre), 2048, 49, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"segundoNombre\" name=\"segundoNombre\"");
                BeginWriteAttribute("value", " value=\"", 2183, "\"", 2241, 1);
#nullable restore
#line 53 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 2191, Html.DisplayFor(modelItem => item.segundo_nombre), 2191, 50, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"primerApellido\" name=\"primerApellido\"");
                BeginWriteAttribute("value", " value=\"", 2329, "\"", 2388, 1);
#nullable restore
#line 54 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 2337, Html.DisplayFor(modelItem => item.primer_apellido), 2337, 51, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"segundoApellido\" name=\"segundoApellido\"");
                BeginWriteAttribute("value", " value=\"", 2478, "\"", 2538, 1);
#nullable restore
#line 55 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 2486, Html.DisplayFor(modelItem => item.segundo_apellido), 2486, 52, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"idPaisSof\" name=\"idPaisSof\"");
                BeginWriteAttribute("value", " value=\"", 2616, "\"", 2667, 1);
#nullable restore
#line 56 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 2624, Html.DisplayFor(modelItem => item.id_pais), 2624, 43, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"nombrePaisSof\" name=\"nombrePaisSof\"");
                BeginWriteAttribute("value", " value=\"", 2753, "\"", 2808, 1);
#nullable restore
#line 57 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 2761, Html.DisplayFor(modelItem => item.nombre_pais), 2761, 47, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"idRolSof\" name=\"idRolSof\"");
                BeginWriteAttribute("value", " value=\"", 2884, "\"", 2934, 1);
#nullable restore
#line 58 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 2892, Html.DisplayFor(modelItem => item.id_rol), 2892, 42, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"nombreRolSof\" name=\"nombreRolSof\"");
                BeginWriteAttribute("value", " value=\"", 3018, "\"", 3072, 1);
#nullable restore
#line 59 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 3026, Html.DisplayFor(modelItem => item.nombre_rol), 3026, 46, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n                    <input type=\"hidden\" id=\"usuario\" name=\"usuario\"");
                BeginWriteAttribute("value", " value=\"", 3146, "\"", 3197, 1);
#nullable restore
#line 60 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
WriteAttributeValue("", 3154, Html.DisplayFor(modelItem => item.usuario), 3154, 43, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" />\r\n");
#nullable restore
#line 61 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 61 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
#nullable restore
#line 62 "C:\Proyectos .Net\V1\WellnessPeople\WellnessPeople\Views\PanelAdmin\Index.cshtml"
             
        }

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n\r\n\r\n    ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n    <br /><br /><br />\r\n</div>\r\n");
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
