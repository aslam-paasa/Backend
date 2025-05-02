/**
 * What is Microservices?
 * - Swiggy k paas bahut jyda number of services hota hai like:
 *   a. Payment
 *   b. Rating
 *   c. Location
 *   d. .....
 *      .....
 * - Iss tarah k companies multiple server ka use krti hai qki ek server
 *   m itne saare services ka nhi chla paegi. For example, single time
 *   mai 1 lakh request aa rha hai, to ek server itne request ek baar
 *   mai handle ni kr paega aur server crash ho jaega.
 * 
 * Q. Server crash q hua?
 * -  Server crash hone ka main reason ye hai ki server connected hota
 *    hai database se. Database m OPS(Operations per second) hoti hai,
 *    aur agar one time mai 1 lakh request aa rhi hai to wo one by one
 *    aaega aur apne database m apna operation perform karega, aur
 *    jiske wajah se OPS high ho jaata hai aur server crash kr jaata hai.
 * - Iss problem se bachne k liye hm use krte hai microservices. So, 
 *   instead of using one server, har ek services k liye alag alag
 *   server bna degi, jo humaara OPS ko kam kr dega.
 * 
 * - Server is a consumer, and Swiggy is Producer and inke bich m hm
 *   use krte hai 'broker' jiska kaam hai OPS ko low rkhna.
 * - Broker ka kaam ye hai ki instead of doing one by one operation in
 *   database, 1 lakh request ko collect kr k ekhi baar one operation
 *   perform karega database mai aur 1 lakh request save ho jaega.
 * - Example Broker: Kafka
 * 
 * - Producer se jo v data aata hai wo streams k form m aata hai means
 *   data realtime m aata hai, aur streams ka use hm tb krte hai jb
 *   data continuous aata hai.
 * 
 * Note: Consumer, Producer & Broker is concept of EDA (Event-Driven
 *       Architecture)
*/

/**
 * Q. Why we use microservices?
 * - Software Design Pattern: 
 *   Means jb hm koi software bnate hai to usse 2 tarike se bna skte hai:
 *   a. Monolithic Pattern
 *   b. Microservice Pattern
 * 
 * - Monolithic: Codebase (Frontend + Backend + Database) logic hm 
 *   single file m likhte hai.
 * - Issue:
 *   a. Single Point of failure: Ek v logic fail hua to poora application
 *      crash ho jaega. 
 *   b. Future m application ko scalable nhi bna skte.
 *   c. Multiple employees same file pe kaam krne se conflict hota hai.
 * 
 * - A lot of issues to address:
 *   a. How to handle configs, logging, tracing, health checks, metrics?
 *   b. How to prevent failures?
 *   c. How to deploy?
 *   d. How to handle security?
 *   e. How to test it?
 *   f. How to decompose into services?
 *   g. What about service discovery?
 *      - Humaare laptop ma bahut saari services chlti rehti hai
 *        background mai, aur agar maine koi new service bnayi to ye
 *        microservice/framework ka kaam hai ki wo mere iss service ko
 *        automatically detect karein. Ye monolothic m possible nhi hai.
 *   h. How to troubleshoot problems?
 *   i. How to communicate between services?
 *      - Microservices ki jitni v services hai wo sb docker containers
 *        k andr banti hai. Aur containers aapas m separated hote hai
 *        aur inke andr m hm services bnate hai aur ye saare services
 *        aapas m communicate krte hai. But ye monolithinc m possible
 *        nhi tha. 
 *   j. How do external clients communicate with the services?
 *   k. How to display data from multiple services?
 * 
 * - Microservices: 
 *   Agar hm koi service bnate hai to koi ek service hogi nhi. For
 *   example, AWS ki 200 services hai, to ye alag alag server k hisaab
 *   se alag alag server choose karega. Aur alag alag server ko use
 *   krna with EDA (Consumer+Producer+Broker) is microservice.
 * - Microservices Frameworks:
 *   a. Java  : Springboot, Dropwizard, Restlet etc
 *   b. Go    : GoMicro
 *   c. Python: Flask, Bottle, Falcon, Nameko, CherryPy, etc
 *   d. NodeJS: MolecularJS
 *   .... 
 *   .... 
 * 
 * Q. Jb hm NodeJS m microservices bna skte hai to humein inn frameworks
 *    ka jarurat kyu padi?
 * - Coding Patterns and Coding bnane ka tarike aasan ho jae, means
 *   using pre-written patterns and logics.
 * 
 * - Characteristice/Requirements of Microservices:
 *   a. API Gateway: Microservices m API bnane ka functionality honi chaiye
 *   b. Service Auto Discovery and Registration:
 *      Kisi v services m 3 chije hoti hai:
 *      - Service ka Discovery: Humne koi new service bnaya to micrservice
 *        ko bnane k liye humne jo framework use kiya hai usme ye
 *        capability honi chaiye ki services ko autodiscivery kr le.
 *      - Service ka start hona: Microservices ko hm start kr skte hai
 *      - Service ka end hona: Microservices ko hm end kr skte hai
 *      Note: Run => Services.msc => Isme ek interface dekhne ko milega
 *      aur iss interface m hm wo saari services dekh skte hai jo
 *      humaari OS use kr rha hai background mai.
 *      
 *      - Services k detection k baad service start hoga aur saara
 *        operation perform karega apne service k hissab se aur uss
 *        service ko registration bolte hai
 * 
 *   c. Per Service Per Container: 
 *      Docker containerization provide
 *      karta hai. Jb v hm project bna rhe hote hai locally, to iss
 *      project ko bnane k liye NodeJS ka runtime chaiye, VS Tool pe
 *      code likha aur saari dependency VS Code k import kiya fir isse
 *      AWS pe deploy krnge. To yha saari chije separately perform ho
 *      rha hai, but jb hm docker use krte hai to wo ek container provide
 *      krta hai aur kehta hai ki aap jo v kaam perform kr rhe hai wo
 *      mere andr karo like NODEjs, VSCode, Dependency, project bnao
 *      aur deployment v mere andr karo, to manually humein saara kaam
 *      nhi krna. So, suppose humaara 5 services hai to har services k
 *      liye humein ek ek container dena pdega aur ye saari services ek
 *      dusre pe dependable nhi hota, but connectable hoti hai i.e. loose
 *      coupling. 
 * 
 *   d. Communication Channel:
 *      Services are communicating to each other through various protocols:
 *      - HTTP (REST API)
 *      - Sockets: Ye ek API hai jo humein realtime data transfer krti hai
 *        like TCP, MQTT, NATS, Kafka, etc.
 *      - GRPC
 * 
 *   e. Fault Tolerance:
 *      Humaare paas alag alag container m alag alag services run ho
 *      rhi hai aur ye containers aapas m connected hai ek network k
 *      through but ye aapas m dependable nhi hai, aur agar aapas m
 *      dependable hote to ek k fail hone pe saare fail hote jaate.
 *      So, fail tolerance ka mtlb hi yhi hai ki agar ek v service fail
 *      krta hai to uss condition m dursa run hona chaiye.
 *   f. Zero - Dependency
 *      Ek service dusre service pe depend ni kr rha
 *   g. Powerful Reporting:
 *      Jo microservice framwork hm use kr rhe hai to framework itna
 *      capable hona chaiye ki agar ek service fail ho gya framework
 *      ye responsibility lega aur report dega hai ki ye particular
 *      microservice framework fail ho gya aur failed microservice ko
 *      automatically troubleshoot, restart krne k power hoga.
 *   h. Load Balancing:
 *      Service-1,2,3 ko Server-1,2,3 mila hua hai. Agar server-1 pe
 *      2crore traffic aa rha hai to same service ka hm ek aur server
 *      create kr de to kya ye automatically traffic divide ho jaega?
 *      Yes! Load Balancing ka kaam yhi hai ki wo automatically traffic
 *      balance kr de.
 * 
 *      Types of load balancing:
 *      - Infrastructure Level: Jb apne application ko hm AWS pe host
 *        kr rhe hai to AWS ka koi service hai jo load balancing ka kaam
 *        karta hai. 
 *      - Software Level: Microservice Framework ko use kr k application
 *        bnaya to ye Software Level ka load balancing krega
 *   i. Security
 *      Security v framework provide karega
*/

