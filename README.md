# ampctrl

## iptables-persistant configuration from Ubuntu

sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo apt-get install iptables-persistent


https://dev-notes.eu/2016/08/persistent-iptables-rules-in-ubuntu-16-04-xenial-xerus/

### Check iptables
sudo iptables -S

### Start - Thanks to Dave Wood for the correction in the comments section
sudo service netfilter-persistent start

### Add to startup
sudo invoke-rc.d netfilter-persistent save

### Stop the service
sudo service netfilter-persistent stop

### Save Rule
sudo dpkg-reconfigure iptables-persistent