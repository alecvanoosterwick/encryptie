using Encryptie.Models;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace Encryptie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EncryptieController : ControllerBase
    {
        [HttpGet]
        [Route("Encrypteren")]

        public string Encrypt(string text)
        {
            var encryptString = EncryptieDecryptieManager.Encrypt(text);
            return encryptString;
        }
        [HttpGet]
        [Route("Decrypteren")]
        public string Decrypt(string text)
        {
            var decryptString = EncryptieDecryptieManager.Decrypt(text);
            return decryptString;
        }
    }
}
