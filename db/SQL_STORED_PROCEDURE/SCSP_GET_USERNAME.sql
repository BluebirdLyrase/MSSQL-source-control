-- =============================================
-- Author:	 pisit	
-- Create date: 05/13/2024
-- Description:	query username
-- =============================================
CREATE PROCEDURE SCSP_GET_USERNAME
	@search_username VARCHAR(50)
AS
BEGIN
	SELECT username
	FROM dbo.SCTB_USER_LOGIN
	WHERE @search_username = '' OR @search_username LIKE CONCAT('%',@search_username,'%')
END
