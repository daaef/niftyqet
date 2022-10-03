import { Chain, Network, Wallet } from 'mintbase'

export default async function () {
  const runtimeConfig = useRuntimeConfig()
    const { apiKey } = runtimeConfig.public.API_KEY
    async function initWallet () {
    const loading = ref(false)
      const { data: walletData, error } = await new Wallet().init({
        networkName: runtimeConfig.public.PUBLIC_MINTBASEJS_NETWORK ?? Network.testnet,
        chain: Chain.near,
        apiKey
      })

      if (error) {
        return 'no data'
      }
      let details

      const { wallet, isConnected } = walletData
      if (isConnected) {
        try {
          const { data } = await wallet.details()
          details = data
        } catch (err) {
          return err
        }
      }
      const connect = async () =>{
        loading.value = true
        if (!wallet){
          loading.value = false
          return
        }
        await wallet.connect({ requestSignIn: true })
      }

      const disconnect =  async () => {
        loading.value = true
        if (!wallet){
          loading.value = false
          return
        }
        await wallet.disconnect()
        await window.location.reload()
      }
      return {
        loading,
        wallet,
        isConnected,
        details,
        connect,
        disconnect
      }
    }
    return initWallet
}