/**
 * API Composition:
 * - Same API se multiple services communicate krte hai.
 * - Means saare API same rahnge aur jo v services hai wo saare apne
 *   operations isi API se perform karaenge.
*/

/**
 * Circuit Breaker:
 * - Agar meri koi service nhi chl rhi to usse unhealthy service bolnge.
 * - Circuit Breaker ka kaam hai unhealthy service ko recover krna and
 *   unnecessary traffic ko prevent krta hai like rate limiting.
*/

/**
 * Node:
 * - Operating System jo local ya external network pe run krta hai
 * - Node ek ya multiple services ko host krne k capable hota hai.
*/


/**
 * Transporter:
 * - A communication bus that is used by services to exchange messages
 *   or data.
 * - It transfers events, Req, Res. 
 * - Do services direct communication nhi kr skte. Transporter is
 *   responsible to exchange data from one service to another. 
*/

/**
 * API: Application Programming Interface
 * - APIs are also called as Web Services. 
 * - Types of API:
 *   a. REST API 
 *      - Representational State Transfer
 *      - Web Services k liye use hoti hai
 *      - It internally uses HTTP/HTTPS for data sharing from FE to BE
 *        or BE to FE, and for that provides 15 methods, and with the
 *        help of these methods, we mainly do our entire operations on
 *        web services.
 *        a. GET   : Data lena ya dena 
 *                   - Data/String limit of 2048 char
 *                   - Not able to manage heavy data
 *                   - Not secured
 *        b. POST  : Data lena ya dena 
 *                   - Browser/FE ko smjh ni aata
 *                   - Manages heavy data
 *                   - Secured
 *        c. PUT   : Data updation
 *        d. DELETE: Data deletion from database
 *   b. SOAP API 
 *      - Simple Object Access Protocol
 *      - .NET related Applcns pe use krte hai
*/

/**
 * Client-Server Architecture:
 * - Client: Frontend
 * - Server: Backend
 * - Client-Server Architecture: Frontend and Backend ka communication
 * 
 *               Req
 *   [Client] <--------> [Server]
 *               Res
 * 
 * - Data Transfer in the form of: [HTML, XML, SOAP, JSON, IMAGE]
*/


/**
 * Features of API:
 * 1. Support Protocols like HTTP/HTTPS
 * 2. Responsible for Rate Limiting 
 *    (prevent from attacks : Whitelist/Blacklist unauthorized user)
*/