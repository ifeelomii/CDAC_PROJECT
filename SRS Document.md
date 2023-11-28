# E-Waste Management

## Document:
System Requirement Specification Document

## Title:
System Requirement Speciation for Online E-Waste Management Portal

## Team: 
Direct Customer, Indirect Customer, Admin, Quality Assurance Team, Sales Team.

## Objective (Purpose):
The major purpose of project is to build capacity of practitioners and decision makers to guide and handhold them to plan, design and implement Online WEEE/E-waste Collection System including policy, collection, transportation and treatment in a city/ geographical area and country.

Encourage and promote the development and progress of Online E-waste Collection System towards achieving in the field of computer sciences and technology for Theatre applications both for recycling and deployment of electronic waste.

Online E-waste Collection System amongst clients for awareness and recycling of the waste material by using latest system. Simulate and offer aid for system for the benefit of manufacturers and users. Help in the improvement of standards, terminology equipment's, methods and implementation practices in the field of Online E-waste Collection System.

## Scope:
The scope of the project is to provide approaches and strategies which have proved to be the suitable when assessing the e-waste system of the defined region. This collection will reduce the e-waste from the household, company, industries, city, etc. The Environment pollution will reduce and the electronic waste will recycle or deployed. The fundamental aims of the Basel Convention are the control and reduction of trans boundary movements. Of hazardous and other wastes including the prevention and minimization of their generation, the environmentally sound management of such wastes and the active promotion of the transfer and use of technologies.

This technique could eliminate waste disposal costs, reduce raw material costs and provide income from a saleable waste. Waste can be recovered on-site, or at an off-site recovery facility, or through inter industry exchange. A number of physical and chemical techniques are available to reclaim a waste material such as reverse osmosis, electrolysis, condensation, electrolytic recovery, filtration, centrifugation etc. For example, a printed- circuit board manufacturer can use electrolytic recovery to reclaim metals from copper and tin-lead plating bath.

## Definitions:
    QA:  Quality Assurance
    Portal: Personalized Online Web Application
    CRM: Customer Relation Management
    BI:  Business Intelligence
	BOD: Board of Director

## Functional Requirements:

Any anonymous User will be able to post different e-waste products for sale with some description according to some terms and conditions.
The admin will be able to appoint a quality assurance team for that product.
The appointed quality assurance team will be able update the status whether the product is fit to reuse or it needs to be recycled based on some parameters.
The admin will be able to send the request to the recycle centre if the product needs to be recycled.
The admin will be able to add the product on the portal if it is fit to reuse.

Anonymous user will be able request to add more e-waste product to product catalogue maintained by system. Admin will be able to approve or reject request raised by anonymous user for adding or removing products from product catalogue.

Anonymous user will be able to update product details which have been already added to product catalogue.

Anonymous user will be informed about acceptance or rejection of the product catalogue.
Product listing will be provided based their category, sale, quantity, likes, and recommendations.
Any anonymous User/Customer will be able to view different e-waste products available for sale. Any User will be able select product to view from categories available.
Consumer will be able to add or remove products from shopping cart. System will maintain shopping cart for each consumer to maintain list of items selected by him/her. Consumer will be able view all items from shopping cart. Shopping Cart will present product details, number of items of product selected by consumer with price and total. Consumer will be able process for Order placement.
Registered Customer will be able place an order with the help of shopping cart maintained by system. Registered Customer will be able to cancel placed order within 24 hours. Registered customer get orders history. Registered customer can get details of order from orders been placed.    
Sales team will be able get details of orders of a particular Customer. Sales team will be able to cancel, reject or approve orders been placed by consumer due to some policies of Business.
BOD will be able to summary of orders been placed, rejected from Order Processing of System. BOD will get Business insight by observing daily operations with getting orders information.
Consumer will be provided options for payment such as through internet banking or UPI or Online payment option.
Consumer will asked to submit their payment related information. Consumer will be redirected to payment gateway for secure payment transaction. On successful payment processing using payment gateway system will notify consumer about transaction and order placement status.
Customer will be able track order status. Customer will be able track deliver using unique dispatcher id presented.
Customer will be able accept or return delivery based on quality received.



