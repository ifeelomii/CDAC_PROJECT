namespace GramSahay.Model
{
    public class Complaint
    {
      public Complaint () { }

        public int complaintId { get; set; }

        public DateTime postedAt { get; set; }

        public string category { get; set; }

        public string description { get; set; }

        public int forGS { get; set; }

        public int forAdmin { get; set; }
        public string status { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string taluka { get; set; }
        public string village { get; set; }
        public string remarks { get; set; }

        public Complaint(int complaintId, DateTime postedAt, string category, string description, int forGS, int forAdmin, string status, string state, string district, string taluka, string village, string remarks)
        {
            this.complaintId = complaintId;
            this.postedAt = postedAt;
            this.category = category;
            this.description = description;
            this.forGS = forGS;
            this.forAdmin = forAdmin;
            this.status = status;
            this.state = state;
            this.district = district;
            this.taluka = taluka;
            this.village = village;
            this.remarks = remarks;
        }

        public override string ToString()
        {
            return "Complaint [complaintId=" + complaintId + ", postedAt=" + postedAt + ", category="
                + category + ", description=" + description + ", forGS=" + forGS + ", forAdmin=" + forAdmin
                + ", status=" + status + ", state=" + state + ", district=" + district + ", taluka=" + taluka
                + ", village=" + village + ", remarks=" + remarks + "]";
        }
    }
}
