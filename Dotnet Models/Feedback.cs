namespace GramSahay.Model
{
    public class Feedback
    {
        public Feedback() { }
        public string firstName { get; set; }
        public int fId { get; set; }
        public string lastName { get; set; }
        public string emailId { get; set; }
        public string Subject { get; set; }
        public string yourMessage { get; set; }

        public Feedback(string firstName, int fId, string lastName, string emailId, string subject, string yourMessage)
        {
            this.firstName = firstName;
            this.fId = fId;
            this.lastName = lastName;
            this.emailId = emailId;
            Subject = subject;
            this.yourMessage = yourMessage;
        }

        public override string? ToString()
        {
            return "Feedback [fId=" + fId + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
                + ", Subject=" + Subject + ", yourMessage=" + yourMessage + "]";
        }
    }
}
