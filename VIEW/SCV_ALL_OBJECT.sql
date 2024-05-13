/*WHERE m.definition Like '%[ABD]%';*/

CREATE VIEW dbo.SCV_ALL_OBJECT

AS

SELECT o.name AS object_name, o.type_desc AS type, m.definition AS content

FROM   sys.sql_modules AS m INNER JOIN

             sys.objects AS o ON m.object_id = o.object_id
