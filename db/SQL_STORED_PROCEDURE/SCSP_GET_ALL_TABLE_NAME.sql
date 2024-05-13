-- =============================================
-- =============================================
CREATE PROCEDURE SCSP_GET_ALL_TABLE_NAME
AS
BEGIN
	SELECT [TableName] AS table_name
	FROM [source_control].[dbo].[SCV_ALL_TABLE]
END
