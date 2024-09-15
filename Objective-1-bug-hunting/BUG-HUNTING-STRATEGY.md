# dYdX-Ops-SubDAO - QA Take-Home Assessment: Objective 1

I have created a bug template within this repository: `.github/issue_templates/bug.md`.  
During my exploratory testing, I have raised issues in the repository. Found here [GitHub Issues for dYdX-Ops-SubDAO-QA-Take-home-Assessment](https://github.com/Wallace467/dYdX-Ops-SubDAO---QA-Take-home-Assessment/issues)

## Bug Hunting Strategy

### Understanding Priorities (Risk-Based Testing)
The first step would be collaborating with the team to understand the priorities of functionality within the application. Ideally, this should be data-driven.  
Based on this, we would create a tiered list of critical functionalities e.g.:

- **Tier 1**: Withdraw, Deposit, Nodes, Trade
- **Tier 2**: History
- **Tier 3**: Academy

This tier list helps to understand the impact of issues. The focus is not only on reducing the probability of defects but also minimising their impact.

### Automation Testing
We would start by covering the most critical tier (Tier 1) with **unit tests** to ensure features are thoroughly tested. Once unit test coverage is high, any gaps would be addressed with **integration tests**, followed by **end-to-end (E2E) tests**.  
Automation should be designed to be fast, stable, self-healing, and environment-agnostic.

### Devices and Browsers
Using data-driven insights, we would determine the most important devices, browsers, and viewports to prioritise in both manual and automated testing processes. This data would also inform our feature design considerations.

### Mob Testing
During feature development, we would adopt a "mob testing" approach. This involves the team collectively performing exploratory testing on a new feature or release and conducting regression tests based on the priority tier list.  
Testing sessions can be time-boxed, with a debrief afterwards to analyse findings.

**Mob Testing Benefits:**
- Uncovers UX issues and potential edge case bugs.
- Reinforces understanding of the feature.
- Increases confidence in the feature or release.

This testing can be performed synchronously (e.g., during a team call) or asynchronously (e.g., via Slack or a bot). Every participant would give a "thumbs up" before sign-off, similar to a go/no-go meeting.

Structured mob tests can also be defined with a mission in mind (e.g., “explore how the system behaves under different withdrawal conditions”).

### Observability
To ensure that issues are identified and resolved quickly, we would work down the tier list to ensure we have adequate **observability** of each component.  
Regular (bi-weekly) reviews of graphs and monitoring data would help to spot emerging issues and trends, along with a review of alert thresholds. This process is important to complete as the platform and customer base evolve.

### Wargames
We could develop a **scenario book of wargames** that the team can run to improve understanding of key components and scenarios. This would test the resilience of the system. We are likely to find weaknesses in our system design/documentation and observability, as well as improving our knowledge and speed of recovery.

### Performance Testing
Different types of performance testing can be done to ensure the system is robust under various conditions:

- **Stress Testing**: Test the peak capacity the system can handle.
- **Spike Testing**: Test how the system reacts to sudden, extreme load increases.
- **Soak Testing**: Test how the system performs under sustained, high load over an extended period.
- **Resilience Testing**: Check how quickly the system recovers after a failure.

### Quality Metrics
We would track key metrics to monitor system quality, such as:

- The number of issues raised by customers, broken down by tier, severity, and feature (ideally backdated to show improvement over time).
- Availability, ideally broken down by feature.
- Bugs found during mob tests, categorised by tier, severity, and feature.
- Defect escape rate: how many bugs make it to production
- Test coverage metrics: code coverage, UI coverage, and API coverage.
- Mean time to detection (MTTD) and mean time to resolution (MTTR): the average time it takes to detect and resolve issues.

### Security

- **Ensuring Data Security**: Verifying that sensitive information is not unnecessarily exposed across the application or repositories.
- **Rate Limiting**: Implementing measures to protect against DDoS or brute-force attacks.

