# Event-driven cloud native apps

On cloud-native platforms, microservices are the application architecture of choice. As businesses become event-driven, event driven pattern needs to extend into our microservices application space. This means that your microservices are still doing REST calls to well-known microservice but they must respond to and send out events, or in event-driven terms they need to be both event producers and consumers to enforce strong decoupling.

### Event backbone - Pub/Sub communication and data sharing for microservices

![](evt-micro.png)

With the adoption of microservices, the focus on synchronous communication between services has increased. Service mesh packages such as [Istio](https://istio.io/) help with the management of communication, service discovery, load balancing, and visibility in this synchronous communication environment.

With event-driven microservices, the communication point becomes the Pub/Sub layer of the event backbone. By adopting an event-based approach for intercommunication between microservices, the microservices applications are naturally responsive (event-driven). This approach enhances the loose coupling nature of microservices because it decouples producers and consumers.  Further, it enables the sharing of data across microservices through the event log.
These *event* style characteristics are increasingly important considerations when you develop microservices style applications. In practical terms microservices applications are a combination of synchronous API-driven, and asynchronous event-driven communication styles. For the implementation point of view a set of established patterns are used, such as Database per Service, Event Sourcing, Command Query Responsibility Segregation, Saga, ...

[Read more on patterns](../design-patterns/ED-patterns.md)

### Supporting products and suggested reading

* [Event backbone](https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/docs/evt-backbone/README.md)
* [IBM Cloud Functions/Openwhisk programming model](https://openwhisk.apache.org/documentation.html#programming-model)
* [Using Cloud functions with event trigger in Kafka](https://github.com/IBM/ibm-cloud-functions-message-hub-trigger)
* [IBM Cloud Functions product offering](https://www.ibm.com/cloud/functions)
* [Getting Started with Cloud Functions](https://console.bluemix.net/openwhisk/)

## Event driven apps with containers

While the serverless approach with Cloud Functions provides a simplified event-based programming model, the majority of microservices applications today are developed for and deployed to a container-based cloud-native stack.  Within the cloud-native landscape, Kubernetes is the standard platform for container orchestration, and therefore becomes the base for the container platform in the event-driven architecture.

As before, the event backbone is the Pub/Sub communication provider and event log for shared data for the microservices. In this context microservices are developed as direct consumers and producers of events on the backbone via topics.  The extra work in this environment is in managing consumer instances to respond to the demand of the event stream. You must determine how many consumer instances need to be running to keep pace with, or always be immediately available to execute, the microservice in response to an arriving event.

### Supporting products and suggested reading

* [IBM Cloud Private - Kubernetes base container platform](https://www.ibm.com/cloud/private)
* [IBM Cloud Kubernetes Service](https://console.bluemix.net/catalog/infrastructure/containers-kubernetes)
* [Deploy a microservices application on Kubernetes](https://www.ibm.com/cloud/garage/tutorials/microservices-app-on-kubernetes?task=0)
* [IBM Cloud Kubernetes Service: Manage apps in containers and clusters on cloud](https://www.ibm.com/cloud/garage/content/run/tool_ibm_container/)


