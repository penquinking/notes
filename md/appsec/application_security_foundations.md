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
