# teatusing System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JohnBryce
{
   public abstract class BaseLogic:IDisposable
    {
        protected CarRentalSystemEntities DB = new CarRentalSystemEntities();
        
        public void Dispose()
        {
            DB.Dispose();
            
        }
        
    }
}
