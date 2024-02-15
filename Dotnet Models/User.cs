using System.Net;

namespace GramSahay.Model
{
    public class User : Person
    {
       public User() { }

        public User(string firstName, string lastName, string emailId, string phoneNumber) : base(firstName, lastName, emailId, phoneNumber)
        {
        }

        public int userId { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string address { get; set; }
        public string emailId { get; set; }
        public string phoneNumber { get; set; }
        public string state { get; set; }
        public DateOnly dob { get; set; }
        public string city { get; set; }
        public string district { get; set; }

        public string taluka { get; set; }
        public string village { get; set; }
        public string postoffice { get; set; }
        public string panchayat { get; set; }
        public string pincode { get; set; }
        public List <Complaint> lsComp { get; set; }
        public override string ToString()
        {
            return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", username="
                + username + ", password=" + password + ", dob=" + dob + ", emailId=" + emailId + ", phoneNumber="
                + phoneNumber + ", state=" + state + ", city=" + city + ", district=" + district + ", taluka=" + taluka
                + ", village=" + village + ", address=" + address + ", panchayat=" + panchayat
                + ", postoffice=" + postoffice + ", pincode=" + pincode + ", lsComp=" + lsComp + "]";
        }
    }
}
