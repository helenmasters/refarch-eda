(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{xqXd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},c=i.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"We defined the starting point for a Cloud Native Event Driven Architecture to be that it supports at least the following important capabilities:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Being able to communicate and persist events."),Object(n.b)("li",{parentName:"ul"},"Being able to take direct action on events."),Object(n.b)("li",{parentName:"ul"},"Processing streams of events to derive real time insight/intelligence."),Object(n.b)("li",{parentName:"ul"},"Providing communication mechanism between event driven microservices and functions.")),Object(n.b)("p",null,"With an event backbone providing the connectivity between the capabilities, we can visualize a reference Event Driven Architecture as below:"),Object(n.b)("img",{src:"images/hl-arch-ra.png",alt:"hl-arch-ra"}),Object(n.b)("p",null,"Where:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",o({parentName:"li"},{href:"evt-src/README.md"}),"Event sources"),": generates events and event streams from sources such as IoT devices, web app, mobile app, microservices…"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/event-streams"}),"IBM Event Streams"),": Provides an Event Backbone supporting Pub/Sub communication, an event log, and simple event stream processing based on ",Object(n.b)("a",o({parentName:"li"},{href:"https://kafka.apache.org/"}),"Apache Kafka"),"."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/openwhisk"}),"IBM Cloud Functions"),": Provides a simplified programming model to take action on an event through a “serverless” function-based compute model."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/catalog/services/streaming-analytics"}),"Streaming Analytics"),": Provides continuous ingest and analytical processing across multiple event streams. Decision Server Insights: Provides the means to take action on events and event streams through business rules."),Object(n.b)("li",{parentName:"ol"},"Event Stores: Provide optimized persistence (data stores), for event sourcing, Command Query Response Separation (CQRS) and analytical use cases."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",o({parentName:"li"},{href:"./evt-microservices/README.md"}),"Event Driven Microservices"),": Applications that run as serverless functions or containerized workloads which are connected via pub/sub event communication through the event backbone.")),Object(n.b)("h2",null,"Extended Architecture"),Object(n.b)("p",null,"The event-driven reference architecture provides the framework to support event-driven applications and solutions. The extended architecture provides the connections for:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Integration with legacy apps and data resources"),Object(n.b)("li",{parentName:"ul"},"Integration with analytics or machine learning to derive real-time insights")),Object(n.b)("p",null,"The diagram below shows how these capabilities fit together to form an extended event-driven architecture."),Object(n.b)("img",{src:"images/hl-arch-ra-adv.png",alt:"hl-arch-ra-adv"}),Object(n.b)("p",null," In 7. the AI workbench includes tools to do data analysis and visualization, build training and test sets from any datasource and in particular Event Store, and develop models. Models are pushed to streaming analytics component."),Object(n.b)("h2",null,"Integration with analytics and machine learning"),Object(n.b)("p",null,"The extended architecture extends the basic EDA reference architecture with concepts showing how data science, artificial intelligence and machine learning can be incorporated into an event-driven solution."),Object(n.b)("p",null,"The starting point for data scientists to be able to derive machine learning models or analyze data for trends and behaviors is the existence of the data in a form that they can be consumed. For real-time intelligent solutions, data scientists typically inspect event histories and decision or action records from a system. Then, they reduce this data to some simplified model that scores new event data as it arrives."),Object(n.b)("h3",null,"Getting the data for the data scientist:"),Object(n.b)("p",null,"With real-time event streams, the challenge is in handling unbounded data or a continuous flow of events. To make this consumable for the data scientist you need to capture the relevant data and store it so that it can be pulled into the analysis and model-building process as required."),Object(n.b)("p",null,"Following our event-driven reference architecture the event stream would be a Kafka topic on the event backbone.  From here there are two possibilities for making that event data available and consumable to the data scientist:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The event stream or event log can be accessed directly through Kafka and pulled into the analysis process"),Object(n.b)("li",{parentName:"ul"},"The event stream can be pre-processed by the streaming analytics system and stored for future use in the analysis process. You have a choice of store type to use. Within public IBM cloud object storage ",Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/object-storage"}),"Cloud Object Store")," can be used as a cost-effective historical store.")),Object(n.b)("p",null,"Both approaches are valid, pre-processing through streaming analytics provides opportunity for greater manipulation of the data, or storing data over time windows for complex event processing. However, the more interesting distinction is where you use a predictive (ML model) to score arriving events or stream data in real time. In this case you may use streaming analytics to extract and save the event data for analysis, model building, and model training and also for scoring (executing) a derived model in line in the real time against arriving event data."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The event and decision or action data is made available in cloud object storage for model building through streaming analytics."),Object(n.b)("li",{parentName:"ul"},"Models may be developed by tuning and parameter fitting, standard form fitting, classification techniques, and text analytics methods."),Object(n.b)("li",{parentName:"ul"},"Increasingly artificial intelligence (AI) and machine learning (ML) frameworks are used to discover and train useful predictive models as an alternative to parameterizing existing model types manually."),Object(n.b)("li",{parentName:"ul"},"These techniques lead to process and data flows where the predictive model is trained offline using event histories from the event and the decision or action store possibly augmented with some supervisory outcome labelling, as illustrated by the paths from the ",Object(n.b)("inlineCode",{parentName:"li"},"Event Backbone")," and ",Object(n.b)("inlineCode",{parentName:"li"},"Stream Processing")," store into ",Object(n.b)("inlineCode",{parentName:"li"},"Learn/Analyze"),"."),Object(n.b)("li",{parentName:"ul"},"A model trained in this way includes some “scoring” API that can be invoked with fresh event data to generate a model-based prediction for future behavior and event properties of that specific context."),Object(n.b)("li",{parentName:"ul"},"The scoring function is then easily reincorporated into the streaming analytics processing to generate predictions and insights.")),Object(n.b)("p",null,"These combined techniques can lead to the creation of real-time intelligent applications:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Event-driven architecture"),Object(n.b)("li",{parentName:"ol"},"Identification of predictive insights using event storming methodology"),Object(n.b)("li",{parentName:"ol"},"Developing models for these insights using machine learning"),Object(n.b)("li",{parentName:"ol"},"Real-time scoring of the insight models using a streaming analytics processing framework")),Object(n.b)("p",null,"These are scalable easily extensible, and adaptable applications responding in near real time to new situations. There are easily extended to build out and evolve from an initial minimal viable product (MVP) because of the loose coupling in the event-driven architecture, , and streams process domains."),Object(n.b)("h3",null,"Data scientist workbench"),Object(n.b)("p",null,"To complete the extended architecture for integration with analytics and machine learning, consider the toolset and frameworks that the data scientist can use to derive the models.  ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/marketplace/watson-studio"}),"Watson Studio"),"  provides tools for data scientists, application developers, and subject matter experts to collaboratively and easily work with data to build and train models at scale."),Object(n.b)("p",null,"For more information see ",Object(n.b)("a",o({parentName:"p"},{href:"https://dataplatform.cloud.ibm.com/docs/content/getting-started/overview-ws.html"}),"Getting started")," with Watson Studio."),Object(n.b)("h2",null,"Legacy integration"),Object(n.b)("p",null,"While you create new digital business applications as self-contained systems, you likely need to integrate legacy apps and databases into the event-driven system. Two ways of coming directly into the event-driven architecture are as follows:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Where legacy applications are connected with MQ. You can connect directly from MQ to the Kafka in the event backbone.  See ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/event-streams/connecting/mq/"}),"IBM Event Streams getting started with MQ article"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Where databases support the capture of changes to data, you can publish changes as events to Kafka and hence into the event infrastructure. ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.confluent.io/blog/no-more-silos-how-to-integrate-your-databases-with-apache-kafka-and-cdc"}),"See the confluent blog for more details")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-introduction-reference-architecture-index-mdx-3cc5a0ece7e073b3ab83.js.map