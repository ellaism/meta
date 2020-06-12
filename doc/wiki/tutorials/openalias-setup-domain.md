<!-- TITLE: Setup an OpenAlias Domain -->
<!-- SUBTITLE: How to prepare your domain to host OpenAlias records -->

## What do I need?

### 1. Own your own domain name. 

Your registrar must support DNSSEC for your domain.  Not all registrars support DNSSEC on all their top level domains.  I recommend <a href="https://aws.amazon.com/route53/">Amazon Route 53</a>. Most registrars don't allow you to transfer your domain for at least 60 days after buying it, so check in advance that you can use DNSSEC before you buy the domain.

### 2. Ability to setup TXT records & DNSSEC support

A DNS provider like <a href="https://www.cloudflare.com/">Cloudflare</a> makes it easy to do both of these. 


## How do I set it up?


### Step 1 - Enable DNSSEC

With Cloudflare you can enable DNSSEC with 1 click. Click on the DNS tab and scroll down to the bottom of the page. 

![Step 1](/uploads/tutorials/step-1.png "Step 1")

Click on Enable DNSSEC.

![Step 2](/uploads/tutorials/step-2.png "Step 2")

You will be given a public key and some other settings that will need to be applied to your registrar.

![Step 3](/uploads/tutorials/step-3.png "Step 3")

### Step 2 - Configure the registrar
 
With Amazon Route 53, click on Registered Domains then domain that you want to edit, then click on Manage Keys in the bottom right.

![Step 4](/uploads/tutorials/step-4.png "Step 4")

For Cloudflare, choose 257 - KSK as the Key type. Set the algorithm to 13 - ECDSAAP256SHA256 and paste your public key from the Cloudflare page. 

![Step 5](/uploads/tutorials/step-5.png "Step 5")

Other registrars might require slightly different settings.  To make matters more complicated, not all registrars support all algorithms so your DNS provider might not be compatible with your registrar.  The combination of Amazon Route 53 in conjunction with Cloudflare has been very reliable.

That's it.  Now you can start [creating OpenAlias Records](/tutorials/openalias-create-record) and adding them to this domain.