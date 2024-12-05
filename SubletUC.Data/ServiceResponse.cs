namespace SubletUC.Data;
public class ServiceResponse
{
    public int? id { get; set; }
    public bool Success { get; set; } = false;
    public string Message { get; set; } = "";
}
