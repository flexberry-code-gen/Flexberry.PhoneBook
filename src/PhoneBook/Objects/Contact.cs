//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.PhoneBook
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Contact.
    /// </summary>
    //  *** Start programmer edit section *** (Contact CustomAttributes)

    //  *** End programmer edit section *** (Contact CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ContactE", new string[] {
            "Name as \'Name\'",
            "Phone as \'Phone\'",
            "ContactType as \'Contact type\'",
            "ContactType.Name as \'Name\'"}, Hidden=new string[] {
            "ContactType.Name"})]
    [MasterViewDefineAttribute("ContactE", "ContactType", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("ContactL", new string[] {
            "Name as \'Name\'",
            "Phone as \'Phone\'",
            "ContactType.Name as \'Name\'"})]
    public class Contact : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fPhone;
        
        private IIS.PhoneBook.ContactType fContactType;
        
        //  *** Start programmer edit section *** (Contact CustomMembers)

        //  *** End programmer edit section *** (Contact CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Contact.Name CustomAttributes)

        //  *** End programmer edit section *** (Contact.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Contact.Name Get start)

                //  *** End programmer edit section *** (Contact.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Contact.Name Get end)

                //  *** End programmer edit section *** (Contact.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Contact.Name Set start)

                //  *** End programmer edit section *** (Contact.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Contact.Name Set end)

                //  *** End programmer edit section *** (Contact.Name Set end)
            }
        }
        
        /// <summary>
        /// Phone.
        /// </summary>
        //  *** Start programmer edit section *** (Contact.Phone CustomAttributes)

        //  *** End programmer edit section *** (Contact.Phone CustomAttributes)
        [StrLen(255)]
        public virtual string Phone
        {
            get
            {
                //  *** Start programmer edit section *** (Contact.Phone Get start)

                //  *** End programmer edit section *** (Contact.Phone Get start)
                string result = this.fPhone;
                //  *** Start programmer edit section *** (Contact.Phone Get end)

                //  *** End programmer edit section *** (Contact.Phone Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Contact.Phone Set start)

                //  *** End programmer edit section *** (Contact.Phone Set start)
                this.fPhone = value;
                //  *** Start programmer edit section *** (Contact.Phone Set end)

                //  *** End programmer edit section *** (Contact.Phone Set end)
            }
        }
        
        /// <summary>
        /// Contact.
        /// </summary>
        //  *** Start programmer edit section *** (Contact.ContactType CustomAttributes)

        //  *** End programmer edit section *** (Contact.ContactType CustomAttributes)
        public virtual IIS.PhoneBook.ContactType ContactType
        {
            get
            {
                //  *** Start programmer edit section *** (Contact.ContactType Get start)

                //  *** End programmer edit section *** (Contact.ContactType Get start)
                IIS.PhoneBook.ContactType result = this.fContactType;
                //  *** Start programmer edit section *** (Contact.ContactType Get end)

                //  *** End programmer edit section *** (Contact.ContactType Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Contact.ContactType Set start)

                //  *** End programmer edit section *** (Contact.ContactType Set start)
                this.fContactType = value;
                //  *** Start programmer edit section *** (Contact.ContactType Set end)

                //  *** End programmer edit section *** (Contact.ContactType Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ContactE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ContactE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ContactE", typeof(IIS.PhoneBook.Contact));
                }
            }
            
            /// <summary>
            /// "ContactL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ContactL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ContactL", typeof(IIS.PhoneBook.Contact));
                }
            }
        }
    }
}
