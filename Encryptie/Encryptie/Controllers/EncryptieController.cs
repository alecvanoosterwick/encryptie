using Encryptie.Services;
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
        private IEncryption _encryptionService;

        public EncryptieController(IEncryption encryptionService)
        {
            _encryptionService = encryptionService;
        }

        [HttpGet]
        [Route("Encrypteren")]

        public string Encrypt(string tekst)
        {
            var encryptString = _encryptionService.Encrypt(tekst);
            return encryptString;
        }
        [HttpGet]
        [Route("Decrypteren")]
        public string Decrypt(string tekst)
        {
            var decryptString = _encryptionService.Decrypt(tekst);
            return decryptString;
        }
    }
}
