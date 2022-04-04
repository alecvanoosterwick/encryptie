using System.Security.Cryptography;
using System.Text;
using System.Xml.Serialization;
using AssymetrischEncrypteren.Models;

namespace AssymetrischEncrypteren.Services
{
    public interface IAssymetrischService
    {
        public string GetPublicKey();
        public string Encrypt(Bericht b);
        public string Decrypt(Bericht b);
    }
    public class EncryptionService : IAssymetrischService
    {
        private static RSACryptoServiceProvider csp = new RSACryptoServiceProvider(2048);
        public static Bericht b = new Bericht();

        public EncryptionService()
        {
            b._privatekey = csp.ExportParameters(true);
            b._publickey = csp.ExportParameters(false);
        }
        public string GetPublicKey()
        {
            var sw = new StringWriter();
            var xs = new XmlSerializer(typeof(RSAParameters));
            xs.Serialize(sw, b._publickey);
            return sw.ToString();
        }
        public string Encrypt(Bericht b)
        {
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(b._publickey);
            var data = Encoding.Unicode.GetBytes(b.bericht);
            var cypher = csp.Encrypt(data, false);
            return Convert.ToBase64String(cypher);
        }
        public string Decrypt(Bericht b)
        {
            var dataBytes = Convert.FromBase64String(b.encryptedBericht);
            csp.ImportParameters(b._privatekey);
            var bericht = csp.Decrypt(dataBytes, false);
            return Encoding.Unicode.GetString(bericht);
        }

    }
}
