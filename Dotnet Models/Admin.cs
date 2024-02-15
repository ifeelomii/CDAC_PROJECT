namespace GramSahay.Model
{
    public class Admin : Person
    {
        public Admin()
        {
        }

        public Admin(string firstName, string lastName, string emailId, string phoneNumber) : base(firstName, lastName, emailId, phoneNumber)
        {
        }

        public string adminId { get; set; }
        public string phoneNumber { get; set; }
        public string username { get; set; }
        public string password { get; set; }

        public override string ToString()
        {
            return "Admin [adminId=" + adminId + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId="
                + emailId + ", phoneNumber=" + phoneNumber + ", username=" + username + ", password=" + password + "]";
        }
    }


}
