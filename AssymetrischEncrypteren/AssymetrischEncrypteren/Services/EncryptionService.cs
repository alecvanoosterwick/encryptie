using System.Security.Cryptography;
using System.Text;
using System.Xml.Serialization;
using AssymetrischEncrypteren.Models;

namespace AssymetrischEncrypteren.Services
{
    public interface IAssymetrischService
    {
     
        public string Encrypt(string bericht);
        public string Decrypt(string encryptedBericht);
    }
    public class EncryptionService : IAssymetrischService
    {
       

    
    
        public string Encrypt(string bericht)
        {   
            var csp = new RSACryptoServiceProvider(2048);
            var publicKey = csp.ExportParameters(false);
            var privateKey = csp.ExportParameters(true);

            //add public key
            csp.ImportParameters(publicKey);
            var data = Encoding.Unicode.GetBytes(bericht);
            var cypher = csp.Encrypt(data, false);
            //save cypher and private key to db

            return Convert.ToBase64String(cypher);
        }
        public string Decrypt(string encryptedBericht, string publicKey)
        {
            var csp = new RSACryptoServiceProvider(2048);
            

            var dataBytes = Convert.FromBase64String(encryptedBericht);
            // get private key for db

            //csp.ImportParameters(privateKey);
            var bericht = csp.Decrypt(dataBytes, true);
            return Encoding.Unicode.GetString(bericht);
        }

        //private string GetPublicKey(string publicKey)
        //{
        //    var sw = new StringWriter();
        //    var xs = new XmlSerializer(typeof(RSAParameters));
        //    xs.Serialize(sw, b._publickey);
        //    return sw.ToString();
        //}

    }
}
