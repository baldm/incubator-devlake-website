"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[558],{12329:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=i(87462),n=(i(67294),i(3905));i(61839);const r={title:"GitLab",description:"GitLab Plugin\n"},l=void 0,o={unversionedId:"Plugins/gitlab",id:"version-v0.18/Plugins/gitlab",title:"GitLab",description:"GitLab Plugin\n",source:"@site/versioned_docs/version-v0.18/Plugins/gitlab.md",sourceDirName:"Plugins",slug:"/Plugins/gitlab",permalink:"/zh/docs/Plugins/gitlab",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.18/Plugins/gitlab.md",tags:[],version:"v0.18",frontMatter:{title:"GitLab",description:"GitLab Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitHub",permalink:"/zh/docs/Plugins/github"},next:{title:"Jenkins",permalink:"/zh/docs/Plugins/jenkins"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This plugin collects GitLab data through ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/api/"},"API"),". It then computes and visualizes various DevOps metrics from the GitLab data, which helps tech leads, QA and DevOps engineers, and project managers to answer questions such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How long does it take for your codes to get merged?"),(0,n.kt)("li",{parentName:"ul"},"How much time is spent on code review?"),(0,n.kt)("li",{parentName:"ul"},"How long does it take for your codes to get merged?"),(0,n.kt)("li",{parentName:"ul"},"How much time is spent on code review?")),(0,n.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,n.kt)("p",null,"Available for GitLab Cloud, Community Edition 11+. Check ",(0,n.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,n.kt)("h2",{id:"entities"},"Entities"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"GitLab entities")," collected by this plugin."),(0,n.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/Overview/SupportedDataSources#gitlab"},"data refresh policy")," of this plugin."),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"Metrics that can be calculated based on the data collected from GitLab:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/CommitCount"},"Commit Count")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/CommitAuthorCount"},"Commit Author Count")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/AddedLinesOfCode"},"Added Lines of Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/DeletedLinesOfCode"},"Deleted Lines of Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRCount"},"PR Count")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRCycleTime"},"PR Cycle Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRCodingTime"},"PR Coding Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRPickupTime"},"PR Pickup Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRReviewTime"},"PR Review Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRDeployTime"},"PR Deploy Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRTimeToMerge"},"PR Time To Merge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRMergeRate"},"PR Merge Rate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRReviewDepth"},"PR Review Depth")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRSize"},"PR Size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/BuildCount"},"Build Count")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/BuildDuration"},"Build Duration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/BuildSuccessRate"},"Build Success Rate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configuring GitLab via ",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Configuration/GitLab"},"config-ui"),"."),(0,n.kt)("li",{parentName:"ul"},"Configuring GitLab via Config UI's ",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/Configuration/AdvancedMode#2-gitlab"},"advanced mode"),".")),(0,n.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,n.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "gitlab",\n        "options": {\n          "connectionId": 1,\n          "projectId": 33728042,\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n            "issueComponent":"",\n            "issuePriority":"(high|medium|low)$",\n            "issueSeverity":"",\n            "issueTypeBug":"(bug)$",\n            "issueTypeIncident":"",\n            "issueTypeRequirement":"(feature|feature-request)$",\n            "prBodyClosePattern":"",\n            "prComponent":"",\n            "prType":""\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/DeveloperManuals/DeveloperSetup#references"},"references"))))}c.isMDXComponent=!0}}]);