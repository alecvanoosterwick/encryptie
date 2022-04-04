using System.Security.Cryptography;

namespace AssymetrischEncrypteren.Models
{
    public class Bericht
    {
        public string bericht { get; set; } = string.Empty;
        public string encryptedBericht { get; set; } = string.Empty;
        //public RSAParameters _privatekey;
        //public RSAParameters _publickey;
    }
}
