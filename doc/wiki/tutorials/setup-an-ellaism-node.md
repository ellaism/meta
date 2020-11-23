![Logo](/uploads/logo.png "Logo"){.pagelogo}
<!-- TITLE: Node -->
<!-- SUBTITLE: Ellaism - A stable network with no premine and no dev fees -->

# Setup and connection
                                                                                                                                                                                                                      
  * Install Git
Windows: https://git-scm.com/download/win (default settings during install should be fine)   

Linux:
```
sudo apt-get install git
```

Mac:
```
brew install git
```

* Install NodeJS
Windows: https://nodejs.org/en/download/current/

Linux:
```
sudo apt-get install node
```
(or nodejs)

Mac
```
brew install node
```

The rest of the commands should be run in a command window, terminal, or shell, and should be the same for all platforms (linux users might need to prepend some of these with 'sudo')*

* Install pm2
```
npm install -g pm2
```

* Install Parity
https://github.com/ellaism/shell/releases    and  Start Ellaism Shell

* Dowlound [Ellaism Net Intelligence Api](/uploads/ellaism-net-intelligence-api.zip "Ellaism Net Intelligence Api")

* Edit  the *app.json*  file in the *ellaism-net-intelligence-api*  folder, and set the **INSTANCE_NAME** a unique name
```[
  {
    "name"              : "node-app",
    "script"            : "app.js",
    "log_date_format"   : "YYYY-MM-DD HH:mm Z",
    "merge_logs"        : false,
    "watch"             : false,
    "max_restarts"      : 10,
    "exec_interpreter"  : "node",
    "exec_mode"         : "fork_mode",
    "env":
    {
      "NODE_ENV"        : "production",
      "RPC_HOST"        : "127.0.0.1",
      "RPC_PORT"        : "8545",
      "LISTENING_PORT"  : "30303",
      "INSTANCE_NAME"   : "###PUT YOUR INSTANCE NAME HERE###",
      "CONTACT_DETAILS" : "",
      "WS_SERVER"       : "https://stats.ellaism.org/",
      "WS_SECRET"       : "ellaismstats",
      "VERBOSITY"       : 2
    }
  }
]
```
* Copy the folder *"ellaism-net-intelligence-api"* in C: \ Windows \ System32

* Get the stats project
open a new command window
```git clone https://github.com/ellaism/ellaism-net-intelligence-api.git 
cd ellaism-net-intelligence-api
npm install
```

* Start the stats monitor
```
pm2 start app.json
```

* Check your status
```
pm2 show 0
pm2 logs
```

Check the work of the ***NODE*** here     https://stats.ellaism.org/
If you have any questions, please contact me PM @Alexander in the channel Discord 
https://discord.gg/KUChqm2