# Event Backbone

The event backbone is the communication layer in the event driven architecture.  It provides the connection between event driven capabilities and in the *Cloud Native*, it becomes the Pub/Sub communication layer for event driven microservices.

At this high level we would consider two types of relevant technologies for the event backbone, *Message Brokers* and *Event Logs*.  Both technology types could be used to achieve the event communication style, with the "Publish and subscribe" model however, it is also important to consider other capabilities which are frequently used within event driven solutions:

* Keeping an **Event Log** as a time sequenced as it happened recording of events (Source of the truth).
* Enabling direct **replay** of events.
* Enabling **Event Sourcing** as a way of recording state changes in distributed systems.
* Enabling **programmatic access** to the *continuous event stream*.

When viewed across these wider event driven capabilities, an event log style technology can provide a central component which can support all of these capabilities, whereas a message broker would have to be extended with other components.

## Defining the Event Backbone for the event driven reference architecture

![](evt-backbone.png)

For the event driven architecture we defined the following characteristics to be essential for the *event backbone*

* Publish-subscribe event communication between event producers and consumers
* Facilitate many consumers with shared central “source of truth”.
* Capability to store events for a given period of time (event log). This is the shared source of the truth for events.
* Ability for consumers to subscribe to events.
* Provide replay of events from history for evolving application instances.
* Provide programmatic access to continuous stream of events, with minimum time lag.
* Must be highly scalable and resilient to cloud deployment levels.

Looking across these capabilities, the potential technologies, the amount of adoption and community activity around the technologies lead us to selecting *Kafka* as the Open Source technology base for the event backbone.

You can read more about Apache Kafka project here [https://kafka.apache.org](https://kafka.apache.org)

## Event backbone considerations

While choosing an event backbone for your event-driven app development, you need to consider below points,

### Persistence

When source systems generate events, the consumers of those are interested in those events may not be online or available at the same time. So you need a way to store these messages for a configurable period of time until they are consumed and acted upon. Event backbone should be able to provide such event persistence.

### Observability

At times, you need an overall view of how events are ingested by source systems and getting processed by consumers. It could be a management console where events can be observed. Event backbone should provide such observability.

### Fault tolerance

Event backbone could be made of several components. If one of them becomes unavailable, there should not be any impact on the event processors dependent on the backbone. Event backbone needs to provide this resiliency.

### High availability

Event backbone provides persistence of messages/events. If one of the components of the backbone becomes unavailable, there should not be any impact on the availability of these messages/events. Event backbone should be highly available.

### Performance

Event backbone should provide means of accelerating the event processing operations (e.g. parallelising event processing) thereby providing enhanced performance.

### Delivery guarantees

Event backbone should support guaranteed delivery both for producer and consumer. It should support below delivery guarantees:

* at least once
* at most once
* exactly once

### Security

The data residing in the event backbone should be secured, at rest as well as in transit. Only authenticated and authorized users should be able to publish and consume messages from the backbone. Topic specific authorizations will also help blocking access by unauthorized consumers. Event backbone should provide these security measures.

### Stateful operations for events streams

Sometimes, source systems generate a continuous flow of 'inter-related' events (e.g. IoT sensors sending data every second). In order to process such messages correctly, the event backbone needs to support for stateful operations like windowing, joins, aggregations. and any type of real time analytics.

### Ease of development

Developing a consumer or a stream application should be straight-forward with the programmatic features that the event backbone provides.

### Ease of deployment

The installation of event backbone should be an easy to follow process.

### Event routing options

In EDA, event consumers may not be online at all times. So, it should be easier for consumers to subscribe to a topic when it comes online.

### On-failure hooks

Event backbone can support pre-configured actions/behaviors for certain messages. E.g. if a consumer fails to process a message more than a certain number of times, that message can be sent to another topic for re-trying the processing action.

Predetermined for unprocessed events (retries, dead-letter queues etc)

### Management plane

Event backbone can provide a management plane from which infrastrucutre level configurations can be managed.

## Supporting products

The IBM Event Streams offering provides a *Kafka* service for the Event Backbone. The service is available as a fully managed service within Public cloud and as a supported build for IBM Cloud Private.

* [IBM Event Streams Public Cloud](https://console.bluemix.net/catalog/services/event-streams)
* [IBM Event Streams Private Cloud](https://www.ibm.com/cloud/event-streams)
* [See also our own Kafka study article](../kafka/readme.md) on how to support high availability and how to deploy to your local environment or to a kubernetes cluster like IBM Cloud Private.
* [Active MQ Artemis](https://activemq.apache.org/components/artemis/) and our study [notes]()

## Messaging versus event streaming

We recommend reading [this article](https://developer.ibm.com/messaging/2018/05/18/comparing-messaging-event-streaming-use-cases/) and [this one](https://developer.ibm.com/messaging/2019/02/05/comparing-messaging-pub-sub-and-event-streams/), to get insight between messaging (focusing on operations / actions to be performed by a system or service) versus event (focusing on the state / facts of a system with no knowledge of the downstream processing. To summarize messaging (like MQ) are to support:

* Transient Data – data is only stored until a consumer has processed the message, or it expires
* Request / reply most of the time
* Targeted reliable delivery: targeted to the entity that will process the request or receive the response. Reliable with transaction support.

For events:

* Stream history: consumers are interested by history and not just the most recent event
* Scalable Consumption: A single event is consumed by many consumers with limited impact as the number of consumers grow.
* Immutable Data.
* Decoupling of Producers and consumers 

![](evt-msg.png)

## Deployments

In term of event backbone deployment environment we propose different approaches:

* **[IBM Cloud](https://cloud.ibm.com/)** with the [Event Streams service](https://cloud.ibm.com/catalog/services/event-streams).
    * Deployment discussions for the KC solution are in [this note](https://ibm-cloud-architecture.github.io/refarch-kc/deployments/iks/)
* **IBM Cloud Private**
    * [Event Streams deployment](../deployments/eventstreams/README.md).
    * [Zookeeper deployment](../deployments/zookeeper/README.md) and [Kafka deployment](../deployments/kafka/README.md) for ICP.
* Running locally with docker compose. See [this note](https://ibm-cloud-architecture.github.io/refarch-kc/deployments/local/) for details.
