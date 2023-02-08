"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2886],{70010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var i=t(87462),s=(t(67294),t(3905));t(61839);const a={title:"Configuring Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},o=void 0,l={unversionedId:"UserManuals/ConfigUI/Jenkins",id:"version-v0.15/UserManuals/ConfigUI/Jenkins",title:"Configuring Jenkins",description:"Config UI instruction for Jenkins",source:"@site/versioned_docs/version-v0.15/UserManuals/ConfigUI/Jenkins.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/Jenkins",permalink:"/zh/docs/UserManuals/ConfigUI/Jenkins",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/UserManuals/ConfigUI/Jenkins.md",tags:[],version:"v0.15",sidebarPosition:5,frontMatter:{title:"Configuring Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},sidebar:"docsSidebar",previous:{title:"Configuring Jira",permalink:"/zh/docs/UserManuals/ConfigUI/Jira"},next:{title:"Configuring TAPD(Beta)",permalink:"/zh/docs/UserManuals/ConfigUI/Tapd"}},d={},r=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Username (E-mail)",id:"username-e-mail",level:4},{value:"Password",id:"password",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Jobs",id:"jobs",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:r};function u(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Visit config-ui: ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,s.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"jenkins-add-data-connections",src:t(88085).Z,width:"937",height:"509"})),(0,s.kt)("h4",{id:"connection-name"},"Connection Name"),(0,s.kt)("p",null,"Name your connection."),(0,s.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,s.kt)("p",null,"This should be a valid REST API endpoint. Eg. ",(0,s.kt)("inlineCode",{parentName:"p"},"https://ci.jenkins.io/"),". The endpoint url should end with ",(0,s.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,s.kt)("h4",{id:"username-e-mail"},"Username (E-mail)"),(0,s.kt)("p",null,"Your User ID for the Jenkins Instance."),(0,s.kt)("h4",{id:"password"},"Password"),(0,s.kt)("p",null,"For help on Username and Password, please see Jenkins docs on ",(0,s.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/using-credentials/"},"using credentials"),'. You can also use "API Access Token" for this field, which can be generated at ',(0,s.kt)("inlineCode",{parentName:"p"},"User")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"Configure")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"API Token")," section on Jenkins."),(0,s.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,s.kt)("p",null,"DevLake uses a dynamic rate limit to collect Jenkins data. You can adjust the rate limit if you want to increase or lower the speed."),(0,s.kt)("p",null,"There is not any doc about Jenkins rate limiting. Please put up an issue if you find one."),(0,s.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,s.kt)("p",null,"Click ",(0,s.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,s.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,s.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"jenkins-set-data-scope",src:t(78969).Z,width:"908",height:"805"})),(0,s.kt)("h4",{id:"jobs"},"Jobs"),(0,s.kt)("p",null,"Choose the Jenkins jobs. All ",(0,s.kt)("inlineCode",{parentName:"p"},"Jenkins builds")," under these jobs will be collected."),(0,s.kt)("h4",{id:"data-entities"},"Data Entities"),(0,s.kt)("p",null,"Jenkins only supports ",(0,s.kt)("inlineCode",{parentName:"p"},"CI/CD")," domain entities, transformed from Jenkins builds and stages."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"CI/CD: Jenkins builds, stages, etc.")),(0,s.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,s.kt)("p",null,"This set of configurations is used for calculating ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/UserManuals/DORA"},"DORA metrics"),"."),(0,s.kt)("p",null,"If you'd like to define ",(0,s.kt)("inlineCode",{parentName:"p"},"deployments"),' with Jenkins, please select "Detect Deployment from Jenkins Builds", and provide the following regexes'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Deployment: Jenkins stages whose names match the regex will be registered as deployments (if a Jenkins build has no stage, its job name will be used to match the regex)"),(0,s.kt)("li",{parentName:"ul"},"Production: Jenkins stages whose names match the regex will be assigned environment 'PRODUCTION' (if a Jenkins build has no stage, its job name will be used to match the regex)")),(0,s.kt)("p",null,"This is how it works behind the scene:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If a Jenkins build has stages, it's converted to a cicd_pipeline and its stages are converted to cicd_tasks in DevLake's domain layer schema."),(0,s.kt)("li",{parentName:"ul"},"If a Jenkins build has no stage, it's converted to both a cicd_pipeline and a cicd_task whose names are the build's jobName.")),(0,s.kt)("p",null,"After the conversion, the two regexes are applied to the records in the cicd_tasks table.\n",(0,s.kt)("img",{alt:"jenkins-job-build-stage",src:t(77744).Z,width:"1383",height:"775"})),(0,s.kt)("p",null,'You can also select "Not using Jenkins builds as Deployments" if you\'re not using Jenkins to conduct deployments.'),(0,s.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,s.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"If you run into any problem, please check the ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}u.isMDXComponent=!0},88085:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-add-data-connections-26ab85c2bcc0041d5ff7d4bfb0de9867.png"},77744:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-job-build-stage-1aa7f958b4fe1a1c4e27dd8ec04b4327.png"},78969:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-set-data-scope-b4da7996db498317c309fc5eacc9527e.png"}}]);