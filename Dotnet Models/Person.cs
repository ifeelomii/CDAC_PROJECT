namespace GramSahay.Model
{
    public class Person
    {
       
        protected String firstName { get; set; }
        protected String lastName { get; set; }
        protected String emailId { get; set; }
        protected String phoneNumber { get; set; }

        public Person()
        {

        }

        public Person(string firstName, string lastName, string emailId, string phoneNumber)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.emailId = emailId;
            this.phoneNumber = phoneNumber;
        }

        public override string ToString()
        {
            return "Person [firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId + ", phoneNumber="
                + phoneNumber + "]";
        }
    }
    }
