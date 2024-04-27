--SELECT TABLE_SCHEMA,TABLE_NAME
--FROM INFORMATION_SCHEMA.TABLES
--WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG='Data_HRM'
SELECT
    o.name AS object_name,
    o.type_desc AS type,
    m.definition AS content
FROM
    sys.sql_modules m
    INNER JOIN sys.objects o ON m.object_id = o.object_id --WHERE m.definition Like '%[ABD]%';