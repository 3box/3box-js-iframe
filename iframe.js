const { createProxyServer, closeProxyServer } = require('ipfs-postmsg-proxy')
const CacheServerStart = require('orbit-db-cache-postmsg-proxy').Server

const CACHE_OPTIONS = {
  postMessage: window.parent.postMessage.bind(window.parent)
}

const IPFS_OPTIONS = {
  EXPERIMENTAL: {
    pubsub: true
  },
  preload: { enabled: false }
}

CacheServerStart(CACHE_OPTIONS)

const ipfs = new window.Ipfs(IPFS_OPTIONS)

// TODO may have to indicate load, or wait for script load
// ipfs.on('ready', () => {console.log('ipfs ready')})

const IPFSProxyServer = createProxyServer(() => ipfs, {
  postMessage: window.parent.postMessage.bind(window.parent)
})
