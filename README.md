## 3box-js-iframe

[![Greenkeeper badge](https://badges.greenkeeper.io/3box/3box-js-iframe.svg)](https://greenkeeper.io/)

Run components and store of 3box-js library in an iframe. Stores all orbitdb state in iframe. Allowing the same store to be shared across domains. Minimizing syncs and times to load DBs. Reference [3box-js](https://github.com/uport-project/3box-js) for more details on how both parts works together.

Runs the following two services, while their proxy instances are used in [3box-js](https://github.com/uport-project/3box-js):
* [orbit-db-cache-postmsg-proxy](https://github.com/3box/orbit-db-cache-postmsg-proxy)
* [ipfs-postmsg-proxy](https://github.com/ipfs-shipyard/ipfs-postmsg-proxy)

### Example

To run and serve files locally, run:

```bash
npm run example:start
```
