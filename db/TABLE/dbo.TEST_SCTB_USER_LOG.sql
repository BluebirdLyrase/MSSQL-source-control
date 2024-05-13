CREATE TABLE [dbo].[TEST_SCTB_USER_LOG]
(
	  [datetime] [datetime] NOT NULL DEFAULT(getdate())
	, [username] [nchar](10) NOT NULL
)