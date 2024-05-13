CREATE VIEW dbo.SCV_All_TABLE
AS
SELECT SCHEMA_NAME(schema_id) + '.' + name AS TableName
FROM   sys.tables
