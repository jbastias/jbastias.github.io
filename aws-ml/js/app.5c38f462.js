(function(e){function a(a){for(var n,r,s=a[0],l=a[1],c=a[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(a);while(m.length)m.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],n=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(n=!1)}n&&(i.splice(a--,1),e=r(r.s=t[0]))}return e}var n={},o={app:0},i=[];function r(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)r.d(t,n,function(a){return e[a]}.bind(null,n));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},"554b":function(e,a,t){"use strict";t("ccda")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("List")],1)},i=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("button",{staticClass:"button",on:{click:e.hideAll}},[e._v("Hide All")]),t("button",{staticClass:"button",on:{click:e.viewAll}},[e._v("View All")]),e._l(e.list,(function(a,n){return t("div",{key:n},[t("div",{staticClass:"header"},[e._v(e._s(a.header)+" ")]),e._l(a.paragraphs,(function(a,n){return t("div",{key:n,class:{hide:e.isHidden,paragraph:e.paragraph}},[t("p",[e._v(e._s(a))])])}))],2)}))],2)},s=[],l={data:function(){return{paragraph:"paragraph",isHidden:!1,list:[{header:"Amazon SageMaker",paragraphs:["Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly. SageMaker removes the heavy lifting from each step of the machine learning process to make it easier to develop high quality models."]},{header:"Amazon Augmented AI",paragraphs:["Amazon Augmented AI (Amazon A2I) is a service that makes it easy to build the workflows required for human review of ML predictions. Amazon A2I brings human review to all developers, removing the undifferentiated heavy lifting associated with building human review systems or managing large numbers of human reviewers."]},{header:"Amazon CodeGuru",paragraphs:["Amazon CodeGuru is a developer tool that provides intelligent recommendations to improve code quality and identifying an application’s most expensive lines of code."]},{header:"Amazon DevOps Guru",paragraphs:["Amazon DevOps Guru is a fully managed operations service that uses machine learning to make it easier for developers and operators to improve application availability. DevOps Guru does this by automatically detecting operational issues and recommending options for remediation or mitigation. DevOps Guru applies machine learning informed by over 20 years of Amazon and AWS operational excellence in running large, highly available applications to automatically collect and analyze data like application metrics, logs, events, and traces for identifying behaviors that deviate from normal operating patterns. Those patterns include things like under provisioned compute capacity, database I/O over-utilization, memory leaks, and more."]},{header:"Amazon Comprehend",paragraphs:["Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find meaning and insights in text."]},{header:"Amazon Forecast",paragraphs:["Amazon Forecast is a fully managed service that uses machine learning to deliver highly accurate forecasts.","Based on the same technology used at Amazon.com, Amazon Forecast uses machine learning to combine time series data with additional variables to build forecasts. Amazon Forecast requires no machine learning experience to get started. You only need to provide historical data, plus any additional data that you believe may impact your forecasts. For example, the demand for a particular color of a shirt may change with the seasons and store location. This complex relationship is hard to determine on its own, but machine learning is ideally suited to recognize it. Once you provide your data, Amazon Forecast will automatically examine it, identify what is meaningful, and produce a forecasting model capable of making predictions that are up to 50% more accurate than looking at time series data alone.","Amazon Forecast is a fully managed service, so there are no servers to provision, and no machine learning models to build, train, or deploy. You pay only for what you use, and there are no minimum fees and no upfront commitments."]},{header:"Amazon Fraud Detector",paragraphs:["Amazon Fraud Detector is a fully managed service that makes it easy to identify potentially fraudulent online activities such as online payment fraud and the creation of fake accounts. Amazon Fraud Detector uses machine learning (ML) and 20 years of fraud detection expertise from AWS and Amazon.com to automatically identify potential fraudulent activity in milliseconds. There are no up-front payments or long-term commitments and no infrastructure to manage with Amazon Fraud Detector; you pay only for your actual usage."]},{header:"Amazon Kendra",paragraphs:['Amazon Kendra is a highly accurate and easy to use enterprise search service that’s powered by machine learning. Kendra enables developers to add search capabilities to their applications so their end users can discover information stored within the vast amount of content spread across their company. This includes data from manuals, research reports, FAQs, HR documentation, customer service guides, and is found across various systems such as S3, SharePoint, Salesforce, Servicenow, RDS databases, One Drive, and many more coming later this year. When you type a question, the service uses machine learning algorithms to understand the context and return the most relevant results, whether that be a precise answer or an entire document. For example, you can ask a question like "How much is the cash reward on the corporate credit card?” and Kendra will map to the relevant documents and return a specific answer like “2%”. Kendra provides sample code so that you can get started quickly and easily integrate highly accurate search into your new or existing applications.']},{header:"Amazon Lex",paragraphs:["Amazon Lex is a service for building conversational interfaces using voice and text. Powered by the same conversational engine as Alexa, Amazon Lex provides high quality speech recognition and language understanding capabilities, enabling addition of sophisticated, natural language ‘chatbots’ to new and existing applications. Amazon Lex reduces multi-platform development effort, allowing you to easily publish your speech or text chatbots to mobile devices and multiple chat services, like Facebook Messenger, Slack, Kik, or Twilio SMS. Native interoperability with AWS Lambda and Amazon CloudWatch and easy integration with many other services on the AWS platform including Amazon Cognito, and Amazon DynamoDB makes bot development effortless."]},{header:"Amazon Personalize",paragraphs:["Amazon Personalize has helped numerous customers create personalized experiences for their users and has helped customers drive material improvements to business outcomes. When using Personalize customers are able to deploy their models in days not months. See our customer references for examples."]},{header:"Amazon Polly",paragraphs:["Amazon Polly is a service that turns text into lifelike speech. Amazon Polly enables existing applications to speak as a first class feature and creates the opportunity for entirely new categories of speech-enabled products, from mobile apps and cars, to devices and appliances. Amazon Polly includes dozens of lifelike voices and support for multiple languages, so you can select the ideal voice and distribute your speech-enabled applications in many geographies. Amazon Polly is easy to use – you just send the text you want converted into speech to the Amazon Polly API, and Amazon Polly immediately returns the audio stream to your application so you can play it directly or store it in a standard audio file format, such as MP3. Amazon Polly supports Speech Synthesis Markup Language (SSML) tags like prosody so you can adjust the speech rate, pitch, or volume. Amazon Polly is a secure service that delivers all of these benefits at high scale and at low latency. You can cache and replay Amazon Polly’s generated speech at no additional cost. Amazon Polly lets you convert millions of characters per month for free during the first year, upon sign-up. Amazon Polly’s pay-as-you-go pricing, low cost per request, and lack of restrictions on storage and reuse of voice output make it a cost-effective way to enable speech synthesis everywhere."]},{header:"Amazon Rekognition",paragraphs:["Amazon Rekognition is a service that makes it easy to add powerful visual analysis to your applications. Rekognition Image lets you easily build powerful applications to search, verify, and organize millions of images. Rekognition Video lets you extract motion-based context from stored or live stream videos and helps you analyze them.","Rekognition Image is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images. It also allows you to search and compare faces. Rekognition Image is based on the same proven, highly scalable, deep learning technology developed by Amazon’s computer vision scientists to analyze billions of images daily for Prime Photos.","Rekognition Image uses deep neural network models to detect and label thousands of objects and scenes in your images, and we are continually adding new labels and facial recognition features to the service. With Rekognition Image, you only pay for the images you analyze and the face metadata you store.","Rekognition Video is a video recognition service that detects activities; understands the movement of people in frame; and recognizes objects, celebrities, and inappropriate content in videos stored in Amazon S3 and live video streams from Acuity. Rekognition Video detects persons and tracks them through the video even when their faces are not visible, or as the whole person might go in and out of the scene. For example, this could be used in an application that sends a real-time notification when someone delivers a package to your door. Rekognition Video allows you also to index metadata like objects, activities, scene, celebrities, and faces that make video search easy."]},{header:"Amazon Textract",paragraphs:["Amazon Textract is a document analysis service that detects and extracts printed text, and handwriting, structured data, such as fields of interest and their values, and tables from images and scans of documents. Amazon Textract's machine learning models have been trained on millions of documents so that virtually any document type you upload is automatically recognized and processed for text extraction. When information is extracted from documents, the service returns a confidence score for each element it identifies so that you can make informed decisions about how you want to use the results. For instance, if you are extracting information from tax documents you can set custom rules to flag any extracted information with a confidence score lower than 95%. Also, all extracted data are returned with bounding box coordinates, which is a rectangular frame that fully encompasses each piece of data identified, so that you can quickly identify where a word or number appears on a document. You can access these features with the Amazon Textract API, in the AWS Management Console, or using the AWS command-line interface (CLI)."]},{header:"Amazon Transcribe",paragraphs:["Amazon Transcribe is an AWS service that makes it easy for customers to convert speech-to-text. Using Automatic Speech Recognition (ASR) technology, customers can choose to use Amazon Transcribe for a variety of business applications, including transcription of voice-based customer service calls, generation of subtitles on audio/video content, and conduct (text based) content analysis on audio/video content.  "]},{header:"Amazon Translate",paragraphs:["Amazon Translate is a Neural Machine Translation (MT) service for translating text between supported languages. Powered by deep learning methods, the service provides high-quality, affordable, and customizable language translation, enabling developers to translate company and user-authored content, or build applications requiring support across multiple languages. The service can be used via an API, enabling either real-time or batch translation of text from the source language to the target language."]},{header:"AWS DeepComposer",paragraphs:["AWS DeepComposer is the world’s first musical keyboard powered by machine learning to enable developers of all skill levels to learn Generative AI while creating original music outputs. DeepComposer consists of a USB keyboard that connects to the developer’s computer, and the DeepComposer service, accessed through the AWS Management Console. DeepComposer includes tutorials, sample code, and training data that can be used to start building generative models."]},{header:"AWS DeepLens",paragraphs:["AWS DeepLens is the world’s first deep-learning enabled video camera for developers of all skill levels to grow their machine learning skills through hands-on computer vision tutorials, example code, and pre-built models."]},{header:"AWS DeepRacer",paragraphs:["AWS DeepRacer is the fastest way to get rolling with reinforcement learning (RL), literally, with a fully autonomous 1/18th scale race car driven by reinforcement learning, 3D racing simulator, and a global racing league. Developers can train, evaluate, and tune RL models in the online simulator, deploy their models onto AWS DeepRacer for a real-world autonomous experience and compete in the AWS DeepRacer League for a chance to win the AWS DeepRacer Championship Cup. AWS DeepRacer Device Terms, Warranties, and Notices »"]},{header:"AWS Panorama",paragraphs:["AWS Panorama is a new machine learning Appliance and SDK, that allow organizations to bring computer vision to their on-premises cameras to make automated predictions with high accuracy and low latency. With AWS Panorama, companies can use compute power at the edge (without requiring video streamed to the cloud) to improve their operations, by automating monitoring and visual inspection tasks like evaluating manufacturing quality, finding bottlenecks in industrial processes, and assessing worker safety within their facilities."]},{header:"Amazon Monitron",paragraphs:["Amazon Monitron is an end-to-end system that detects abnormal behavior in industrial machinery, so you can implement predictive maintenance and reduce unplanned downtime. Amazon Monitron captures vibration and temperature data from your equipment via wireless sensors, which can be set up in minutes using the Amazon Monitron mobile app with no ML experience or development work required. The Amazon Monitron gateway device securely transfers data to AWS, and the service automatically analyzes your data for abnormal machine conditions using machine learning. You can start monitoring equipment health in minutes through the Amazon Monitron mobile app, and enable predictive maintenance with the same technology used to monitor equipment in Amazon Fulfillment Centers."]},{header:"Amazon HealthLake",paragraphs:["Amazon Healthlake is a HIPAA-eligible service enabling healthcare and life sciences companies to securely store and transform their data into a consistent and queryable fashion, and further analyze this data in the cloud, at petabyte scale. Using the HealthLake APIs, health organizations can easily copy health data, such as imaging medical reports or patient notes, from on-premises systems to a secure data lake in the cloud. HealthLake uses machine learning (ML) models to automatically understand and extract meaningful medical information from the raw data, such as medications, procedures, and diagnoses. HealthLake organizes and indexes information and stores it in the Fast Healthcare Interoperability Resources (FHIR) industry standard format to provide a complete view of each patient's medical history."]},{header:"Amazon Lookout for Vision",paragraphs:["Amazon Lookout for Vision is a machine learning (ML) service that helps increase industrial production quality and reduce operational costs by identifying visual defects in objects. With Amazon Lookout for Vision you can identify visual defects at scale and decrease dependency on manual inspection."]},{header:"Amazon Lookout for Equipment",paragraphs:["Amazon Lookout for Equipment uses the data from your sensors to detect abnormal equipment behavior, so you can take action before machine failures occur and avoid unplanned downtime.","Customers that want to build ML models to monitor the health or efficiency of their equipment can directly upload their historical sensor data to Amazon Lookout for Equipment and automatically build a ML model that learns the normal behavior patterns and alerts to abnormal behavior. Customers can set up Amazon Lookout for Equipment to read real-time data from their equipment and detect the current behavior of the asset."]}]}},methods:{hideAll:function(){this.isHidden=!0},viewAll:function(){this.isHidden=!1}}},c=l,d=(t("554b"),t("2877")),u=Object(d["a"])(c,r,s,!1,null,"4506a19e",null),m=u.exports,h={name:"App",components:{List:m}},p=h,g=(t("034f"),Object(d["a"])(p,o,i,!1,null,null,null)),f=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,a,t){},ccda:function(e,a,t){}});
//# sourceMappingURL=app.5c38f462.js.map