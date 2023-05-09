# Application Security Foundations

Set goals - create plan around that goal.

## Application Security Goals
- Inventory: APIs, Web Apps, Serverless.
- Finding Vulnerabilities: Find vulneability in running code, written code, 3rd party code (libraries, git packages, plugins). Ability to quickly release fixes.
- The knowledge to fix what you have found: Knowledge to fix security bugs that the teams find. Developer education, supporting documentation. Moderninise the processes and ways on how developers think. 
- Effective tooling: Selecting tools to meet your specific needs than automating them. Automate as much as possible e.g. running scans, devops release pipelines
- Education and Reference Materials: Techinical library, Formal Training, Lunch & learns, Adovacy Program, Security Champions Program
- Giving Developers Security Tools: Putting the power into the software developer's hands, giving them the security tool, writing own tools and libraries for your developer.
- Security Activities during SDLC: Have one or more security activities at each stage of the SDLC. 
    1. Requirements. e.g. past these checks from the tools we have
    2. Design. e.g. Book a meeting and go through the design (encryption, authentication). Suggest some risks that you potentially see. 
    3. Coding
    4. Testing
    5. Deployment
Security sprint, partnership model.
- Incident Response: Ensure incident response team understands application security. Implement tooling to prevent or detect. 
- Continous Improvement: Emphasise the efficiency of the entire system. Have really fast feedback. Every three months looking at IR reports, looking for patterns and trends. Talking to dev team for area to improve. Is the process working. Once every 3 months, quarter doing a feedback loop. 

### Example 1
To measure current security posture and addressa any fires. There are always problems with it and there are legacies. 

1. Scan all of WebApps: with new Dast tools.
2. Assess Top 3 vulnerabilites.
3. Provide a lesson on the top 3.
4. Work with teams to eliminate critical bugs. Explain the risks. Be persuasive, communicate clearly. 
5. Eliminate the critical & high vulenerabilities. (6 months).

### Example 2
Getting everyone on the same playing field. Create repeateable and automated processes that not interupt with the developers. 

1. Code it the same repository. AppSec team can run tests  on the code. Gitlab, GitHub, Bit Bucket. 
2. Setup Weekly Software Composition Analysis + secret scanning (hash, password, connection string, API key), tells out of date frameworks & libraries and find security vulnerability. 
3. Setup Weekly SAST scans. Tune tool. 
4. Automate tickets. Beware of false-positives. 
5. Penetration test of three mission critical applications.

### Example 3
Spreading security awareness and promoting positive culture change. 
1. Security Champion Program. Train them on code review and threat modelling. 
2. Review each pull request for security. 
3. Secure code training for everyone. 
4. Provide documentation support.

## AppSec Activities
TACTICS: The acutal means used to gain an objective. (AppSec activities that we do to get to our goals). 
STRATEGY: The overall campaign plan. (Goals - the final place you want to be).

### Vulnerability Assessment scans

Quick Scan\QA: commonly called Dynamic Application Security Testing(DAST), Web proxy, Web App Scanner. Automated tool that interact with the web app and give you results. 

Vulnerability/Security assessment: Talking to people, assessing the whole system, running multiple tools and verifying all the security components.

### Threat Modelling
Conversation between a security person, product owner/business owner/clients, lead dev etc.
What are the threats to the system.  Try to **mitigate**, **reduce** or **accept** those threats. 
Threat modelling started with Microsoft. Book: Threat Modeling: Designing for Security by Adam Shostack. 

Informal threat modelling
- What does this app do?
- What could go wrong?
- What keeps you up at night?
- How would you hack your app?

Methodology
- S.T.R.I.D.E
- P.A.S.T.A (Risk & Governance)
- Attack Trees

### Secure Code Review
Usually paired with Static Application Security Testing (SAST). 
All you do is review the security controls where security problems might happen. 
E.g. login screen, password, authentication, make the some sort of security control is there and is implemented correctly. 

### Software Composition Analysis
SCA focuses on the third party components, libraries, frameworks, plugins, packages. 
Can manually google the third party components or use tool. 

### Penetration Testing
Set out a scope on what to test and attempt to find as many vulnerabilities using tools and manual techniques, try to exploit to prove if its vulnerable. 

### Developer Education and Advocacy
Education Program: Educate developers about security, what you expect from them in regards from security. What are the policies to be followed, laws to be followed (GDPR, HIPPA, PCI DSS), security design, security architecture, threat modelling. 

Advocacy Program: Doing culture change in the organisation so people think security is more fun, absolutely necessary, a part of quality. 

### Responsible Disclosure and Bug Bounties
Responsible disclosure/coordinated disclosure: penetration tester, security researcher finding security problems or bugs and reporting it to the vendor. 

Katie Missouri invented bug bounties, which is creating a copy of your system and inviting researchers, ethical hackers, penetration testers to test and if they find something they get paid. 

### Helpful Policies, Standards and Guildlines
