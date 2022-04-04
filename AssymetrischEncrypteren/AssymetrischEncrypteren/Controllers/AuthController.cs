using AssymetrischEncrypteren.Models;
using AssymetrischEncrypteren.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AssymetrischEncrypteren.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAssymetrischService _eService;

        public AuthController(IAssymetrischService encryptionService)
        {
            _eService = encryptionService;

        }

        [HttpPost]// gaat moeten Encrypteren
        [Route("Encrypteer")]

        public string Encrypteer(string bericht)
        {
            string encryptString = _eService.Encrypt(bericht);
            return encryptString;
        }
       

        [HttpGet]// gaat moeten Decrypteren
        [Route("Decrypteer")]

        public string Decrypteer(string encryptedBericht)
        {
            string decryptString = _eService.Decrypt(encryptedBericht);
            return decryptString;
        }
    }
}
