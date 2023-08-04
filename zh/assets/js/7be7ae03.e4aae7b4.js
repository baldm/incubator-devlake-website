"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[88397],{74069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));n(61839);const a={title:"Azure DevOps(Beta)",sidebar_position:5,description:"Config UI instruction for Azure DevOps"},s=void 0,r={unversionedId:"Configuration/AzureDevOps",id:"version-v0.17/Configuration/AzureDevOps",title:"Azure DevOps(Beta)",description:"Config UI instruction for Azure DevOps",source:"@site/versioned_docs/version-v0.17/Configuration/AzureDevOps.md",sourceDirName:"Configuration",slug:"/Configuration/AzureDevOps",permalink:"/zh/docs/v0.17/Configuration/AzureDevOps",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Configuration/AzureDevOps.md",tags:[],version:"v0.17",sidebarPosition:5,frontMatter:{title:"Azure DevOps(Beta)",sidebar_position:5,description:"Config UI instruction for Azure DevOps"},sidebar:"docsSidebar",previous:{title:"PagerDuty(Beta)",permalink:"/zh/docs/v0.17/Configuration/PagerDuty"},next:{title:"Jenkins",permalink:"/zh/docs/v0.17/Configuration/Jenkins"}},l={},d=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Token",id:"token",level:3},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Select repositories",id:"select-repositories",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:2},{value:"Additional Settings (Optional)",id:"additional-settings-optional",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit Config UI at: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,o.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azuredevops-create-a-connection",src:n(27070).Z,width:"3056",height:"1746"})),(0,o.kt)("h3",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,o.kt)("h3",{id:"token"},"Token"),(0,o.kt)("p",null,'Paste your Azure DevOps personal access token (PAT) here. You can click on "Learn about how to create a PAT" to get instructions on how to create a PAT.\nMake sure that the Organization field is set to "All accessible organizations" when creating the PAT.'),(0,o.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azuredevops-set-data-scope",src:n(21427).Z,width:"3044",height:"1772"})),(0,o.kt)("h3",{id:"select-repositories"},"Select repositories"),(0,o.kt)("p",null,"Select the repositories you want to collect data from."),(0,o.kt)("h3",{id:"data-entities"},"Data Entities"),(0,o.kt)("p",null,"Azure DevOps supports the following data entities."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CI/CD: builds and jobs."),(0,o.kt)("li",{parentName:"ul"},"Source Code Management: repositories and their commits."),(0,o.kt)("li",{parentName:"ul"},"Code Review: pull requests and their commits.")),(0,o.kt)("h2",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azuredevops-set-transformation",src:n(54708).Z,width:"2322",height:"1674"})),(0,o.kt)("p",null,"This set of configurations is used for calculating ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.17/DORA"},"DORA metrics"),"."),(0,o.kt)("p",null,"If you'd like to define ",(0,o.kt)("inlineCode",{parentName:"p"},"deployments")," with Azure DevOps, you can set the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment regex: Azure DevOps builds or jobs whose names match this regex will be registered as deployments"),(0,o.kt)("li",{parentName:"ul"},"Production: Azure DevOps builds or jobs whose names match this regex will be assigned environment 'PRODUCTION'")),(0,o.kt)("h3",{id:"additional-settings-optional"},"Additional Settings (Optional)"),(0,o.kt)("p",null,"The additional settings are RefDiff options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tags Limit: the number of tags to compare."),(0,o.kt)("li",{parentName:"ul"},"Tags Pattern: Only tags that match the given regex are taken into account.")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you run into any problem, please check the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.17/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}p.isMDXComponent=!0},27070:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/azuredevops-create-a-connection-3a4ecfc90ce12c5dacdb74f3f95df19f.png"},21427:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/azuredevops-set-data-scope-30fe830036ca8fdccf9f3b7aa7aa89c0.png"},54708:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/azuredevops-set-transformation-8f1a6577dfd841f9662f85a3812d9297.png"}}]);