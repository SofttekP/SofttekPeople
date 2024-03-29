USE [PortalPeople]
GO
EXEC sys.sp_dropextendedproperty @name=N'MS_DiagramPaneCount' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VwSubcategoriaCategoria'

GO
EXEC sys.sp_dropextendedproperty @name=N'MS_DiagramPane1' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VwSubcategoriaCategoria'

GO
EXEC sys.sp_dropextendedproperty @name=N'MS_DiagramPaneCount' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Vista_Softtekian'

GO
EXEC sys.sp_dropextendedproperty @name=N'MS_DiagramPane1' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Vista_Softtekian'

GO
ALTER TABLE [dbo].[Subcategoria] DROP CONSTRAINT [FK__Subcatego__id_ca__0E391C95]
GO
ALTER TABLE [dbo].[SofttekianEvento] DROP CONSTRAINT [FK__Softtekia__id_so__79FD19BE]
GO
ALTER TABLE [dbo].[SofttekianEvento] DROP CONSTRAINT [FK__Softtekia__id_ev__7908F585]
GO
ALTER TABLE [dbo].[SofttekianCurso] DROP CONSTRAINT [FK__Softtekia__id_so__019E3B86]
GO
ALTER TABLE [dbo].[SofttekianCurso] DROP CONSTRAINT [FK__Softtekia__id_cu__02925FBF]
GO
ALTER TABLE [dbo].[Softtekian] DROP CONSTRAINT [FK__Softtekia__id_ro__6BAEFA67]
GO
ALTER TABLE [dbo].[Softtekian] DROP CONSTRAINT [FK__Softtekia__id_pa__6ABAD62E]
GO
ALTER TABLE [dbo].[Sede] DROP CONSTRAINT [FK__Sede__id_ciudad__656C112C]
GO
ALTER TABLE [dbo].[SatisfaccionEvento] DROP CONSTRAINT [FK__Satisfacc__id_so__075714DC]
GO
ALTER TABLE [dbo].[SatisfaccionEvento] DROP CONSTRAINT [FK__Satisfacc__id_ev__0662F0A3]
GO
ALTER TABLE [dbo].[SatisfaccionCurso] DROP CONSTRAINT [FK__Satisfacc__id_so__753864A1]
GO
ALTER TABLE [dbo].[SatisfaccionCurso] DROP CONSTRAINT [FK__Satisfacc__id_cu__74444068]
GO
ALTER TABLE [dbo].[Perfil] DROP CONSTRAINT [FK__Perfil__id_subca__54968AE5]
GO
ALTER TABLE [dbo].[Perfil] DROP CONSTRAINT [FK__Perfil__id_rol__53A266AC]
GO
ALTER TABLE [dbo].[Perfil] DROP CONSTRAINT [FK__Perfil__id_pais__558AAF1E]
GO
ALTER TABLE [dbo].[Idioma] DROP CONSTRAINT [FK__Idioma__id_Pais__1975C517]
GO
ALTER TABLE [dbo].[Familiar] DROP CONSTRAINT [FK__Familiar__id_sof__0FEC5ADD]
GO
ALTER TABLE [dbo].[Familiar] DROP CONSTRAINT [FK__Familiar__id_par__0EF836A4]
GO
ALTER TABLE [dbo].[Familiar] DROP CONSTRAINT [FK__Familiar__id_pai__0E04126B]
GO
ALTER TABLE [dbo].[Evento] DROP CONSTRAINT [FK__Evento__id_tipoe__58671BC9]
GO
ALTER TABLE [dbo].[Evento] DROP CONSTRAINT [FK__Evento__id_pais__6C6E1476]
GO
ALTER TABLE [dbo].[Evento] DROP CONSTRAINT [FK__Evento__id_calen__339FAB6E]
GO
ALTER TABLE [dbo].[Curso] DROP CONSTRAINT [FK__Curso__id_tipocu__14270015]
GO
ALTER TABLE [dbo].[Curso] DROP CONSTRAINT [FK__Curso__id_pais__6B79F03D]
GO
ALTER TABLE [dbo].[Contenido] DROP CONSTRAINT [FK__Contenido__id_su__4C0144E4]
GO
ALTER TABLE [dbo].[Contenido] DROP CONSTRAINT [FK__Contenido__id_ro__4CF5691D]
GO
ALTER TABLE [dbo].[Contenido] DROP CONSTRAINT [FK__Contenido__id_pa__6D6238AF]
GO
ALTER TABLE [dbo].[Contenido] DROP CONSTRAINT [FK__Contenido__id_ca__4B0D20AB]
GO
ALTER TABLE [dbo].[Contacto] DROP CONSTRAINT [FK__Contacto__id_sof__370627FE]
GO
ALTER TABLE [dbo].[Contacto] DROP CONSTRAINT [FK__Contacto__id_sed__361203C5]
GO
ALTER TABLE [dbo].[Ciudad] DROP CONSTRAINT [FK__Ciudad__id_pais__628FA481]
GO
ALTER TABLE [dbo].[Categoria] DROP CONSTRAINT [FK__Categoria__id_pa__1699586C]
GO
ALTER TABLE [dbo].[Subcategoria] DROP CONSTRAINT [DF__Subcatego__habil__0D44F85C]
GO
ALTER TABLE [dbo].[SofttekianEvento] DROP CONSTRAINT [DF__Softtekia__punta__7814D14C]
GO
ALTER TABLE [dbo].[Softtekian] DROP CONSTRAINT [DF__Softtekia__habil__69C6B1F5]
GO
ALTER TABLE [dbo].[Sede] DROP CONSTRAINT [DF__Sede__longitud__57A801BA]
GO
ALTER TABLE [dbo].[Sede] DROP CONSTRAINT [DF__Sede__latitud__56B3DD81]
GO
ALTER TABLE [dbo].[SatisfaccionEvento] DROP CONSTRAINT [DF__Satisfacc__puntu__056ECC6A]
GO
ALTER TABLE [dbo].[SatisfaccionCurso] DROP CONSTRAINT [DF__Satisfacc__puntu__73501C2F]
GO
ALTER TABLE [dbo].[Color] DROP CONSTRAINT [DF__color__habilitad__1C5231C2]
GO
/****** Object:  View [dbo].[VwSubcategoriaCategoria]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP VIEW [dbo].[VwSubcategoriaCategoria]
GO
/****** Object:  View [dbo].[Vista_Softtekian]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP VIEW [dbo].[Vista_Softtekian]
GO
/****** Object:  Table [dbo].[TipoEvento]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[TipoEvento]
GO
/****** Object:  Table [dbo].[TipoCurso]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[TipoCurso]
GO
/****** Object:  Table [dbo].[Subcategoria]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Subcategoria]
GO
/****** Object:  Table [dbo].[SofttekianEvento]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[SofttekianEvento]
GO
/****** Object:  Table [dbo].[SofttekianCurso]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[SofttekianCurso]
GO
/****** Object:  Table [dbo].[Softtekian]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Softtekian]
GO
/****** Object:  Table [dbo].[Sede]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Sede]
GO
/****** Object:  Table [dbo].[SatisfaccionEvento]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[SatisfaccionEvento]
GO
/****** Object:  Table [dbo].[SatisfaccionCurso]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[SatisfaccionCurso]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Rol]
GO
/****** Object:  Table [dbo].[Perfil]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Perfil]
GO
/****** Object:  Table [dbo].[Parentesco]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Parentesco]
GO
/****** Object:  Table [dbo].[Pais]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Pais]
GO
/****** Object:  Table [dbo].[Idioma]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Idioma]
GO
/****** Object:  Table [dbo].[Familiar]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Familiar]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Evento]
GO
/****** Object:  Table [dbo].[Curso]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Curso]
GO
/****** Object:  Table [dbo].[Contenido]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Contenido]
GO
/****** Object:  Table [dbo].[Contacto]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Contacto]
GO
/****** Object:  Table [dbo].[Color]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Color]
GO
/****** Object:  Table [dbo].[Ciudad]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Ciudad]
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Categoria]
GO
/****** Object:  Table [dbo].[Calendario]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP TABLE [dbo].[Calendario]
GO
USE [master]
GO
/****** Object:  Database [PortalPeople]    Script Date: 30/12/2020 02:25:56 p.m. ******/
DROP DATABASE [PortalPeople]
GO
/****** Object:  Database [PortalPeople]    Script Date: 30/12/2020 02:25:56 p.m. ******/
CREATE DATABASE [PortalPeople]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PortalPeople', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS2012\MSSQL\DATA\PortalPeople.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'PortalPeople_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS2012\MSSQL\DATA\PortalPeople_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [PortalPeople] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PortalPeople].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PortalPeople] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PortalPeople] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PortalPeople] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PortalPeople] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PortalPeople] SET ARITHABORT OFF 
GO
ALTER DATABASE [PortalPeople] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PortalPeople] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [PortalPeople] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PortalPeople] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PortalPeople] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PortalPeople] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PortalPeople] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PortalPeople] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PortalPeople] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PortalPeople] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PortalPeople] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PortalPeople] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PortalPeople] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PortalPeople] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PortalPeople] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PortalPeople] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PortalPeople] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PortalPeople] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PortalPeople] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [PortalPeople] SET  MULTI_USER 
GO
ALTER DATABASE [PortalPeople] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PortalPeople] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PortalPeople] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PortalPeople] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [PortalPeople]
GO
/****** Object:  Table [dbo].[Calendario]    Script Date: 30/12/2020 02:25:58 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Calendario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[anho] [int] NOT NULL,
	[habilitado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Categoria](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[color] [varchar](25) NOT NULL,
	[habilitada] [bit] NOT NULL,
	[id_pais] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Ciudad]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Ciudad](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_ciudad] [varchar](50) NOT NULL,
	[id_pais] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Color]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Color](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_color] [varchar](50) NOT NULL,
	[habilitado] [bit] NOT NULL,
	[valor_color] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contacto]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contacto](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_sede] [int] NOT NULL,
	[id_softtekian] [int] NOT NULL,
	[direccion_fisica] [text] NOT NULL,
	[telefono] [varchar](20) NOT NULL,
	[email] [varchar](40) NOT NULL,
	[habilitada] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contenido]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contenido](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_categoria] [int] NOT NULL,
	[id_subcategoria] [int] NOT NULL,
	[id_rol] [int] NOT NULL,
	[habilitada] [bit] NOT NULL,
	[url] [varchar](250) NULL,
	[wysiwyg] [text] NULL,
	[nombre] [varchar](100) NULL,
	[id_pais] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Curso]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Curso](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [text] NOT NULL,
	[fecha_inicio] [datetime] NOT NULL,
	[fecha_fin] [datetime] NOT NULL,
	[creado_por] [int] NOT NULL,
	[fecha_creacion] [datetime] NOT NULL,
	[id_tipocurso] [int] NOT NULL,
	[id_pais] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Evento](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[id_calendario] [int] NOT NULL,
	[descripcion] [text] NOT NULL,
	[imagen] [varchar](400) NOT NULL,
	[fechahora_inicio] [datetime] NOT NULL,
	[fechahora_fin] [datetime] NOT NULL,
	[habilitado] [bit] NOT NULL,
	[id_tipoevento] [int] NULL,
	[id_pais] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Familiar]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Familiar](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_softtekian] [int] NOT NULL,
	[id_parentesco] [int] NOT NULL,
	[id_pais] [int] NOT NULL,
	[primer_nombre] [varchar](50) NOT NULL,
	[segundo_nombre] [varchar](50) NOT NULL,
	[primer_apellido] [varchar](50) NOT NULL,
	[segundo_apellido] [varchar](50) NOT NULL,
	[fecha_nacimiento] [datetime] NULL,
	[habilitado] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Idioma]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Idioma](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[bandera_idioma] [varchar](100) NULL,
	[id_Pais] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Pais]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Pais](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_pais] [varchar](50) NOT NULL,
	[bandera_pais] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Parentesco]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Parentesco](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[parentesco] [varchar](60) NOT NULL,
	[habilitado] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Perfil]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Perfil](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_rol] [int] NOT NULL,
	[id_subcategoria] [int] NOT NULL,
	[id_pais] [int] NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [text] NULL,
	[acceso] [bit] NULL,
	[agregar] [bit] NULL,
	[modificar] [bit] NULL,
	[consultar] [bit] NULL,
	[eliminar] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Rol](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_rol] [varchar](50) NOT NULL,
	[descripcion] [text] NULL,
	[habilitado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SatisfaccionCurso]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SatisfaccionCurso](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_curso] [int] NOT NULL,
	[id_softtekian] [int] NOT NULL,
	[puntuacion] [int] NOT NULL,
	[valorizacion] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SatisfaccionEvento]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SatisfaccionEvento](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_evento] [int] NOT NULL,
	[id_softtekian] [int] NOT NULL,
	[puntuacion] [int] NOT NULL,
	[valorizacion] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Sede]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Sede](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[id_ciudad] [int] NOT NULL,
	[direccion_fisica] [text] NOT NULL,
	[latitud] [int] NOT NULL,
	[longitud] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Softtekian]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Softtekian](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_pais] [int] NULL,
	[id_rol] [int] NULL,
	[primer_nombre] [varchar](50) NOT NULL,
	[segundo_nombre] [varchar](50) NOT NULL,
	[primer_apellido] [varchar](50) NOT NULL,
	[segundo_apellido] [varchar](50) NOT NULL,
	[sexo] [char](1) NOT NULL,
	[estado_civil] [varchar](15) NOT NULL,
	[fecha_nacimiento] [datetime] NOT NULL,
	[tipo_sangre] [varchar](5) NULL,
	[email] [varchar](150) NOT NULL,
	[clientIS] [varchar](5) NOT NULL,
	[usuario] [varchar](30) NOT NULL,
	[ultima_conexion] [datetime] NULL,
	[esPeople] [bit] NULL,
	[rutafotografia] [varchar](200) NULL,
	[direccion_fisica] [text] NULL,
	[habilitado] [bit] NOT NULL,
	[clave] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SofttekianCurso]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SofttekianCurso](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_softtekian] [int] NOT NULL,
	[id_curso] [int] NOT NULL,
	[puntaje] [int] NOT NULL,
	[descripcion] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SofttekianEvento]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SofttekianEvento](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_softtekian] [int] NOT NULL,
	[id_evento] [int] NOT NULL,
	[puntaje] [int] NOT NULL,
	[descripcion] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Subcategoria]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Subcategoria](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_categoria] [int] NOT NULL,
	[nombre_subcategoria] [varchar](50) NOT NULL,
	[habilitada] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TipoCurso]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TipoCurso](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_TipoCurso] [varchar](50) NOT NULL,
	[habilitado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TipoEvento]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TipoEvento](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_TipoEvento] [varchar](50) NOT NULL,
	[habilitado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  View [dbo].[Vista_Softtekian]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[Vista_Softtekian]
AS
SELECT        dbo.Pais.id, dbo.Pais.nombre_pais, dbo.Pais.bandera_pais, dbo.Rol.id AS Expr1, dbo.Rol.nombre_rol, dbo.Rol.descripcion, dbo.Rol.habilitado, 
                         dbo.Softtekian.id AS Expr2, dbo.Softtekian.id_pais, dbo.Softtekian.id_rol, dbo.Softtekian.primer_nombre, dbo.Softtekian.segundo_nombre, 
                         dbo.Softtekian.primer_apellido, dbo.Softtekian.segundo_apellido, dbo.Softtekian.sexo, dbo.Softtekian.estado_civil, dbo.Softtekian.fecha_nacimiento, 
                         dbo.Softtekian.tipo_sangre, dbo.Softtekian.email, dbo.Softtekian.clientIS, dbo.Softtekian.usuario, dbo.Softtekian.ultima_conexion, dbo.Softtekian.esPeople, 
                         dbo.Softtekian.rutafotografia, dbo.Softtekian.direccion_fisica, dbo.Softtekian.habilitado AS Expr3, dbo.Softtekian.clave
FROM            dbo.Pais INNER JOIN
                         dbo.Rol ON dbo.Pais.id = dbo.Rol.id INNER JOIN
                         dbo.Softtekian ON dbo.Pais.id = dbo.Softtekian.id_pais AND dbo.Rol.id = dbo.Softtekian.id_rol

GO
/****** Object:  View [dbo].[VwSubcategoriaCategoria]    Script Date: 30/12/2020 02:25:59 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[VwSubcategoriaCategoria]
AS
SELECT        dbo.Categoria.id, dbo.Categoria.nombre, dbo.Categoria.color, dbo.Categoria.habilitada, dbo.Categoria.id_pais, dbo.Subcategoria.id AS Expr1, 
                         dbo.Subcategoria.id_categoria, dbo.Subcategoria.nombre AS Expr2, dbo.Subcategoria.habilitada AS Expr3
FROM            dbo.Categoria INNER JOIN
                         dbo.Subcategoria ON dbo.Categoria.id = dbo.Subcategoria.id_categoria

GO
SET IDENTITY_INSERT [dbo].[Calendario] ON 

INSERT [dbo].[Calendario] ([id], [nombre], [anho], [habilitado]) VALUES (2, N'Calendario 2020', 2020, 1)
INSERT [dbo].[Calendario] ([id], [nombre], [anho], [habilitado]) VALUES (4, N'Calendario 2021', 2021, 0)
SET IDENTITY_INSERT [dbo].[Calendario] OFF
SET IDENTITY_INSERT [dbo].[Categoria] ON 

INSERT [dbo].[Categoria] ([id], [nombre], [color], [habilitada], [id_pais]) VALUES (3, N'Tiempo para mi', N'#DA033F', 1, 1)
INSERT [dbo].[Categoria] ([id], [nombre], [color], [habilitada], [id_pais]) VALUES (4, N'Experiencias', N'#FFC000', 1, 1)
INSERT [dbo].[Categoria] ([id], [nombre], [color], [habilitada], [id_pais]) VALUES (5, N'Vida saludable', N'#08DA5D', 1, 1)
INSERT [dbo].[Categoria] ([id], [nombre], [color], [habilitada], [id_pais]) VALUES (6, N'Nuestra felicidad', N'#0096FF', 1, 1)
INSERT [dbo].[Categoria] ([id], [nombre], [color], [habilitada], [id_pais]) VALUES (8, N'Reconocimientos', N'#424242', 1, 1)
INSERT [dbo].[Categoria] ([id], [nombre], [color], [habilitada], [id_pais]) VALUES (9, N'Eventos internos', N'#640DBA', 0, 1)
INSERT [dbo].[Categoria] ([id], [nombre], [color], [habilitada], [id_pais]) VALUES (1036, N'Categoria 8', N'magenta', 1, 1)
SET IDENTITY_INSERT [dbo].[Categoria] OFF
SET IDENTITY_INSERT [dbo].[Ciudad] ON 

INSERT [dbo].[Ciudad] ([id], [nombre_ciudad], [id_pais]) VALUES (1, N'Bogotá', 1)
INSERT [dbo].[Ciudad] ([id], [nombre_ciudad], [id_pais]) VALUES (3, N'Santiago de Chile', 2)
INSERT [dbo].[Ciudad] ([id], [nombre_ciudad], [id_pais]) VALUES (4, N'Buenos aires', 3)
INSERT [dbo].[Ciudad] ([id], [nombre_ciudad], [id_pais]) VALUES (5, N'São Paulo', 4)
SET IDENTITY_INSERT [dbo].[Ciudad] OFF
SET IDENTITY_INSERT [dbo].[Color] ON 

INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (1, N'Azul', 1, N'blue')
INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (2, N'Rojo', 1, N'red')
INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (3, N'Verde', 1, N'green')
INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (4, N'Amarillo', 1, N'yellow')
INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (5, N'Negro', 1, N'black')
INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (6, N'Blanco', 1, N'white')
INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (7, N'Naranja', 1, N'orange')
INSERT [dbo].[Color] ([id], [nombre_color], [habilitado], [valor_color]) VALUES (8, N'Lima', 1, N'lime')
SET IDENTITY_INSERT [dbo].[Color] OFF
SET IDENTITY_INSERT [dbo].[Contenido] ON 

INSERT [dbo].[Contenido] ([id], [id_categoria], [id_subcategoria], [id_rol], [habilitada], [url], [wysiwyg], [nombre], [id_pais]) VALUES (1, 3, 1, 1, 1, NULL, N'Prueba de editor enriquecido', N'Prueba de texto', 1)
SET IDENTITY_INSERT [dbo].[Contenido] OFF
SET IDENTITY_INSERT [dbo].[Curso] ON 

INSERT [dbo].[Curso] ([id], [nombre], [descripcion], [fecha_inicio], [fecha_fin], [creado_por], [fecha_creacion], [id_tipocurso], [id_pais]) VALUES (1, N'Curso de Primeros Auxilios', N'Curso de Primeros Auxilios', CAST(N'2020-12-20 08:00:00.000' AS DateTime), CAST(N'2020-12-21 08:00:00.000' AS DateTime), 1, CAST(N'2020-12-19 08:00:00.000' AS DateTime), 2, 1)
SET IDENTITY_INSERT [dbo].[Curso] OFF
SET IDENTITY_INSERT [dbo].[Evento] ON 

INSERT [dbo].[Evento] ([id], [nombre], [id_calendario], [descripcion], [imagen], [fechahora_inicio], [fechahora_fin], [habilitado], [id_tipoevento], [id_pais]) VALUES (3, N'Evento deportivo', 2, N'Evento deportivo', N'imagen', CAST(N'2020-12-26 09:00:00.000' AS DateTime), CAST(N'2020-12-29 09:00:00.000' AS DateTime), 1, 6, NULL)
SET IDENTITY_INSERT [dbo].[Evento] OFF
SET IDENTITY_INSERT [dbo].[Idioma] ON 

INSERT [dbo].[Idioma] ([id], [nombre], [bandera_idioma], [id_Pais]) VALUES (1, N'Español', N'~/images/banderas/banderaColombia.png', 1)
INSERT [dbo].[Idioma] ([id], [nombre], [bandera_idioma], [id_Pais]) VALUES (2, N'Español', N'~/images/banderas/banderaChile.png', 2)
INSERT [dbo].[Idioma] ([id], [nombre], [bandera_idioma], [id_Pais]) VALUES (3, N'Español', N'~/images/banderas/banderaArgentina.png', 3)
INSERT [dbo].[Idioma] ([id], [nombre], [bandera_idioma], [id_Pais]) VALUES (4, N'Português', N'~/images/banderas/banderaBrasil.png', 4)
SET IDENTITY_INSERT [dbo].[Idioma] OFF
SET IDENTITY_INSERT [dbo].[Pais] ON 

INSERT [dbo].[Pais] ([id], [nombre_pais], [bandera_pais]) VALUES (1, N'Colombia', N'/images/banderas/banderaColombia.png')
INSERT [dbo].[Pais] ([id], [nombre_pais], [bandera_pais]) VALUES (2, N'Chile', N'/images/banderas/banderaChile.png')
INSERT [dbo].[Pais] ([id], [nombre_pais], [bandera_pais]) VALUES (3, N'Argentina', N'/images/banderas/banderaArgentina.png')
INSERT [dbo].[Pais] ([id], [nombre_pais], [bandera_pais]) VALUES (4, N'Brasil', N'/images/banderas/banderaBrasil.png')
SET IDENTITY_INSERT [dbo].[Pais] OFF
SET IDENTITY_INSERT [dbo].[Parentesco] ON 

INSERT [dbo].[Parentesco] ([id], [parentesco], [habilitado]) VALUES (1, N'Conyuge', 1)
INSERT [dbo].[Parentesco] ([id], [parentesco], [habilitado]) VALUES (2, N'Hijo', 1)
INSERT [dbo].[Parentesco] ([id], [parentesco], [habilitado]) VALUES (3, N'Madre', 1)
INSERT [dbo].[Parentesco] ([id], [parentesco], [habilitado]) VALUES (4, N'Padre', 1)
INSERT [dbo].[Parentesco] ([id], [parentesco], [habilitado]) VALUES (5, N'Suegra', 1)
INSERT [dbo].[Parentesco] ([id], [parentesco], [habilitado]) VALUES (6, N'Suegro', 1)
SET IDENTITY_INSERT [dbo].[Parentesco] OFF
SET IDENTITY_INSERT [dbo].[Perfil] ON 

INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (2, 1, 1, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (3, 1, 2, 1, N'PerrfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (4, 1, 3, 1, N'PerfilaAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (7, 1, 4, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (8, 1, 5, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (9, 1, 6, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (10, 1, 7, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (11, 1, 8, 1, N'PerfilAdmin', N'', 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (12, 1, 9, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (13, 1, 10, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (14, 1, 11, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (15, 1, 12, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (16, 1, 13, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (17, 1, 14, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (18, 1, 15, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (19, 1, 16, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (20, 1, 17, 1, N'PerfilAdmin', N'', 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (21, 1, 18, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (22, 1, 19, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (23, 1, 20, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (24, 1, 21, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (25, 1, 22, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (26, 1, 23, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (27, 1, 24, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (28, 1, 25, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (29, 1, 26, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (31, 1, 27, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (32, 1, 28, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (38, 1, 31, 1, N'PerfilAdmin', N'', 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (39, 1, 32, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (40, 1, 33, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (41, 1, 34, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (42, 1, 35, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (43, 1, 36, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (44, 1, 37, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
INSERT [dbo].[Perfil] ([id], [id_rol], [id_subcategoria], [id_pais], [nombre], [descripcion], [acceso], [agregar], [modificar], [consultar], [eliminar]) VALUES (45, 1, 38, 1, N'PerfilAdmin', NULL, 1, 1, 1, 1, 1)
SET IDENTITY_INSERT [dbo].[Perfil] OFF
SET IDENTITY_INSERT [dbo].[Rol] ON 

INSERT [dbo].[Rol] ([id], [nombre_rol], [descripcion], [habilitado]) VALUES (1, N'Administrador', N'Administrador del sistema', 1)
INSERT [dbo].[Rol] ([id], [nombre_rol], [descripcion], [habilitado]) VALUES (2, N'People', N'People', 1)
INSERT [dbo].[Rol] ([id], [nombre_rol], [descripcion], [habilitado]) VALUES (3, N'Softtekian', N'Softtekian', 1)
SET IDENTITY_INSERT [dbo].[Rol] OFF
SET IDENTITY_INSERT [dbo].[Sede] ON 

INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (1, N'Sede Centro', 1, N'Carrera 7 #32-83, Piso 7. Chapinero.', 0, 0)
INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (2, N'Softtek Renovation Ltda', 1, N'Calle 119 #13-45, Piso 5
. Usaquén.', 0, 0)
INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (7, N'Softtek Santiago', 3, N'Cerro el Plomo 5420, Oficina 505 Las Condes. Sector Nueva las Condes Región Metropolitana', 0, 0)
INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (11, N'Ciudad Autónoma de Buenos Aires', 4, N'Maipú 942, piso 19° Capital Federal, C1006ACN', 0, 0)
INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (12, N'La Plata', 4, N'Calle 60 N° 792 La Plata, 1900.', 0, 0)
INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (13, N'Barueri', 5, N'Av. Andrômeda, 2.000, Bloco 12 e 14, Alphaville, Barueri.', 0, 0)
INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (14, N'Fortaleza', 5, N'Av. Washington Soares, 1321 - Edson Queiroz, Bloco M Sala M12, Fortaleza.', 0, 0)
INSERT [dbo].[Sede] ([id], [nombre], [id_ciudad], [direccion_fisica], [latitud], [longitud]) VALUES (15, N'Rio de Janeiro', 5, N'Rua da Assembléia, 10 - sala 1712 Rio de Janeiro.', 0, 0)
SET IDENTITY_INSERT [dbo].[Sede] OFF
SET IDENTITY_INSERT [dbo].[Softtekian] ON 

INSERT [dbo].[Softtekian] ([id], [id_pais], [id_rol], [primer_nombre], [segundo_nombre], [primer_apellido], [segundo_apellido], [sexo], [estado_civil], [fecha_nacimiento], [tipo_sangre], [email], [clientIS], [usuario], [ultima_conexion], [esPeople], [rutafotografia], [direccion_fisica], [habilitado], [clave]) VALUES (9, 1, 1, N'José', N'Antonio', N'Cela', N'Méndez', N'M', N'Casado', CAST(N'1975-07-01 00:00:00.000' AS DateTime), N'OHR+', N'jose.cela@softtek.com', N'JACM5', N'jose.cela@softtek.com', CAST(N'2020-11-29 08:00:00.000' AS DateTime), 0, N'ruta', N'Bogotá', 1, N'123')
INSERT [dbo].[Softtekian] ([id], [id_pais], [id_rol], [primer_nombre], [segundo_nombre], [primer_apellido], [segundo_apellido], [sexo], [estado_civil], [fecha_nacimiento], [tipo_sangre], [email], [clientIS], [usuario], [ultima_conexion], [esPeople], [rutafotografia], [direccion_fisica], [habilitado], [clave]) VALUES (17, 1, 2, N'William', N'Henry', N'Gates III', N'A', N'M', N'Casado', CAST(N'1970-09-22 00:00:00.000' AS DateTime), NULL, N'bill.gates@sottek.com', N'WHG5', N'bill.gates@sottek.com', CAST(N'2020-12-29 08:00:00.000' AS DateTime), 1, NULL, N'Bogotá', 1, N'123')
INSERT [dbo].[Softtekian] ([id], [id_pais], [id_rol], [primer_nombre], [segundo_nombre], [primer_apellido], [segundo_apellido], [sexo], [estado_civil], [fecha_nacimiento], [tipo_sangre], [email], [clientIS], [usuario], [ultima_conexion], [esPeople], [rutafotografia], [direccion_fisica], [habilitado], [clave]) VALUES (18, 1, 3, N'Jeff', N'Preston', N'Bezos', N'Jorgensen', N'M', N'Casado', CAST(N'1977-05-18 00:00:00.000' AS DateTime), N'A+', N'jeff.bezos@softtek.com', N'JPBJ2', N'jeff.bezos@softtek.com', CAST(N'2020-12-29 08:00:00.000' AS DateTime), 0, NULL, N'Medellin', 1, N'123')
INSERT [dbo].[Softtekian] ([id], [id_pais], [id_rol], [primer_nombre], [segundo_nombre], [primer_apellido], [segundo_apellido], [sexo], [estado_civil], [fecha_nacimiento], [tipo_sangre], [email], [clientIS], [usuario], [ultima_conexion], [esPeople], [rutafotografia], [direccion_fisica], [habilitado], [clave]) VALUES (20, 2, 1, N'Steven', N'Paul', N'Jobs', N'J', N'M', N'Casado', CAST(N'1973-09-20 00:00:00.000' AS DateTime), N'ORH-', N'steve.jobs@softtek.com', N'SPJJ3', N'steve.jobs@softtek.com', CAST(N'2020-12-29 08:00:00.000' AS DateTime), 0, NULL, N'Santiago de Chile', 1, N'123')
INSERT [dbo].[Softtekian] ([id], [id_pais], [id_rol], [primer_nombre], [segundo_nombre], [primer_apellido], [segundo_apellido], [sexo], [estado_civil], [fecha_nacimiento], [tipo_sangre], [email], [clientIS], [usuario], [ultima_conexion], [esPeople], [rutafotografia], [direccion_fisica], [habilitado], [clave]) VALUES (22, 2, 2, N'Mark', N'Elliot', N'Zuckerberg', N'P', N'M', N'Soltero', CAST(N'1980-03-19 00:00:00.000' AS DateTime), N'A-', N'mark.zuckerberg@softtek.com', N'MEZP4', N'mark.zuckerberg@softtek.com', CAST(N'2020-12-29 08:00:00.000' AS DateTime), 1, NULL, N'Santiago de Chile', 1, N'123')
INSERT [dbo].[Softtekian] ([id], [id_pais], [id_rol], [primer_nombre], [segundo_nombre], [primer_apellido], [segundo_apellido], [sexo], [estado_civil], [fecha_nacimiento], [tipo_sangre], [email], [clientIS], [usuario], [ultima_conexion], [esPeople], [rutafotografia], [direccion_fisica], [habilitado], [clave]) VALUES (25, 2, 3, N'Melinda', N'Ann', N'French ', N'Gates', N'F', N'Casada', CAST(N'1970-01-11 00:00:00.000' AS DateTime), N'ORH+', N'melinda.french@softtek.com', N'MAFG7', N'melinda.french@softtek.com', CAST(N'2020-12-29 08:00:00.000' AS DateTime), 0, NULL, N'Santiago de Chile', 1, N'123')
SET IDENTITY_INSERT [dbo].[Softtekian] OFF
SET IDENTITY_INSERT [dbo].[Subcategoria] ON 

INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (1, 3, N'Día de cumpleaños', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (2, 3, N'Día de la familia', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (3, 3, N'Día de tu boda', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (4, 3, N'Día para emergencias médicas familiares', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (5, 3, N'Vacaciones', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (6, 4, N'Claro', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (7, 4, N'Corpecol', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (8, 4, N'Itaú', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (9, 4, N'Davivienda', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (10, 4, N'Compensar', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (11, 4, N'Colsanitas', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (12, 4, N'Emermedica', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (13, 4, N'AXA Colpatria', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (14, 4, N'Seguros Bolívar', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (15, 4, N'Spinning Center', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (16, 4, N'SURA', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (17, 4, N'Artesana', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (18, 4, N'ServiORAL', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (19, 4, N'Orthoespecialistas', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (20, 4, N'Optica Juan Pablo II', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (21, 4, N'International Language Collage', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (22, 5, N'Tips de nutrición', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (23, 5, N'SGSST info', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (24, 6, N'Plan de beneficios Softtek', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (25, 6, N'Salud', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (26, 6, N'Vivienda', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (27, 6, N'Educación', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (28, 6, N'Complemento a Pensión', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (31, 8, N'VOM', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (32, 8, N'VOC', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (33, 8, N'COLABORACIÓN', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (34, 8, N'BE BOLD', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (35, 8, N'INSIGNIAS', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (36, 9, N'Calendario de Actividades Wellnes', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (37, 9, N'Formación', 1)
INSERT [dbo].[Subcategoria] ([id], [id_categoria], [nombre_subcategoria], [habilitada]) VALUES (38, 9, N'SGSST', 1)
SET IDENTITY_INSERT [dbo].[Subcategoria] OFF
SET IDENTITY_INSERT [dbo].[TipoCurso] ON 

INSERT [dbo].[TipoCurso] ([id], [nombre_TipoCurso], [habilitado]) VALUES (1, N'Virtual', 1)
INSERT [dbo].[TipoCurso] ([id], [nombre_TipoCurso], [habilitado]) VALUES (2, N'Técnico', 1)
INSERT [dbo].[TipoCurso] ([id], [nombre_TipoCurso], [habilitado]) VALUES (3, N'Reunión Interna', NULL)
SET IDENTITY_INSERT [dbo].[TipoCurso] OFF
SET IDENTITY_INSERT [dbo].[TipoEvento] ON 

INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (4, N'Evento de empresa', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (6, N'Evento corporativo', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (7, N'Evento con causa', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (8, N'Evento de recaudación de fondos', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (9, N'Evento de ocio', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (10, N'Evento deportivo', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (11, N'Evento social', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (12, N'Reunión', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (13, N'Convención', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (14, N'Congreso', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (15, N'Jornada corporativa', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (16, N'Simposio', 1)
INSERT [dbo].[TipoEvento] ([id], [nombre_TipoEvento], [habilitado]) VALUES (17, N'Evento dirigido a público', 1)
SET IDENTITY_INSERT [dbo].[TipoEvento] OFF
ALTER TABLE [dbo].[Color] ADD  DEFAULT ((1)) FOR [habilitado]
GO
ALTER TABLE [dbo].[SatisfaccionCurso] ADD  DEFAULT ('0') FOR [puntuacion]
GO
ALTER TABLE [dbo].[SatisfaccionEvento] ADD  DEFAULT ('0') FOR [puntuacion]
GO
ALTER TABLE [dbo].[Sede] ADD  DEFAULT ('0') FOR [latitud]
GO
ALTER TABLE [dbo].[Sede] ADD  DEFAULT ('0') FOR [longitud]
GO
ALTER TABLE [dbo].[Softtekian] ADD  DEFAULT ('1') FOR [habilitado]
GO
ALTER TABLE [dbo].[SofttekianEvento] ADD  DEFAULT ('0') FOR [puntaje]
GO
ALTER TABLE [dbo].[Subcategoria] ADD  DEFAULT ('1') FOR [habilitada]
GO
ALTER TABLE [dbo].[Categoria]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Ciudad]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Contacto]  WITH CHECK ADD FOREIGN KEY([id_sede])
REFERENCES [dbo].[Sede] ([id])
GO
ALTER TABLE [dbo].[Contacto]  WITH CHECK ADD FOREIGN KEY([id_softtekian])
REFERENCES [dbo].[Softtekian] ([id])
GO
ALTER TABLE [dbo].[Contenido]  WITH CHECK ADD FOREIGN KEY([id_categoria])
REFERENCES [dbo].[Categoria] ([id])
GO
ALTER TABLE [dbo].[Contenido]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Contenido]  WITH CHECK ADD FOREIGN KEY([id_rol])
REFERENCES [dbo].[Rol] ([id])
GO
ALTER TABLE [dbo].[Contenido]  WITH CHECK ADD FOREIGN KEY([id_subcategoria])
REFERENCES [dbo].[Subcategoria] ([id])
GO
ALTER TABLE [dbo].[Curso]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Curso]  WITH CHECK ADD FOREIGN KEY([id_tipocurso])
REFERENCES [dbo].[TipoCurso] ([id])
GO
ALTER TABLE [dbo].[Evento]  WITH CHECK ADD FOREIGN KEY([id_calendario])
REFERENCES [dbo].[Calendario] ([id])
GO
ALTER TABLE [dbo].[Evento]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Evento]  WITH CHECK ADD FOREIGN KEY([id_tipoevento])
REFERENCES [dbo].[TipoEvento] ([id])
GO
ALTER TABLE [dbo].[Familiar]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Familiar]  WITH CHECK ADD FOREIGN KEY([id_parentesco])
REFERENCES [dbo].[Parentesco] ([id])
GO
ALTER TABLE [dbo].[Familiar]  WITH CHECK ADD FOREIGN KEY([id_softtekian])
REFERENCES [dbo].[Softtekian] ([id])
GO
ALTER TABLE [dbo].[Idioma]  WITH CHECK ADD FOREIGN KEY([id_Pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Perfil]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Perfil]  WITH CHECK ADD FOREIGN KEY([id_rol])
REFERENCES [dbo].[Rol] ([id])
GO
ALTER TABLE [dbo].[Perfil]  WITH CHECK ADD FOREIGN KEY([id_subcategoria])
REFERENCES [dbo].[Subcategoria] ([id])
GO
ALTER TABLE [dbo].[SatisfaccionCurso]  WITH CHECK ADD FOREIGN KEY([id_curso])
REFERENCES [dbo].[Curso] ([id])
GO
ALTER TABLE [dbo].[SatisfaccionCurso]  WITH CHECK ADD FOREIGN KEY([id_softtekian])
REFERENCES [dbo].[Softtekian] ([id])
GO
ALTER TABLE [dbo].[SatisfaccionEvento]  WITH CHECK ADD FOREIGN KEY([id_evento])
REFERENCES [dbo].[Evento] ([id])
GO
ALTER TABLE [dbo].[SatisfaccionEvento]  WITH CHECK ADD FOREIGN KEY([id_softtekian])
REFERENCES [dbo].[Softtekian] ([id])
GO
ALTER TABLE [dbo].[Sede]  WITH CHECK ADD FOREIGN KEY([id_ciudad])
REFERENCES [dbo].[Ciudad] ([id])
GO
ALTER TABLE [dbo].[Softtekian]  WITH CHECK ADD FOREIGN KEY([id_pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Softtekian]  WITH CHECK ADD FOREIGN KEY([id_rol])
REFERENCES [dbo].[Rol] ([id])
GO
ALTER TABLE [dbo].[SofttekianCurso]  WITH CHECK ADD FOREIGN KEY([id_curso])
REFERENCES [dbo].[Curso] ([id])
GO
ALTER TABLE [dbo].[SofttekianCurso]  WITH CHECK ADD FOREIGN KEY([id_softtekian])
REFERENCES [dbo].[Softtekian] ([id])
GO
ALTER TABLE [dbo].[SofttekianEvento]  WITH CHECK ADD FOREIGN KEY([id_evento])
REFERENCES [dbo].[Evento] ([id])
GO
ALTER TABLE [dbo].[SofttekianEvento]  WITH CHECK ADD FOREIGN KEY([id_softtekian])
REFERENCES [dbo].[Softtekian] ([id])
GO
ALTER TABLE [dbo].[Subcategoria]  WITH CHECK ADD FOREIGN KEY([id_categoria])
REFERENCES [dbo].[Categoria] ([id])
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Pais"
            Begin Extent = 
               Top = 18
               Left = 20
               Bottom = 130
               Right = 190
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Rol"
            Begin Extent = 
               Top = 117
               Left = 324
               Bottom = 246
               Right = 494
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Softtekian"
            Begin Extent = 
               Top = 3
               Left = 622
               Bottom = 132
               Right = 805
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Vista_Softtekian'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Vista_Softtekian'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Categoria"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 135
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Subcategoria"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 135
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VwSubcategoriaCategoria'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VwSubcategoriaCategoria'
GO
USE [master]
GO
ALTER DATABASE [PortalPeople] SET  READ_WRITE 
GO
