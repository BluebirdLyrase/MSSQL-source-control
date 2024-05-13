/* Recursive function, to split an object (like stored procedure) into individual lines, with line number */
declare @delimiter nvarchar(2) = char(10);

;with CTE as (
  select 
    0 as linenr
  , object_definition(OBJECT_ID) as def
  , convert(nvarchar(max), N'') as line
  ,name
  FROM sys.objects
  union all
  select 
    linenr + 1
  , substring(def, charindex(@delimiter, def) + len(@delimiter), len(def) - (charindex(@delimiter, def)))
  , left(def, charindex(@delimiter, def)) as line
  , name
  from CTE
  where charindex(@delimiter, def) <> 0
 )
select  name, linenr, line 
from CTE
where linenr >= 1
OPTION (MAXRECURSION 0);