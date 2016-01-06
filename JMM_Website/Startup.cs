using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JMM_Website.Startup))]
namespace JMM_Website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
