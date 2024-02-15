namespace GramSahay.Model
{
    public class Gramsevak : Person
    {
        public Gramsevak() { }

        public Gramsevak(string firstName, string lastName, string emailId, string phoneNumber) : base(firstName, lastName, emailId, phoneNumber)
        {
        }

        public int gsId { get; set; }

        public string username { get; set; }
        public string password { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string taluka { get; set; }
        public string village { get; set; }
        public int status { get; set; }

        public override string ToString()
        {
            return "Gramsevak [gsId=" + gsId + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId="
                + emailId + ", phoneNumber=" + phoneNumber + ", username=" + username + ", password=" + password
                + ", state=" + state + ", district=" + district + ", taluka=" + taluka + ", village=" + village
                + ", status=" + status + "]";
        }
    }
}