<!-- Delivery person will be able get delivery details so that he / she can deliver product to customer end.
Delivery person will be able to change the status of product delivered.
Delivery vendor will be able to list all product delivery to be done by their staff.
Sales team will be able to monitor shipment done by their vendors.
Sales team will be able to track product delivery for particular customer.
Customer will able to submit feedback about product they received. Customer will able to get details about product orders placed.
Customer will be cancel his placed order within 24 hours. Customer will be able to update his/ her personal information. 
Customer will be to manage his profile maintained by system. Customer will be able change his credentials if required. 
Customer will be notified about order status, delivery status through SMS, Email communication.
Customer will get complete information about his orders, likes, comments, details through a dashboard.
Customer will be able to update his payment related information.
System will present dashboard for Customers, Vendors, Suppliers as well as BOD.
Dashboard will provide information using graph, score cards, key performance indicators as well Grid data prostration.
BOD will be informed about business operations through reports.
Customer will be able get their purchase related information using Customer Dashboard.
Shopper will be able track their product sale being done through online shopping portal -->
    
## Non-functional Requirement:

### Security
Registered Customer will allowed to place an order. 
Each stakeholder will be to access system through authentication process. Who are you?
System will provide access to the content, operations using Role based security (Authorization) (Permissions based on Role)
Using SSL in all transactions which will be performed stakeholder. It would protect confidential information shared by system to stake holder of Shared by stakeholder to system.
System will automatically log of all stakeholder after some time due to inactiveness.
System will block operations for inactive stakeholder and would redirect for authentication.
System will internally maintain secure communication channel between Servers (Web Servers, App Servers, database Server)
User proper firewall to protect servers from outside fishing, vulnerable attacks.

### Reliability
The system will backup business data on regular basis and recover in short time duration to keep system operational
Continuous updates are maintained, continuous Administration is done to keep system operational.
During peak hours system will maintain same user experience by managing load balancing.

### Availability
Uptime: 24 * 7 available 99.999%
    
### Maintainability:
A Commercial database software will be used to maintain System data Persistence.
A readymade Web Server will be installed to host online shopping portal (Web Site) to management server capabilities.
IT operations team will easily monitor and configure System using Administrative tools provided by Servers.
Separate environment will be maintained for system for isolation in production, testing, and development.

### Portability:
PDA: Portable Device Application
System will provide portable User Interface (HTML, CSS, and JS) through users will be able to access online shopping portal.
System can be deployed to single server, multi-server, to any OS, Cloud (Azure or AWS or GCP)

### Accessibility:
Only registered customer will be able to place an order after authentication.
Sales team can reject or approve orders, anonymous users requests based on role provided.
BOD team will be able to view daily, weekly, monthly, annual business Growth through customized dashboard.

### Durability:
System will retain customer shopping cart for 15 minutes even though customer loose internet connection and join again.
System will maintain wishlist for customer. Customer will be able to add products from wishlist and add to shopping cart whenever needed.
System will implement backup and recovery for retaining stake holder’s data, business operation data and business data over time.

### Efficiency:
On festival season, maximum number of users will place order, view products with same response time.
System will be able to manage all transactions with isolation.
    
### Scalability:
System will be able to provide consistent user experience to stake holder as well as visitors irrespective of load.

### Safety: 
Online E-Waste Management Portal will be secure from malicious attack, fishing.
Online E-Waste Management Portal functionalities are protected from outside with proper firewall configuration.
Online E-Waste Management Portal will be always kept updated with latest anti-virus software.
Business data will be backed up periodically to ensure safety of data using incremental back up strategy.
Role based security will be applied for Application data and operations accessibility.
