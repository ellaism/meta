# Ellaism Github Organization Rules

Blockchain softwares need to be of high code quality, because if it is done incorrectly, it can lead to user fund lost and other serious issues. Below are some basic rules that try to seek a balance of welcoming new contributors and maintaining stability and security of Ellaism-related softwares.

## Becoming a Github Organization Member

If you are a developer, you can request in [meta](https://github.com/ellaism/meta/issues) to become a member of this organization. We currently assume good faith and please only do it if you identify yourself as a developer.

## Creating new Repositories in This Github Organization

Every member can create new repositories, and please feel free to do so if you think the code is relevant to the Ellaism blockchain in general. We have some rules, however, to make sure everything works smoothly. If a repository does not meet the requirements, we will contract the relevant member first, and the repository may be subject to be removed.

1. Please don't create empty repositories. Write some code first!
2. The repository must have a viable commit history. If it is a forked project, you must keep the history commits.
3. When developing the software, write good commit messages. Please follow the normal Git workflow.
4. If you are planning to release binary files, you must setup CI reproduciable builds or use a trusted building process similar to [Gitian](https://github.com/litecoin-project/gitian.sigs.ltc).

## Granting Write Access to Existing Repositories

The author of the project decides whether to grant a member write access. Note that for security-critical projects like go-ellaism and ellawallet, we may only have one or two people with write access and every change go through a pull request.

## Interacting with Others

* Be Good to Each Other
* Be friendly and patient
* Be welcoming - we want to embrace newcomers, encourage contribution
* Be professional
* [Assume good faith](https://en.wikipedia.org/wiki/Wikipedia:Assume_good_faith)
* Treat others as you would like to be treated

Further reading:   [Open Source Contributor Covenant](http://contributor-covenant.org/version/1/4/)

## Vulnerability Response Process

We will have a standard vulnerability response process. You can make your repository follow this process. For some security-critical projects, this might be required.
