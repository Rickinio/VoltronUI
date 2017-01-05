using System.Collections.Generic;
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
                Subject= "Vlcc Report Test",
                ParsedText = @"line11111111
                                line2222222
                                line33333333"

            },
            new MessageViewModel{
                Id= 2,
                EmailDate= "31/12/2016",
                FromAddress= "icap.com",
                Subject= "Vlcc Evening Report Test2",
                ParsedText = @"line4444444
                                line555555555
                                line6666666666",
            }
        };

        [HttpGet("[action]")]
        public IEnumerable<MessageViewModel> GetMessages()
        {
            return Messages;
        }
    }
}
