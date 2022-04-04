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
        public static Bericht b = new Bericht();
        private IAssymetrischService _eService;

        public AuthController(IAssymetrischService encryptionService)
        {
            _eService = encryptionService;

        }

        [HttpGet]// gaat moeten Encrypteren
        [Route("Encrypteer")]

        public string Encrypteer(Bericht b)
        {
            string encryptString = _eService.Encrypt(b.bericht);
            return encryptString;
        }
       

        [HttpGet]// gaat moeten Decrypteren
        [Route("Decrypteer")]

        public string Decrypteer()
        {
            string decryptString = _eService.Decrypt(b.bericht);
            return decryptString;
        }
    }
}
