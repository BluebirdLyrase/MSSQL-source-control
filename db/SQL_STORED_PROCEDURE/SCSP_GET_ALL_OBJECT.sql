-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- EXEC SCSP_GET_ALL_OBJECT
-- =============================================
CREATE PROCEDURE SCSP_GET_ALL_OBJECT
AS
BEGIN
declare @delimiter nvarchar(2) = char(10);

;with CTE as (
  select 
    0 as linenr
  , object_definition(OBJECT_ID) as def
  , convert(nvarchar(max), N'') as line
  ,name
  ,type_desc
  FROM sys.objects
  union all
  select 
    linenr + 1
  , substring(def, charindex(@delimiter, def) + len(@delimiter), len(def) - (charindex(@delimiter, def)))
  , left(def, charindex(@delimiter, def)) as line
  , name
  , type_desc
  from CTE
  where charindex(@delimiter, def) <> 0
 )
select  name, type_desc, linenr, line 
from CTE
where linenr >= 1
OPTION (MAXRECURSION 0);
END
