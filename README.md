# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit a website (https://www.techtonic.com/) in your browser, the browser needs to know the ip address of the domain name. So it retrieves the
dns information for the domain, which contains the ip address for the domain. Also, since this domain uses ssl it retrieves the ssl certificate. Then,
the browser connects to the server at the ip address and requests the webpage over the https protocol which is port 443. The server then looks up the
requested url and returns the hmtl code associated with the requested url.

## From start to finish, how does data reach you to be rendered in the browser?

As mentioned above, the browser requests the webpage from the server after it retrieves the dns and ssl certificate information. This information is requested
from the users computer through the internet and receives dns information from the associated dns server and the ssl certificate from the ssl certificate
authority that hosts the ssl certificate for the domain. The server will return the html code for the webpage requested and this information will be sent
through the internet back to the users browser. It should be noted, that the html code for the webpage will be generated by the server using whatever server
language that was used to handle the webpage request (like php, .net, node.js, etc...) this request may also require connecting to a database such as mySql
Microsoft Sql Server, Oracle, etc...

## What code is rendered in the browser?

The code that is returned by the server will be interrupted by the browser. This is typically html code. The html code usually contains css and or
javascript that will be rendered by the browser as well. The html code also may link to external css and javascript files that will be rendered as well.
Sometimes an html page may have embedded modules such as flash or a video player that will be rendered by the browser as well. Only public files that are
on the server will be rendered by the browser.

## What is the server-side code’s main function?

The server side code's main function is to handle client requests and return an appropriate response to that request. This can be in the form of an html page
css file, javascript file or images typically. To handle dynamic html pages, server side code requires some kind of application server such as php, .net
node.js, etc... to handle the dynamic page request. This is where server side code can be interpreted by the server which can connect to databases or
perhaps api's hosted by other servers.


## What is the client-side code’s main function?

The client side code's main function is to render the code received by the server and present the rendering to the user. For html code, the client side
code interpreter such as a web browser will interpret the html dom and convert that into a visual display that can be presented to the user utilizing
standardized html code interpretation defined by the W3C (World Wide Consortium). If the html code contains css whether it be embedded in the html page
itself or as an external file, the client browser will interpret this styling code and apply it to the visual style that is presented by the browser
accordingly. Client side javascript will also be interpreted if present and will be executed by the client browser as defined by the code. In some cases
html code may have links to images, videos and audio that would be interpreted by the client side as well. In a nutshell, client side code converts HTML
css, JS and other such client side languages into a form that the user can interact with.

## What is runtime?

Runtime refers to the actual execution of code. This is specifically different than compile time or development time. In compile time, code is converted
from one form to another. This can cause compile time errors. In runtime, runtime errors may occur. Runtime applies to any execution of code whether
the code is being executed on the server or the client's side computer/browser.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Typically a single unique instance of a client side asset is created per browser. A unique instance can be considered by a unique url for that asset.
Each browser such as Chrome, Safari, or Internet Explorer maintain their own unique copies of each asset. A single instance for each asset is accomplished
by the browser cashing the data for each asset locally to the users computer. This is done to reduce the amount of bandwidth needed to request multiple
instances of a given asset.

## How many instances of the server-side code are available at any given time?

The number of instances of server side code is basically the number of connections to that code by clients. The number available is set by the application
server. This number of connections is usually set to accommodate for the servers limitations such as available cpu, ram, etc... Also, it depends if the
server-side code is being hosted on a dedicated or shared host. Dedicated hosts typically allow for more available connections for server-side code.


## How many instances of the databases connected to the server application are created?

Typically there is a single database instance that is created which can serve multiple database connections to the server application. The number of
database connections is usually a single connection per client request. This single connection can be reused if it has been configured to be persistent
across connections. In some cases more advanced cloud architectures may create multiple instances of a database so that a server application
can access a instance of the database that may be geographically closer to the physical location of the application server or to prevent loss connections
if one of the instances crash or go off line for any reason.
