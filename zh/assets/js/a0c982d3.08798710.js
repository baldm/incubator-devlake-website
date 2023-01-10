"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7458],{61209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));a(61839);const i={title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},r=void 0,l={unversionedId:"GettingStarted/DockerComposeSetup",id:"GettingStarted/DockerComposeSetup",title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",source:"@site/docs/GettingStarted/DockerComposeSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/DockerComposeSetup",permalink:"/zh/docs/next/GettingStarted/DockerComposeSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/DockerComposeSetup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/zh/docs/next/GettingStarted"},next:{title:"Install via Helm",permalink:"/zh/docs/next/GettingStarted/HelmSetup"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch DevLake",id:"launch-devlake",level:2},{value:"Collect data and view dashboards",id:"collect-data-and-view-dashboards",level:2},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker v19.03.10+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose v2.2.3+")," (If you have Docker Desktop installed then you already have the Compose plugin installed)")),(0,n.kt)("h2",{id:"launch-devlake"},"Launch DevLake"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Commands written ",(0,n.kt)("inlineCode",{parentName:"li"},"like this")," are to be run in your terminal.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"env.example")," from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases/latest"},"latest release page")," into a folder."),(0,n.kt)("li",{parentName:"ol"},"Rename ",(0,n.kt)("inlineCode",{parentName:"li"},"env.example")," to ",(0,n.kt)("inlineCode",{parentName:"li"},".env"),". For Mac/Linux users, please run ",(0,n.kt)("inlineCode",{parentName:"li"},"mv env.example .env")," in the terminal. This file contains the environment variables that the Devlake server will use. Additional ones can be found in the compose file(s)."),(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to launch DevLake.")),(0,n.kt)("h2",{id:"collect-data-and-view-dashboards"},"Collect data and view dashboards"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit ",(0,n.kt)("inlineCode",{parentName:"li"},"config-ui")," at ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:4000")," in your browser to configure DevLake and collect data.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Please follow the ",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/next/UserManuals/ConfigUI/Tutorial"},"tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"devlake")," container takes a while to fully boot up. If ",(0,n.kt)("inlineCode",{parentName:"li"},"config-ui")," complains about API being unreachable, please wait a few seconds and refresh the page."))),(0,n.kt)("li",{parentName:"ol"},"To view dashboards, click ",(0,n.kt)("em",{parentName:"li"},"View Dashboards")," button in the top left corner, or visit ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3002")," (username: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin"),", password: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin"),").",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We use ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," to visualize the DevOps ",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/next/Overview/SupportedDataSources"},"data")," and build dashboards."),(0,n.kt)("li",{parentName:"ul"},"For how to customize and provision dashboards, please see our ",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/next/UserManuals/Dashboards/GrafanaUserGuide"},"Grafana doc"),".")))),(0,n.kt)("h2",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,n.kt)("p",null,"Support for database schema migration was introduced to DevLake in v0.10.0. From v0.10.0 onwards, users can upgrade their instance smoothly to a newer version. However, versions prior to v0.10.0 do not support upgrading to a newer version with a different database schema."),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you run into any problem, please check the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}u.isMDXComponent=!0}}]);