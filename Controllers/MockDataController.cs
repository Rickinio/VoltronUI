using System.Collections.Generic;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using VoltronUI.ViewModels;

namespace VoltronUI.Controllers
{
    [Route("api/[controller]")]
    public class MockDataController : Controller
    {
        private static List<MessageViewModel> Messages = new List<MessageViewModel>()
        {
            new MessageViewModel{
                Id= 1,
                EmailDate= "30/12/2016",
                FromAddress= "howerob.com",
                Subject= "Vlcc Report Test"
            },
            new MessageViewModel{
                Id= 2,
                EmailDate= "31/12/2016",
                FromAddress= "icap.com",
                Subject= "Vlcc Evening Report Test2"
            }
        };

        [HttpGet("[action]")]
        public IEnumerable<MessageViewModel> GetMessages()
        {
            return Messages;
        }
    }
}
