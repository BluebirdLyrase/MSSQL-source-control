SELECT SCHEMA_NAME(schema_id) + '.' + [name] AS TableName
FROM sys.tables;